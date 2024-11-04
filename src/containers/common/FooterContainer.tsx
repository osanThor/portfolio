import Magnetic from "@/components/common/Magnetic";
import MENUS from "@/data/menu";
import Link from "next/link";

export default function FooterContainer() {
  return (
    <footer className="w-full bg-darkIndigo px-4 lg:px-10 py-10 lg:py-14 flex justify-center text-white">
      <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-4 md:gap-10 md:items-center justify-between">
        <div className="order-2 lg:order-1 text-sm lg:text-base">
          © 2024 Created by GIVEN
        </div>
        <div className="order-1 lg:order-2 flex items-center gap-10 flex-wrap">
          <ul className="flex gap-10 before:content-['Menu'] relative before:absolute before:bottom-[120%] before:text-gray before:text-xs">
            {MENUS.map((menu) => (
              <Magnetic key={`footer-${menu.name}`}>
                <li>
                  <Link
                    scroll={false}
                    className="hover:text-gray transition-all"
                    href={menu.href}
                  >
                    {menu.name}
                  </Link>
                </li>
              </Magnetic>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
