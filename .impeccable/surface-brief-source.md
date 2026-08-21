# Surface brief: Aula de Agentes / inicio y clase 001

- Scope: página principal y detalle de la primera clase.
- Visitor mode: Read con una entrada Experience.
- Audience: adultos cercanos a los 60 años que quieren volver a una capacitación sin recorrer una grabación completa.
- Job: reproducir, comprender, descargar y preguntar sobre una clase.
- Primary action: reproducir la grabación; segunda acción: preguntar a la clase.
- Proof/content: transcripción real, duración, momentos con timestamp, caso Café Raíz y explicación extensa.
- Constraint: la grabación vive en Google Drive y no se incorpora al repositorio de 788 MB.

## Chosen direction

Mesa de montaje audiovisual contemporánea. Una banda de película convierte navegación, video y cronología en un solo mecanismo. Negro real, naranja quemado, ventanas marfil, grano y marcas de edición. El video es el fotograma activo; los segmentos de transcripción cuelgan como recortes; resumen y chat son hojas de trabajo, no tarjetas de dashboard.

- Approved comp: `.impeccable/mocks/film-rail.png`
- Memorable moment: al mover la banda, el fotograma activo se eleva, ilumina y cambia el fragmento de transcripción.
- Must not literalize: las personas y fotografías generadas del comp; el producto usará fotogramas reales extraídos de la grabación.

## Component grammar

- Corners: rectos o recortados; radio máximo 2 px.
- Lines: 1 px marfil o naranja; perforaciones y marcas de registro como navegación.
- Elevation: sombras suaves y desplazadas sobre superficies físicas; nunca halo decorativo.
- Type: serif editorial comprimida para títulos; sans condensada para controles; monoespaciada solo para timecodes.
- Motion: un scrub horizontal con inercia y snap; el resto permanece estable.

## Implementation inventory

| Ingredient | Medium | Commitment |
|---|---|---|
| Video real de la clase | Google Drive iframe | Fotograma principal, nunca foto inventada |
| Banda perforada | CSS + SVG | Cruza todo el primer viewport y funciona como timeline |
| Fotogramas reales | JPG extraídos de MP4 | 6 fotogramas con timestamps verificados |
| Título y navegación | Semantic HTML/CSS | Integrados a la mesa, no hero genérico |
| Marcas y cinta | CSS/SVG | Señalan estado, no decoran todas las secciones |
| Resumen profundo | HTML editorial + print CSS | Lectura larga de 65–75 caracteres por línea |
| Chat | HTML/JS | Recuperación local con evidencia y estado vacío honesto |
| Acción principal | HTML/SVG | Botón de reproducción integrado al fotograma activo |
