'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

export function Reveal({
    children,
    className = '',
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out will-change-transform ${className}`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.97)',
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
