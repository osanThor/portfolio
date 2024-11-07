"use client";

import Animate from "@/utils/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export default function RoundBoxContainer() {
  const roundBoxRef = useRef<HTMLDivElement>(null);
  const [localMounted, setLocalMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLocalMounted(true);
    }, 1700);
  }, []);

  useGSAP(
    () => {
      if (roundBoxRef.current) {
        const { RoundBoxEffect } = new Animate();
        RoundBoxEffect(roundBoxRef.current);
      }
    },
    { dependencies: [localMounted] }
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
