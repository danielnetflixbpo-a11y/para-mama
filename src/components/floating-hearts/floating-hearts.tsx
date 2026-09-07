import styles from "./floating-hearts.module.css";

const decorations = [
  { className: "heartOne", symbol: "♥" }, { className: "heartTwo", symbol: "♥" }, { className: "heartThree", symbol: "♥" },
  { className: "sparkOne", symbol: "✦" }, { className: "sparkTwo", symbol: "✦" }, { className: "sparkThree", symbol: "✦" },
];

export function FloatingHearts() { return <div className={styles.decorations} aria-hidden="true">{decorations.map(({ className, symbol }) => <span key={className} className={`${styles.item} ${styles[className]}`}>{symbol}</span>)}</div>; }
