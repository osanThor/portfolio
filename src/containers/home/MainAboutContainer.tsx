"use client";

import CommonTitle from "@/components/common/CommonTitle";
import LinkButton from "@/components/common/LinkButton";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { mountedState } from "@/utils/lib/recoil/atom";
import { MainAboutTextTimeline } from "@/utils/lib/gsap";

export default function MainAboutContainer() {
  const containerRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const [localMounted, setLocalMounted] = useState<boolean>(false);
  const mounted = useRecoilValue(mountedState);

  useEffect(() => {
    if (!mounted) return setLocalMounted(false);
    setTimeout(() => {
      setLocalMounted(true);
    }, 1100);
  }, [mounted]);

  // useGSAP(
  //   () => {
  //     if (!aboutTextRef.current || !mounted) return;
  //     const aboutText = aboutTextRef.current;
  //     const aboutTextCld = aboutText.childNodes;
  //     aboutTextCld.forEach((el, idx) => {
  //       MainAboutTextTimeline(el, idx);
  //     });
  //   },
  //   { scope: aboutTextRef, dependencies: [localMounted] }
  // );

  return (
    <section
      ref={containerRef}
      className="w-[calc(100%-32px)] mx-auto max-w-[1600px] flex flex-col items-center bg-white"
    >
      <div className="w-full flex flex-col lg:flex-row gap-[60px] py-20 lg:py-[150px] ">
        <div className="flex-1 flex flex-col order-2 lg:order-1 items-center lg:items-start justify-between gap-10">
          <div className="flex-1 w-full flex flex-col items-start">
            <CommonTitle text="About me" />
            {localMounted && (
              <p
                ref={aboutTextRef}
                className="lg:text-lg lg:leading-9 break-keep relative"
              >
                <span className="">저는 프론트엔드 개발자 이준영입니다.</span>
                <br />
                <span className="">
                  편안한 UI와 흥미로운 UX에 대한 관심과 열정을 가지고 있으며,
                  끊임없이 고민하고 경험하며 발전하고 있습니다.
                </span>
                <br />
                <span className="">
                  Javascript를 이용한 클라이언트 구축을 주로 하며, 필요에 따라
                  기획과 디자인도 가능합니다.
                </span>
                <br />
                <span className="">
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
        />
      </div>
    </section>
  );
}
