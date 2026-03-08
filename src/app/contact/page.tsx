"use client";

import Image from "next/image";
import { EMAIL } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export default function Contact() {
  return (
    <main className="bg-white text-foreground min-h-screen flex flex-col">
      {/* Hero Section - 상담 초대 */}
      <section className="bg-dark-bg py-30 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            자소서부터 면접 준비까지,
            <br />
            지금 바로 시작해보세요
          </h1>
          <p className="text-lg text-white/80 mb-8">
            전문 컨설턴트와 1:1 상담으로 합격률을 높여보세요
            <br />
            빠른 응답과 맞춤형 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="pill"
              variant="kakao"
              onClick={() =>
                window.open("https://open.kakao.com/o/sAfYyKLg", "_blank")
              }
            >
              <Image
                src="/icons/kakaotalk.png"
                alt="카카오톡 아이콘"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              카카오톡으로 상담하기
            </Button>
          </div>
        </div>
      </section>

      {/* 브랜드 신뢰 보조 채널 */}
      <section className="bg-muted-bg py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground text-center mb-4 tracking-tight">
            다양한 채널에서 김과장을 만나보세요
          </h2>
          <h3 className="text-xl font-bold text-muted text-center mb-8">
            기존 이용자들의 후기와 무료 콘텐츠를 확인해보세요
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              {
                name: "공식 프로필",
                icon: "/icons/brand-mark.png",
                link: "https://litt.ly/pass_everything"
              },
              {
                name: "숨고",
                icon: "/icons/soomgo.png",
                link: "https://soomgo.com/profile/users/10562016",
              },
              {
                name: "크몽",
                icon: "/icons/kmong.png",
                link: "https://kmong.com/gig/645507",
              },
              {
                name: "네이버 블로그",
                icon: "/icons/naver_blog.svg",
                link: "https://blog.naver.com/pass_everything/223755974500",
              },
              {
                name: "인스타그램",
                icon: "/icons/instagram.webp",
                link: "https://www.instagram.com/allpass_everything/",
              },
              {
                name: "스레드",
                icon: "/icons/threads.png",
                link: "https://www.threads.com/@allpass_everything",
              },
            ].map((channel, i) => (
              <button
                key={i}
                onClick={() => window.open(channel.link, "_blank")}
                className="bg-white border border-border p-6 rounded-xl text-center hover:border-primary/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="h-8 w-8 mx-auto mb-2 flex items-center justify-center">
                  <Image
                    src={channel.icon}
                    alt={`${channel.name} 아이콘`}
                    width={32}
                    height={32}
                    className="max-h-full max-w-full object-contain w-8 h-8"
                  />
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  {channel.name}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ 섹션 */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 tracking-tight">
            상담 신청 전 읽어주세요
          </h2>
          <Accordion>
            <AccordionItem title="Q. 상담 가능 시간은 언제인가요?">
              A. 평일 오전 9시~오후 9시, 주말 오전 9시~오후 6시까지 상담 가능합니다.
            </AccordionItem>
            <AccordionItem title="Q. 카카오톡 상담 시 어떤 내용을 먼저 보내야 하나요?">
              A. ① 지원하시는 기업/직무, ② 현재 준비 상황, ③ 원하시는 서비스(자소서 첨삭, 면접 연습 등), ④ 마감일정을 알려주세요.
            </AccordionItem>
            <AccordionItem title="Q. 자기소개서 첨삭 요청은 어떤 방식으로 이루어지나요?">
              A. 상담 후 서비스 확정 시, 자기소개서를 보내주시면 24-48시간 내 첨삭본과 상세 피드백을 제공해드립니다.
            </AccordionItem>
            <AccordionItem title="Q. 비용은 얼마나 되나요?">
              A. 서비스별로 상이하며, 상담 시 맞춤형 견적을 제공해드립니다. 첫 상담은 무료입니다!
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg text-dark-text py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-white mb-2">대기업김과장</p>
            <p className="text-sm">이메일: {EMAIL}</p>
          </div>
          <p className="text-xs">
            COPYRIGHT 2025. 대기업김과장 All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
