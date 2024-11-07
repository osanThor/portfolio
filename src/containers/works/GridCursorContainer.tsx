"use client";

import Animate from "@/utils/lib/gsap";
import { itemHoverState } from "@/utils/lib/recoil/atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

const FollowBox = ".gridWorkCursor";

export default function GridCursorContainer() {
  const hover = useRecoilValue(itemHoverState);

  useEffect(() => {
    const { setFollowBox, handleFollowBox } = new Animate();
    setFollowBox(FollowBox);

    function handleMouseMove(e: MouseEvent) {
      handleFollowBox(FollowBox, hover, e);
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hover]);

  return (
    <div className="gridWorkCursor z-20 pointer-events-none fixed hidden lg:flex items-center justify-center bg-black text-white rounded-full w-36 h-36">
      Detail
    </div>
  );
}
