"use client";

import LinkButton from "@/components/common/LinkButton";
import BlogIcon from "@/components/ui/icons/BlogIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import InstagramIcon from "@/components/ui/icons/InstagramIcon";
import { mainContactEffect } from "@/utils/lib/gsap";
import { gsapTriggerState } from "@/utils/lib/recoil/atom";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

export default function MainContactContainer() {
  const containerRef = useRef<HTMLElement>(null);
  const gsapRef = useRef<HTMLDivElement>(null);
  const gsapTrigger = useRecoilValue(gsapTriggerState);
  const [localMounted, setLocalMounted] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLocalMounted(true);
    }, 2200);
  }, []);

  useGSAP(
    () => {
      gsapRef.current && mainContactEffect(gsapRef.current);
    },
    { scope: containerRef, dependencies: [localMounted, gsapTrigger] }
  );
  return (
    <section
      ref={containerRef}
      className="w-full min-h-[calc(100vh-40px)] bg-darkIndigo flex flex-col items-center justify-center z-[5] "
    >
      {localMounted && (
        <div
          ref={gsapRef}
          className=" -translate-y-full w-[calc(100%-32px)] lg:w-[calc(100%-80px)] max-w-[1400px] flex gap-10 justify-between items-center flex-col md:flex-row z-auto"
        >
          <div className="flex w-full flex-1 flex-col items-start gap-20 border-b md:border-b-0 pb-5 md:border-r border-gray">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
                <div className="w-20 h-20 md:w-[120px] md:h-[120px] min-w-20 min-h-20 md:min-w-[120px] md:min-h-[120px] relative rounded-full bg-white">
                  <Image
                    src={"/assets/images/profile.png"}
                    alt="my emozi"
                    className="object-cover"
                    fill
                    sizes={"100"}
                  />
                </div>
                <div className="w-full flex flex-col gap-5 md:gap-10">
                  <div className=" transition-all break-keep text-3xl md:text-4xl lg:text-5xl font-[700] text-white">
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
          <div className="py-10 w-full md:w-auto min-w-[240px] flex flex-col gap-20">
            <ul className="relative w-full flex flex-col gap-4 before:content-['Contact_Detail'] before:absolute before:bottom-[120%] before:text-gray before:text-xs">
              <li>
                <Link
                  href={"mailto:jadw15@naver.com"}
                  scroll={false}
                  className="text-white hover:text-gray transition-all"
                >
                  jadw15@naver.com
                </Link>
              </li>
              <li>
                <Link
                  href={"tel:+821076303515"}
                  scroll={false}
                  className="text-white hover:text-gray transition-all"
                >
                  +82 10 7630 3515
                </Link>
              </li>
            </ul>
            <ul className="relative w-full hidden md:flex flex-col gap-4 before:content-['Social'] before:absolute before:bottom-[120%] before:text-gray before:text-xs">
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://github.com/osanThor"}
                  target="_blank"
                >
                  <GithubIcon />
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://velog.io/@given/"}
                  target="_blank"
                >
                  <BlogIcon />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://www.instagram.com/given_015/"}
                  target="_blank"
                >
                  <InstagramIcon />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
