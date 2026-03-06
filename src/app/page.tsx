import TestimonialSliderWrapper from "../components/HomeTestimonialSliderWrapper";
import Link from "next/link";
import HomeCompanySlider from "@/components/HomeCompanySlider";
import HomeJobSlider from "@/components/HomeJobSlider";

import { testimonialAbstracts } from "@/data/testimonialAbstract";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";
import FadeInAnimation from "@/components/FadeInAnimation";
import BubblePopAnimation from "@/components/BubblePopAnimation";
import { EMAIL } from "@/data/constants";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white text-foreground min-h-screen flex flex-col">
      {/* Hero Section - banner.jpg 배경 */}
      {/* 데스크톱: 배경 이미지 위에 텍스트 오버레이 */}
      <section className="relative pt-[70px] hidden md:block">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img/banner.jpg')" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex justify-end">
          <div className="w-1/2 text-center">
            <h1 className="text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              대기업 김과장의<br />합격하는 자소서
            </h1>

            <div className="mb-8">
              <div className="space-y-3 text-lg text-white/80">
                <div>-. SK하이닉스, 현대로템 출신 취업 전문 컨설턴트</div>
                <div>-. 연 1,000건+ 자소서 첨삭 및 Zoom 비대면 면접 컨설팅</div>
                <div>-. 현재까지 누적 990명+ 최종합격 이력</div>
                <div>-. 숨고, 크몽, 블로그, 당근, 사람인 플랫폼 취업컨설턴트</div>
                <div>-. 유명 취업 컨설팅 기업 &quot;마스터 강사&quot;</div>
                <div>-. Thread 취준생 3만 팔로워 보유</div>
              </div>
            </div>

            <Link href="/contact">
              <Button size="pill" variant="dark" className="font-bold">
                무료 상담 신청하기
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 모바일: 이미지 위 + 텍스트 아래 분리 */}
      <section className="pt-[70px] md:hidden">
        <div className="w-full aspect-[4/3] bg-cover bg-left bg-no-repeat" style={{ backgroundImage: "url('/img/banner.jpg')" }} />
        <div className="bg-[#d5d7da] px-6 py-10 text-center">
          <h1 className="text-3xl font-bold text-foreground leading-tight tracking-tight mb-6">
            대기업 김과장의 합격하는 자소서
          </h1>

          <div className="mb-8">
            <div className="space-y-2 text-sm text-muted">
              <div>-. SK하이닉스, 현대로템 출신 취업 전문 컨설턴트</div>
              <div>-. 연 1,000건+ 자소서 첨삭 및 Zoom 비대면 면접 컨설팅</div>
              <div>-. 현재까지 누적 990명+ 최종합격 이력</div>
              <div>-. 숨고, 크몽, 블로그, 당근, 사람인 플랫폼 취업컨설턴트</div>
              <div>-. 유명 취업 컨설팅 기업 &quot;마스터 강사&quot;</div>
              <div>-. Thread 취준생 3만 팔로워 보유</div>
            </div>
          </div>

          <Link href="/contact">
            <Button size="pill" variant="dark" className="font-bold">
              무료 상담 신청하기
            </Button>
          </Link>
        </div>
      </section>

      {/* 취업, 스펙이 부족해서 떨어지는 걸까요? 섹션 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">취업, 스펙이 부족해서 떨어지는 걸까요?</h2>

          <div className="mt-6 text-center">
            <p className="text-xl text-muted">
              또 자격증, 인턴, 대외활동을 찾아 헤매시나요?
            </p>
            <p className="text-xl text-foreground font-semibold mt-2 mb-8">
              채용 담당자는 그보다{" "}
              <span className="text-primary font-bold">
                &apos;읽고 싶은 자기소개서&apos;
              </span>
              를 찾고 있습니다.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <p className="text-lg text-muted leading-relaxed">
              👉 스펙보다 중요한 건, 전달력입니다. <br />
              👉 비슷한 배경, 경험 속에서도 결국 &apos;표현의 차이&apos;가 합불을
              결정합니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {/* 불합격 사례 */}
              <div className="space-y-8 border border-border rounded-xl p-8">
                <h4 className="font-bold text-center text-muted text-xl mb-8 pb-4 border-b border-border">
                  불합격 사례
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2">
                        지원자
                      </p>
                      <div className="bg-muted-bg p-4 rounded-2xl rounded-tl-none">
                        <p className="text-foreground">
                          &quot;저는 관련 자격증도 있고, 학점도 높고, 인턴 경험도
                          있는데 왜 계속 떨어지는지 모르겠어요. 더 이상 보완할
                          스펙이 없는데...&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-primary mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-primary p-4 rounded-2xl rounded-tr-none">
                        <p className="text-white">
                          스펙을 아무리 쌓아도 그것을 자기소개서에서 효과적으로
                          표현하지 못하면 합격으로 이어지지 않습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>

              {/* 합격 사례 */}
              <div className="space-y-8 border border-border rounded-xl p-8">
                <h4 className="font-bold text-center text-primary text-xl mb-8 pb-4 border-b border-border">
                  합격 사례
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2">
                        지원자
                      </p>
                      <div className="bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/10">
                        <p className="text-foreground">
                          &quot;전공과 무관한 분야였고, 특별한 인턴 경험도
                          없었지만 제가 가진 경험을 회사가 원하는 방향으로
                          표현하는 데 집중했더니 합격했어요!&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-primary mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-primary p-4 rounded-2xl rounded-tr-none">
                        <p className="text-white">
                          같은 경험도 어떻게 표현하느냐에 따라 인사담당자의 눈에
                          완전히 다르게 보입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기업에서 원하는 대화법이 있습니다 섹션 */}
      <section className="bg-muted-bg py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">기업에서 원하는 대화법이 있습니다</h2>

          <div className="mt-6 text-center mb-8">
            <p className="text-xl text-foreground font-semibold">
              채용담당자가 원하는{" "}
              <span className="text-primary font-bold">
                &apos;소통 방식&apos;
              </span>
              을 안다면, 손쉽게 풀어나갈 수 있습니다.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-12">
            <p className="text-lg text-muted leading-relaxed">
              👉 정해놓은 답변이 아닌 상호작용이 있는 대화를 준비하세요. <br />
              👉 솔직한 경험을 토대로 대답해도 충분히 면접관의 이목을 끌 수 있는
              방법이 있습니다.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 gap-16">
              {/* 실패하는 대화 */}
              <div className="space-y-8 bg-white border border-border rounded-xl p-8">
                <h4 className="font-bold text-center text-muted text-xl mb-8 pb-4 border-b border-border">
                  실패하는 대화
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-muted-bg p-4 rounded-2xl rounded-tr-none">
                        <p className="text-foreground">
                          &quot;지원자님의 강점이 무엇인가요?&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2">
                        지원자
                      </p>
                      <div className="bg-muted-bg p-4 rounded-2xl rounded-tl-none">
                        <p className="text-foreground">
                          &quot;저는 성실하고 책임감이 강합니다. 맡은 일은 끝까지
                          해내는 성격입니다.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={600}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-red-50 p-4 rounded-2xl rounded-tr-none border border-red-100">
                        <p className="text-red-600 italic">
                          &apos;모든 지원자가 하는 말이네... 구체적인 사례가 없어
                          신뢰하기 어렵다.&apos;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>

              {/* 성공하는 대화 */}
              <div className="space-y-8 bg-white border border-border rounded-xl p-8">
                <h4 className="font-bold text-center text-primary text-xl mb-8 pb-4 border-b border-border">
                  성공하는 대화
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-muted-bg p-4 rounded-2xl rounded-tr-none">
                        <p className="text-foreground">
                          &quot;지원자님의 강점이 무엇인가요?&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-lg">
                      <p className="text-sm font-semibold text-muted mb-2">
                        지원자
                      </p>
                      <div className="bg-primary/5 p-4 rounded-2xl rounded-tl-none border border-primary/10">
                        <p className="text-foreground">
                          &quot;저는 목표 달성을 위한 체계적인 실행력이
                          강점입니다. 학부 연구 프로젝트에서 예상치 못한 문제가
                          발생했을 때 (중략) ~를 통해 원인을 세분화하고 팀원들과
                          협업하여 (중략) ~한 전략을 통해 일정 내에 문제를
                          해결했습니다. 이러한 경험이 귀사의 R&D 프로젝트에도
                          도움이 될 것이라 생각합니다.&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={600}>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-muted mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-green-50 p-4 rounded-2xl rounded-tr-none border border-green-100">
                        <p className="text-green-700 italic">
                          &apos;구체적인 사례와 우리 회사와의 연관성까지
                          언급했네. 준비가 잘 되어 있군.&apos;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 채용 혹한기에도 압도적인 성과 섹션 */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">채용 혹한기에도 압도적인 성과를 내고 있습니다</h2>

          <p className="text-xl text-center mt-4 mb-2">
            <span className="font-semibold text-primary">
              990명 이상의 합격자, 150개 이상의 기업.
            </span>{" "}
          </p>
          <p className="text-xl text-center text-muted mb-12">
            당신도 다음 성공 사례가 될 수 있습니다.
          </p>

          {/* 숫자 강조 배너 */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
              {[
                { count: "990명+", label: "누적 합격자 수" },
                { count: "1,000건+", label: "연간 첨삭/컨설팅 건수" },
                { count: "82%", label: "평균 자소서 합격률" },
                { count: "150곳+", label: "최종 합격 기업" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.count}
                  </div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 합격 기업 리스트 섹션 */}
          <div className="border border-border rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              이용자 실제 합격 기업 현황
            </h3>
            <HomeCompanySlider rowCount={4} items={companies} />
          </div>

          <div className="border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              이용자 실제 합격 직무 현황
            </h3>
            <HomeJobSlider rowCount={2} items={jobs} />
          </div>
        </div>
      </section>

      {/* Testimonials - Card Slider */}
      <section className="py-20 md:py-28 px-6 bg-muted-bg">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center tracking-tight">이용자 후기</h2>

        {/* SEO를 위한 실제 후기 데이터 (스크린 리더와 검색 엔진용) */}
        <div className="sr-only">
          {testimonialAbstracts.map((item, idx) => (
            <div key={idx}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>작성자: {item.name}</p>
              <p>평점: 5/5</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <TestimonialSliderWrapper testimonials={testimonialAbstracts} />
        </div>
      </section>

      {/* CTA Section - 풀-너비 다크 배경 */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="absolute inset-0 bg-dark-bg" />
        <div className="relative z-10 text-center">
          <p className="text-lg md:text-xl font-medium text-white/80 mb-4">
            서류부터 면접까지 한 방에 끝내기
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
            합격으로 가는 가장 빠른 길
          </h2>
          <Link href="/contact">
            <Button size="pill" variant="kakao">
              무료 상담 신청하기
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer - 다크 네이비 */}
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
