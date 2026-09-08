# Para Mamá

Experiencia web emocional en cinco capítulos, creada con Next.js. No usa backend, base de datos ni variables de entorno.

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Personalización

Los textos, juegos, carta, agradecimientos, escena final y música se editan en `src/data/content.ts`.

Podés añadir siete fotos en `public/photos`: `mama-01.jpg` a `mama-06.jpg` y `mama-final.jpg`. Consultá `public/photos/README.md` para activar cada una y redactar texto alternativo útil.

La música es opcional: colocá `mama.mp3` en `public/music` y configurá `final.music.src`; las indicaciones están en `public/music/README.md`.

Para publicar más adelante, instalá dependencias, ejecutá lint y build, y configurá la plataforma de hosting para ejecutar la aplicación estándar de Next.js. No se requieren variables de entorno.
