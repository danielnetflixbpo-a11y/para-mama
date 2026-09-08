"use client";
import { content } from "@/data/content";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import styles from "./chapter-transition.module.css";
export function ChapterTransition({index}:{index:number}){const transition=content.story.transitions[index];const {ref,visible}=useRevealOnScroll<HTMLElement>();return <section id={transition.id} ref={ref} className={`${styles.scene} ${styles[transition.tone]} ${visible?styles.visible:""}`} aria-label={transition.video.label}><div className={styles.frames} aria-hidden="true"><i/><i/><i/></div><p>{transition.phrase}</p><span aria-hidden="true">✦</span></section>}
