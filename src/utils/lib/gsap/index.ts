import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Observer } from "gsap/Observer";
import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

gsap.registerPlugin(ScrollTrigger, TextPlugin, Observer, useGSAP);

export const animatePageIn = (mounted: boolean, onMount: () => void) => {
  const pageInLoader = document.getElementById("pageInLoader");
  const container = document.getElementById("container");
  const loading = document.getElementById("loading");
  if (pageInLoader && container && loading) {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();
    loading.innerHTML =
      loading.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") ||
      "HOME";

    tl.set(Array.from(loading.children), {
      opacity: 0,
    })
      .set(pageInLoader, {
        y: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      })
      .to(loading, {
        opacity: 1,
      })
      .to(Array.from(loading.children), {
        opacity: 1,
        stagger: 0.03,
      })
      .to(pageInLoader, {
        y: "-100%",
        delay: 0.7,
        duration: 0.4,
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        ease: "power3.out",
      })
      .call(function () {
        window.scrollTo({ top: 0 });
        !mounted && onMount();
      });

    tl2
      .set(container, {
        paddingTop: "80vh",
      })
      .to(container, {
        paddingTop: 0,
        delay: !mounted ? 2 : 1.77,
        duration: 0.7,
        ease: "power3.out",
      });
  }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  options?: NavigateOptions | undefined
) => {
  const pageOutLoader = document.getElementById("pageOutLoader");
  const container = document.getElementById("container");
  if (pageOutLoader && container) {
    const tl = gsap.timeline();
    tl.set(pageOutLoader, {
      top: "100%",
      borderTopRightRadius: "100% 100%",
      borderTopLeftRadius: "100% 100%",
    }).to(pageOutLoader, {
      top: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      ease: "power3.out",
      onComplete: () => {
        setTimeout(() => {
          router.push(href, options);
        }, 500);
      },
    });
  }
};

export const magnetic = (ref: React.MutableRefObject<HTMLElement | null>) => {
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
};

export const mainBannerFromTo = (element: HTMLElement | string) => {
  gsap.fromTo(
    element,
    {
      x: 50,
      opacity: 0,
    },
    {
      delay: 1,
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

export const mainAboutTextTimeline = (target: HTMLElement) => {
  const tl = gsap.timeline();

  tl.set(Array.from(target.children), {}).to(Array.from(target.children), {
    scrollTrigger: {
      trigger: target,
      start: "top 95%",
      end: "top 80%",
      scrub: 2,
      // markers: true,
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 1,
  });
};

export const mainWorksSlideEffect = (target: string, toLeft: boolean) => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target as gsap.DOMTarget | undefined,
      scrub: 2,
      start: "top 100%",
      end: "bottom 0",
    },
    left: toLeft ? -100 : 0,
    duration: 5,
  });
};
export const mainContactEffect = (target: HTMLElement) => {
  gsap.to(target, {
    scrollTrigger: {
      trigger: target as gsap.DOMTarget | undefined,
      scrub: 2,
      start: "top 100%",
      end: "center 0",
      // markers: true,
    },
    y: 0,
    duration: 5,
  });
};

export const roundBoxEffect = (target: gsap.TweenTarget): gsap.core.Tween => {
  return gsap.to(target, {
    scrollTrigger: {
      trigger: target as gsap.DOMTarget | undefined,
      scrub: 2,
      start: "top 90%",
      end: "top 10%",
    },
    width: "100%",
    height: 0,
    duration: 3,
    borderBottomRightRadius: "50%",
    borderBottomLeftRadius: "50%",
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
  const tl = gsap.timeline({
    defaults: { duration: 0.5, ease: "none" },
  });

  if (hover) {
    tl.to(selector, {
      scale: 1,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "start", ease: "none" },
    });
  } else {
    tl.to(selector, {
      duration: 0.1,
      scale: 0,
      overwrite: "auto",
      stagger: { amount: 0.15, from: "end", ease: "none" },
    });
  }
};
