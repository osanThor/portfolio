import type { Metadata } from "next";
import "./globals.css";
import HeaderContainer from "@/containers/common/HeaderContainer";
import FooterContainer from "@/containers/common/FooterContainer";
import RecoilRootProvider from "@/contexts/Recoil.context";
import { Toaster } from "@/components/ui/toaster";
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
      <RecoilRootProvider>
        <body
          className={nanumSquareNEO.className}
          suppressHydrationWarning={true}
        >
          <FollowCursorContainer />
          <HeaderContainer />
          <main
            id="container"
            className="flex min-h-screen w-full flex-col items-center relative"
          >
            {children}
          </main>
          <FooterContainer />
          <Toaster />
        </body>
      </RecoilRootProvider>
    </html>
  );
}
