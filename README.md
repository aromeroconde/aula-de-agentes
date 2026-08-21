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

La skill `bitacora-de-clases` reconstruye el contenido y su generador compone los artefactos:

```bash
python3 ~/.codex/skills/bitacora-de-clases/scripts/create_class.py \
  /ruta/a/class-spec.json \
  /ruta/a/aula-de-agentes
```

El generador extrae fotogramas, crea `clases/NNN/`, produce el PDF y agrega la entrada a `data/classes.json`. Se niega a sobrescribir una clase existente.

Las grabaciones se reproducen desde su ubicación remota para evitar duplicar videos de gran tamaño en el repositorio.
