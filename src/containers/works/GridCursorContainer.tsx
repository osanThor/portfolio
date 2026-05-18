"use client";

import { useFollowCursor } from "@/hooks/useFollowCursor";
import { useWorksStore } from "@/stores/works";

const FOLLOW_SELECTOR = ".gridWorkCursor";

export default function GridCursorContainer() {
  const isHover = useWorksStore((state) => state.isHover);

  useFollowCursor(FOLLOW_SELECTOR, isHover);

  return (
    <div className="gridWorkCursor z-20 pointer-events-none fixed hidden lg:flex items-center justify-center bg-black text-white rounded-full w-36 h-36">
      Detail
    </div>
  );
}
