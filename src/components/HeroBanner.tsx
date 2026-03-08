import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroBanner() {
  return (
    <>
      {/* 데스크톱: 배경 이미지 위에 텍스트 오버레이 */}
      <section className="relative hidden md:block">
        <Image
          src="/img/banner-resiz.png"
          alt="배너"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-50 flex justify-end">
          <div className="w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight mb-6 text-primary [text-shadow:_2px_2px_8px_rgba(255,255,255,0.8)]">
              대기업 김과장의 합격하는 자소서
            </h1>

            <div className="mb-8">
              <div className="space-y-3 text-xl font-semibold leading-tight text-black [text-shadow:_2px_2px_8px_rgba(255,255,255,0.8)]">
                <div>- SK하이닉스, 현대로템 출신 취업 전문 컨설턴트</div>
                <div>- 연 1,000건+ 자소서 첨삭 및 Zoom 비대면 면접 컨설팅</div>
                <div>- 현재까지 누적 990명+ 최종합격 이력</div>
                <div>- 숨고, 크몽, 블로그, 당근, 사람인 플랫폼 취업컨설턴트</div>
                <div>- 유명 취업 컨설팅 기업 &quot;마스터 강사&quot;</div>
                <div>- Thread 취준생 4만 팔로워 보유</div>
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
      <section className="md:hidden">
        <div className="relative w-full overflow-hidden bg-[#d5d7da]">
          <Image
            src="/img/banner_char.png"
            alt="배너"
            width={859}
            height={1189}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="bg-[#d5d7da] px-4 py-10 w-full flex justify-center">
          <div className="text-left">
            <h1 className="text-2xl font-extrabold text-primary leading-tight tracking-tight mb-6 [text-shadow:_2px_2px_8px_rgba(0,0,0,0.3)]">
              대기업 김과장의 합격하는 자소서
            </h1>

            <div className="mb-8">
              <div className="space-y-2 text-black font-semibold [text-shadow:_2px_2px_8px_rgba(0,0,0,0.3)]">
                <div>- SK하이닉스, 현대로템 출신 취업 전문 컨설턴트</div>
                <div>- 연 1,000건+ 자소서 첨삭 및 Zoom 비대면 면접 컨설팅</div>
                <div>- 현재까지 누적 990명+ 최종합격 이력</div>
                <div>- 숨고, 크몽, 블로그, 당근, 사람인 플랫폼 취업컨설턴트</div>
                <div>- 유명 취업 컨설팅 기업 &quot;마스터 강사&quot;</div>
                <div>- Thread 취준생 4만 팔로워 보유</div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button size="pill" variant="dark" className="font-bold">
                  무료 상담 신청하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
