import type { CSSProperties } from "react";
import type { IntroParticle } from "@/types/content";
import styles from "./cinematic-intro.module.css";

export function IntroParticles({ particles, bursting }: { particles: IntroParticle[]; bursting: boolean }) {
  return <div className={`${styles.particles} ${bursting ? styles.bursting : ""}`} aria-hidden="true">{particles.map((particle, index) => {
    const particleStyle: CSSProperties & Record<"--particle-x" | "--particle-y" | "--particle-delay" | "--particle-size" | "--particle-rotation", string> = {
      "--particle-x": `${particle.x}%`, "--particle-y": `${particle.y}%`, "--particle-delay": `${particle.delay}ms`, "--particle-size": `${particle.size}px`, "--particle-rotation": `${particle.rotation}deg`,
    };
    return <span className={`${styles.particle} ${particle.symbol === "heart" ? styles.particleHeart : styles.particleSpark}`} style={particleStyle} key={`${particle.symbol}-${index}`}>{particle.symbol === "heart" ? "♥" : "✦"}</span>;
  })}</div>;
}
