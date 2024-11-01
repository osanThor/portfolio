"use client";

import Image from "next/image";
import { useEffect } from "react";
import MainAnimationText from "@/components/home/MainAnimationText";
import { mainBannerFromTo } from "@/utils/lib/gsap";
import { mountedState } from "@/utils/lib/recoil/atom";
import { useRecoilValue } from "recoil";

export default function MainBannerContainer() {
  const mounted = useRecoilValue(mountedState);

  useEffect(() => {
    mounted && mainBannerFromTo("#intro .copy");
  }, [mounted]);

  return (
    <section className="w-full h-[120vh] sm:h-[110vh] bg-[#8DA2B2] relative bg-gradient-animation max-w-[100vw]">
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
        id="intro"
        className="text-lg min-[435px]:text-2xl md:text-[2.3vw] leading-8 md:leading-[3.2vw] lg:text-[1.5vw] lg:leading-[2.8vw] text-white absolute bottom-4 sm:bottom-1/2 left-[5%] sm:left-auto sm:right-[5%] break-keep transition-all"
      >
        <p className="copy">안녕하세요.</p>
        <p className="copy">프론트엔드 개발자 이준영입니다.</p>
        <p className="copy">이 사이트는 Next/tailwind 등으로 만들어졌습니다.</p>
      </div>
      <MainAnimationText />
    </section>
  );
}
