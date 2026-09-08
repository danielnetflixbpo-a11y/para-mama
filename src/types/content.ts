export type PreviewCard = {
  title: string;
  description: string;
  icon: "memory" | "letter" | "surprise";
  target: string;
};
export type Memory = { id: string; title: string; caption: string; imageSrc: string | null; imageAlt: string; objectPosition?: string; accent: "rose" | "cream" | "gold"; rotation: number };
export type Gratitude = { label: string; detail: string; featured?: boolean };
export type SecretMessage = { title: string; message: string; featured?: boolean };
export type FinalPhoto = { imageSrc: string | null; imageAlt: string; caption: string; suggestedFileName: string; objectPosition?: string };
export type MusicConfig = { src: string | null; title: string; description: string };
export type ChapterVideo = { src: string | null; posterSrc: string | null; label: string };

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
  bridge: { eyebrow: string; title: string; continuation: string; description: string };
  memories: Memory[];
  letter: { eyebrow: string; heading: string; intro: string; buttonLabel: string; closeLabel: string; title: string; greeting: string; paragraphs: string[]; closing: string; signature: string };
  gratitude: { eyebrow: string; heading: string; items: Gratitude[] };
  phaseThreeClosing: { heading: string; description: string; comingSoonLabel: string; unavailableHint: string };
  phaseFour: { bridge: { eyebrow: string; heading: string; description: string }; progressLabel: string; impossible: { eyebrow: string; heading: string; description: string; startLabel: string; steps: string[]; resultDetail: string; replayLabel: string }; growingHeart: { eyebrow: string; heading: string; description: string; messages: string[]; resetLabel: string }; secrets: { eyebrow: string; heading: string; description: string; closeAllLabel: string; completeLabel: string; messages: SecretMessage[] }; closing: { eyebrow: string; heading: string; description: string; lockedDescription: string; label: string; unavailableHint: string } };
  final: { unlockLabel: string; eyebrow: string; firstPhrase: string; secondPhrase: string; supportingLine: string; photo: FinalPhoto; message: { title: string; paragraphs: string[]; closing: string; signature: string }; celebration: { invitation: string; buttonLabel: string; resultTitle: string; resultDescription: string; replayLabel: string; homeLabel: string }; music: MusicConfig };
  story: { chapters: { id: string; label: string; target: string }[]; transitions: { id: string; phrase: string; video: ChapterVideo; tone: "memories" | "letter" | "games" | "final" }[] };
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
