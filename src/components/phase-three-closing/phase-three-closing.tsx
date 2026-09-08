"use client";
import { content } from "@/data/content";
import styles from "./phase-three-closing.module.css";
export function PhaseThreeClosing() { const goToGames=()=>{const games=document.getElementById("juegos-para-mama");games?.scrollIntoView({behavior:"smooth"});window.setTimeout(()=>games?.focus(),450);}; return <section id="proximamente" className={styles.section} aria-labelledby="closing-title"><span aria-hidden="true">♥</span><h2 id="closing-title">{content.phaseThreeClosing.heading}</h2><p>{content.phaseThreeClosing.description}</p><button type="button" onClick={goToGames}>{content.phaseThreeClosing.comingSoonLabel}</button></section>; }
