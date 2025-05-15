"use client";

import Image from "next/image";
import MainAnimationText from "@/components/home/MainAnimationText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { mainBannerFromTo } from "@/utils/lib/gsap";
import { useRecoilValue } from "recoil";
import { useMountStore } from "@/stores/mount";

export default function MainBannerContainer() {
  const mounted = useMountStore((state) => state.mounted);

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      mainBannerFromTo("#intro .copy", mounted);
    },
    { scope: ref }
  );

  return (
    <section className="w-screen h-[120vh] sm:h-[110vh] bg-[#8DA2B2] relative bg-gradient-animation max-w-[100vw]">
      <Image
        className="absolute object-cover sm:object-contain bottom-0 transition-all left-0 max-w-full h-[110vh] sm:h-screen sm:max-h-[100vh] pointer-events-none"
        src={"/assets/images/home/me.png"}
        alt="it's me"
        width={600}
        height={910}
        style={{ width: "100vw" }}
        priority={true}
      />
      <div
        ref={ref}
        id="intro"
        className=" md:text-[2.3vw] leading-8 md:leading-[3.2vw] lg:text-[1.5vw] lg:leading-[2.8vw] text-white absolute bottom-8 sm:bottom-1/2 left-[5%] sm:left-auto sm:right-[5%] break-keep transition-all"
      >
        <p className="copy">안녕하세요.</p>
        <p className="copy">프론트엔드 개발자 이준영입니다.</p>
        <p className="copy">이 사이트는 Next/tailwind 등으로 만들어졌습니다.</p>
      </div>
      <MainAnimationText />
    </section>
  );
}
