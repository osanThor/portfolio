"use client";

import { handleFollowBox, setFollowBox } from "@/utils/lib/gsap";
import { useEffect } from "react";

type Props = {
  hover: boolean;
};
const FollowBox = ".gridWorkCursor";

export default function GridCursorContainer({ hover }: Props) {
  useEffect(() => {
    setFollowBox(FollowBox);

    function handleMouseMove(e: MouseEvent) {
      handleFollowBox(FollowBox, hover, e);
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hover]);

  return (
    <div className="gridWorkCursor z-20 pointer-events-none fixed top-0 left-0 hidden lg:flex items-center justify-center bg-black text-white rounded-full w-36 h-36">
      Detail
    </div>
  );
}
