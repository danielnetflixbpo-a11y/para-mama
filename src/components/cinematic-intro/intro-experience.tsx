"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { content } from "@/data/content";
import { useIntroSequence } from "@/hooks/use-intro-sequence";
import { CinematicIntro } from "./cinematic-intro";

const IntroReplayContext = createContext<(() => void) | null>(null);
export function useIntroReplay() { return useContext(IntroReplayContext); }

function IntroController({ leaving, onEnter }: { leaving: boolean; onEnter: () => void }) {
  const { stage, progress, skip } = useIntroSequence(content.intro);
  return <CinematicIntro stage={stage} progress={progress} leaving={leaving} onSkip={skip} onEnter={onEnter} />;
}

export function IntroExperience({ children }: Readonly<{ children: React.ReactNode }>) {
  const [replayKey, setReplayKey] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const contentRef = useRef<HTMLElement>(null);
  const leaveTimer = useRef<number | undefined>(undefined);
  useEffect(() => { const originalOverflow = document.body.style.overflow; if (isActive) document.body.style.overflow = "hidden"; else document.body.style.overflow = originalOverflow; return () => { document.body.style.overflow = originalOverflow; }; }, [isActive]);
  useEffect(() => () => { if (leaveTimer.current !== undefined) window.clearTimeout(leaveTimer.current); }, []);
  const enter = useCallback(() => { setIsLeaving(true); leaveTimer.current = window.setTimeout(() => { setIsActive(false); setIsLeaving(false); contentRef.current?.focus(); }, 650); }, []);
  const replay = useCallback(() => { if (leaveTimer.current !== undefined) window.clearTimeout(leaveTimer.current); window.scrollTo({ top: 0, behavior: "auto" }); setIsLeaving(false); setReplayKey((key) => key + 1); setIsActive(true); }, []);
  return <IntroReplayContext.Provider value={replay}><main ref={contentRef} tabIndex={-1} aria-hidden={isActive || isLeaving} inert={isActive || isLeaving}>{children}</main>{(isActive || isLeaving) && <IntroController key={replayKey} leaving={isLeaving} onEnter={enter} />}</IntroReplayContext.Provider>;
}
