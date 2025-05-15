"use client";

import { useGsapStore } from "@/stores/gsap";
import { useMountStore } from "@/stores/mount";
import { roundBoxEffect } from "@/utils/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export default function RoundBoxContainer() {
  const roundBoxRef = useRef<HTMLDivElement>(null);

  const mounted = useMountStore((state) => state.mounted);

  const gsapTrigger = useGsapStore((state) => state.gsapTrigger);
  const [localMounted, setLocalMounted] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(
      () => {
        setLocalMounted(true);
      },
      mounted ? 2200 : 2500
    );
  }, []);

  useGSAP(
    () => {
      if (roundBoxRef.current) roundBoxEffect(roundBoxRef.current);
    },
    { dependencies: [localMounted, gsapTrigger] }
  );

  return (
    localMounted && (
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
