"use client";

import { Work } from "@/services/works.service";
import { MainWorksListEffect } from "@/utils/lib/gsap";
import { scrollOffsetYState } from "@/utils/lib/recoil/atom";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

type Props = {
  works: Work[];
};

export default function WorksAnimationContainer({ works }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollY = useRecoilValue(scrollOffsetYState);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const containerTop = container.offsetTop;

    MainWorksListEffect(".box1", containerTop, scrollY, true);
    MainWorksListEffect(".box2", containerTop, scrollY, false);
  }, [scrollY]);

  const UPPER_WORKS = works.slice(0, 4);
  const UNDER_WORKS = works.slice(4, 8);

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-w-full pt-10 lg:pt-[100px] "
      >
        <div className="hidden lg:flex flex-col">
          <ul className="box1 flex -left-[500px] relative ">
            {UPPER_WORKS.map((work) => (
              <li
                key={`upper-${work.path}`}
                className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]"
              >
                <div className="w-full h-full bg-gradient-to-t from-lightBagieGray flex items-center justify-center px-10">
                  <Image
                    className="object-cover max-w-full block"
                    src={`/assets/images/works/${work.path}.png`}
                    alt={`${work.path}`}
                    width={1600}
                    height={720}
                  />
                </div>
              </li>
            ))}
          </ul>
          <ul className="box2 flex left-[500px] relative  pb-20 lg:pb-[100px] z-20">
            {UNDER_WORKS.map((work) => (
              <li
                key={`under-${work.path}`}
                className="px-[30px] py-5 w-[576px] min-w-[26.875%] h-[400px]"
              >
                <div className="w-full h-full bg-gradient-to-t from-lightBagieGray flex items-center justify-center px-10">
                  <Image
                    className="object-cover max-w-full block"
                    src={`/assets/images/works/${work.path}.png`}
                    alt={`${work.path}`}
                    width={1600}
                    height={720}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
