import BlogIcon from "@/components/ui/icons/BlogIcon";
import GithubIcon from "@/components/ui/icons/GithubIcon";
import Image from "next/image";
import Link from "next/link";

type Props = {
  showProfile?: boolean;
  showSocialOnMobile?: boolean;
};

export default function ContactSidebar({
  showProfile = false,
  showSocialOnMobile = true,
}: Props) {
  return (
    <div className="py-10 w-full md:w-auto min-w-[240px] flex flex-col gap-20">
      {showProfile && (
        <div className="w-20 h-20 md:w-24 lg:w-[120px] md:h-24 lg:h-[120px] relative rounded-full bg-white transition-all">
          <Image
            src="/assets/images/profile.png"
            alt="profile"
            className="object-cover"
            fill
            sizes="100"
          />
        </div>
      )}
      <ul className="relative w-full flex flex-col gap-4 before:content-['Contact_Detail'] before:absolute before:bottom-[120%] before:text-gray before:text-xs">
        <li>
          <Link
            href="mailto:jadw15@naver.com"
            scroll={false}
            className="text-white hover:text-gray transition-all"
          >
            jadw15@naver.com
          </Link>
        </li>
        <li>
          <Link
            href="tel:+821076303515"
            scroll={false}
            className="text-white hover:text-gray transition-all"
          >
            +82 10 7630 3515
          </Link>
        </li>
      </ul>
      <ul
        className={`relative w-full flex flex-col gap-4 before:content-['Social'] before:absolute before:bottom-[120%] before:text-gray before:text-xs ${
          showSocialOnMobile ? "" : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            className="text-white hover:text-gray transition-all flex items-center gap-2"
            href="https://github.com/osanThor"
            target="_blank"
          >
            <GithubIcon />
            Github
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-gray transition-all flex items-center gap-2"
            href="https://blog.given-log.com"
            target="_blank"
          >
            <BlogIcon />
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
