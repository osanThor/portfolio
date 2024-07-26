import { useState, useEffect } from "react";

export default function MainAnimationText() {
  const [scrollDirection, setScrollDirection] = useState<"upper" | "down">(
    "upper"
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("upper");
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  const [currentX, setCurrentX] = useState<number>(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentX((prevX) => {
        if (scrollDirection === "down") {
          return (prevX - 0.1 + 100) % 100; // 소수점 단위로 감소, 음수 방지
        } else {
          return (prevX + 0.1) % 100; // 소수점 단위로 증가
        }
      });
    }, 16); // 16ms마다 업데이트 (약 60fps)

    return () => clearInterval(interval);
  }, [scrollDirection]);

  return (
    <div className="overflow-hidden whitespace-nowrap absolute bottom-[10vh] flex">
      <span
        style={{ transform: `translateX(-${currentX}%)` }}
        className="text-[28.5vh] md:text-bn font-[900] text-white "
      >
        LEE JUN YOUNG
      </span>
      <span
        style={{ transform: `translateX(-${currentX}%)` }}
        className="text-[28.5vh] md:text-bn font-[900] text-white pl-[5.7vw]"
      >
        LEE JUN YOUNG
      </span>
    </div>
  );
}
