"use client";

import CommonTitle from "@/components/common/CommonTitle";
import LinkButton from "@/components/common/LinkButton";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { mainAboutTextTimeline } from "@/utils/lib/gsap";
import { mountedState } from "@/utils/lib/recoil/atom";
import { useRecoilValue } from "recoil";

export default function MainAboutContainer() {
  const mounted = useRecoilValue(mountedState);
  const containerRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const [localMounted, setLocalMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(
      () => {
        setLocalMounted(true);
      },
      mounted ? 2200 : 2500
    );
  }, []);
  useGSAP(
    () => {
      if (!aboutTextRef.current) return;
      mainAboutTextTimeline(aboutTextRef.current);
    },
    { scope: aboutTextRef, dependencies: [localMounted] }
  );

  return (
    <section
      ref={containerRef}
      className="w-full mx-auto max-w-[1400px] flex flex-col items-center bg-white"
    >
      <div className="w-full flex flex-col lg:flex-row gap-[60px] py-20 lg:py-[150px] px-4 lg:px-10">
        <div className="flex-1 flex flex-col order-2 lg:order-1 items-center lg:items-start justify-between gap-10">
          <div className="flex-1 w-full flex flex-col items-start">
            <CommonTitle text="About me" />
            {localMounted && (
              <p
                id="mainAbout"
                ref={aboutTextRef}
                className="text-lg md:text-xl lg:text-2xl md:leading-9 lg:leading-10 break-keep relative"
              >
                <span className="intro block">
                  저는 프론트엔드 개발자 이준영입니다.
                </span>
                <span className="intro block">
                  편안한 UI와 흥미로운 UX에 대한 관심과 열정을 가지고 있으며,
                  끊임없이 고민하고 경험하며 발전하고 있습니다.
                </span>
                <span className="intro block">
                  도전을 두려워하지 않으며, 트렌드와 클린 코드에 관심을 기울여
                  매일 성장하는 개발자가 되겠습니다.
                </span>
              </p>
            )}
          </div>
          <LinkButton href="/about" />
        </div>
        <Image
          className="object-contain order-1 lg:order-2 w-full lg:w-[600px]"
          src={"/assets/images/home/me2.png"}
          alt="it's me"
          width={600}
          height={910}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
    </section>
  );
}
