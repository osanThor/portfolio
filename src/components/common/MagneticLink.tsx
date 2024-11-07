"use client";
import { HTMLAttributes, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { animatePageOut, magnetic } from "@/utils/lib/gsap";

type Props = {
  href: string;
  children: React.ReactNode;
} & LinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  HTMLAttributes<any>;

export default function MagneticLink({ href, children, ...linkArgs }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    magnetic(ref);
  }, []);
  const router = useRouter();
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    if (pathname !== href) animatePageOut(href, router);
  }
  return (
    <Link ref={ref} href={href} onClick={handleClick} {...linkArgs}>
      {children}
    </Link>
  );
}
