'use client';

import Link from 'next/link';
import { useState } from 'react';
import { testimonials } from '@/data/testimonitals';
import { EMAIL } from '@/data/constants';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const hasMore = visibleCount < testimonials.length;

    return (
        <main className="bg-white text-foreground min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-dark-bg pt-28 pb-16 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                        실제 이용자들의 생생한 후기
                    </h1>
                    <h2 className="text-lg text-white/80">
                        리뷰 이벤트를 따로 진행하지 않습니다.<br />
                        다른 취업 컨설턴트와는 다르게 결과물에 대한 &#34;진짜 후기&#34;만을 보여드립니다.
                    </h2>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
                        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
                            <div key={index} className="bg-muted-bg p-6 rounded-xl border border-border hover:border-primary/30 transition-colors duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
                                            <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <span key={star} className="text-yellow-400 text-sm">★</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted leading-relaxed whitespace-pre-line">{testimonial.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {hasMore && (
                        <div className="text-center">
                            <button
                                onClick={handleLoadMore}
                                className="text-primary font-bold px-20 py-3 rounded-full text-lg hover:text-primary-dark transition-all duration-300 hover:cursor-pointer flex items-center gap-2 mx-auto group"
                            >
                                더 보기
                                <svg
                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* External Review Links */}
            <section className="bg-muted-bg py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-foreground text-center mb-4">다른 채널에서 대기업김과장의 최신 후기를 확인해보세요</h2>
                    <p className="text-muted text-center">더 많은 실제 이용자 후기와 평점을 확인하실 수 있습니다</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open('https://kmong.com/gig/645507', '_blank')}
                            className="rounded-full px-8 bg-white"
                        >
                            <img
                                src="/icons/kmong.png"
                                alt="크몽 아이콘"
                                className="w-6 h-6 object-contain"
                            />
                            크몽에서 후기 보기
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open('https://soomgo.com/profile/users/10562016', '_blank')}
                            className="rounded-full px-8 bg-white"
                        >
                            <img
                                src="/icons/soomgo.png"
                                alt="숨고 아이콘"
                                className="w-6 h-6 object-contain"
                            />
                            숨고에서 후기 보기
                        </Button>
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
