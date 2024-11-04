"use client";
import Link from "next/link";
import ArrowBottom from "../ui/icons/ArrowBottom";
import { useState } from "react";
import Magnetic from "./Magnetic";

type Props = {
  href?: string;
  text?: string;
};

export default function LinkButton({
  href = "/",
  text = "More Detail",
}: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const [rightPos, setRightPos] = useState<number>(100);
  function handleOver() {
    setHover(true);
    setRightPos(100);
    setRightPos(0);
  }
  function handleOut() {
    setRightPos(-100);
    setTimeout(() => {
      setHover(false);
      setRightPos(100);
    }, 200);
  }

  return (
    <Magnetic>
      <Link
        scroll={false}
        href={href}
        className="relative overflow-hidden border group border-gray lg:text-2xl px-5 py-4 flex items-center gap-4 text-gray fill-gray before:w-0 before:absolute before:h-full before:transition-all hover:text-white hover:fill-white"
        onMouseOver={handleOver}
        onMouseOut={handleOut}
      >
        <span
          className={`${
            hover ? "ease-in transition-all rounded-none" : "rounded-full"
          } right-full top-0 w-full h-full absolute overflow-hidden bg-gray pointer-events-none`}
          style={{
            right: `${rightPos}%`,
          }}
        />
        <span className="relative pointer-events-none transition-all rounded-none">
          {text}
        </span>
        <span className="relative pointer-events-none transition-all rounded-none">
          <ArrowBottom />
        </span>
      </Link>
    </Magnetic>
  );
}
