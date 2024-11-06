"use client";

import Animate from "@/utils/animation";
import { mountedState } from "@/utils/lib/recoil/atom";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

type Props = { children: React.ReactNode };

export default function Template({ children }: Props) {
  const pageInRef = useRef<HTMLDivElement>(null);
  const pageOutRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const lastWord = pathname.split("/").pop();

  const { animatePageIn } = new Animate();

  useGSAP(
    () => {
      animatePageIn();
    },
    { scope: pageInRef, dependencies: [] }
  );

  return (
    <>
      <div
        ref={pageInRef}
        id="pageInLoader"
        className={`min-h-screen bg-neutral-900 transition-all text-white fixed top-0 left-0 right-0  flex items-center justify-center z-[9999999] overflow-hidden cursor-wait ease-in-out`}
      >
        <div className="text-2xl md:text-4xl lg:text-7xl font-extralight">
          {lastWord?.toUpperCase() || "LOADING"}
        </div>
        <span className="sr-only">loading spacer</span>
      </div>
      <div
        ref={pageOutRef}
        id="pageOutLoader"
        className={`min-h-screen rounded-t-full bg-neutral-900 transition-all text-white fixed top-full left-0 right-0  flex items-center justify-center z-[9999999] overflow-hidden cursor-wait ease-in-out`}
      >
        <span className="sr-only">loading spacer</span>
      </div>
      {children}
    </>
  );
}
