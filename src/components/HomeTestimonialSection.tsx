import Link from "next/link";
import { Button } from "@/components/ui/button";
import TestimonialSliderWrapper from "@/components/HomeTestimonialSliderWrapper";
import { testimonialAbstracts } from "@/data/testimonialAbstract";

export default function HomeTestimonialSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-muted-bg">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center tracking-tight">이용자 후기</h2>
      <p className="text-lg md:text-xl text-center mt-4 text-foreground font-semibold">
        크몽, 숨고 등에서 발췌한 <span className="text-primary">진짜 후기</span>입니다.
      </p>

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

      <div className="flex justify-center mt-10">
        <Link href="/testimonials">
          <Button size="pill" variant="dark" className="font-bold">
            후기 더보기
          </Button>
        </Link>
      </div>
    </section>
  );
}
