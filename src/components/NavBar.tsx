'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: '대표 서비스', href: '/services' },
        { name: '후기 및 합격 사례', href: '/testimonials' },
        { name: '상담 신청', href: '/contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-sm"
                    : "bg-white/95 md:bg-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-[70px]">
                    {/* 로고 */}
                    <Link
                        href="/"
                        className={cn(
                            "text-xl md:text-2xl font-extrabold transition-colors duration-300",
                            scrolled ? "text-foreground" : "text-foreground md:text-white"
                        )}
                    >
                        대기업김과장의 합격하는 자소서
                    </Link>

                    {/* 데스크톱 메뉴 */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xl font-semibold transition-all duration-300 py-2 border-b-2 border-transparent hover:border-current",
                                    scrolled
                                        ? "text-foreground hover:text-primary"
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* 모바일 메뉴 버튼 */}
                    <button
                        type="button"
                        className={cn(
                            "md:hidden p-2 rounded-lg transition-colors cursor-pointer",
                            scrolled
                                ? "text-foreground hover:bg-muted-bg"
                                : "text-foreground hover:bg-muted-bg md:text-white md:hover:bg-white/10"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">메뉴 열기</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* 모바일 메뉴 */}
            <div
                className={cn(
                    "md:hidden overflow-hidden transition-all duration-300 bg-white",
                    mobileMenuOpen ? "max-h-60 shadow-lg" : "max-h-0"
                )}
            >
                <div className="px-6 py-3 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block py-3 text-base font-semibold text-foreground hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
