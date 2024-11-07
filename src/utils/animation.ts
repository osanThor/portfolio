import gsap from "gsap";
import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

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
}
