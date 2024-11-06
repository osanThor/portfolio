"use client";

import { scrollOffsetYState } from "@/utils/lib/recoil/atom";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

export default function BottomAnimationContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollY = useRecoilValue(scrollOffsetYState);

  useEffect(() => {
    if (!containerRef.current) return;
  }, [scrollY]);

  return (
    <>
      <div ref={containerRef} className="relative min-w-full"></div>
      {/* <RoundBox /> */}
    </>
  );
}
