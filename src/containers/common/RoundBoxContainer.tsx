"use client";

import { RoundBoxEffect } from "@/utils/lib/gsap";
import { mountedState } from "@/utils/lib/recoil/atom";
import { useGSAP } from "@gsap/react";
import { useRecoilValue } from "recoil";
import { useEffect, useRef, useState } from "react";

export default function RoundBoxContainer() {
  const roundRef = useRef<HTMLDivElement>(null);
  const mounted = useRecoilValue(mountedState);
  const [localMounted, setLocalMounted] = useState<boolean>(false);

  useEffect(() => {
    if (!mounted) return setLocalMounted(false);
    setTimeout(() => {
      setLocalMounted(true);
    }, 1100);
  }, [mounted]);
  useGSAP(
    () => {
      if (roundRef.current) RoundBoxEffect(roundRef.current);
    },
    { scope: roundRef, dependencies: [localMounted] }
  );

  return (
    localMounted && (
      <>
        <div className="w-full relative -translate-y-1 z-10">
          <div
            ref={roundRef}
            className="roundBox absolute top-full bg-white w-[200%] left-1/2 -translate-x-1/2 z-10 h-[300px] shadow-[0_20px_30px_-15px] shadow-gray"
          />
        </div>
      </>
    )
  );
}
