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

  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      start: "top 95%",
      end: "top 80%",
      scrub: 2,
    },
    y: 0,
    opacity: 1,
    duration: 1,
    delay: idx,
  });
};

// textSpliter
// var textWrapper = document.querySelector('#heroTextAnim');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

export const MainWorksListEffect = (
  target: string,
  containerTop: number,
  scrollY: number,
  toLeft: boolean
) => {
  gsap.to(target, {
    x: toLeft ? -(containerTop - 500 - scrollY) : containerTop - 500 - scrollY,
  });
};

export const RoundBoxEffect = (target: gsap.TweenTarget) => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target as gsap.DOMTarget | undefined,
      scrub: 2,
      start: "top 70%",
      end: "top 10%",
    },
    height: 0,
    duration: 3,
    borderBottomRightRadius: "100%",
    borderBottomLeftRadius: "100%",
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
  const TL = gsap.timeline({
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
