"use client";

import { useEffect } from "react";
import Image from "next/image";
import { handleFollowBox, setFollowBox } from "@/utils/lib/gsap";
import { useRecoilValue } from "recoil";
import {
  itemHoverIdState,
  itemHoverState,
  scrollOffsetYState,
  worksImageListState,
} from "@/utils/lib/recoil/atom";

const FollowBox = ".listWorkCursor";

export default function ListCursorContainer() {
  const imageUrls = useRecoilValue(worksImageListState);
  const hover = useRecoilValue(itemHoverState);
  const hoverIdx = useRecoilValue(itemHoverIdState);
  useEffect(() => {
    setFollowBox(FollowBox);
    function handleMouseMove(e: MouseEvent) {
      handleFollowBox(FollowBox, hover, e);
    }
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hover]);

  return (
    <div className="listWorkCursor z-20 pointer-events-none fixed shadow-md hidden lg:flex items-center justify-center bg-gradient-to-t from-gray to-darkIndigo w-[420px] h-[420px] max:w-[420px] max:h-[420px] overflow-hidden">
      <ul
        className="w-full h-full min-w-full min-h-full absolute top-0 left-0 flex flex-col transition-all ease-in duration-500"
        style={{ top: -hoverIdx * 420 }}
      >
        {imageUrls.map((url) => (
          <li
            key={`listCorsor-${url}`}
            className="w-full h-full min-w-full min-h-full p-4"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                className="object-cover max-w-full block "
                src={`/assets/images/works/${url}.png`}
                alt={`listCorsor-${url}`}
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
