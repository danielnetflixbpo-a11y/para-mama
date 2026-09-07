import styles from "./ambient-background.module.css";

export function AmbientBackground() {
  return <div className={styles.background} aria-hidden="true"><span className={styles.haloOne} /><span className={styles.haloTwo} /><span className={styles.grain} /></div>;
}
