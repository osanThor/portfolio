"use client";

import { animatePageOut, magnetic } from "@/utils/lib/gsap";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HTMLAttributes, useEffect, useRef } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
} & LinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  HTMLAttributes<HTMLAnchorElement>;

export default function MagneticLink({ href, children, ...linkArgs }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    return magnetic(ref);
  }, []);

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
