"use client";
import { useRef, useState } from "react";
import { content } from "@/data/content";
import styles from "./music-player.module.css";
export function MusicPlayer(){const music=content.final.music;const audio=useRef<HTMLAudioElement>(null);const [playing,setPlaying]=useState(false);if(!music.src)return null;const toggle=async()=>{if(!audio.current)return;if(playing){audio.current.pause();setPlaying(false);return;}try{await audio.current.play();setPlaying(true);}catch{setPlaying(false);}};return <div className={styles.player}><audio ref={audio} src={music.src} onEnded={()=>setPlaying(false)}/><b>{music.title}</b><span>{music.description}</span><button type="button" onClick={toggle}>{playing?"Pausar música":"Reproducir música"}</button></div>}
