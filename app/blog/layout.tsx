'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

function ForceLightTheme() {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme('light');
    }, [setTheme]);

    return null;
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ForceLightTheme />
            {children}
        </>
    );
}
