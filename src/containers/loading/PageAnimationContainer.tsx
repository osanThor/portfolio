"use client";

import { localMountedState, mountedState } from "@/utils/lib/recoil/atom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function PageAnimationContainer() {
  const [mounted] = useRecoilState(mountedState);
  const [localMounted, setLocalMounted] = useRecoilState(localMountedState);

  useEffect(() => {
    if (!mounted) return setLocalMounted(false);
    setTimeout(() => {
      setLocalMounted(true);
    }, 1100);
  }, [mounted]);

  return (
    <div
      id="spacer"
      className={`w-full ease-in-out ${
        mounted ? "h-0 transition-all duration-300" : "h-[70vh]"
      }`}
    />
  );
}
