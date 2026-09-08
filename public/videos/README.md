# Videos opcionales

Podés añadir clips cortos MP4 o WebM: `memories-transition.mp4`, `letter-transition.mp4`, `games-transition.mp4` y `final-transition.mp4`. Recomendación: 2–4 segundos, sin audio, comprimidos y con composición vertical o centrada para móvil.

Configurá cada `src` y `posterSrc` en `story.transitions` dentro de `src/data/content.ts`. Mientras sean `null`, la experiencia usa escenas CSS completas y no solicita videos inexistentes.
