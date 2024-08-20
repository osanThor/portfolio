import Link from "next/link";
import ArrowBottom from "../ui/icons/ArrowBottom";

type Props = {
  href?: string;
  text?: string;
};

export default function LinkButton({
  href = "/",
  text = "More Detail",
}: Props) {
  return (
    <Link
      scroll={false}
      href={href}
      className="relative border group border-gray lg:text-2xl px-5 py-4 flex items-center gap-4 text-gray before:top-0 before:left-0 fill-gray before:w-0 before:absolute before:h-full before:transition-all hover:before:w-full before:bg-gray hover:text-white hover:fill-white"
    >
      <span className="relative ">{text}</span>
      <span className="relative ">
        <ArrowBottom />
      </span>
    </Link>
  );
}
