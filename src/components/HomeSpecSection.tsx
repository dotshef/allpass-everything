import BubblePopAnimation from "@/components/BubblePopAnimation";

export default function HomeSpecSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <BubblePopAnimation>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight">
            스펙이 부족해서 떨어지는 걸까요?
          </h2>
        </BubblePopAnimation>

          <div className="mt-10 flex flex-col text-center mb-10 gap-8">
            <BubblePopAnimation delay={100}>
              <p className="text-xl md:text-2xl font-semibold">
                또 자격증, 인턴, 대외활동을 찾아 헤매시나요?
              </p>
            </BubblePopAnimation>
            <BubblePopAnimation delay={200}>
              <p className="text-xl md:text-2xl font-semibold">
                채용 담당자는 {" "}
                <span className="text-primary font-bold">
                &apos;읽고 싶은 자기소개서&apos;
                </span>
                를 찾고 있습니다.
              </p>
            </BubblePopAnimation>
          </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 불합격 사례 */}
            <div className="rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/fail.png')" }} />
              <div className="absolute inset-0 bg-black/80" />
              <div className="relative z-10 space-y-8 p-8">
                <h4 className="font-bold text-center text-white/70 text-xl mb-8 pb-4 border-b border-white/20">
                  불합격 사례
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-white/70 mb-2">
                        지원자
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-white">
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
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-red-500/30 p-4 rounded-2xl rounded-tr-none border border-red-400/30">
                        <p className="text-white">
                          스펙을 아무리 쌓아도 그것을 자기소개서에서 효과적으로
                          표현하지 못하면 합격으로 이어지지 않습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </BubblePopAnimation>
              </div>
            </div>

            {/* 합격 사례 */}
            <div className="rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/img/pass.png')" }} />
              <div className="absolute inset-0 bg-black/80" />
              <div className="relative z-10 space-y-8 p-8">
                <h4 className="font-bold text-center text-blue-300 text-xl mb-8 pb-4 border-b border-white/20">
                  합격 사례
                </h4>

                <BubblePopAnimation>
                  <div className="flex justify-start">
                    <div className="max-w-sm">
                      <p className="text-sm font-semibold text-white/70 mb-2">
                        지원자
                      </p>
                      <div className="bg-white/30 p-4 rounded-2xl rounded-tl-none">
                        <p className="text-white">
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
                      <p className="text-sm font-semibold text-white/70 mb-2 text-right">
                        컨설턴트
                      </p>
                      <div className="bg-green-500/30 p-4 rounded-2xl rounded-tr-none border border-green-400/30">
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
      </div>
    </section>
  );
}
