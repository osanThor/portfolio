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

const setTextWithSpan = (element: HTMLElement, text: string) => {
  element.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
};

export const animatePageIn = (mounted: boolean, onMount: () => void) => {
  const pageInLoader = document.getElementById("pageInLoader");
  const container = document.getElementById("container");
  const loading = document.getElementById("loading");

  if (pageInLoader && loading) {
    setTextWithSpan(loading, loading.textContent || "HOME");
    gsap
      .timeline()
      .set(Array.from(loading.children), { opacity: 0, duration: 0 })
      .set(pageInLoader, {
        y: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        duration: 0,
      })
      .to(loading, { opacity: 1 })
      .to(Array.from(loading.children), {
        opacity: 1,
        stagger: mounted ? 0.03 : 0.15,
      })
      .to(pageInLoader, {
        y: "-100%",
        duration: 0.7,
        borderBottomRightRadius: "100% 100%",
        borderBottomLeftRadius: "100% 100%",
        ease: "Power4.easeInOut",
      })
      .call(() => {
        window.scrollTo({ top: 0 });
        if (!mounted) onMount();
      });
  }

  if (container) {
    gsap
      .timeline()
      .set(container, { paddingTop: "80vh", duration: 0 })
      .to(container, {
        paddingTop: 0,
        delay: mounted ? 1.1 : 3.3,
        duration: 0.7,
        ease: "Power4.easeInOut",
      });
  }
};

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  options?: NavigateOptions | undefined
) => {
  const pageOutLoader = document.getElementById("pageOutLoader");
  if (pageOutLoader) {
    gsap.timeline().to(pageOutLoader, {
      top: 0,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      ease: "Power4.easeInOut",
      duration: 0.7,
      onComplete: () => router.push(href, options),
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

export const headerSideMenuEffect = () => {
  const menu = document.getElementById("sideMenu");
  if (menu) {
    const tl = gsap.timeline();
  }
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

export const mainWorksSlideEffect = (target: HTMLElement, toLeft: boolean) => {
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
