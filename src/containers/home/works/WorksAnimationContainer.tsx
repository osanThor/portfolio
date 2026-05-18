"use client";

import { Work } from "@/services/works.service";
import { useDelayedReveal } from "@/hooks/useDelayedReveal";
import { mainWorksSlideEffect } from "@/utils/lib/gsap";
import { getWorkThumbnailSrc } from "@/utils/work";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  works: Work[];
};

export default function WorksAnimationContainer({ works }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const movingBox1Ref = useRef<HTMLUListElement>(null);
  const movingBox2Ref = useRef<HTMLUListElement>(null);

  const isRevealed = useDelayedReveal();

  useGSAP(
    () => {
      if (movingBox1Ref.current) mainWorksSlideEffect(movingBox1Ref.current, true);
      if (movingBox2Ref.current) mainWorksSlideEffect(movingBox2Ref.current, false);
    },
    { scope: containerRef, dependencies: [isRevealed] }
  );

  const UPPER_WORKS = works.slice(0, 4);
  const UNDER_WORKS = works.slice(4, 8);

  return (
    <>
      <div
        ref={containerRef}
        className="relative min-w-full max-w-[100vw] py-10 lg:py-[100px] "
      >
        {isRevealed && (
          <div className="flex flex-col">
            <ul
              ref={movingBox1Ref}
              className="box1 flex left-[100px] relative z-20"
            >
              {UPPER_WORKS.map((work) => (
                <WorkItem key={`upper-${work.path}`} work={work} />
              ))}
            </ul>
            <ul
              ref={movingBox2Ref}
              className="box2 flex -left-[100px] relative z-20"
            >
              {UNDER_WORKS.map((work) => (
                <WorkItem key={`under-${work.path}`} work={work} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

type ItemProps = {
  work: Work;
};

function WorkItem({ work }: ItemProps) {
  return (
    <li className="px-2 lg:px-4 py-2 lg:py-4 w-full min-w-[50vw] md:min-w-[36vw] lg:min-w-[32vw]">
      <div className="w-full h-full bg-gradient-to-t from-lightBagieGray flex items-center justify-center p-2 md:p-5 lg:p-10">
        <Image
          className="object-cover max-w-full block"
          src={getWorkThumbnailSrc(work.path)}
          alt={`${work.path}`}
          width={1600}
          height={720}
        />
      </div>
    </li>
  );
}
