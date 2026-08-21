# Aula de Agentes

Biblioteca audiovisual de las clases de Alejandro Romero Conde. La portada reúne todas las sesiones y cada clase tiene reproducción, momentos destacados, resumen profundo descargable y preguntas respondidas con evidencia temporal.

## Ver localmente

Sirve la carpeta con cualquier servidor estático y abre `index.html`. El sitio no requiere compilación ni credenciales.

## Contenido

- `index.html`: portada y catálogo general.
- `data/classes.json`: registro central de clases publicadas.
- `clases/NNN/`: página, contenido, PDF y fotogramas de cada sesión.
- `class-app.js`: interacción compartida del timeline y el chat.
- `library.js`: renderizado del catálogo.
- `DESIGN.md`: sistema visual y decisiones de diseño.

## Publicar una nueva clase

Las fuentes se organizan por número de clase dentro de la carpeta maestra:

```text
Capacitaciones Jartones/
├── 001/  # grabación y transcripción de la clase 1
├── 002/  # grabación y transcripción de la clase 2
└── 003/  # grabación y transcripción de la clase 3
```

Para incorporar una sesión nueva, crea la siguiente carpeta numérica con tres
dígitos y guarda allí la grabación y la transcripción. La skill recorre esta
estructura y agrupa automáticamente los archivos de cada clase.

La skill `bitacora-de-clases` reconstruye el contenido y su generador compone los artefactos:

```bash
python3 ~/.codex/skills/bitacora-de-clases/scripts/create_class.py \
  /ruta/a/class-spec.json \
  /ruta/a/aula-de-agentes
```

El generador extrae fotogramas, crea `clases/NNN/`, produce el PDF y agrega la entrada a `data/classes.json`. Se niega a sobrescribir una clase existente.

Google Drive conserva las fuentes originales y sirve como respaldo. Para la
reproducción dentro del aula, cada grabación se publica en el almacén público
`aula-de-agentes-videos` de Vercel Blob bajo `clases/NNN/grabacion.mp4`. Así el
sitio usa un reproductor HTML5 nativo, sin depender del visor embebido de Drive
ni duplicar videos pesados dentro del repositorio.
