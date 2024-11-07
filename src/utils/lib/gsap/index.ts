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

export default class Animate {
  animatePageIn() {
    const pageInLoader = document.getElementById("pageInLoader");
    const container = document.getElementById("container");
    if (pageInLoader && container) {
      const tl = gsap.timeline();
      const tl2 = gsap.timeline();
      tl.set(pageInLoader, {
        y: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      }).to(pageInLoader, {
        y: "-100%",
        delay: 1,
        duration: 0.4,
        borderBottomRightRadius: "50%",
        borderBottomLeftRadius: "50%",
        ease: "power3.out",
      });

      tl2
        .set(container, {
          paddingTop: "80vh",
        })
        .to(container, {
          paddingTop: 0,
          delay: 0.8,
          duration: 0.73,
        });
    }
  }

  animatePageOut(
    href: string,
    router: AppRouterInstance,
    options?: NavigateOptions | undefined
  ) {
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
  }

  magnetic(ref: React.MutableRefObject<HTMLElement | null>) {
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
  }

  mainBannerFromTo(element: HTMLElement | string) {
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
  }

  MainAboutTextTimeline(el: ChildNode, idx: number) {
    const target = el as gsap.DOMTarget | undefined;
    if (!target) return;

    gsap.to(target, {
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
      delay: idx,
    });
  }

  MainWorksListEffect(
    target: string,
    containerTop: number,
    scrollY: number,
    toLeft: boolean
  ) {
    gsap.to(target, {
      x: toLeft
        ? -(containerTop - 500 - scrollY)
        : containerTop - 500 - scrollY,
    });
  }

  RoundBoxEffect(target: gsap.TweenTarget): gsap.core.Tween {
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
  }

  setFollowBox(selector: string) {
    gsap.set(selector, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });
  }

  handleFollowBox(selector: string, hover: boolean, e: MouseEvent) {
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
  }
}
