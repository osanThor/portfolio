"use client";

import Animate from "@/utils/animation";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { HTMLAttributes } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
} & LinkProps &
  React.RefAttributes<HTMLAnchorElement> &
  HTMLAttributes<any>;

export default function TransitionLink({ href, children, ...linkArgs }: Props) {
  const { animatePageOut } = new Animate();
  const router = useRouter();
  const pathname = usePathname();
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    if (pathname !== href) animatePageOut(href, router);
  }
  return (
    <Link href={href} onClick={handleClick} {...linkArgs}>
      {children}
    </Link>
  );
}
