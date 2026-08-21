# Aula de Agentes — sistema de diseño

## 1. Tesis de la experiencia

Aula de Agentes trata cada clase como una película que puede reproducirse, desmontarse por momentos, leerse en profundidad y volver a conversar. La interfaz no representa un campus, un catálogo de cursos ni un tablero de métricas: representa una **mesa de montaje audiovisual contemporánea**.

La experiencia debe conducir siempre por este recorrido:

1. **Reconocer la clase:** título, número, fecha y duración establecen de inmediato qué sesión se está consultando.
2. **Seleccionar y reproducir un momento:** la banda perforada convierte los fotogramas, el reproductor y la cronología en un solo mecanismo.
3. **Comprender el argumento completo:** el resumen editorial permite recuperar la sustancia sin recorrer toda la grabación.
4. **Preguntar con evidencia:** cada respuesta vuelve a un pasaje o momento reconocible de la clase.

La promesa no es “aprender en una plataforma”, sino **volver a una conversación real y encontrar exactamente lo que se necesita**. La tecnología debe desaparecer detrás de esa tarea.

## 2. Principios no negociables

- La sustancia precede al adorno. Una textura, una marca o una animación solo se conserva si ayuda a reconocer, recorrer o interpretar la clase.
- La unidad de producto es la **clase consultable**, no el archivo, el video, el resumen o el chat por separado.
- Todo contenido factual debe provenir de evidencia disponible: transcripción, grabación, fotogramas y materiales reales. No se inventan personas, escenas, compromisos, testimonios, timestamps ni respuestas.
- El video es el fotograma activo. No se sustituye por una foto de stock, una ilustración aspiracional o una imagen generada.
- El agente organiza, recupera y propone; la persona conserva criterio, aprobación y responsabilidad.
- La honestidad operativa es parte del diseño. Si no hay grabación reproducible o evidencia suficiente, se comunica el estado en lugar de simular funcionalidad.
- Se evita de forma explícita la gramática del portal educativo genérico: cuadrículas de cursos, tarjetas redondeadas, indicadores de progreso, badges, estadísticas, barras laterales de aplicación y paneles de dashboard.

## 3. Gramática visual reusable

### 3.1 El mundo propio

La página alterna tres estados físicos de una misma mesa:

- **Mesa oscura:** reconocimiento y reproducción. Fondo negro, banda de película, marcas de registro y luz naranja contenida.
- **Hoja de trabajo:** comprensión. Papel marfil, columna editorial legible e índice naranja adherido como una pieza de montaje.
- **Workprint de consulta:** pregunta y evidencia. Fondo naranja, hoja marfil y conversación tratada como anotaciones de producción.

Estas superficies no son “secciones temáticas” intercambiables. Expresan etapas del recorrido y deben conservar su orden conceptual.

### 3.2 Banda de película

La banda perforada es el mecanismo distintivo del sistema y cruza el primer viewport de lado a lado. Sus reglas son:

- Presentar una secuencia cronológica de momentos reales.
- Mantener un único fotograma activo, más ancho, elevado y delineado en naranja.
- Mostrar en cada fotograma un título corto y un timecode; ambos deben seguir siendo legibles sobre la imagen.
- Hacer que seleccionar un fotograma actualice el fragmento de transcripción y el enlace al momento correspondiente.
- Integrar la reproducción dentro del fotograma activo; el reproductor no vive como un bloque independiente encima de la página.
- Usar perforaciones, líneas y marcas como estructura de navegación, no como decoración dispersa.

El momento memorable es el cambio de montaje: al mover la banda, el fotograma seleccionado gana escala y luz mientras cambia el recorte de transcripción asociado.

### 3.3 Recortes y tickets

Los elementos secundarios cuelgan de la banda como piezas físicas:

- **Recorte de transcripción:** papel marfil, leve rotación, cinta superior, timecode y enlace al video.
- **Ticket de resumen:** bloque naranja recto, encabezado técnico, estimación de lectura y acción oscura.
- **Ticket de pregunta:** papel marfil, línea de escritura y una acción naranja compacta.
- **Regla operativa:** inversión negro/marfil para concentrar una conclusión verificable.
- **Índice de resumen:** placa naranja vertical y estable; acompaña la lectura sin competir con ella.
- **Chat/workprint:** hoja marfil con cinta, cabecera técnica y mensajes de bordes rectos.

Las rotaciones deben ser mínimas, aproximadamente entre `-2deg` y `1deg`, y reservarse para piezas que representan papel o cinta. No se rota texto largo ni controles esenciales.

### 3.4 Forma, línea y elevación

- Esquinas rectas o apenas recortadas; radio máximo recomendado: `2px`.
- Líneas de `1px` en marfil, tinta u naranja según el fondo.
- La jerarquía se construye con contraste, escala, posición y regla editorial; no con cápsulas o contenedores redondeados.
- Las sombras son suaves pero desplazadas, como papel colocado sobre una mesa. El fotograma activo puede usar una sombra más profunda para indicar selección.
- No se usan halos decorativos. El único resplandor admisible es una señal funcional muy contenida alrededor de un estado activo.
- El grano debe percibirse al detener la mirada, no impedir la lectura ni ensuciar fotografías y controles.

## 4. Tokens base

Los tokens actuales viven en `:root` de `styles.css`. Las extensiones deben reutilizarlos antes de introducir valores nuevos.

### 4.1 Color

| Token | Valor | Uso principal |
|---|---:|---|
| `--black` | `#0a0a09` | Mesa, fondo general y alto contraste |
| `--black-2` | `#151412` | Negros secundarios y fondos de fotograma |
| `--orange` | `#f05223` | Acción, selección, cinta y superficie de consulta |
| `--orange-dark` | `#b93414` | Texto acentuado sobre marfil |
| `--paper` | `#eee5d5` | Papel, lectura larga y texto principal sobre negro |
| `--paper-2` | `#d7c9b5` | Texto secundario y papel envejecido |
| `--ink` | `#151310` | Texto y controles sobre marfil/naranja |
| `--lime` | `#d8ff29` | Foco de teclado y reproducción; uso excepcional |
| `--line` | `rgba(238, 229, 213, 0.26)` | Divisores sobre negro |

Reglas de color:

- Negro, naranja quemado y marfil forman la identidad. El lima no es un cuarto color de marca: se reserva para foco y señales puntuales de interacción.
- Sobre fondos oscuros, el texto principal es marfil; el secundario usa `--paper-2`.
- Sobre papel o naranja, el texto principal es `--ink`; `--orange-dark` puede enfatizar timecodes o referencias.
- No se añaden degradados multicolor, azules de interfaz, grises corporativos ni colores por categoría de clase.
- Un nuevo color solo se justifica por semántica persistente y debe comprobar contraste en todos sus estados.

### 4.2 Tipografía

| Token | Familia | Función |
|---|---|---|
| `--serif` | Newsreader | Títulos editoriales, entradillas, citas y frases humanas |
| `--cond` | Archivo Narrow | Navegación, controles, etiquetas y títulos técnicos |
| `--sans` | Source Sans 3 | Párrafos, explicaciones y entradas de formulario |
| `--mono` | IBM Plex Mono | Timecodes, fecha/duración, estados y metadatos |

Reglas tipográficas:

- Los grandes titulares usan Newsreader, peso `500`, interlínea cerrada y tracking negativo. La cursiva naranja introduce énfasis humano, no una segunda voz decorativa.
- Controles y etiquetas usan Archivo Narrow en mayúsculas con espaciado moderado.
- Los timecodes usan exclusivamente IBM Plex Mono para mantener alineación y lectura técnica.
- La lectura larga usa Source Sans 3 a `17px/1.62` en escritorio y `16px` en móvil, con una columna máxima aproximada de `72ch` (objetivo perceptual: 65–75 caracteres por línea).
- No se usan más familias tipográficas. Si las fuentes web no cargan, deben conservarse fallbacks genéricos de su misma categoría.

### 4.3 Escala y espacio

La implementación usa una escala fluida en los títulos mediante `clamp()` y espacios amplios entre capítulos. Como guía:

- Padding lateral de página: `4–5vw` en escritorio; `1–1.2rem` en móvil.
- Altura de barra superior: `76px`; `66px` en móvil.
- Separación entre capítulos del resumen: alrededor de `5rem`.
- Secciones inmersivas: `8–10rem` de padding vertical en escritorio y cerca de `5rem` en móvil.
- Área táctil mínima: `44 × 44px`; la implementación móvil eleva acciones principales a `48–52px`.

No se compacta el resumen para “mostrar más”. El espacio es parte de la legibilidad adulta y de la cadencia editorial.

### 4.4 Texturas y recursos

- `assets/paper-grain.png` se aplica a recortes, tickets marfil y workprints mediante mezcla `multiply`.
- `assets/tape-grain.png` se aplica a superficies naranja y piezas de cinta mediante mezcla `soft-light` o `multiply`.
- El ruido global es una capa SVG rasterizada de opacidad muy baja (`0.055`) y no recibe eventos.
- Las texturas se repiten de manera discreta; no deben incrustarse dentro de cada componente como imágenes distintas.
- Los fotogramas se guardan en `assets/frames/`, con nombre ordenado y descriptivo, y deben provenir de la grabación real.

## 5. Arquitectura de la página

### 5.1 Cabecera

Contiene marca, navegación a las tres tareas y acción principal de reproducción. En pantallas medianas la navegación se oculta y sobreviven la marca y la acción. La cabecera no se convierte en menú de aplicación ni incorpora categorías que no ayuden al recorrido actual.

### 5.2 Workbench o mesa de montaje

Combina metadatos, titular, nota/cita, banda de película, control de recorrido y tres piezas colgantes. Debe conservar una lectura inmediata aun si JavaScript tarda: el título, los metadatos y las acciones principales existen en HTML; los fotogramas dinámicos deben ofrecer siempre nombres accesibles.

### 5.3 Resumen profundo

El índice lateral y la columna editorial forman una unidad. El contenido debe organizarse por argumento, no por módulos visuales de igual peso. Una clase nueva puede variar el número de capítulos, pero cada capítulo necesita una tesis clara, evidencia y transiciones comprensibles.

Las citas incluyen una referencia temporal. Las reglas operativas condensan procedimientos demostrados. Los compromisos separan explícitamente lo confirmado de ejercicios o rutas sugeridas.

### 5.4 Pregunta con evidencia

La zona de consulta presenta sugerencias, contexto de alcance, conversación y una entrada clara. Cada respuesta debe incluir una referencia visible (`Momento de la clase · …`) o declarar honestamente que no existe un pasaje suficientemente directo. El estado vacío explica sobre qué puede preguntarse; nunca inventa una respuesta para mantener la ilusión de inteligencia.

### 5.5 Pie

Repite marca, propósito y descarga. Es una salida sencilla, no un segundo mapa del sitio.

## 6. Interacción y movimiento

El movimiento principal pertenece a la banda. Todo lo demás permanece estable.

- La entrada de la banda usa un asentamiento horizontal breve (`0.8s`) con la curva `cubic-bezier(0.16, 1, 0.3, 1)`.
- Cambiar de momento desplaza la banda durante aproximadamente `0.65s`; el fotograma activo se eleva `8px`, crece apenas y recibe sombra/delineado.
- La cronología utiliza snap discreto entre momentos, no desplazamiento continuo sin referencia.
- Los enlaces de índice y sugerencias pueden desplazarse levemente al pasar el cursor; el cambio no debe mover contenido vecino de forma brusca.
- El estado de búsqueda del chat es corto y textual. No se introduce una secuencia cinematográfica para acciones rutinarias.
- El desplazamiento suave apoya saltos internos, pero se desactiva cuando el sistema solicita movimiento reducido.

Con `prefers-reduced-motion: reduce`, animaciones y transiciones se reducen prácticamente a cero y el scroll vuelve a comportamiento automático. Cualquier interacción futura debe continuar funcionando sin depender de movimiento, parallax, autoplay o gestos precisos.

## 7. Accesibilidad

- Mantener HTML semántico: `header`, `nav`, `main`, `section`, `article`, `blockquote`, `time`, `form` y jerarquía correcta de encabezados.
- Conservar el enlace “Ir al contenido” como primera opción de teclado.
- Todo control necesita texto accesible que describa acción, momento y contexto. Un icono `→` o `play` nunca es el único nombre.
- El foco visible usa un contorno lima de `3px` con separación de `4px`. No se elimina sin reemplazo equivalente.
- Los timecodes y títulos se expresan también como texto; color, escala y posición no pueden ser la única señal de selección.
- La banda debe ser recorrible por teclado mediante botones y control de rango. El orden de foco sigue el orden temporal y después continúa hacia resumen y pregunta.
- Las imágenes reales llevan texto alternativo funcional: “Fotograma real de la clase en [tiempo]”. Si una imagen solo repite información ya anunciada y no aporta contexto, puede marcarse decorativa.
- La conversación usa `aria-live="polite"` para anunciar nuevas respuestas sin interrumpir.
- Contraste y tamaño se evalúan sobre la textura final, no solo sobre el color plano. Si el grano afecta la lectura, se reduce la textura antes de aumentar peso tipográfico indiscriminadamente.
- Formularios e inputs conservan etiquetas visibles o equivalentes explícitos. Los placeholders no reemplazan etiquetas.
- Las acciones críticas y primarias mantienen áreas táctiles de al menos `44px`.
- No hay reproducción automática con sonido. El usuario inicia el video deliberadamente.

## 8. Comportamiento responsive

El diseño responde por prioridad, no por reducción proporcional.

### Escritorio (`> 900px`)

- Cabecera en tres columnas.
- Banda panorámica con fotograma activo de hasta `720px × 390px`.
- Recorte, resumen y pregunta en tres columnas.
- Resumen en dos columnas con índice sticky.
- Consulta en dos columnas.

### Tableta (`651–900px`)

- La navegación central se oculta; marca y reproducción permanecen.
- La nota manuscrita entra al flujo del documento.
- El fotograma activo ocupa cerca de `70vw`.
- Los recortes se reorganizan a dos columnas y la transcripción ocupa el ancho completo.
- El resumen conserva dos columnas más estrechas.
- La consulta pasa a una columna.

### Móvil (`≤ 650px`)

- Padding lateral de `1–1.2rem` y tipografía base de `16px`.
- El titular conserva jerarquía editorial con escala fluida, sin truncarse.
- La banda sigue siendo horizontal; el fotograma activo usa cerca de `84vw × 245px` para dejar asomar los momentos vecinos.
- Los tres recortes se apilan en una sola columna.
- El índice deja de ser sticky y aparece antes del resumen.
- La consulta y el pie se apilan.
- Los botones alcanzan `48–52px`; la acción del formulario puede reducir su texto visual y conservar nombre accesible.

No se sustituye la banda por tarjetas apiladas en móvil. Se preserva el gesto conceptual de montaje, con controles accesibles alternativos para quien no use desplazamiento horizontal.

## 9. Impresión y descarga

La impresión está diseñada como documento editorial, no como captura del sitio:

- Se ocultan ruido, cabecera, mesa, índice, consulta y pie.
- El resumen pasa a blanco y negro, a una columna y con tamaños tipográficos de impresión.
- Los encabezados evitan quedar separados del párrafo siguiente.
- Los capítulos intentan no dividirse innecesariamente entre páginas.
- La regla operativa se transforma en un bloque con borde, sin depender de tinta de fondo.

Cada clase debe ofrecer un PDF real o una impresión equivalente del resumen. El enlace no puede apuntar a un archivo inexistente.

## 10. Cómo agregar una nueva clase

Una clase nueva se incorpora como contenido del sistema, no como una nueva dirección visual.

### 10.1 Insumos mínimos

Antes de publicar deben existir:

- Identificador secuencial, fecha, título y duración verificados.
- Transcripción completa o una fuente equivalente trazable.
- URL de reproducción/consulta o un estado honesto de indisponibilidad.
- Entre 4 y 8 momentos significativos, cada uno con timecode, segundos, título corto, fragmento fiel y fotograma real.
- Resumen profundo organizado por argumento.
- Citas y referencias temporales comprobadas.
- Compromisos confirmados separados de ejercicios o recomendaciones.
- Base de preguntas/respuestas con términos, respuesta y evidencia; si la recuperación cambia a un modelo generativo, la interfaz y el contrato de evidencia se mantienen.
- PDF descargable del resumen.

### 10.2 Modelo de datos de momentos

La estructura reusable actual es:

```js
{
  time: "22:37",
  seconds: 1357,
  title: "La carpeta como contexto",
  image: "assets/frames/02-cafe-raiz.jpg",
  text: "Fragmento fiel y comprensible del momento."
}
```

Los valores `time` y `seconds` deben representar el mismo instante. El archivo de imagen debe existir, corresponder a ese momento y no contener personas o escenas generadas.

### 10.3 Modelo de conocimiento

Cada respuesta local conserva esta forma:

```js
{
  terms: ["skill", "procedimiento", "reutilizar"],
  answer: "Respuesta respaldada y redactada para lectura clara.",
  evidence: "50:38 · 56:14"
}
```

Los términos ayudan a recuperar; no autorizan completar huecos. Cuando ninguna coincidencia sea suficiente, se usa una respuesta de límite que invite a reformular y declare que no se encontró un pasaje directo.

### 10.4 Procedimiento editorial

1. Inventariar grabación, transcripción y materiales.
2. Verificar duración, timestamps, nombres y hechos.
3. Identificar la tesis de la clase y su secuencia argumental.
4. Elegir momentos que cambien el entendimiento, no una muestra visual uniforme del video.
5. Extraer fotogramas reales y optimizarlos sin alterar el contenido.
6. Escribir el resumen con suficiente contexto para quien no recuerde la sesión.
7. Crear preguntas frecuentes y respuestas con evidencia.
8. Generar y comprobar el PDF.
9. Probar reproducción desde cada momento, navegación por teclado, móvil, movimiento reducido e impresión.
10. Revisar que la nueva clase se sienta parte de la misma mesa de montaje y no una plantilla temática independiente.

### 10.5 Límites para preservar el concepto

- No asignar un color, icono o tarjeta distinta a cada clase.
- No convertir el inicio en una cuadrícula uniforme de miniaturas. Si crece el catálogo, usar un **archivo de rollos o contact sheet cronológico**: filas editoriales, etiquetas técnicas, fotogramas reales y acceso directo a reproducir/consultar.
- No reducir el resumen a tres bullets para igualar alturas.
- No seleccionar momentos por intervalos regulares; seleccionar por valor narrativo y evidencia.
- No duplicar la banda varias veces en una misma vista. Una banda principal conserva su fuerza.
- No saturar todas las superficies con cinta, grano y marcas. Cada página necesita zonas de descanso.
- No introducir widgets de progreso, gamificación, rankings o estadísticas salvo que un trabajo real del usuario los exija y puedan integrarse en la metáfora editorial.

## 11. Mapa de implementación

- `index.html`: estructura semántica, recorrido y contenido editorial de la Clase 001.
- `styles.css`: tokens, sistema base, layout, movimiento, responsive, reducción de movimiento e impresión.
- `overrides.css`: acabados aprobados posteriores —texturas, énfasis del fotograma activo, tamaños táctiles y enlaces de descarga/momento—; debe mantenerse pequeño y eventualmente consolidarse cuando el sistema madure.
- `content.js`: datos de clase, momentos, fotogramas y conocimiento con evidencia.
- `app.js`: selección/reproducción de momentos, navegación interna y recuperación local.
- `assets/frames/`: fotogramas reales.
- `assets/paper-grain.png` y `assets/tape-grain.png`: texturas reusables.
- `.impeccable/mocks/film-rail.png`: composición visual aprobada y referencia conceptual; sus personas/fotografías generadas no son assets de producto.

## 12. Criterio de aceptación para futuras extensiones

Una extensión está lista cuando una persona puede:

- identificar la clase sin interpretar la interfaz;
- llegar a un momento real y reproducirlo;
- entender la tesis mediante una lectura cómoda y sustanciosa;
- formular una pregunta y reconocer la evidencia de la respuesta;
- completar las mismas tareas con teclado, en móvil y con movimiento reducido;
- distinguir con claridad qué está confirmado, qué es una propuesta y qué no está disponible;
- reconocer Aula de Agentes sin encontrar un portal educativo o un dashboard de tarjetas.

Si una nueva función debilita cualquiera de esas condiciones, debe rediseñarse antes de incorporarse.
