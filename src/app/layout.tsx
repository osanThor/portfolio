import type { Metadata } from "next";
import "./globals.css";
import HeaderContainer from "@/containers/common/HeaderContainer";
import FooterContainer from "@/containers/common/FooterContainer";
import RecoilRootProvider from "@/contexts/Recoil.context";
import MainLoadingContainer from "@/containers/loading/MainLoadingContainer";
import { Toaster } from "@/components/ui/toaster";
import { nanumSquareNEO } from "@/app/assets/fonts";
import { getMetadata } from "@/utils/getMetadata";

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
          <MainLoadingContainer />
          <HeaderContainer />
          <main className="flex min-h-screen w-full flex-col items-center relative">
            {children}
          </main>
          <FooterContainer />
          <Toaster />
        </RecoilRootProvider>
      </body>
    </html>
  );
}
