import Image from "next/image";
import { content } from "@/data/content";
import styles from "./final-photo.module.css";
export function FinalPhoto(){const photo=content.final.photo;return <figure className={styles.figure}>{photo.imageSrc?<Image src={photo.imageSrc} alt={photo.imageAlt} fill sizes="(max-width: 700px) 90vw, 34rem" className={styles.image} style={{objectPosition:photo.objectPosition}}/>:<div className={styles.placeholder} aria-hidden="true"><span>♥</span><b>Nuestra foto especial</b></div>}<figcaption>{photo.caption}</figcaption></figure>}
