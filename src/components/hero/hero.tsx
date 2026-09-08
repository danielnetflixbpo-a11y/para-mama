"use client";

import { HeartIcon } from "@/components/ui/heart-icon";
import Image from "next/image";
import { content } from "@/data/content";
import { useIntroReplay } from "@/components/cinematic-intro/intro-experience";
import styles from "./hero.module.css";

export function Hero() {
  const replayIntro = useIntroReplay();
  const scrollToPreview = () => document.getElementById("adelanto")?.scrollIntoView({ behavior: "smooth" });
  return <section className={styles.hero} aria-labelledby="hero-title"><div className={styles.content}><p className={styles.eyebrow}>{content.hero.eyebrow}</p><h1 id="hero-title">{content.hero.title}</h1><p className={styles.description}>{content.hero.description}</p><div className={styles.photoFrame}><Image src={content.hero.photo.imageSrc} alt={content.hero.photo.imageAlt} fill loading="eager" sizes="(max-width: 700px) 74vw, 17rem" className={styles.photo} style={{ objectPosition: content.hero.photo.objectPosition }} /></div><button type="button" className={styles.cta} onClick={scrollToPreview}><HeartIcon /><span>{content.hero.buttonLabel}</span></button><button type="button" className={styles.replay} onClick={replayIntro ?? undefined}>{content.hero.replayLabel}</button><p className={styles.signature}>{content.hero.signature}</p></div><button className={styles.scrollCue} onClick={scrollToPreview} type="button" aria-label={content.hero.scrollLabel}><span>{content.hero.scrollLabel}</span><i /></button></section>;
}
