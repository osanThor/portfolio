export const META = {
  title: "개발자 준영의 포트폴리오",
  siteName: "GIVEN's PORTFOLIO",
  description:
    "개발자 준영의 포트폴리오 | Front End Developer Given's PORTFOLIO",
  keyword: [
    "포트폴리오",
    "블로그",
    "개발자",
    "프론트엔드",
    "일상",
    "개발",
    "javascript",
    "react",
    "next",
    "캠핑",
    "목표달성",
  ],
  url: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  naverVerification: process.env.NAVER_SITE_VERIFICATION || "",
  googleVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
  ogImage: `/assets/images/meta/op_image.png`,
} as const;
