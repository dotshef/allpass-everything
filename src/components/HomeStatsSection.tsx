import BubblePopAnimation from "@/components/BubblePopAnimation";
import HomeCompanySlider from "@/components/HomeCompanySlider";
import HomeJobSlider from "@/components/HomeJobSlider";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";

export default function HomeStatsSection() {
  return (
    <section className="bg-muted-bg py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <BubblePopAnimation>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight">
            채용 혹한기에도 <br /> 압도적인 성과를 내고 있습니다
          </h2>
        </BubblePopAnimation>

        <div className="flex flex-col mt-10 mb-10 gap-8">
          <BubblePopAnimation delay={100}>
            <p className="text-xl md:text-3xl text-center text-foreground font-semibold">
              <span className="text-primary">990명</span> 이상의 합격자, <span className="text-primary">150개</span> 이상의 기업.
            </p>
          </BubblePopAnimation>

          <BubblePopAnimation delay={200}>
            <p className="text-xl md:text-3xl text-center text-foreground font-semibold">
              당신도 다음 <span className="text-primary">성공 사례</span>가 될 수 있습니다.
            </p>
          </BubblePopAnimation>
        </div>

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
                className="border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors duration-300 bg-white"
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
        <div className="border border-border rounded-xl p-8 mb-8 bg-white">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            이용자 실제 합격 기업 현황
          </h3>
          <HomeCompanySlider rowCount={4} items={companies} />
        </div>

        <div className="border border-border rounded-xl p-8 bg-white">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            이용자 실제 합격 직무 현황
          </h3>
          <HomeJobSlider rowCount={2} items={jobs} />
        </div>
      </div>
    </section>
  );
}
