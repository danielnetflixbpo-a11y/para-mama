import { AmbientBackground } from "@/components/ambient-background/ambient-background";
import { FloatingHearts } from "@/components/floating-hearts/floating-hearts";
import { Hero } from "@/components/hero/hero";
import { PreviewSection } from "@/components/preview-section/preview-section";
import { IntroExperience } from "@/components/cinematic-intro/intro-experience";
import { MemoryGallery } from "@/components/memory-gallery/memory-gallery";
import { LoveLetter } from "@/components/love-letter/love-letter";
import { GratitudeSection } from "@/components/gratitude-section/gratitude-section";
import { PhaseThreeClosing } from "@/components/phase-three-closing/phase-three-closing";
import { PhaseFourExperience } from "@/components/phase-four-experience/phase-four-experience";
import { StoryProgress } from "@/components/story-progress/story-progress";
import { ChapterTransition } from "@/components/chapter-transition/chapter-transition";

export default function Home() { return <IntroExperience><StoryProgress /><div className="hero-stage"><AmbientBackground /><FloatingHearts /><Hero /></div><PreviewSection /><ChapterTransition index={0}/><MemoryGallery /><ChapterTransition index={1}/><LoveLetter /><GratitudeSection /><ChapterTransition index={2}/><PhaseThreeClosing /><ChapterTransition index={3}/><PhaseFourExperience /></IntroExperience>; }
