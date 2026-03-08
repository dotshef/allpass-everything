import Image from "next/image";
import BubblePopAnimation from "@/components/BubblePopAnimation";

export default function HomeConsultantSection() {
  return (
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <BubblePopAnimation>
          <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight">
            대기업 실무 경력 7년 컨설턴트
          </h2>
        </BubblePopAnimation>

        <BubblePopAnimation delay={100}>
          <p className="text-xl md:text-2xl text-center mt-10 mb-10 text-foreground font-semibold">
            대기업 실무를 7년 이상 경험해본 취업 컨설턴트가
            <br />
            직무 맞춤형으로 상담해드립니다
          </p>
        </BubblePopAnimation>

        <BubblePopAnimation delay={200}>
          <div className="flex justify-center">
            <Image
              src="/img/class-interview.png"
              alt="컨설팅 현장"
              width={800}
              height={500}
              className="w-full max-w-3xl h-auto rounded-xl"
            />
          </div>
        </BubblePopAnimation>

        <BubblePopAnimation delay={300}>
          <p className="text-xl md:text-2xl text-center mt-10 text-foreground font-semibold">
            천편일률적인 내용을 알려드리지 않습니다.
            <br />
            여러분의 취업 성공을 위해서
            <br />
            직무에 맞는 내용으로 승부합니다.
          </p>
        </BubblePopAnimation>
      </div>
    </section>
  );
}
