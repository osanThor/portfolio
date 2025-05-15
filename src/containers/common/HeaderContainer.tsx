"use client";

import Logo from "@/components/common/Logo";
import MENUS from "@/data/menu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderMenuWinContainer from "@/containers/common/HeaderMenuWinContainer";
import MagneticLink from "@/components/common/MagneticLink";
import { twMerge } from "tailwind-merge";
import { useScrollStore } from "@/stores/scroll";

export default function HeaderContainer() {
  const pathname = usePathname();

  const scrollOffsetY = useScrollStore((state) => state.scrollOffsetY);
  const setScrollOffsetY = useScrollStore((state) => state.setScrollOffsetY);

  const THEME_DARK_PATHNAME = ["/", "/contact"];
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const hrefs = [...MENUS.map((menu) => menu.href), "/work"];

  const [pathId, setPathId] = useState<number>(0);
  const [hoverId, setHoverId] = useState<number>(0);

  const position =
    hoverId === 1
      ? "left-[11%]"
      : hoverId === 2
      ? "left-[49%]"
      : hoverId === 3
      ? "left-[87%]"
      : "";

  const [isTop, setIsTop] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    setScrollOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!THEME_DARK_PATHNAME.includes(pathname)) {
      if (hrefs.some((href) => pathname.startsWith(href))) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    } else {
      setTheme("dark");
    }

    const menuIdx = MENUS.findIndex(
      (menu) => menu.href === pathname || pathname.startsWith(menu.href)
    );

    if (pathname.startsWith("/work")) {
      setHoverId(2);
      setPathId(2);
    } else if (menuIdx < 0 && menuIdx !== 0) {
      setHoverId(0);
      setPathId(0);
    } else {
      setHoverId(menuIdx + 1);
      setPathId(menuIdx + 1);
    }
    window.scrollTo({ top: 0 });
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (scrollOffsetY < 100) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, [scrollOffsetY]);

  useEffect(() => {
    if (pathId) setHoverId(pathId);
  }, [menuOpen]);

  return (
    <>
      <header
        className={twMerge(
          `absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-5 md:p-10 z-[999] transition-all`,
          !isTop && "-translate-y-full"
        )}
      >
        <MagneticLink
          href={"/"}
          className={twMerge(
            `relative`,
            theme === "dark" ? "fill-white text-white" : "fill-black text-black"
          )}
          scroll={false}
          aria-label="go to Main Page"
        >
          <h1 id="logo">
            <Logo />
          </h1>
        </MagneticLink>
        <nav
          className="gnb relative group"
          onMouseOut={() => {
            if (pathId) return setHoverId(pathId);
          }}
        >
          <ul
            className={twMerge(
              theme === "dark" ? "text-white" : "text-black",
              `hidden md:flex items-center gap-10`
            )}
          >
            {MENUS.map((menu, idx) => (
              <li
                key={`headers-${menu.name}`}
                onMouseOver={() => {
                  setHoverId(idx + 1);
                }}
              >
                <MagneticLink
                  href={menu.href}
                  className={twMerge(
                    theme === "dark" ? "after:bg-white " : "after:bg-black",
                    "relative min-w-[64px] flex items-center justify-center"
                  )}
                  scroll={false}
                >
                  {menu.name}
                </MagneticLink>
              </li>
            ))}
          </ul>
          <span
            className={twMerge(
              theme === "dark" ? "bg-white " : "bg-black",
              pathId ? "w-2 h-2" : "w-0 h-0",
              `${position} group-hover:w-2 group-hover:h-2 absolute -bottom-[1rem] rounded-full transition-all ease-in-out hidden md:flex`
            )}
          />
          <button
            onClick={() => setMenuOpen(true)}
            className={twMerge(
              "flex pl-4 relative before:w-1 before:h-1 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full  md:hidden",
              theme === "dark"
                ? "fill-white text-white before:bg-white"
                : "fill-black text-black before:bg-black"
            )}
          >
            메뉴
          </button>
        </nav>
      </header>
      <HeaderMenuWinContainer
        isTop={isTop}
        menuOpen={menuOpen}
        pathId={pathId}
        hoverId={hoverId}
        toggleOpen={() => setMenuOpen(!menuOpen)}
        setHoverId={setHoverId}
      />
    </>
  );
}
