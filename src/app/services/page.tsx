import Link from 'next/link';
import IconLinkButton from "@/components/IconLinkButton";
import { EMAIL } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export default function Services() {
    return (
        <main className="bg-white text-foreground min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-dark-bg py-30 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">
                        기업이 원하는 언어로 바꿔드립니다
                    </h1>
                    <h2 className="text-lg text-white/80">
                        대기업 출신이 직접 첨삭하는 1:1 맞춤 피드백<br />
                        합격을 위한 최고의 선택
                    </h2>
                </div>
            </section>

            {/* 강의 영상 섹션 */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-10">
                        대기업김과장 - 자기소개서 &amp; 면접 강의 영상
                    </h2>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <video
                            className="w-full"
                            controls
                            preload="metadata"
                            playsInline
                        >
                            <source src="/video/class-sample.mp4" type="video/mp4" />
                            브라우저가 비디오 재생을 지원하지 않습니다.
                        </video>
                    </div>
                </div>
            </section>

            {/* 자기소개서 파트 */}
            <section className="bg-muted-bg py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-8">자기소개서, 왜 계속 떨어질까요?</h2>
                    <div className="text-center mt-4 mb-8">
                        <h3 className="text-xl font-bold text-foreground">
                            문장 하나 바꿨는데, 합격이 바뀌는 경우를 정말 많이 봤습니다.
                        </h3>
                    </div>

                    <div className="bg-white p-8 rounded-xl border border-border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-foreground mb-4">😰 대부분의 지원자들이 하는 실수</h4>
                                <div className="space-y-3">
                                    {[
                                        "맞춤법, 문장력부터 고민한다",
                                        "흔한 표현을 사용한다",
                                        "자기 얘기만 하고 회사는 생각 안 한다",
                                        "지워도 되는 문장이 너무 많다"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="text-muted">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-primary mb-4">😊 합격하는 자소서의 비밀</h4>
                                <div className="space-y-3">
                                    {[
                                        "첫 문장부터 시선을 끈다",
                                        "기업이 원하는 그림을 명확히 그린다",
                                        "한 문장도 지울 수 없는 글을 만든다",
                                        "설득의 언어로 말한다"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="text-muted">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-muted-bg rounded-lg">
                            <p className="text-center text-foreground font-medium">
                                자기소개서는 &#34;내가 누구인지&#34;를 증명하는 글이 아니라,<br />
                                <span className="font-bold text-primary">&#34;당신들이 날 뽑아야 하는 이유&#34;를 설득하는 글입니다.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 모의 면접 파트 */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-8">면접만 보면 왜 떨어질까요?</h2>
                    <h3 className="text-xl font-bold text-foreground mt-4 mb-8 text-center">
                        대부분의 지원자는 면접관이 중요하게 보는 것을 모르고 있습니다
                    </h3>

                    <div className="bg-muted-bg p-8 rounded-xl border border-border">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-foreground mb-4">😰 면접에서 자주 하는 실수</h4>
                                <div className="bg-white p-4 rounded-lg mb-4">
                                    <p className="text-sm text-muted mb-2"><strong>면접관:</strong> &#34;첫 3개월 동안 어떤 목표 세우실 건가요?&#34;</p>
                                    <p className="text-sm text-accent"><strong>지원자:</strong> &#34;조직 안에서 빠르게 적응하겠습니다.&#34;</p>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "추상적이다. 아무 말도 안 한 것과 같다.",
                                        "에너지가 없어서 묻힌다",
                                        "디테일 없는 스토리를 말한다",
                                        "준비한 답변만 기계적으로 말한다"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="text-muted">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-bold text-lg text-primary mb-4">😊 합격하는 면접의 비밀</h4>
                                <div className="bg-primary/5 p-4 rounded-lg mb-4 border border-primary/10">
                                    <p className="text-sm text-muted mb-2"><strong>면접관:</strong> &#34;첫 3개월 동안 어떤 목표 세우실 건가요?&#34;</p>
                                    <p className="text-sm text-primary"><strong>지원자:</strong> &#34;업무 흐름 파악과 자사 전산 프로세스를 빠르게 배우는 것을 1차 목표로 두고 있습니다. 특히 제가 지원한 설비기술 직무는...&#34;</p>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        "구체적인 계획과 현장성이 보인다.",
                                        "면접관에게 \'전달되는 임팩트\'가 있다",
                                        "구체적인 경험과 디테일로 말한다",
                                        "기업이 원하는 대화법을 안다"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span className="text-muted">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-white rounded-lg">
                            <p className="text-center text-foreground font-medium">
                                <span className="font-bold text-primary">지금 이 팀에 들어오면 어떤 기여를 할 수 있을까?</span><br />
                                이 질문에 명확한 그림을 그려주는 사람이 이깁니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Free Contents */}
            <section className="bg-muted-bg py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-8">아직 컨설팅 받을지 말지 고민되시나요?</h2>
                    <h3 className="text-xl font-bold text-foreground mt-4 mb-8 text-center">
                        무료로 제공되는 컨텐츠부터 먼저 확인해보세요
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                        <IconLinkButton
                            href="https://blog.naver.com/pass_everything/223755974500"
                            icon="/icons/naver_blog.svg"
                            alt="네이버 블로그 아이콘"
                            label="네이버 블로그 보기"
                        />
                        <IconLinkButton
                            href="https://www.instagram.com/allpass_everything/"
                            icon="/icons/instagram.webp"
                            alt="인스타그램 아이콘"
                            label="인스타그램 보기"
                        />
                        <IconLinkButton
                            href="https://www.threads.net/@allpass_everything"
                            icon="/icons/threads.png"
                            alt="스레드 아이콘"
                            label="스레드 보기"
                        />
                    </div>

                    <p className="text-center text-muted">
                        무료 취업 팁은 각 채널에서 매일 업데이트 됩니다
                    </p>
                </div>
            </section>

            {/* Resume Service Process */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-12">자소서 서비스 진행 방식</h2>
                    <div className="bg-white p-8 rounded-xl border border-border mt-12">
                        <ol className="space-y-6">
                            {[
                                { step: "신청서 작성", desc: "원하시는 서비스와 요구사항을 입력합니다." },
                                { step: "파일 전송", desc: "첨삭이 필요한 자기소개서 파일을 전송합니다." },
                                { step: "첨삭 진행", desc: "컨설턴트가 회사별, 직무별 맞춤형 첨삭을 진행합니다." },
                                { step: "피드백 전달", desc: "상세한 피드백과 함께 수정본을 지원자에게 전달합니다." },
                                { step: "필요 시 재첨삭", desc: "추가 요청사항이 있다면 재첨삭을 진행합니다." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                                            {i+1}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{item.step}</h3>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* Interview Service Process */}
            <section className="bg-muted-bg py-20 px-6">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-12">모의 면접 서비스 진행 방식</h2>
                    <div className="bg-white p-8 rounded-xl border border-border mt-12">
                        <ol className="space-y-6">
                            {[
                                { step: "신청서 작성", desc: "원하시는 서비스와 요구사항을 입력합니다." },
                                { step: "파일 전송", desc: "지원자가 제출한 자기소개서 파일을 컨설턴트에게 전송합니다." },
                                { step: "지원서 분석", desc: "컨설턴트가 선택한 직무에 대한 예상 질문을 준비합니다." },
                                { step: "모의 면접", desc: "1대1 화상회의를 통해 모의 면접을 진행합니다." },
                                { step: "면접 피드백 및 코칭", desc: "모의 면접을 통해 파악한 지원자의 강점과 취약점을 토대로 코칭을 진행합니다." },
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                                            {i+1}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{item.step}</h3>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold text-foreground text-center tracking-tight mb-12">자주 묻는 질문</h2>
                    <div className="mt-12">
                        <Accordion>
                            <AccordionItem title="Q. 언제까지 받을 수 있나요?">
                                A. 평균 24시간 이내, 최대 48시간 이내입니다.
                            </AccordionItem>
                            <AccordionItem title="Q. 첨삭 후 수정 요청은 가능한가요?">
                                A. 1회 무료 재첨삭 제공됩니다.
                            </AccordionItem>
                            <AccordionItem title="Q. 특정 기업에 맞는 첨삭 및 코칭도 가능한가요?">
                                A. 제공하는 모든 코칭은 지원 기업의 특성과 성향을 고려한 맞춤형 첨삭을 제공해 드립니다.
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
