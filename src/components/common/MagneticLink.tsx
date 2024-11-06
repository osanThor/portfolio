"use client";
import Animate from "@/utils/animation";
import { HTMLAttributes, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
} & LinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  HTMLAttributes<any>;

export default function MagneticLink({ href, children, ...linkArgs }: Props) {
  const { animatePageOut, magnetic } = new Animate();
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
