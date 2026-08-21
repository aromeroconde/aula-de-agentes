const library = document.querySelector("#class-library");
const count = document.querySelector("#class-count");
const latestClassId = document.querySelector("#latest-class-id");
const nextClassId = document.querySelector("#next-class-id");

function classEntry(item, index) {
  const topics = item.topics.map((topic) => `<li>${topic}</li>`).join("");
  const frames = item.frames
    .slice(0, 3)
    .map(
      (frame, frameIndex) =>
        `<img src="${frame}" alt="Fotograma ${frameIndex + 1} de ${item.title}" loading="lazy">`,
    )
    .join("");

  return `<article class="class-entry">
    <div class="entry-index" aria-hidden="true"><span>CLASE</span><b>${item.id}</b></div>
    <a class="entry-visual" href="${item.href}" aria-label="Abrir Clase ${item.id}: ${item.title}">
      <div class="film-holes top"></div>
      <img class="poster" src="${item.poster}" alt="Fotograma principal de ${item.title}">
      <div class="frame-sequence">${frames}</div>
      <div class="film-holes bottom"></div>
      <span class="play-seal">VER<br>CLASE <i>→</i></span>
    </a>
    <div class="entry-copy">
      <div class="entry-meta"><span>${item.dateLabel}</span><span>${item.duration}</span><span>ED. ${String(index + 1).padStart(2, "0")}</span></div>
      <h3><a href="${item.href}">${item.title}</a></h3>
      <blockquote>“${item.thesis}”</blockquote>
      <p>${item.summary}</p>
      <ul>${topics}</ul>
      <div class="entry-actions"><a class="primary" href="${item.href}">Entrar a la clase <span>→</span></a><a href="${item.pdf}" download>Descargar resumen ↓</a></div>
    </div>
  </article>`;
}

async function loadLibrary() {
  try {
    const response = await fetch("data/classes.json", { cache: "no-store" });
    if (!response.ok)
      throw new Error(`Catálogo no disponible (${response.status})`);
    const classes = (await response.json()).filter(
      (item) => item.status === "published",
    );
    count.textContent = `${classes.length} ${classes.length === 1 ? "CLASE PUBLICADA" : "CLASES PUBLICADAS"}`;
    if (classes.length) {
      latestClassId.textContent = classes[0].id;
      const nextNumber =
        Math.max(...classes.map((item) => Number(item.id))) + 1;
      nextClassId.textContent = String(nextNumber).padStart(3, "0");
    }
    library.innerHTML = classes.length
      ? classes.map(classEntry).join("")
      : '<p class="loading">El primer rollo está en preparación.</p>';
  } catch (error) {
    count.textContent = "ARCHIVO NO DISPONIBLE";
    library.innerHTML = `<p class="loading">No fue posible cargar el archivo. ${error.message}</p>`;
  }
}

loadLibrary();
