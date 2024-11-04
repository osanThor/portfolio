"use client";

import Link from "next/link";
import ArrowTop from "../ui/icons/ArrowTop";
import { useState } from "react";

type Props = {
  link: string;
};
export default function SiteLinkButton({ link }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const [topPos, setTopPos] = useState<number>(100);
  function handleOver() {
    setHover(true);
    setTopPos(100);
    setTopPos(0);
  }
  function handleOut() {
    setTopPos(-100);
    setTimeout(() => {
      setHover(false);
      setTopPos(100);
    }, 200);
  }

  return (
    <Link
      href={link}
      target="_blank"
      className="relative overflow-hidden w-[200px] h-[200px] md:w-[320px] md:h-[320px] bg-blue text-white rounded-full flex group justify-center items-center gap-4 md:text-xl transition-all "
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      <span
        className={`${
          hover ? "ease-in transition-all" : ""
        } top-full w-full h-full absolute overflow-hidden rounded-full bg-deepBlue pointer-events-none`}
        style={{
          top: `${topPos}%`,
        }}
      />
      <span className="relative pointer-events-none">사이트 바로가기</span>{" "}
      <span className="relative pointer-events-none">
        <ArrowTop />
      </span>
    </Link>
  );
}
