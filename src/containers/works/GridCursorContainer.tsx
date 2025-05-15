"use client";

import { useWorksStore } from "@/stores/works";
import { handleFollowBox, setFollowBox } from "@/utils/lib/gsap";
import { useEffect } from "react";

const FollowBox = ".gridWorkCursor";

export default function GridCursorContainer() {
  const isHover = useWorksStore((state) => state.isHover);

  useEffect(() => {
    setFollowBox(FollowBox);

    function handleMouseMove(e: MouseEvent) {
      handleFollowBox(FollowBox, isHover, e);
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHover]);

  return (
    <div className="gridWorkCursor z-20 pointer-events-none fixed hidden lg:flex items-center justify-center bg-black text-white rounded-full w-36 h-36">
      Detail
    </div>
  );
}
