import { AmbientBackground } from "@/components/ambient-background/ambient-background";
import { FloatingHearts } from "@/components/floating-hearts/floating-hearts";
import { Hero } from "@/components/hero/hero";
import { PreviewSection } from "@/components/preview-section/preview-section";
import { IntroExperience } from "@/components/cinematic-intro/intro-experience";

export default function Home() { return <IntroExperience><div className="hero-stage"><AmbientBackground /><FloatingHearts /><Hero /></div><PreviewSection /></IntroExperience>; }
