'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

function ForceDarkTheme() {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme('dark');
    }, [setTheme]);

    return null;
}

export default function BeyondEngineeringLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ForceDarkTheme />
            {children}
        </>
    );
}
