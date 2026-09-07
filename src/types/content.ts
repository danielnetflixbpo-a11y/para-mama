export type PreviewCard = {
  title: string;
  description: string;
  icon: "memory" | "letter" | "surprise";
};

export type IntroMilestone = { progress: number; message: string };

export type IntroParticle = { x: number; y: number; delay: number; size: number; rotation: number; symbol: "heart" | "spark" };

export type SiteContent = {
  projectName: string;
  motherName: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    signature: string;
    scrollLabel: string;
    photoPlaceholderLabel: string;
    photoPlaceholderHint: string;
    replayLabel: string;
  };
  preview: { heading: string; cards: PreviewCard[]; closingNote: string };
  intro: {
    firstPhrase: string;
    secondPhrase: string;
    preparationTitle: string;
    milestones: IntroMilestone[];
    readyEyebrow: string;
    readyTitle: string;
    readyDescription: string;
    enterLabel: string;
    skipLabel: string;
    readyNote: string;
    openingDuration: number;
    firstPhraseDuration: number;
    secondPhraseDuration: number;
    progressDuration: number;
    particles: IntroParticle[];
  };
  assets: { futurePhotos: string[]; futureMusic: string };
};
