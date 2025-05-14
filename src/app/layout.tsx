import type { Metadata } from "next";
import "./globals.css";
import HeaderContainer from "@/containers/common/HeaderContainer";
import RecoilRootProvider from "@/contexts/Recoil.context";
import { nanumSquareNEO } from "@/app/assets/fonts";
import { getMetadata } from "@/utils/lib/getMetadata";
import FollowCursorContainer from "@/containers/common/FollowCursorContainer";

export const metadata: Metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={nanumSquareNEO.className}
        suppressHydrationWarning={true}
      >
        <RecoilRootProvider>
          <FollowCursorContainer />
          <HeaderContainer />
          {children}
        </RecoilRootProvider>
      </body>
    </html>
  );
}
