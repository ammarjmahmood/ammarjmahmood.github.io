'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface CaptionedGalleryItem {
    src: string;
    caption: string;
    width?: number;
    height?: number;
    pending?: boolean;
}

interface CaptionedGalleryProps {
    items: CaptionedGalleryItem[];
}

export function CaptionedGallery({ items }: CaptionedGalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const close = useCallback(() => setLightboxIndex(null), []);
    const openable = items.filter((item) => !item.pending);

    const prev = useCallback(
        () =>
            setLightboxIndex((i) => {
                if (i === null) return null;
                const idx = openable.findIndex((it) => it.src === items[i].src);
                const nextIdx = (idx - 1 + openable.length) % openable.length;
                return items.findIndex((it) => it.src === openable[nextIdx].src);
            }),
        [items, openable]
    );
    const next = useCallback(
        () =>
            setLightboxIndex((i) => {
                if (i === null) return null;
                const idx = openable.findIndex((it) => it.src === items[i].src);
                const nextIdx = (idx + 1) % openable.length;
                return items.findIndex((it) => it.src === openable[nextIdx].src);
            }),
        [items, openable]
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
            <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
                {items.map((item, index) => (
                    <figure key={item.src + index} className="group mb-4 break-inside-avoid">
                        {item.pending ? (
                            <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/[0.03] text-center px-3">
                                <span className="text-2xl">📸</span>
                                <span className="text-[11px] uppercase tracking-wider text-white/40">
                                    Photos coming soon
                                </span>
                            </div>
                        ) : (
                            <button
                                type="button"
                                onClick={() => setLightboxIndex(index)}
                                className="block w-full overflow-hidden rounded-xl bg-white/5"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.caption}
                                    width={item.width ?? 1200}
                                    height={item.height ?? 1200}
                                    sizes="(max-width: 640px) 50vw, 33vw"
                                    loading="eager"
                                    className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                                />
                            </button>
                        )}
                        <figcaption className="mt-2 text-sm text-white/70">{item.caption}</figcaption>
                    </figure>
                ))}
            </div>

            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
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

                    {openable.length > 1 && (
                        <>
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
                        </>
                    )}

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
