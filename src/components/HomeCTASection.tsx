import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeCTASection() {
  return (
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
  );
}
