'use client';

import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ProjectGalleryProps {
    images: string[];
    title: string;
}

function isVideo(src: string) {
    return /\.(mp4|webm|mov)$/i.test(src);
}

function isYouTube(src: string) {
    return src.includes('youtube.com') || src.includes('youtu.be');
}

function toEmbedUrl(src: string) {
    return src.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/');
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const close = useCallback(() => setLightboxIndex(null), []);
    const prev = useCallback(
        () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
        [images.length]
    );
    const next = useCallback(
        () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
        [images.length]
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
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                {images.map((src, index) => {
                    const clickable = !isVideo(src) && !isYouTube(src);
                    return (
                        <div
                            key={index}
                            className="relative flex-shrink-0 w-[82%] sm:w-[55%] md:w-[46%] aspect-[4/3] snap-center overflow-hidden rounded-lg bg-muted"
                        >
                            {isYouTube(src) ? (
                                <iframe
                                    className="absolute inset-0 h-full w-full"
                                    src={toEmbedUrl(src)}
                                    title={`${title} - Video ${index + 1}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : isVideo(src) ? (
                                <video
                                    className="absolute inset-0 h-full w-full object-contain bg-black"
                                    src={src}
                                    controls
                                    playsInline
                                    preload="metadata"
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setLightboxIndex(index)}
                                    className="group absolute inset-0 h-full w-full cursor-zoom-in"
                                    aria-label={`Open image ${index + 1} of ${title}`}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={src}
                                        alt={`${title} - Image ${index + 2}`}
                                        className="h-full w-full object-contain"
                                    />
                                    <span className="absolute bottom-2 right-2 rounded-full bg-black/60 p-1.5 text-white opacity-80 transition-opacity group-hover:opacity-100">
                                        <ZoomIn className="h-4 w-4" />
                                    </span>
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>

            {lightboxIndex !== null && clickableSrc(images[lightboxIndex]) && (
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

                    {images.length > 1 && (
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

                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={images[lightboxIndex]}
                        alt={`${title} - Image ${lightboxIndex + 2}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

function clickableSrc(src: string) {
    return !isVideo(src) && !isYouTube(src);
}
