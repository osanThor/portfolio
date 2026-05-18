"use client";

import ContactSidebar from "@/components/contact/ContactSidebar";
import LinkButton from "@/components/common/LinkButton";
import { useDelayedReveal } from "@/hooks/useDelayedReveal";
import { useGsapStore } from "@/stores/gsap";
import { mainContactEffect } from "@/utils/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";

export default function MainContactContainer() {
  const containerRef = useRef<HTMLElement>(null);
  const gsapRef = useRef<HTMLDivElement>(null);
  const gsapTrigger = useGsapStore((state) => state.gsapTrigger);
  const isRevealed = useDelayedReveal();

  useGSAP(
    () => {
      if (gsapRef.current) mainContactEffect(gsapRef.current);
    },
    { scope: containerRef, dependencies: [isRevealed, gsapTrigger] }
  );

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[calc(100vh-40px)] bg-darkIndigo flex flex-col items-center justify-center z-[5]"
    >
      {isRevealed && (
        <div
          ref={gsapRef}
          className="-translate-y-full w-[calc(100%-32px)] lg:w-[calc(100%-80px)] max-w-[1400px] flex gap-10 justify-between items-center flex-col md:flex-row z-auto"
        >
          <div className="flex w-full flex-1 flex-col items-start gap-20 border-b md:border-b-0 pb-5 md:border-r border-gray">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] min-w-20 min-h-20 md:min-w-[120px] md:min-h-[120px] relative rounded-full bg-white">
                  <Image
                    src="/assets/images/profile.png"
                    alt="profile"
                    className="object-cover"
                    fill
                    sizes="100"
                  />
                </div>
                <div className="w-full flex flex-col gap-5 md:gap-10">
                  <div className="transition-all break-keep text-3xl md:text-4xl lg:text-5xl font-[700] text-white">
                    저에게 관심이 생기셨나요?
                  </div>
                  <div className="transition-all break-keep text-3xl md:text-4xl lg:text-5xl font-[700] text-white">
                    지금 바로 연락주세요!
                  </div>
                </div>
              </div>
            </div>
            <LinkButton text="Contact Me" href="/contact" />
          </div>
          <ContactSidebar showSocialOnMobile={false} />
        </div>
      )}
    </section>
  );
}
