"use client";

import Animate from "@/utils/animation";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.FunctionComponentElement<{
    ref?: React.MutableRefObject<HTMLElement | null>;
  }>;
};

export default function Magnetic({ children }: Props) {
  const { magnetic } = new Animate();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    magnetic(ref);
  }, []);

  return React.cloneElement(children, { ref });
}
