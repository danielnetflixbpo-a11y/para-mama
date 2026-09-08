"use client";
import { useEffect, useRef } from "react";
import { content } from "@/data/content";
import { FinalPhoto } from "@/components/final-photo/final-photo";
import { FinalCelebration } from "@/components/final-celebration/final-celebration";
import { MusicPlayer } from "@/components/music-player/music-player";
import styles from "./final-experience.module.css";
export function FinalExperience({unlocked,requested}:{unlocked:boolean;requested:boolean}){const title=useRef<HTMLHeadingElement>(null);const shown=requested&&unlocked;useEffect(()=>{if(!shown)return;const timer=window.setTimeout(()=>title.current?.focus(),120);return()=>window.clearTimeout(timer);},[shown]);return <section id="mensaje-final" className={`${styles.section} ${shown?styles.shown:""}`} aria-labelledby="final-title"><p>{content.final.eyebrow}</p><h2 ref={title} id="final-title" tabIndex={-1}>{content.final.firstPhrase}<span>{content.final.secondPhrase}</span></h2><div className={styles.supporting}>{content.final.supportingLine}</div>{shown&&<div className={styles.content}><FinalPhoto/><article className={styles.message}><h3>{content.final.message.title}</h3>{content.final.message.paragraphs.map((item)=><p key={item}>{item}</p>)}<strong>{content.final.message.closing}</strong><em>{content.final.message.signature}</em></article><MusicPlayer/><FinalCelebration/></div>}</section>}
