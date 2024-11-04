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
      trigger: target, // 스크롤이 트리거되는 요소
      start: "top 90%", // 트리거가 시작되는 위치 (뷰포트의 80% 지점에서 시작)
      end: "top 80%", // 트리거가 끝나는 위치 (뷰포트의 50% 지점에서 끝)
      scrub: true, // 스크롤에 따라 애니메이션이 조정되도록 설정
    },
    y: 0, // 텍스트가 위로 올라오면서 원래 위치에 위치하게 함
    opacity: 1, // 텍스트가 서서히 나타나도록 설정
    duration: 1, // 애니메이션 지속 시간
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
