'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
    { src: '/gallery/bramhacks.png', alt: 'BramHacks Event' },
    { src: '/gallery/Google Hackathon.png', alt: 'Google Hackathon' },
    { src: '/gallery/googlehackathon2.png', alt: 'Google Hackathon Team' },
    { src: '/gallery/withDA20.png', alt: 'With DA20 Aircraft' },
    { src: '/gallery/HTV.png', alt: 'Hack the Valley' },
    { src: '/gallery/Terrahacks.png', alt: 'TerraHacks' },
    { src: '/gallery/hackthehill.png', alt: 'Hack the Hill' },
    { src: '/gallery/bramhacksmentor.png', alt: 'BramHacks Mentor' },
    { src: '/gallery/Canada Leadership Conference.png', alt: 'Canada Leadership Conference' },
    { src: '/gallery/Conference.png', alt: 'Conference' },
    { src: '/gallery/Engineering Competiiton.png', alt: 'Engineering Competition' },
    { src: '/gallery/KASA.png', alt: 'KASA' },
    { src: '/gallery/kasaai2.png', alt: 'KASA AI Workshop' },
    { src: '/gallery/ML workshop.png', alt: 'Machine Learning Workshop' },
    { src: '/gallery/presidentaward.png', alt: 'President Award' },
    { src: '/gallery/pilot.png', alt: 'Pilot License' },
    { src: '/gallery/pillot.png', alt: 'Pilot Training' },
    { src: '/gallery/FPVDrone.png', alt: 'FPV Drone' },
    { src: '/gallery/FPVDrone2.png', alt: 'FPV Drone Flying' },
    { src: '/gallery/actionShot.png', alt: 'Action Shot' },
    { src: '/gallery/roboticsselfIdentification.png', alt: 'Robotics Team' },
    { src: '/gallery/Loudness detector.png', alt: 'Circut' },
    { src: '/Featured Instructables.png', alt: 'Featured on Instructables' },
    { src: '/gallery/robotgripper.png', alt: 'Robotics Team' },
];

export function PhotoGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
        }
    };

    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % photos.length);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
        if (e.key === 'Escape') closeLightbox();
    };

    return (
        <>
            <section>
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Photo Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {photos.map((photo, index) => (
                        <button
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative aspect-square overflow-hidden rounded-lg bg-secondary/50 hover:scale-105 transition-transform duration-300 group"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-cover group-hover:opacity-90 transition-opacity"
                            />
                        </button>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="h-6 w-6" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPrevious();
                        }}
                        className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-8 w-8" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNext();
                        }}
                        className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-8 w-8" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
                            <Image
                                src={photos[selectedIndex].src}
                                alt={photos[selectedIndex].alt}
                                width={1920}
                                height={1080}
                                className="max-w-full max-h-full w-auto h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                        {selectedIndex + 1} / {photos.length}
                    </div>
                </div>
            )}
        </>
    );
}
