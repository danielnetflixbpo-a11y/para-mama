"use client";

import { HeartIcon } from "@/components/ui/heart-icon";
import { content } from "@/data/content";
import { useIntroReplay } from "@/components/cinematic-intro/intro-experience";
import styles from "./hero.module.css";

export function Hero() {
  const replayIntro = useIntroReplay();
  const scrollToPreview = () => document.getElementById("adelanto")?.scrollIntoView({ behavior: "smooth" });
  return <section className={styles.hero} aria-labelledby="hero-title"><div className={styles.content}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1 id="hero-title">{content.hero.title}</h1><p className={styles.description}>{content.hero.description}</p><div className={styles.photoFrame}><div className={styles.photoPlaceholder}><span className={styles.photoMark}>✦</span><strong>{content.hero.photoPlaceholderLabel}</strong><span>{content.hero.photoPlaceholderHint}</span></div></div><button type="button" className={styles.cta} onClick={scrollToPreview}><HeartIcon /><span>{content.hero.buttonLabel}</span></button><button type="button" className={styles.replay} onClick={replayIntro ?? undefined}>{content.hero.replayLabel}</button><p className={styles.signature}>{content.hero.signature}</p></div><button className={styles.scrollCue} onClick={scrollToPreview} type="button" aria-label={content.hero.scrollLabel}><span>{content.hero.scrollLabel}</span><i /></button></section>;
}
