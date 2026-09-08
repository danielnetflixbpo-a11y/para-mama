import { PreviewIcon } from "@/components/ui/icon";
import { content } from "@/data/content";
import styles from "./preview-section.module.css";

export function PreviewSection() { return <section id="adelanto" className={styles.section} aria-labelledby="preview-title"><div className={styles.inner}><p className={styles.kicker}>Muy pronto</p><h2 id="preview-title">{content.preview.heading}</h2><div className={styles.grid}>{content.preview.cards.map((card) => <a className={styles.card} href={card.target} key={card.title}><div className={styles.icon}><PreviewIcon type={card.icon} /></div><h3>{card.title}</h3><p>{card.description}</p><span className={styles.line} /></a>)}</div><p className={styles.closing}>{content.preview.closingNote}</p></div></section>; }
