"use client";

import { useGsapStore } from "@/stores/gsap";
import { useDelayedReveal } from "@/hooks/useDelayedReveal";
import { roundBoxEffect } from "@/utils/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function RoundBoxContainer() {
  const roundBoxRef = useRef<HTMLDivElement>(null);
  const gsapTrigger = useGsapStore((state) => state.gsapTrigger);
  const isRevealed = useDelayedReveal();

  useGSAP(
    () => {
      if (roundBoxRef.current) roundBoxEffect(roundBoxRef.current);
    },
    { dependencies: [isRevealed, gsapTrigger] }
  );

  return (
    isRevealed && (
      <>
        <div className="w-full relative -translate-y-1 z-10">
          <div
            ref={roundBoxRef}
            className="roundBox absolute top-full bg-white w-[130%] left-1/2 -translate-x-1/2 z-10 h-[300px] shadow-[0_20px_30px_-15px] shadow-neutral-900 rounded-b-full "
          />
        </div>
      </>
    )
  );
}
