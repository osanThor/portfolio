import { useGSAP } from "@gsap/react";
import { useState, useEffect, useCallback } from "react";
import { Observer } from "gsap/Observer";

export default function MainAnimationText() {
  const [scrollDirection, setScrollDirection] = useState<"upper" | "down">(
    "upper"
  );

  const [currentX, setCurrentX] = useState<number>(100);
  const onUp = useCallback(() => setScrollDirection("upper"), []);
  const onDown = useCallback(() => setScrollDirection("down"), []);

  useGSAP(() => {
    Observer.create({
      target: "#container",
      type: "wheel,touch,scroll",
      onUp,
      onDown,
    });
  }, [onUp, onDown]);

  const updatePosition = useCallback(() => {
    setCurrentX((prevX) => {
      const speed = 0.1;
      return scrollDirection === "down"
        ? (prevX - speed + 100) % 100
        : (prevX + speed) % 100;
    });
  }, [scrollDirection]);

  useEffect(() => {
    const interval = setInterval(updatePosition, 16);
    return () => clearInterval(interval);
  }, [updatePosition]);

  return (
    <div className="w-screen max-w-screen overflow-hidden whitespace-nowrap absolute bottom-[15vh] sm:bottom-[10vh] flex">
      <span
        style={{ transform: `translateX(-${currentX}%)` }}
        className="text-[28.5vh] md:text-bn font-[900] text-white "
      >
        LEE JUN YOUNG
      </span>
      <span
        style={{ transform: `translateX(-${currentX}%)` }}
        className="text-[28.5vh] md:text-bn font-[900] text-white pl-[5.7vw] "
      >
        LEE JUN YOUNG
      </span>
    </div>
  );
}
