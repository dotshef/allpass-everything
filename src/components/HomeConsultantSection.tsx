import Image from "next/image";
import BubblePopAnimation from "@/components/BubblePopAnimation";

export default function HomeConsultantSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-5">
        <BubblePopAnimation>
          <p className="text-xl md:text-3xl text-center text-gray-500 font-semibold tracking-wide">
            <span className="text-red-500">
              SK하이닉스 {" "}
            </span>
             출신 취업 컨설턴트
          </p>
        </BubblePopAnimation>
          <BubblePopAnimation delay={100}>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight">
            대기업 실무 경험을 바탕으로
            <br />
            취준생들의 구체적인 합격 전략을 설계합니다.
          </h2>
        </BubblePopAnimation>

        <BubblePopAnimation delay={100}>
          <div className="flex justify-center mt-10 mb-10">
            <Image
              src="/img/class-interview.png"
              alt="컨설팅 현장"
              width={800}
              height={500}
              className="w-full max-w-3xl h-auto rounded-xl"
            />
          </div>
        </BubblePopAnimation>

        <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl text-foreground leading-relaxed">
          <BubblePopAnimation delay={300}>
            <p>
              대기업 채용은 세부 직무마다 보는 기준이 다르고 그 기준에 맞는 전략이 필요합니다.
            </p>
          </BubblePopAnimation>

          <BubblePopAnimation delay={400}>
            <p>
              그래서 저는 지원자의 경험을 직무에 Fit하게 구조적으로 작성해드립니다.
            </p>
          </BubblePopAnimation>

          <BubblePopAnimation delay={500}>
            <p>
              실제 대기업 인사 담당자가 채용하고 있는 방식에 맞춰 자기소개서와 면접 컨설팅을 진행합니다.
            </p>
          </BubblePopAnimation>

          <BubblePopAnimation delay={600}>
            <p className="font-semibold">
              취준생분들은 꼭 기억하세요.
              <br />
              취업은 운이 아니라 준비된 전략의 결과입니다.
            </p>
          </BubblePopAnimation>
        </div>
      </div>
    </section>
  );
}
