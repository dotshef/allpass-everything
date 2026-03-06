'use client';

import { useEffect, useRef, useState } from 'react';

interface BubblePopAnimationProps {
    children: React.ReactNode;
    delay?: number;
}

const BubblePopAnimation = ({ children, delay = 0 }: BubblePopAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || typeof window === 'undefined') return;

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, [delay, isMounted]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-400 ease-out ${
                isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
            }`}
        >
            {children}
        </div>
    );
};

export default BubblePopAnimation;