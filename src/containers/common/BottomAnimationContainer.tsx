"use client";

import { RoundBoxEffect } from "@/utils/lib/gsap";
import { useEffect, useRef, useState } from "react";

export default function BottomAnimationContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const roundHeigt = -(scrollY - (containerTop - 100));

    RoundBoxEffect(roundHeigt);
  }, [scrollY]);

  return (
    <>
      <div ref={containerRef} className="relative min-w-full"></div>
      <div className="w-full relative">
        <div className="roundBox w-[200%] left-1/2 -translate-x-1/2 z-10 bg-white absolute top-[calc(100%)] h-[150px] shadow-[0_20px_30px_-15px] shadow-gray"></div>
      </div>
    </>
  );
}
