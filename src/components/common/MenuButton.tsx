"use client";
import Magnetic from "@/components/common/Magnetic";
import { useState } from "react";

type Props = {
  onClick: () => void;
  isTop: boolean;
  menuOpen: boolean;
};

export default function MenuButton({ onClick, isTop, menuOpen }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const [topPos, setTopPos] = useState<number>(100);
  function handleOver() {
    setHover(true);
    setTopPos(100);
    setTopPos(0);
  }
  function handleOut() {
    setTopPos(-100);
    setTimeout(() => {
      setHover(false);
      setTopPos(100);
    }, 200);
  }

  return (
    <Magnetic>
      <button
        onClick={onClick}
        className={`fixed overflow-hidden rounded-full bg-black/70 text-white backdrop-blur-sm transition-all ease-linear ${
          !isTop || menuOpen
            ? "w-10 h-10 md:w-20 md:h-20 right-4 lg:right-10 top-4 lg:top-10 "
            : "w-0 h-0 right-4 top-4 md:top-[80px] md:right-[80px] scale-0 opacity-0"
        }`}
        onMouseOver={handleOver}
        onMouseOut={handleOut}
      >
        <span
          className={`${
            hover ? "ease-in transition-all" : ""
          } top-[120%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] absolute overflow-hidden rounded-full bg-blue pointer-events-none`}
          style={{
            top: `${topPos}%`,
          }}
        />
        <svg
          className={`relative pointer-events-none ham hamRotate ham1 w-10 h-10 md:w-20 md:h-20 ${
            menuOpen ? "active" : ""
          }`}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>
    </Magnetic>
  );
}
