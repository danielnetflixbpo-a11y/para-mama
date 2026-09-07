"use client";

import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import type { IntroStage } from "@/hooks/use-intro-sequence";
import { HeartIcon } from "@/components/ui/heart-icon";
import { IntroParticles } from "./intro-particles";
import { IntroProgress } from "./intro-progress";
import styles from "./cinematic-intro.module.css";

type CinematicIntroProps = { stage: IntroStage; progress: number; leaving: boolean; onSkip: () => void; onEnter: () => void };

export function CinematicIntro({ stage, progress, leaving, onSkip, onEnter }: CinematicIntroProps) {
  const readyTitleRef = useRef<HTMLHeadingElement>(null);
  const isReady = stage === "final";
  useEffect(() => { if (isReady) readyTitleRef.current?.focus(); }, [isReady]);
  return <section className={`${styles.intro} ${isReady ? styles.ready : ""} ${leaving ? styles.exiting : ""}`} aria-label="Bienvenida"><div className={styles.memoryFrame} aria-hidden="true"><span /><span /><span /></div><IntroParticles particles={content.intro.particles} bursting={isReady} /><button type="button" className={styles.skip} onClick={onSkip} disabled={isReady}>{content.intro.skipLabel}</button><div className={styles.center}>
    {stage === "opening" && <div className={styles.openingHeart} aria-hidden="true">♥</div>}
    {stage === "first" && <p className={`${styles.phrase} ${styles.blurReveal}`}>{content.intro.firstPhrase}</p>}
    {stage === "second" && <p className={`${styles.phrase} ${styles.blurReveal}`}>{content.intro.secondPhrase}</p>}
    {stage === "progress" && <IntroProgress progress={progress} />}
    {isReady && <div className={styles.readyContent}><p className={styles.readyEyebrow}>{content.intro.readyEyebrow}</p><h1 ref={readyTitleRef} tabIndex={-1}>{content.intro.readyTitle}</h1><p>{content.intro.readyDescription}</p><button type="button" className={styles.enter} onClick={onEnter}><HeartIcon /><span>{content.intro.enterLabel}</span></button><small>{content.intro.readyNote}</small></div>}
  </div></section>;
}
