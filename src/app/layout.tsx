import type { Metadata } from "next";
import "./globals.css";
import HeaderContainer from "@/containers/common/HeaderContainer";
import { nanumSquareNEO } from "@/app/assets/fonts";
import { getMetadata } from "@/utils/lib/getMetadata";
import FollowCursorContainer from "@/containers/common/FollowCursorContainer";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.GOOGLE_GT || ""} />
      <GoogleAnalytics gaId={process.env.GOOGLE_GA || ""} />
      <body
        className={nanumSquareNEO.className}
        suppressHydrationWarning={true}
      >
        <FollowCursorContainer />
        <HeaderContainer />
        {children}
      </body>
    </html>
  );
}
