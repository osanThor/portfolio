"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {
  children: React.FunctionComponentElement<{
    ref?: React.MutableRefObject<HTMLElement | null>;
  }>;
};

export default function Magnetic({ children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    function mousemove(e: MouseEvent) {
      const { clientX, clientY } = e;
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const { width, height, left, top } = rect;
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x);
        yTo(y);
      }
    }

    function mouseleave() {
      xTo(0);
      yTo(0);
    }

    if (ref.current) {
      ref.current.addEventListener("mousemove", mousemove);
      ref.current.addEventListener("mouseleave", mouseleave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("mousemove", mousemove);
        ref.current.removeEventListener("mouseleave", mouseleave);
      }
    };
  }, []);

  return React.cloneElement(children, { ref });
}
