"use client";

import { useState } from "react";
import { content } from "@/data/content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import styles from "./love-letter.module.css";

export function LoveLetter() { const [open, setOpen] = useState(false); const { ref, visible } = useRevealOnScroll<HTMLElement>(); return <section id="carta" ref={ref} className={`${styles.section} ${visible ? styles.visible : ""}`} aria-labelledby="letter-heading"><div className={styles.intro}><p>{content.letter.eyebrow}</p><h2 id="letter-heading">{content.letter.heading}</h2><span>{content.letter.intro}</span></div><div className={`${styles.envelope} ${open ? styles.open : ""}`}><div className={styles.flap} aria-hidden="true" /><div className={styles.heart} aria-hidden="true">♥</div></div><button className={styles.toggle} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="letter-content">{open ? content.letter.closeLabel : content.letter.buttonLabel}</button><div id="letter-content" className={`${styles.paper} ${open ? styles.paperOpen : ""}`} aria-hidden={!open}><h3>{content.letter.title}</h3><p className={styles.greeting}>{content.letter.greeting}</p>{content.letter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className={styles.closing}>{content.letter.closing}<br /><strong>{content.letter.signature}</strong></p></div></section>; }
