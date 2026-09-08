"use client";
import { useState } from "react";
import { content } from "@/data/content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import styles from "./gratitude-section.module.css";
export function GratitudeSection() { const [active, setActive] = useState<number | null>(null); const { ref, visible } = useRevealOnScroll<HTMLElement>(); return <section ref={ref} className={`${styles.section} ${visible ? styles.visible : ""}`} aria-labelledby="gratitude-title"><p>{content.gratitude.eyebrow}</p><h2 id="gratitude-title">{content.gratitude.heading}</h2><div className={styles.items}>{content.gratitude.items.map((item,index) => <button key={item.label} className={item.featured ? styles.featured : ""} type="button" onClick={() => setActive(active === index ? null : index)} onFocus={() => setActive(index)} aria-expanded={active === index}><span>{item.label}{item.featured ? " ♥" : ""}</span><small className={active === index ? styles.show : ""}>{item.detail}</small></button>)}</div></section>; }
