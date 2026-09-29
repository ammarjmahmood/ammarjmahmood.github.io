import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { ArrowLeft, Mail, Linkedin, Github } from 'lucide-react';
import { CaptionedGallery } from '@/components/captioned-gallery';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
    title: 'Beyond Engineering - Ammar J Mahmood',
    description:
        'Private and glider pilot, space-hackathon competitor, and aspiring skydiver — a look at what Ammar J Mahmood gets up to outside the lab.',
};

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className={`${playfair.className} text-sm uppercase tracking-[0.3em] text-white/50`}>
            {children}
        </p>
    );
}

function BioBlock({
    image,
    imageAlt,
    reverse = false,
    children,
}: {
    image: string;
    imageAlt: string;
    reverse?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="grid items-center gap-8 md:grid-cols-2">
            <div className={reverse ? 'md:order-2' : ''}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5">
                    <Image src={image} alt={imageAlt} fill className="object-cover" />
                </div>
            </div>
            <div className={reverse ? 'md:order-1' : ''}>
                <div className="space-y-4 text-base leading-relaxed text-white/80">{children}</div>
            </div>
        </div>
    );
}

const galleryItems = [
    { src: '/gallery/withDA20.webp', caption: 'With a Diamond DA20 on the ramp' },
    { src: '/gallery/pilot.webp', caption: 'Heads-up, headset on, mid-flight' },
    { src: '/gallery/pillot.webp', caption: 'Glider training day with the University Soaring Society' },
    { src: '/gallery/presidentaward.webp', caption: "President's Award, University Soaring Society" },
    { src: '/gallery/bramhacks.webp', caption: 'BramHacks 2025: Space Edition — Team N.O.P.S' },
    { src: '/gallery/bramhacksmentor.webp', caption: 'Working the build overnight at BramHacks' },
    { src: '/gallery/Canada Leadership Conference.webp', caption: 'Canadian Engineering Leadership Conference, St. John\'s NL' },
    { src: '', caption: 'Skydiving — photos coming soon', pending: true },
];

export default function BeyondEngineeringPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                {/* Hero */}
                <header className="mt-14 flex flex-col items-start gap-8 sm:mt-20 sm:flex-row sm:items-center">
                    <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 sm:h-40 sm:w-40">
                        <Image
                            src="/professional-headshot.webp"
                            alt="Ammar J Mahmood"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className={`${playfair.className} text-4xl leading-tight sm:text-6xl`}>
                            Ammar J Mahmood
                        </h1>
                        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60 sm:text-base">
                            Private &amp; Glider Pilot
                        </p>
                        <p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/60 sm:text-base">
                            Space &amp; Robotics Hackathon Competitor
                        </p>
                    </div>
                </header>

                {/* Intro */}
                <section className="mt-14 max-w-3xl space-y-5 text-lg leading-relaxed text-white/80 sm:mt-20">
                    <p>
                        Ammar is a Mechatronics Engineering student and robotics engineer who spends about as much
                        time trying to leave the ground as he does building things that stay on it. Outside the
                        lab, he holds a private pilot license and a glider pilot license, competes at hackathons
                        across North America — 25 and counting — and has spent time building navigation systems
                        aimed squarely at space and robotics applications.
                    </p>
                    <p className={`${playfair.className} text-xl italic text-white/60`}>
                        &ldquo;If it flies, floats, or drives itself, I want to have built one.&rdquo;
                    </p>
                </section>

                {/* Piloting */}
                <section className="mt-20 space-y-12 sm:mt-28">
                    <SectionLabel>Piloting &amp; Soaring</SectionLabel>

                    <BioBlock image="/gallery/withDA20.webp" imageAlt="Ammar with a Diamond DA20 trainer aircraft">
                        <p>
                            Ammar is a licensed private pilot and glider pilot, trained on aircraft like the
                            Diamond DA20 alongside unpowered cross-country glider flights. Flying started as a
                            counterweight to a schedule full of robotics builds and hackathons — a reason to look
                            up instead of down at a soldering iron for a few hours.
                        </p>
                        <p>
                            He is an active member of the University Soaring Society (USS), where flight training
                            happens the old-fashioned way: towed into the air, released, and flown back down on
                            nothing but altitude and technique.
                        </p>
                    </BioBlock>

                    <BioBlock
                        image="/gallery/presidentaward.webp"
                        imageAlt="Ammar receiving a President's Award for the University Soaring Society"
                        reverse
                    >
                        <p>
                            That involvement with USS was recognized with a President&apos;s Award for
                            contributions to the club — presented on stage alongside teammates who logged just as
                            many early mornings at the airfield.
                        </p>
                        <p>
                            Between checklists, cockpit selfies, and the occasional look straight down the wing at
                            2,000 feet, flying has stayed the one hobby that has nothing to do with a keyboard.
                        </p>
                    </BioBlock>
                </section>

                {/* Space & Hackathons */}
                <section className="mt-20 space-y-12 sm:mt-28">
                    <SectionLabel>Space &amp; Hackathons</SectionLabel>

                    <BioBlock
                        image="/gallery/bramhacks.webp"
                        imageAlt="Ammar's team at BramHacks 2025: Space Edition"
                    >
                        <p>
                            Ammar has been to a handful of space-focused events, but BramHacks 2025 — Space
                            Edition is the one with a photo to prove it. His team of five built{' '}
                            <strong className="text-white">N.O.P.S. (Navigation Offline Positioning System)</strong>
                            , an offline autonomous navigation system for space and robotics applications that
                            fuses gyroscope, accelerometer, and magnetometer data — an IMU sensor stack — to keep
                            track of position without relying on GPS or any live signal. Their pitch line said it
                            best: <em>&ldquo;Offline, but on target.&rdquo;</em>
                        </p>
                        <p>The team took home an award for the build, judged live against the rest of the field.</p>
                    </BioBlock>

                    <BioBlock
                        image="/gallery/bramhacksmentor.webp"
                        imageAlt="Ammar's team working through the night at a hackathon"
                        reverse
                    >
                        <p>
                            That project sits alongside 25+ hackathons Ammar has competed in — evenings that
                            usually end with too much coffee, a pile of wires, and a demo assembled about ten
                            minutes before judging. It is also the throughline behind most of the robotics work on
                            this site: an IMU-driven navigation stack for space isn&apos;t so different from a
                            perception stack for an EV-charging robot arm.
                        </p>
                        <p>
                            Next on the list: turning &ldquo;aspiring skydiver&rdquo; into an actual jump —
                            watch this space.
                        </p>
                    </BioBlock>
                </section>

                {/* Gallery */}
                <section className="mt-20 sm:mt-28">
                    <h2 className={`${playfair.className} text-2xl tracking-wide sm:text-3xl`}>Gallery</h2>
                    <div className="mt-8">
                        <CaptionedGallery items={galleryItems} />
                    </div>
                </section>

                {/* Contact */}
                <section className="mt-20 border-t border-white/10 pt-12 sm:mt-28">
                    <h2 className={`${playfair.className} text-2xl leading-snug sm:text-3xl`}>
                        Contact me and follow my journey
                    </h2>
                    <div className="mt-6 space-y-3 text-white/80">
                        <a
                            href="mailto:ammarjmahmood@gmail.com"
                            className="flex items-center gap-2 hover:text-white"
                        >
                            <Mail className="h-4 w-4" />
                            ammarjmahmood@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ammarjmahmood"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white"
                        >
                            <Linkedin className="h-4 w-4" />
                            linkedin.com/in/ammarjmahmood
                        </a>
                        <a
                            href="https://github.com/ammarjmahmood"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white"
                        >
                            <Github className="h-4 w-4" />
                            github.com/ammarjmahmood
                        </a>
                    </div>
                </section>

                <div className="mt-16 border-t border-white/10 pt-8 text-center">
                    <Link href="/" className="text-sm text-white/50 hover:text-white">
                        ← Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
