"use client";
import Logo from "@/components/common/Logo";
import MENUS from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderContainer() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const themeDarkPathname = ["/", "/contact"];
  const [pathId, setPathId] = useState<number>(0);
  const [hoverId, setHoverId] = useState<number>(0);

  const [isTop, setIsTop] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (themeDarkPathname.includes(pathname)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    const menuIdx = MENUS.findIndex((menu) => menu.href === pathname);
    if (menuIdx < 0 && menuIdx !== 0) {
      setHoverId(0);
      setPathId(0);
    } else {
      setHoverId(menuIdx + 1);
      setPathId(menuIdx + 1);
    }
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathId) setHoverId(pathId);
  }, [menuOpen]);

  return (
    <>
      <header className=" absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-5 md:p-10 z-[999]">
        <Link
          href={"/"}
          className={`${
            theme === "dark" ? "fill-white text-white" : "fill-black text-black"
          }`}
          scroll={false}
        >
          <Logo />
        </Link>
        <nav
          className="relative group"
          onMouseOut={() => {
            if (pathId) return setHoverId(pathId);
          }}
        >
          <ul
            className={`gnb hidden md:flex items-center gap-10 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {MENUS.map((menu, idx) => (
              <li
                key={`headers-${menu.name}`}
                onMouseOver={() => {
                  setHoverId(idx + 1);
                }}
              >
                <Link
                  href={menu.href}
                  className={`${
                    theme === "dark" ? "after:bg-white " : "after:bg-black"
                  } relative min-w-[64px] flex items-center justify-center `}
                  scroll={false}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
          <span
            className={`${theme === "dark" ? "bg-white " : "bg-black"} ${
              hoverId === 1
                ? "left-[11%]"
                : hoverId === 2
                ? "left-[49%]"
                : hoverId === 3
                ? "left-[87%]"
                : ""
            } ${
              pathId ? "w-2 h-2" : "w-0 h-0"
            } group-hover:w-2 group-hover:h-2 absolute -bottom-[1rem] rounded-full transition-all ease-in-out hidden md:flex`}
          />
          <button
            onClick={() => setMenuOpen(true)}
            className={`flex pl-4 relative before:w-1 before:h-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full  md:hidden ${
              theme === "dark"
                ? "fill-white text-white before:bg-white"
                : "fill-black text-black before:bg-black"
            }`}
          >
            메뉴
          </button>
        </nav>
      </header>
      <div className="relative z-[9999]">
        <>
          {menuOpen && (
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`left-0 fixed top-0 bottom-0 right-0 bg-black/10 backdrop-blur-xs transition-all `}
            />
          )}
          <div
            className={`sideMenu ${
              menuOpen ? "open" : "close"
            } fixed top-0 bottom-0 right-0 overflow-hidden bg-black/90 flex flex-col items-start justify-center w-full`}
          >
            <div className="px-10 md:px-20 text-xs lg:text-sm text-gray pb-4 border-b border-gray w-full">
              MENUS
            </div>
            <ul
              onMouseOut={() => {
                if (pathId) return setHoverId(pathId);
                setHoverId(0);
              }}
              className="w-full text-4xl transition-all md:text-6xl py-10 px-10 md:px-20 flex flex-col items-start justify-center gap-10 text-white "
            >
              <li>
                <Link
                  href={"/"}
                  className={`${
                    hoverId === 0 ? "pl-10 before:w-2 before:h-2" : ""
                  } relative pl-0 transition-all hover:pl-10 before:w-0 before:h-0 before:rounded-full before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-white hover:before:w-2 hover:before:h-2 `}
                  scroll={false}
                  onClick={() => setMenuOpen(false)}
                  onMouseOver={() => {
                    setHoverId(0);
                  }}
                >
                  Home
                </Link>
              </li>
              {MENUS.map((menu, idx) => (
                <li key={`side-${menu.name}`}>
                  <Link
                    href={menu.href}
                    className={`${
                      hoverId === idx + 1 ? "pl-10 before:w-2 before:h-2" : ""
                    } relative pl-0 transition-all hover:pl-10 before:w-0 before:h-0 before:rounded-full before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-white hover:before:w-2 hover:before:h-2 `}
                    scroll={false}
                    onClick={() => setMenuOpen(false)}
                    onMouseOver={() => {
                      setHoverId(idx + 1);
                    }}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`fixed overflow-hidden rounded-full transition-all ease-in  bg-black/70 text-white top-[60px] lg:top-20 -translate-y-10 backdrop-blur-sm right-[60px] lg:right-20 translate-x-10 ${
            !isTop || menuOpen ? "w-10 h-10 md:w-20 md:h-20" : "w-0 h-0"
          }`}
        >
          <svg
            className={`ham hamRotate ham1 w-10 h-10 md:w-20 md:h-20 ${
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
      </div>
    </>
  );
}
