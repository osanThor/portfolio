"use client";

import { handleFollowBox, setFollowBox } from "@/utils/lib/gsap";
import { useEffect } from "react";

export function useFollowCursor(selector: string, isHover: boolean) {
  useEffect(() => {
    setFollowBox(selector);

    function handleMouseMove(e: MouseEvent) {
      handleFollowBox(selector, isHover, e);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [selector, isHover]);
}
