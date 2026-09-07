import type { SiteContent } from "@/types/content";

// Personaliza aquí los textos y rutas cuando tengas tus recuerdos listos.
export const content: SiteContent = {
  projectName: "Para Mamá",
  motherName: "mamá",
  hero: {
    eyebrow: "Un rincón hecho con amor",
    title: "Para vos, mamá",
    description: "Hice este pequeño lugar para recordarte algo que a veces no digo lo suficiente.",
    buttonLabel: "Comenzar la sorpresa",
    signature: "Hecho especialmente para vos",
    scrollLabel: "Descubrí lo que viene",
    photoPlaceholderLabel: "Un recuerdo por llegar",
    photoPlaceholderHint: "Agregá una foto en public/photos para hacer este rincón aún más tuyo.",
    replayLabel: "Volver a ver la bienvenida",
  },
  intro: {
    firstPhrase: "Hay alguien que ha estado conmigo desde el principio…",
    secondPhrase: "Alguien que probablemente no sabe cuánto significa para mí.",
    preparationTitle: "Preparando algo para vos…",
    milestones: [
      { progress: 0, message: "Buscando nuestros recuerdos…" },
      { progress: 20, message: "Reuniendo abrazos…" },
      { progress: 43, message: "Recordando todo lo que hacés por mí…" },
      { progress: 68, message: "Agregando un poquito de magia…" },
      { progress: 88, message: "Preparando muchísimo amor…" },
      { progress: 100, message: "Esto es para vos, mamá." },
    ],
    readyEyebrow: "La sorpresa está lista",
    readyTitle: "Hola, mamá",
    readyDescription: "Hice algo especialmente para vos.",
    enterLabel: "Entrar con corazón",
    skipLabel: "Saltar introducción",
    readyNote: "Cuando estés lista…",
    openingDuration: 900,
    firstPhraseDuration: 2300,
    secondPhraseDuration: 2400,
    progressDuration: 5900,
    particles: [
      { x: 12, y: 18, delay: 0, size: 14, rotation: -28, symbol: "heart" }, { x: 82, y: 15, delay: 180, size: 11, rotation: 30, symbol: "spark" },
      { x: 8, y: 72, delay: 340, size: 18, rotation: -18, symbol: "spark" }, { x: 89, y: 75, delay: 520, size: 15, rotation: 22, symbol: "heart" },
      { x: 23, y: 42, delay: 720, size: 9, rotation: 16, symbol: "spark" }, { x: 76, y: 52, delay: 900, size: 16, rotation: -22, symbol: "heart" },
      { x: 47, y: 11, delay: 1080, size: 10, rotation: 12, symbol: "spark" }, { x: 52, y: 86, delay: 1260, size: 13, rotation: -14, symbol: "heart" },
    ],
  },
  preview: {
    heading: "Esto apenas comienza…",
    cards: [
      { title: "Nuestros recuerdos", description: "Un espacio reservado para las imágenes que cuentan tanto sin decir una palabra.", icon: "memory" },
      { title: "Lo que quiero decirte", description: "Unas líneas sinceras, guardadas con cuidado para cuando llegue el momento.", icon: "letter" },
      { title: "Una pequeña sorpresa", description: "Un detalle ligero y divertido que todavía está esperando su turno.", icon: "surprise" },
    ],
    closingNote: "Esta historia seguirá creciendo, paso a paso y con mucho cariño.",
  },
  assets: { futurePhotos: ["/photos/mama-01.jpg", "/photos/mama-02.jpg"], futureMusic: "/music/cancion-especial.mp3" },
};
