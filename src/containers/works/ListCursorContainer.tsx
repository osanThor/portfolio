"use client";

import { useEffect } from "react";
import gsap from "gsap";

type Props = {
  hover: boolean;
};

export default function ListCursorContainer({ hover }: Props) {
  useEffect(() => {
    const FollowBox = ".gridWorkCursor";
    gsap.set(FollowBox, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
    function handleFollow(e: MouseEvent) {
      console.table({
        x: e.clientX,
        y: e.clientY,
      });
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

  return (
    <div className="gridWorkCursor z-20 pointer-events-none fixed top-0 left-0 hidden lg:flex items-center justify-center bg-black text-white w-[420px] h-[420px] max:w-[420px] max:h-[420px] overflow-hidden p-10">
      Detail
    </div>
  );
}
