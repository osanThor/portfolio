import MENUS from "@/data/menu";
import Link from "next/link";

export default function FooterContainer() {
  return (
    <footer className="w-full bg-darkIndigo px-4 lg:px-10 py-10 lg:py-14 flex flex-col lg:flex-row gap-10 lg:items-center justify-between text-white">
      <div className="order-2 lg:order-1 text-sm lg:text-base">
        © 2024 Created by GIVEN
      </div>
      <div className="order-1 lg:order-2 flex items-center gap-10 flex-wrap">
        <ul className="flex gap-10 before:content-['Menu'] relative before:absolute before:bottom-[120%] before:text-gray before:text-xs">
          {MENUS.map((menu) => (
            <li key={`footer-${menu.name}`}>
              <Link
                scroll={false}
                className="hover:text-gray transition-all"
                href={menu.href}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-10 before:content-['Givens'] relative before:absolute before:bottom-[120%] before:text-gray before:text-xs">
          <li>
            <Link
              className="hover:text-gray transition-all"
              href={"https://github.com/osanThor"}
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray transition-all"
              href={"https://blog.given-log.com/"}
              target="_blank"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
