import BubblePopAnimation from "@/components/BubblePopAnimation";

export default function HomeInterviewSection() {
  return (
    <section className="bg-muted-bg py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <BubblePopAnimation>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight">기업에서 원하는 대화법이 있습니다</h2>
        </BubblePopAnimation>

        <BubblePopAnimation delay={100}>
          <div className="mt-10 text-center mb-10">
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              채용담당자가 원하는{" "}
              <span className="text-primary font-bold">
              &apos;소통 방식&apos;
            </span>
              을 안다면, 손쉽게 풀어나갈 수 있습니다.
            </p>
          </div>
        </BubblePopAnimation>


        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 실패하는 대화 */}
            <div className="rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/interview_bad.png')" }} />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 space-y-8 p-8">
                <h4 className="font-bold text-center text-white/70 text-xl mb-8 pb-4 border-b border-white/20">
                  실패하는 대화
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tr-none">
                        <p className="text-white">
                          &quot;지원자님의 강점이 무엇인가요?&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-white/70 mb-2">
                        지원자
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-white">
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
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-red-500/30 p-4 rounded-2xl rounded-tr-none border border-red-400/30">
                        <p className="text-red-300 italic">
                          &apos;모든 지원자가 하는 말이네... 구체적인 사례가 없어
                          신뢰하기 어렵다.&apos;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>

            {/* 성공하는 대화 */}
            <div className="rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/interview_good.png')" }} />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 space-y-8 p-8">
                <h4 className="font-bold text-center text-blue-300 text-xl mb-8 pb-4 border-b border-white/20">
                  성공하는 대화
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-end">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        면접관
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tr-none">
                        <p className="text-white">
                          &quot;지원자님의 강점이 무엇인가요?&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>

                <BubblePopAnimation delay={400}>
                  <div className="flex justify-start">
                    <div className="max-w-lg">
                      <p className="text-sm font-semibold text-white/70 mb-2">
                        지원자
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-white">
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
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        면접관 (속마음)
                      </p>
                      <div className="bg-green-500/30 p-4 rounded-2xl rounded-tr-none border border-green-400/30">
                        <p className="text-green-300 italic">
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
      </div>
    </section>
  );
}
