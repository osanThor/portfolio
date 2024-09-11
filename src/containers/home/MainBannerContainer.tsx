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
    <section className="w-full h-[110vh] bg-[#8DA2B2] relative bg-gradient-animation max-w-[100vw]">
      <Image
        className="absolute object-contain bottom-0 transition-all left-0 sm:left-[4%] lg:left-[8.72%] max-w-full max-h-[80vh] min-[435px]:max-h-[90%]"
        src={"/assets/images/home/me.png"}
        alt="it's me"
        width={600}
        height={910}
        style={{ width: 600, height: "auto" }}
        priority={true}
      />
      <div
        id="intro"
        className="text-lg min-[435px]:text-2xl md:text-[30px] leading-8 min-[435px]:leading-[50px] text-white absolute top-[12%] min-[435px]:top-auto bottom-auto min-[435px]:bottom-1/2 left-[5%] sm:left-1/2 break-keep transition-all"
      >
        <span className="copy">안녕하세요.</span>
        <br />
        <span className="copy">프론트엔드 개발자 이준영입니다.</span>
        <br />
        <span className="copy">
          이 사이트는 Next/tailwind 등으로 만들어졌습니다.
        </span>
      </div>
      <MainAnimationText />
    </section>
  );
}
