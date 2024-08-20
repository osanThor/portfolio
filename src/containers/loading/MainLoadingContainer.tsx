"use client";

import { mountedState } from "@/utils/lib/recoil/atom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function MainLoadingContainer() {
  const [mounted, setMounted] = useRecoilState(mountedState);
  useEffect(() => {
    if (mounted) return;
    setTimeout(() => {
      window.scrollTo(0, 0);
      setMounted(true);
    }, 1500);
  }, []);

  return (
    <>
      <div
        className={`${
          mounted ? "bottom-full duration-1000" : "bottom-0 duration-0"
        } bg-darkIndigo transition-all text-white fixed top-0 left-0 right-0  flex items-center justify-center z-[9999999] overflow-hidden cursor-wait ease-in-out`}
      >
        <div
          id="load"
          className={`${
            mounted ? " opacity-0" : "opacity-1"
          } transition-all ease-out`}
        >
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-700 ease-out ${
          mounted ? "h-0" : "h-screen"
        }`}
      >
        <span className="sr-only">loading spacer</span>
      </div>
    </>
  );
}
