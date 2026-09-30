'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface CaptionedGalleryItem {
    src: string;
    caption: string;
    width: number;
    height: number;
    position?: string;
}

export function CaptionedGallery({ items, captionClassName = '' }: { items: CaptionedGalleryItem[]; captionClassName?: string }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const close = useCallback(() => setLightboxIndex(null), []);
    const prev = useCallback(
        () => setLightboxIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
        [items.length]
    );
    const next = useCallback(
        () => setLightboxIndex((i) => (i === null ? null : (i + 1) % items.length)),
        [items.length]
    );

    useEffect(() => {
        if (lightboxIndex === null) return;

        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        }

        window.addEventListener('keydown', onKey);
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = originalOverflow;
        };
    }, [lightboxIndex, close, prev, next]);

    return (
        <>
            <div className="be-gallery">
                {items.map((item, index) => (
                    <figure key={item.src} className="be-tile group">
                        <button
                            type="button"
                            onClick={() => setLightboxIndex(index)}
                            className="be-radius block w-full overflow-hidden"
                            aria-label={`Open ${item.caption}`}
                        >
                            <Image
                                src={item.src}
                                alt={item.caption}
                                width={item.width}
                                height={item.height}
                                sizes="33vw"
                                loading="eager"
                                style={item.position ? { objectPosition: item.position } : undefined}
                                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            />
                        </button>
                        <figcaption className={captionClassName}>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>

            {lightboxIndex !== null && (
                <div
                    className="no-print fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={close}
                >
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            close();
                        }}
                        className="absolute top-4 right-4 rounded-full p-2 text-white/80 transition-colors hover:text-white"
                        aria-label="Close"
                    >
                        <X className="h-7 w-7" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-2 rounded-full p-2 text-white/80 transition-colors hover:text-white sm:left-4"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-2 rounded-full p-2 text-white/80 transition-colors hover:text-white sm:right-4"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>
                    <div className="flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={items[lightboxIndex].src}
                            alt={items[lightboxIndex].caption}
                            className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
                        />
                        <p className="text-sm text-white/70">{items[lightboxIndex].caption}</p>
                    </div>
                </div>
            )}
        </>
    );
}
