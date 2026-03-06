import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/NavBar";
import BottomLinkBanner from "@/components/stickyFooterBanner";
import {Analytics} from "@vercel/analytics/next";

export const metadata: Metadata = {
    title: "대기업김과장의 합격하는 자소서 | 취업 걱정 오늘부터 그만",
    description: "현대로템, SK하이닉스 출신 컨설턴트가 제공하는 합격을 부르는 실전 중심 취업 컨설팅. 대기업 취업 전문 컨설턴트가 제공하는 자소서 작성 및 면접 전략",
    keywords: ['자소서', '면접', '취업 컨설팅', '대기업김과장'],
    openGraph: {
        title: '대기업김과장 | 자소서 & 면접 컨설팅',
        description: '대기업 최종합격을 이끄는 전문 첨삭 서비스',
        url: 'https://www.allpsn.com/',
        type: 'website',
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
      <Navbar />
        {children}
      <BottomLinkBanner />
      <Analytics />
      </body>
    </html>
  );
}
