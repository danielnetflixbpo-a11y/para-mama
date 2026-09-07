import type { PreviewCard } from "@/types/content";

export function PreviewIcon({ type }: { type: PreviewCard["icon"] }) {
  if (type === "letter") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5 12 13l8.5-6.5M5 5h14a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 5 5Z" /></svg>;
  if (type === "surprise") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 10h14v10H5zM4 7h16v3H4zM12 7v13M8 7c-2 0-3-1-3-2.3C5 3.5 6 3 7 3c2.2 0 5 4 5 4S10 7 8 7Zm8 0c2 0 3-1 3-2.3C19 3.5 18 3 17 3c-2.2 0-5 4-5 4s2 0 4 0Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12.5M4 16l4.5-4.5 3.3 3.3 2.2-2.2L20 18.5M8 9h.01" /></svg>;
}
