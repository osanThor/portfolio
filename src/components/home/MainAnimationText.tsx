import { scrollOffsetYState } from "@/utils/lib/recoil/atom";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Observer } from "gsap/Observer";

export default function MainAnimationText() {
  const offsetY = useRecoilValue(scrollOffsetYState);
  const [scrollDirection, setScrollDirection] = useState<"upper" | "down">(
    "upper"
  );

  useGSAP(() => {
    Observer.create({
      target: "#wrap", // can be any element (selector text is fine)
      type: "wheel,touch, scroll", // comma-delimited list of what to listen for
      onUp: () => setScrollDirection("upper"),
      onDown: () => setScrollDirection("down"),
    });
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
  useEffect(() => {
    console.log("Y", offsetY);
  }, [offsetY]);

  return (
    <div className="overflow-hidden whitespace-nowrap absolute bottom-[15vh] sm:bottom-[10vh] flex">
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
