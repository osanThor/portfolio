"use client";

import { useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

type Props = {
  hover: boolean;
  hoverIdx: number;
  imageUrls: string[];
};

export default function ListCursorContainer({
  hover,
  hoverIdx,
  imageUrls,
}: Props) {
  useEffect(() => {
    const FollowBox = ".listWorkCursor";
    gsap.set(FollowBox, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
    function handleFollow(e: MouseEvent) {
      gsap.to(FollowBox, {
        duration: 0.2,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        stagger: 0.15,
        ease: "none",
      });

      let TL = gsap.timeline({
        defaults: { duration: 0.5, ease: "none" },
      });
      hover
        ? TL.to(FollowBox, {
            scale: 1,
            overwrite: "auto",
            stagger: { amount: 0.15, from: "start", ease: "none" },
          })
        : TL.to(FollowBox, {
            duration: 0.1,
            scale: 0,
            overwrite: "auto",
            stagger: { amount: 0.15, from: "end", ease: "none" },
          });
    }
    window.addEventListener("mousemove", handleFollow);

    return () => window.removeEventListener("mousemove", handleFollow);
  }, [hover]);
  console.log(hoverIdx);

  return (
    <div className="listWorkCursor z-20 pointer-events-none fixed shadow-md top-0 left-0 hidden lg:flex items-center justify-center bg-gradient-to-t from-gray to-darkIndigo w-[420px] h-[420px] max:w-[420px] max:h-[420px] overflow-hidden">
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
