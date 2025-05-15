"use client";

import { Toaster } from "@/components/ui/toaster";
import FooterContainer from "@/containers/common/FooterContainer";
import { animatePageIn } from "@/utils/lib/gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useMountStore } from "@/stores/mount";

type Props = { children: React.ReactNode };

export default function Template({ children }: Props) {
  const mounted = useMountStore((state) => state.mounted);
  const setMounted = useMountStore((state) => state.setMounted);
  const pathname = usePathname();
  const lastWord = pathname.split("/").pop();

  const handleInMounted = () => setMounted(true);

  useGSAP(() => {
    animatePageIn(mounted, handleInMounted);
    ScrollSmoother.create({
      smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    });
  });

  return (
    <>
      <div
        id="pageInLoader"
        className={`min-h-screen bg-neutral-900 transition-all text-white fixed top-0 left-0 right-0  flex items-center justify-center z-[9999999] overflow-hidden ease-in-out cursor-progress`}
      >
        <div
          id="loading"
          className="loading-text text-2xl md:text-4xl lg:text-7xl font-extralight opacity-0"
        >
          {mounted ? lastWord?.toUpperCase() || "HOME" : "Given's Portfolio"}
        </div>
        <span className="sr-only">loading</span>
      </div>
      <div
        id="pageOutLoader"
        className={`min-h-screen rounded-t-full bg-neutral-900 transition-all text-white fixed top-full left-0 right-0  flex items-center justify-center z-[9999999] overflow-hidden cursor-wait ease-in-out`}
      >
        <span className="sr-only">Page out</span>
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main
            id="container"
            className="flex min-h-screen w-full flex-col items-center relative"
          >
            {children}
          </main>
          <FooterContainer />
          <Toaster />
        </div>
      </div>
    </>
  );
}
