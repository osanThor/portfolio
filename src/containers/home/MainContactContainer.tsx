"use client";

import LinkButton from "@/components/common/LinkButton";
import BlogIcon from "@/components/common/ui/icons/BlogIcon";
import GithubIcon from "@/components/common/ui/icons/GithubIcon";
import InstagramIcon from "@/components/common/ui/icons/InstagramIcon";
import Image from "next/image";
import Link from "next/link";

export default function MainContactContainer() {
  return (
    <section className="w-full min-h-[calc(100vh-40px)] bg-darkIndigo py-[120px] flex flex-col items-center justify-center">
      <div className="w-[calc(100%-32px)] max-w-[1600px] flex gap-10 justify-between items-center flex-col md:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-20 border-b md:border-b-0 pb-5 md:border-r border-gray">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5 md:gap-10 items-center">
              <div className="w-20 h-20 md:w-[120px] md:h-[120px] relative rounded-full bg-white">
                <Image
                  src={"/assets/images/profile.png"}
                  alt="my emozi"
                  className="object-cover"
                  fill
                  sizes={"100"}
                />
              </div>
              <div className=" transition-all text-4xl md:text-5xl lg:text-6xl font-[700] text-white">
                안녕하세요.
              </div>
            </div>
            <div className="transition-all text-3xl md:text-4xl lg:text-5xl font-[700] text-white">
              같이 일하고 싶습니다~!
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
                href={"https://blog.given-log.com/"}
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
    </section>
  );
}
