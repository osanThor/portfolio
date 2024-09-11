import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const mainBannerFromTo = (element: HTMLElement | string) => {
  gsap.fromTo(
    element,
    {
      x: 50,
      opacity: 0,
    },
    {
      delay: 0,
      duration: 2,
      x: 0,
      opacity: 1,
      stagger: {
        from: "start",
        amount: 0.7,
      },
    }
  );
};

export const MainAboutTextTimeline = (el: ChildNode, idx: number) => {
  const target = el as gsap.DOMTarget | undefined;
  if (!target) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "0 bottom", // 애니메이션 시작시점
      end: "500% bottom",
      scrub: 5,
    },
  });

  tl.from(target, {
    x: 200,
    opacity: 0,
    duration: 2,
    delay: `1.${idx + 1}`,
  });
};

export const MainWordsListEffect = (
  target: string,
  containerTop: number,
  scrollY: number,
  toLeft: boolean
) => {
  gsap.to(target, {
    x: toLeft ? -(containerTop - 400 - scrollY) : containerTop - 400 - scrollY,
  });
};

export const RoundBoxEffect = (roundHeigt: number) => {
  gsap.to(".roundBox", {
    height: roundHeigt > 150 ? 150 : roundHeigt < 0 ? 0 : roundHeigt,
    borderBottomRightRadius: "50% 100%",
    borderBottomLeftRadius: "50% 100%",
  });
};

export const setFollowBox = (selector: string) => {
  gsap.set(selector, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });
};

export const handleFollowBox = (
  selector: string,
  hover: boolean,
  e: MouseEvent
) => {
  gsap.to(selector, {
    duration: 0.2,
    overwrite: "auto",
    x: e.clientX,
    y: e.clientY,
    stagger: 0.15,
    ease: "none",
  });

  let TL = gsap.timeline({
    defaults: { duration: 0.5, ease: "none" },
  });

  if (hover) {
    TL.to(selector, {
      scale: 1,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
  } else {
    TL.to(selector, {
      duration: 0.1,
      scale: 0,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "end", ease: "none" },
    });
  }
};
