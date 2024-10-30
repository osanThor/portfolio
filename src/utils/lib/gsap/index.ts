import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer, useGSAP);

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

  gsap.from(target, {
    y: "100%",
    opacity: 0,
    duration: 5,
    ease: "power1.out",
    stagger: 0.1,

    // scrollTrigger: {
    //   trigger: "#mainAbout",
    //   start: "top center",
    //   markers: true,
    // },
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
    x: e.x,
    y: e.y,
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
