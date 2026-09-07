import { content } from "@/data/content";
import styles from "./cinematic-intro.module.css";

export function IntroProgress({ progress }: { progress: number }) {
  const currentMilestone = [...content.intro.milestones].reverse().find((milestone) => progress >= milestone.progress) ?? content.intro.milestones[0];
  return <div className={styles.progressContent}><p className={styles.preparation}>{content.intro.preparationTitle}</p><div className={styles.progressHeart} aria-hidden="true">♥</div><div className={styles.progressNumber} aria-hidden="true">{progress}%</div><div className={styles.progressTrack} role="progressbar" aria-label={content.intro.preparationTitle} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ width: `${progress}%` }} /></div><p className={styles.progressMessage} aria-live="polite">{currentMilestone.message}</p></div>;
}
