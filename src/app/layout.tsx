import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import HeaderContainer from "@/containers/common/HeaderContainer";
import FooterContainer from "@/containers/common/FooterContainer";
import RecoilRootProvider from "@/contexts/Recoil.context";
import MainLoadingContainer from "@/containers/loading/MainLoadingContainer";
import { Toaster } from "@/components/ui/toaster";

const BASE_URL = new URL(
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
);

const nanumSquareNEO = localFont({
  src: [
    {
      path: "./assets/fonts/nanumsquareNEO/NanumSquareNeoOTF-Lt.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/nanumsquareNEO/NanumSquareNeoOTF-Rg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/fonts/nanumsquareNEO/NanumSquareNeoOTF-Bd.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/nanumsquareNEO/NanumSquareNeoOTF-Eb.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./assets/fonts/nanumsquareNEO/NanumSquareNeoOTF-Hv.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: { default: "GIVEN's PORTFOLIO", template: "%s | GIVEN's PORTFOLIO" },
  description: "Front End Developer Given's PORTFOLIO",
  metadataBase: BASE_URL,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: { rel: "icon", url: "/favicon.ico", sizes: "48x48" },
    apple: [
      { rel: "", url: `${BASE_URL}assets/images/meta/apple-icon.png` },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-57x57.png`,
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-60x60.png`,
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-76x76.png`,
        sizes: "76x76",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-114x114.png`,
        sizes: "114x114",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-120x120.png`,
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-144x144.png`,
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-152x152.png`,
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: `${BASE_URL}assets/images/meta/apple-icon-180x180.png`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: `${BASE_URL}assets/images/meta/apple-icon-precomposed.png`,
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: { default: "GIVEN's PORTFOLIO", template: "%s | GIVEN's PORTFOLIO" },
    description: "Front End Developer Given's PORTFOLIO",
    url: BASE_URL,
    siteName: "GIVEN's PORTFOLIO",
    images: [
      {
        url: `${BASE_URL}assets/images/meta/op_image.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${BASE_URL}assets/images/meta/op_image.png`,
        width: 1800,
        height: 1600,
        alt: "Given's PORTFOLIO",
      },
    ],
    type: "website",
  },
};

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
