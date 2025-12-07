'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const photos = [
    { src: '/gallery/bramhacks.webp', alt: 'BramHacks Event' },
    { src: '/gallery/Google Hackathon.webp', alt: 'Google Hackathon' },
    { src: '/gallery/googlehackathon2.webp', alt: 'Google Hackathon Team' },
    { src: '/gallery/withDA20.webp', alt: 'With DA20 Aircraft' },
    { src: '/gallery/HTV.webp', alt: 'Hack the Valley' },
    { src: '/gallery/Terrahacks.webp', alt: 'TerraHacks' },
    { src: '/gallery/hackthehill.webp', alt: 'Hack the Hill' },
    { src: '/gallery/bramhacksmentor.webp', alt: 'BramHacks Mentor' },
    { src: '/gallery/Canada Leadership Conference.webp', alt: 'Canada Leadership Conference' },
    { src: '/gallery/Conference.webp', alt: 'Conference' },
    { src: '/gallery/Engineering Competiiton.webp', alt: 'Engineering Competition' },
    { src: '/gallery/KASA.webp', alt: 'KASA' },
    { src: '/gallery/kasaai2.webp', alt: 'KASA AI Workshop' },
    { src: '/gallery/ML workshop.webp', alt: 'Machine Learning Workshop' },
    { src: '/gallery/presidentaward.webp', alt: 'President Award' },
    { src: '/gallery/pilot.webp', alt: 'Pilot License' },
    { src: '/gallery/pillot.webp', alt: 'Pilot Training' },
    { src: '/gallery/FPVDrone.webp', alt: 'FPV Drone' },
    { src: '/gallery/FPVDrone2.webp', alt: 'FPV Drone Flying' },
    { src: '/gallery/actionShot.webp', alt: 'Action Shot' },
    { src: '/gallery/roboticsselfIdentification.webp', alt: 'Robotics Team' },
    { src: '/gallery/Loudness detector.webp', alt: 'Circut' },
    { src: '/Featured Instructables.webp', alt: 'Featured on Instructables' },
    { src: '/gallery/robotgripper.webp', alt: 'Robotics Team' },
    { src: '/gallery/kneebracedesign.webp', alt: 'Knee Brace Design' },
    { src: '/gallery/gpsSchematic.webp', alt: 'GPS Schematic' },
];

export function PhotoGallery() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const plugin = useRef(
        Autoplay({ delay: 1000, stopOnInteraction: false })
    )

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                plugin.current.reset();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

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
            <section className="w-full">
                <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Photo Gallery
                </h2>

                <Carousel
                    plugins={[plugin.current as any]}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {photos.map((photo, index) => (
                            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <button
                                    onClick={() => openLightbox(index)}
                                    className="relative aspect-square w-full overflow-hidden rounded-lg bg-secondary/50 hover:scale-105 transition-transform duration-300 group"
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        className="object-cover group-hover:opacity-90 transition-opacity"
                                    />
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 mt-4">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
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
