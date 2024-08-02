"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WorksAnimationContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.offsetTop;
    const containerHeight = container.clientHeight;
    const roundHeigt = -(scrollY - (containerTop + containerHeight / 2));
    gsap.to(".box1", {
      x: -(containerTop - 400 - scrollY),
    });
    gsap.to(".box2", {
      x: containerTop - 400 - scrollY,
    });
    gsap.to(".roundBox", {
      height: roundHeigt > 250 ? 250 : roundHeigt < 0 ? 0 : roundHeigt,
      borderBottomRightRadius: "50% 100%",
      borderBottomLeftRadius: "50% 100%",
    });
  }, [scrollY]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-w-full pt-10 lg:pt-[100px] "
      >
        <div className="hidden lg:flex flex-col">
          <ul className="box1 flex -left-[500px] relative ">
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
          </ul>
          <ul className="box2 flex left-[500px] relative  pb-20 lg:pb-[100px] z-20">
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
            <li className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]">
              <div className="w-full h-full bg-[#F7E7DC]"></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full relative">
        <div className="roundBox w-[200%] left-1/2 -translate-x-1/2 z-10 bg-white absolute top-[calc(100%)] h-[150px] shadow-[0_20px_30px_-15px] shadow-gray"></div>
      </div>
    </>
  );
}
