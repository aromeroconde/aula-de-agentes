const data = window.CLASS_DATA;
const classId = data.classId || "001";
const strip = document.querySelector("#film-strip");
let activeIndex = Math.min(1, data.moments.length - 1);
const timeline = document.querySelector("#timeline-range");
timeline.max = String(Math.max(0, data.moments.length - 1));
timeline.value = String(activeIndex);

function iconPlay() {
  return '<svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
}
function renderFrames() {
  strip.innerHTML = data.moments
    .map(
      (m, i) =>
        `<article class="frame ${i === activeIndex ? "active" : ""}" role="listitem" data-index="${i}"><img src="${m.image}" alt="Fotograma real de la clase en ${m.time}" loading="${i < 3 ? "eager" : "lazy"}"><span class="frame-title">${m.title}</span><span class="frame-time">${m.time}</span><button class="frame-button" aria-label="Seleccionar momento ${m.time}: ${m.title}"></button>${i === activeIndex ? `<button class="active-play" aria-label="Reproducir desde ${m.time}">${iconPlay()}</button>` : ""}</article>`,
    )
    .join("");
  strip
    .querySelectorAll(".frame-button")
    .forEach((b) =>
      b.addEventListener("click", () =>
        selectMoment(Number(b.closest(".frame").dataset.index)),
      ),
    );
  strip.querySelector(".active-play")?.addEventListener("click", playVideo);
}
function selectMoment(index) {
  activeIndex = index;
  timeline.value = index;
  renderFrames();
  const m = data.moments[index];
  document.querySelector("#active-transcript").innerHTML =
    `<time>${m.time}</time><p>${m.text}</p><a class="open-moment" href="${data.videoViewUrl}?t=${m.seconds}s" target="_blank" rel="noreferrer">Abrir grabación en ${m.time} ↗</a><small class="video-access-note">${data.videoAccessNote || "Grabación disponible en modo lectura desde su fuente original."}</small>`;
  const offset = Math.min(index * 12, 60);
  strip.style.setProperty("--strip-x", `${-offset}vw`);
}
function playVideo() {
  const frame = strip.querySelector(".frame.active");
  const moment = data.moments[activeIndex];
  if (data.videoMediaUrl) {
    frame.innerHTML = `<div class="video-player"><div class="video-loading" aria-live="polite"><span></span><strong>Preparando la grabación…</strong></div><video class="video-native" controls playsinline preload="metadata" poster="${moment.image}" crossorigin="anonymous" aria-label="Grabación de la Clase ${classId} desde ${moment.time}"><source src="${data.videoMediaUrl}" type="video/mp4">Tu navegador no puede reproducir este video.</video><a class="video-fallback" href="${data.videoViewUrl}?t=${moment.seconds}s" target="_blank" rel="noreferrer">Abrir fuente original ↗</a></div>`;
    const video = frame.querySelector(".video-native");
    const loading = frame.querySelector(".video-loading");
    video.addEventListener(
      "loadedmetadata",
      () => {
        video.currentTime = Math.min(moment.seconds, Math.max(0, video.duration - 0.1));
      },
      { once: true },
    );
    video.addEventListener("canplay", () => loading?.classList.add("is-hidden"), {
      once: true,
    });
    video.addEventListener(
      "error",
      () => {
        loading?.classList.add("has-error");
        if (loading) loading.innerHTML = "<strong>No pudimos cargar el video aquí.</strong>";
      },
      { once: true },
    );
    video.play().catch(() => loading?.classList.add("is-hidden"));
    return;
  }
  const separator = data.videoEmbedUrl.includes("?") ? "&" : "?";
  const embedUrl = `${data.videoEmbedUrl}${separator}start=${moment.seconds}`;
  frame.innerHTML = `<div class="video-player"><div class="video-loading" aria-live="polite"><span></span><strong>Preparando la grabación…</strong></div><iframe class="video-embed" src="${embedUrl}" title="Grabación de la Clase ${classId} desde ${moment.time}" allow="autoplay; fullscreen" allowfullscreen loading="eager"></iframe><a class="video-fallback" href="${data.videoViewUrl}?t=${moment.seconds}s" target="_blank" rel="noreferrer">¿No inicia? Abrir en Google Drive ↗</a></div>`;
  const iframe = frame.querySelector(".video-embed");
  iframe.addEventListener("load", () => {
    frame.querySelector(".video-loading")?.classList.add("is-hidden");
  });
}
document.querySelectorAll('[data-action="play"]').forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelector("#clase").scrollIntoView({ behavior: "smooth" });
    playVideo();
  }),
);
document
  .querySelectorAll("[data-scroll]")
  .forEach((b) =>
    b.addEventListener("click", () =>
      document
        .querySelector(b.dataset.scroll)
        .scrollIntoView({ behavior: "smooth" }),
    ),
  );
timeline.addEventListener("input", (e) => selectMoment(Number(e.target.value)));
renderFrames();

const messages = document.querySelector("#messages");
function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
function addMessage(text, role = "assistant", evidence = "") {
  const el = document.createElement("div");
  el.className = `message ${role}`;
  el.innerHTML = `<p>${text}</p>${evidence ? `<small>Momento de la clase · ${evidence}</small>` : ""}`;
  messages.append(el);
  messages.scrollTop = messages.scrollHeight;
}
function answer(question) {
  const q = normalize(question);
  const ranked = data.knowledge
    .map((item) => ({
      item,
      score: item.terms.reduce(
        (n, t) => n + (q.includes(normalize(t)) ? 1 : 0),
        0,
      ),
    }))
    .sort((a, b) => b.score - a.score);
  return ranked[0].score
    ? ranked[0].item
    : {
        answer: `No encontré un pasaje suficientemente directo para responder eso con seguridad. Puedes preguntar por ${data.fallbackTopics?.join(", ") || "los temas principales de esta sesión"}.`,
        evidence: `Clase ${classId} completa`,
      };
}
function submitQuestion(question) {
  const q = question.trim();
  if (!q) return;
  addMessage(q, "user");
  const wait = document.createElement("div");
  wait.className = "message assistant loading-dots";
  wait.innerHTML = "<p>Buscando en la clase</p>";
  messages.append(wait);
  messages.scrollTop = messages.scrollHeight;
  setTimeout(() => {
    wait.remove();
    const result = answer(q);
    addMessage(result.answer, "assistant", result.evidence);
  }, 260);
}
document.querySelector("#chat-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#question");
  submitQuestion(input.value);
  input.value = "";
});
document.querySelectorAll(".suggestions button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelector("#preguntar").scrollIntoView({ behavior: "smooth" });
    submitQuestion(b.textContent);
  }),
);
document.querySelector("#quick-send").addEventListener("click", () => {
  const input = document.querySelector("#quick-question");
  if (input.value.trim()) {
    document.querySelector("#preguntar").scrollIntoView({ behavior: "smooth" });
    submitQuestion(input.value);
    input.value = "";
  }
});
document.querySelector("#quick-question").addEventListener("keydown", (e) => {
  if (e.key === "Enter") document.querySelector("#quick-send").click();
});
