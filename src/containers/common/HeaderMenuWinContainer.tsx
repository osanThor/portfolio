"use client";
import MagneticLink from "@/components/common/MagneticLink";
import MenuButton from "@/components/common/MenuButton";
import MENUS from "@/data/menu";

type Props = {
  isTop: boolean;
  menuOpen: boolean;
  toggleOpen: () => void;
  pathId: number;
  hoverId: number;
  setHoverId: (id: number) => void;
};

export default function HeaderMenuWinContainer({
  isTop,
  menuOpen,
  pathId,
  hoverId,
  toggleOpen,
  setHoverId,
}: Props) {
  return (
    <div className="relative z-[9999]">
      <>
        {menuOpen && (
          <div
            onClick={toggleOpen}
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
            className="menu w-full text-4xl transition-all md:text-6xl py-10 px-10 md:px-20 flex flex-col items-start justify-center gap-10 text-white "
          >
            <li>
              <MagneticLink
                href={"/"}
                className={`${
                  hoverId === 0 ? "pl-10 before:w-2 before:h-2" : ""
                } relative pl-0 transition-all hover:pl-10 before:w-0 before:h-0 before:rounded-full before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-white hover:before:w-2 hover:before:h-2 flex items-center justify-center`}
                scroll={false}
                onClick={toggleOpen}
                onMouseOver={() => {
                  setHoverId(0);
                }}
              >
                Home
              </MagneticLink>
            </li>
            {MENUS.map((menu, idx) => (
              <li className="relative" key={`side-${menu.name}`}>
                <MagneticLink
                  href={menu.href}
                  className={`${
                    hoverId === idx + 1 ? "pl-10 before:w-2 before:h-2" : ""
                  } relative pl-0 transition-all hover:pl-10 before:w-0 before:h-0 before:rounded-full before:transition-all before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-white hover:before:w-2 hover:before:h-2 flex items-center justify-center`}
                  scroll={false}
                  onClick={toggleOpen}
                  onMouseOver={() => {
                    setHoverId(idx + 1);
                  }}
                >
                  {menu.name}
                </MagneticLink>
              </li>
            ))}
          </ul>
        </div>
      </>
      <MenuButton onClick={toggleOpen} isTop={isTop} menuOpen={menuOpen} />
    </div>
  );
}
