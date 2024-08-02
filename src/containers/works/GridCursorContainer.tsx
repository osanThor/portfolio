"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

type Props = {
  hover: boolean;
};

export default function GridCursorContainer({ hover }: Props) {
  //** USE TIMELINE */
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
        duration: 0.5,
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

  //** USE TO */
  const cursorRef = useRef(null);
  //   const [mousePosition, mousePositionChange] = useState({
  //     clientX: 0,
  //     clientY: 0,
  //   });
  //   const cursorSize = 60;
  //   useEffect(() => {
  //     window.addEventListener("mousemove", (e) => {
  //       mousePositionChange({ clientX: e.clientX, clientY: e.clientY });
  //     });

  //     return () =>
  //       window.removeEventListener("mousemove", (e) => {
  //         mousePositionChange({ clientX: e.clientX, clientY: e.clientY });
  //       });
  //   }, []);

  //   useLayoutEffect(() => {
  //     let ctx1 = gsap.context(() => {
  //       gsap.to(cursorRef.current, {
  //         x: mousePosition.clientX - cursorSize / 2,
  //         y: mousePosition.clientY - cursorSize / 2,
  //         ease: "back.out(1.8)",
  //       });

  //       // console.log("Position Update");

  //       return () => ctx1.revert();
  //     });
  //   }, [mousePosition]);

  //   useLayoutEffect(() => {
  //     let ctx2 = gsap.context(() => {
  //       hover
  //         ? gsap.to(cursorRef.current, {
  //             height: cursorSize * 2,
  //             width: cursorSize * 2,
  //             duration: 0.05,
  //             scale: 1,
  //           })
  //         : gsap.to(cursorRef.current, {
  //             height: cursorSize,
  //             width: cursorSize,
  //             duration: 0.05,
  //             scale: 0,
  //           });

  //       console.log("Size Update");

  //       return () => ctx2.revert();
  //     });
  //   }, [hover]);

  return (
    <div
      className="gridWorkCursor z-20 pointer-events-none fixed top-0 left-0 hidden lg:flex items-center justify-center bg-black text-white rounded-full w-36 h-36"
      ref={cursorRef}
    >
      자세히 보기
    </div>
  );
}
