"use client";

import { useFollowCursor } from "@/hooks/useFollowCursor";
import { useWorksStore } from "@/stores/works";
import { getWorkThumbnailSrc } from "@/utils/work";
import Image from "next/image";

const FOLLOW_SELECTOR = ".listWorkCursor";

export default function ListCursorContainer() {
  const isHover = useWorksStore((state) => state.isHover);
  const worksImageList = useWorksStore((state) => state.worksImageList);
  const hoveredItemId = useWorksStore((state) => state.hoveredItemId);

  useFollowCursor(FOLLOW_SELECTOR, isHover);

  return (
    <div className="listWorkCursor z-20 pointer-events-none fixed shadow-md hidden lg:flex items-center justify-center bg-gradient-to-t from-gray to-darkIndigo w-[420px] h-[420px] max:w-[420px] max:h-[420px] overflow-hidden">
      <ul
        className="w-full h-full min-w-full min-h-full absolute top-0 left-0 flex flex-col transition-all ease-in duration-500"
        style={{ top: -hoveredItemId * 420 }}
      >
        {worksImageList.map((path) => (
          <li
            key={`list-cursor-${path}`}
            className="w-full h-full min-w-full min-h-full p-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                className="object-cover max-w-full block"
                src={getWorkThumbnailSrc(path)}
                alt={path}
                width={1600}
                height={720}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
