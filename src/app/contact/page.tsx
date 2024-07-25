import BlogIcon from "@/components/common/ui/icons/BlogIcon";
import GithubIcon from "@/components/common/ui/icons/GithubIcon";
import InstagramIcon from "@/components/common/ui/icons/InstagramIcon";
import ContactFormContainer from "@/containers/contact/ContactFormContainer";
import PageAnimationContainer from "@/containers/loading/PageAnimationContainer";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-darkIndigo w-full h-full min-h-screen flex flex-col items-center">
      <PageAnimationContainer />
      <div className="w-full flex flex-col items-center py-12 md:py-32">
        <div className="w-full max-w-[1400px] border-b border-gray px-4 min-[1600px]:px-0 py-5 md:py-10 mb-5">
          <h2 className="transition-all text-[36px] md:text-[60px] font-[800] break-keep leading-[48px] md:leading-[80px] text-white">
            Contact Me
          </h2>
        </div>
        <div className="w-[calc(100%-32px)] max-w-[1400px] flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-20">
          <div className="pl-8 flex-[8]">
            <ContactFormContainer />
          </div>
          <div className=" flex-[2] py-10 min-w-[240px] flex flex-col gap-20">
            <div className="w-20 h-20 md:w-24 lg:w-[120px] md:h-24 lg:h-[120px] relative rounded-full bg-white transition-all">
              <Image
                src={"/assets/images/profile.png"}
                alt="my emozi"
                className="object-cover"
                fill
                sizes={"100"}
              />
            </div>
            <ul className="relative w-full flex flex-col gap-4 before:content-['Contact_Detail'] before:absolute before:bottom-[120%] before:text-gray before:text-xs">
              <li>
                <Link
                  href={"mailto:jadw15@naver.com"}
                  scroll={false}
                  className="text-white hover:text-gray transition-all"
                >
                  jadw15@naver.com
                </Link>
              </li>
              <li>
                <Link
                  href={"tel:+821076303515"}
                  scroll={false}
                  className="text-white hover:text-gray transition-all"
                >
                  +82 10 7630 3515
                </Link>
              </li>
            </ul>
            <ul className="relative w-full flex flex-col gap-4 before:content-['Social'] before:absolute before:bottom-[120%] before:text-gray before:text-xs">
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://github.com/osanThor"}
                  target="_blank"
                >
                  <GithubIcon />
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://blog.given-log.com/"}
                  target="_blank"
                >
                  <BlogIcon />
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray transition-all flex items-center gap-2"
                  href={"https://www.instagram.com/given_015/"}
                  target="_blank"
                >
                  <InstagramIcon />
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
