window.CLASS_DATA = {
  classId: "001",
  fallbackTopics: ["agentes", "Café Raíz", "P&G", "verificación", "skills"],
  videoAccessNote:
    "La grabación conserva los permisos del archivo en Google Drive.",
  videoEmbedUrl:
    "https://drive.google.com/file/d/1nKFT6elNd2UfhfwJN5aLID54ufs8sYi7/preview",
  videoViewUrl:
    "https://drive.google.com/file/d/1nKFT6elNd2UfhfwJN5aLID54ufs8sYi7/view",
  moments: [
    {
      time: "12:58",
      seconds: 778,
      title: "La tesis",
      image: "assets/frames/01-tesis.jpg",
      text: "Hacer preguntas a un chat es útil, pero el contexto se pierde cuando comienza una conversación nueva.",
    },
    {
      time: "22:37",
      seconds: 1357,
      title: "La carpeta como contexto",
      image: "assets/frames/02-cafe-raiz.jpg",
      text: "La carpeta se convierte en el contexto del proyecto: gastos, compras, ventas, banco y presupuesto dejan de estar sueltos.",
    },
    {
      time: "29:37",
      seconds: 1777,
      title: "Construir el P&G",
      image: "assets/frames/03-pyg.jpg",
      text: "El agente consolida mayo a agosto, prepara el P&G y debe explicar el principal hallazgo de negocio.",
    },
    {
      time: "39:41",
      seconds: 2381,
      title: "Verificar antes de creer",
      image: "assets/frames/04-verificacion.jpg",
      text: "La revisión encuentra fórmulas equivocadas y una clasificación que inflaba la utilidad en once millones.",
    },
    {
      time: "56:14",
      seconds: 3374,
      title: "Crear una skill",
      image: "assets/frames/05-skills.jpg",
      text: "Una skill conserva el procedimiento: inventariar, auditar, calcular y entregar siempre con la estructura definida.",
    },
    {
      time: "1:09:34",
      seconds: 4174,
      title: "Del flujo a la rutina",
      image: "assets/frames/06-ejecucion.jpg",
      text: "El mismo análisis puede programarse y repetirse sobre nuevos archivos sin reconstruir las instrucciones.",
    },
  ],
  knowledge: [
    {
      terms: ["chat", "agente", "diferencia", "prompt", "contexto"],
      answer:
        "Un chat responde dentro de una conversación. Un agente trabaja con un contexto persistente —carpeta, archivos, reglas y objetivo— para ejecutar un flujo. El salto no consiste en escribir un prompt más largo, sino en definir qué trabajo se delega y cómo se revisará.",
      evidence: "12:58 · 29:37",
    },
    {
      terms: [
        "café",
        "cafe",
        "raíz",
        "raiz",
        "negocio",
        "financiero",
        "archivo",
        "carpeta",
      ],
      answer:
        "Café Raíz fue el caso práctico. El negocio tenía gastos, compras, ventas y cartera, movimientos bancarios y presupuesto en archivos distintos. Primero el agente inventarió las fuentes; después consolidó y diagnosticó. La demostración mostró que información dispersa puede convertirse en una decisión si se separan hechos, supuestos y proyecciones.",
      evidence: "22:37 · 29:37",
    },
    {
      terms: [
        "p&g",
        "pyg",
        "pig",
        "utilidad",
        "punto de equilibrio",
        "caja",
        "resultado",
      ],
      answer:
        "El P&G reveló que el problema no era únicamente de caja: el negocio operaba por debajo de su punto de equilibrio. La caja inicial estaba financiando pérdidas, por eso un saldo positivo no demostraba que el modelo fuera rentable.",
      evidence: "39:41 · 41:48",
    },
    {
      terms: [
        "error",
        "errores",
        "verificar",
        "verificación",
        "auditar",
        "formula",
        "fórmula",
        "confiar",
        "once millones",
      ],
      answer:
        "La verificación detectó dos fórmulas que apuntaban a filas equivocadas y una clasificación que trataba un gasto operativo como costo de ventas. Eso inflaba la utilidad en once millones. La regla resultante fue inventariar, auditar, calcular, contrastar y explicar antes de recomendar.",
      evidence: "38:07 · 39:41",
    },
    {
      terms: [
        "skill",
        "skills",
        "habilidad",
        "reutilizar",
        "repetir",
        "procedimiento",
      ],
      answer:
        "Una skill es un procedimiento reutilizable que especifica entradas, validaciones, pasos, entregables y límites. Puede ser global o pertenecer a un proyecto. En la clase se creó una para analizar la viabilidad de un negocio sin reescribir el flujo cada vez.",
      evidence: "50:38 · 56:14",
    },
    {
      terms: [
        "correo",
        "email",
        "vps",
        "nube",
        "apagado",
        "programar",
        "automatizar",
        "24",
      ],
      answer:
        "Una automatización que debe funcionar aunque el computador esté apagado necesita un entorno permanente, como una VPS. La clase también diferenció preparación y ejecución: el agente puede redactar o priorizar, pero acciones como enviar, borrar o pagar deben confirmarse.",
      evidence: "1:14:43 · 1:24:10",
    },
    {
      terms: [
        "empezar",
        "primer",
        "primero",
        "dolor",
        "tiempo",
        "siguiente",
        "próxima",
        "proxima",
      ],
      answer:
        "El mejor primer agente nace de un dolor real: una tarea repetitiva que consume tiempo y tiene un resultado verificable. La propuesta fue traer una muestra controlada de información, construir un flujo pequeño, probarlo y corregirlo hasta que refleje el criterio de la persona.",
      evidence: "1:36:29 · 1:39:12",
    },
    {
      terms: [
        "humano",
        "criterio",
        "estratega",
        "decisión",
        "decision",
        "aprobar",
        "control",
      ],
      answer:
        "El humano conserva la estrategia, el contexto y la decisión. El agente organiza información, prepara análisis y propone acciones. La sesión insistió en revisar las recomendaciones y corregir la skill; así el resultado se acerca progresivamente al criterio de quien la usa.",
      evidence: "1:39:12",
    },
    {
      terms: [
        "participante",
        "pregunta",
        "duda",
        "laura",
        "jair",
        "eder",
        "edgar",
        "alex",
      ],
      answer:
        "Las dudas principales fueron cómo trabajar desde una carpeta, cómo detectar datos erróneos, cómo evitar análisis idealizados, cómo reutilizar skills y qué ocurre si el computador está apagado. Esas preguntas movieron la clase desde la demostración hacia verificación y operación real.",
      evidence: "24:10 · 38:07 · 42:47 · 1:14:43",
    },
  ],
};
