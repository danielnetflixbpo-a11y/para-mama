"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SiteContent } from "@/types/content";

export type IntroStage = "opening" | "first" | "second" | "progress" | "final";

export function useIntroSequence(settings: SiteContent["intro"]) {
  const [stage, setStage] = useState<IntroStage>("opening");
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const skipRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      const finalFrame = window.requestAnimationFrame(() => setStage("final"));
      return () => window.cancelAnimationFrame(finalFrame);
      return;
    }

    const firstEnd = settings.openingDuration + settings.firstPhraseDuration;
    const secondEnd = firstEnd + settings.secondPhraseDuration;
    const totalDuration = secondEnd + settings.progressDuration;
    let animationFrame = 0;
    let lastTime: number | undefined;
    let elapsed = 0;
    let previousProgress = -1;

    const tick = (now: number) => {
      if (skipRef.current) return;
      if (lastTime !== undefined && document.visibilityState === "visible") elapsed += now - lastTime;
      lastTime = now;
      if (elapsed < settings.openingDuration) setStage("opening");
      else if (elapsed < firstEnd) setStage("first");
      else if (elapsed < secondEnd) setStage("second");
      else if (elapsed < totalDuration) {
        setStage("progress");
        const currentProgress = Math.min(100, Math.round(((elapsed - secondEnd) / settings.progressDuration) * 100));
        if (currentProgress !== previousProgress) {
          previousProgress = currentProgress;
          setProgress(currentProgress);
        }
      } else {
        setProgress(100);
        setStage("final");
        return;
      }
      animationFrame = window.requestAnimationFrame(tick);
    };
    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [reducedMotion, settings]);

  const skip = useCallback(() => {
    skipRef.current = true;
    setProgress(100);
    setStage("final");
  }, []);

  return { stage, progress, reducedMotion, skip };
}
