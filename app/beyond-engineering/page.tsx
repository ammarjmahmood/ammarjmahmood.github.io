import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { ArrowLeft, Mail, Linkedin, Github } from 'lucide-react';
import { CaptionedGallery } from '@/components/captioned-gallery';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const metadata = {
    title: 'Beyond Engineering - Ammar J Mahmood',
    description:
        'Private and glider pilot, space-hackathon competitor, and aspiring skydiver — a look at what Ammar J Mahmood gets up to outside the lab.',
};

function BioBlock({
    image,
    imageAlt,
    width,
    height,
    reverse = false,
    children,
}: {
    image: string;
    imageAlt: string;
    width: number;
    height: number;
    reverse?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div className={reverse ? 'md:order-2' : ''}>
                <Image
                    src={image}
                    alt={imageAlt}
                    width={width}
                    height={height}
                    loading="eager"
                    className="h-auto w-full rounded-2xl"
                />
            </div>
            <div className={reverse ? 'md:order-1' : ''}>
                <div className="space-y-4 text-base leading-relaxed text-white/80">{children}</div>
            </div>
        </div>
    );
}

const galleryItems = [
    { src: '/gallery/withDA20.webp', caption: 'With a Diamond DA20 on the ramp', width: 1286, height: 1714 },
    { src: '/gallery/pilot.webp', caption: 'Heads-up, headset on, mid-flight', width: 1080, height: 1080 },
    { src: '/gallery/pillot.webp', caption: 'Glider training day with the University Soaring Society', width: 1286, height: 1714 },
    { src: '/gallery/presidentaward.webp', caption: "President's Award, University Soaring Society", width: 1920, height: 1280 },
    { src: '/gallery/bramhacks.webp', caption: 'BramHacks 2025: Space Edition — Team N.O.P.S', width: 1440, height: 1920 },
    { src: '/gallery/bramhacksmentor.webp', caption: 'Working the build overnight at BramHacks', width: 1280, height: 1707 },
    { src: '/gallery/Canada Leadership Conference.webp', caption: 'Canadian Engineering Leadership Conference, St. John\'s NL', width: 1200, height: 1600 },
    { src: '/gallery/ast501-placeholder.svg', caption: 'AST501 — Astronaut & Space Training (sample, swap for your photo)', width: 1200, height: 1200 },
    { src: '', caption: 'Skydiving — photos coming soon', pending: true },
];

// Compact print-only "media kit" — the on-screen page is a long scrolling
// story, but a distributable PDF needs to fit in ~2 pages.
const printCredentials = [
    {
        image: '/gallery/withDA20.webp',
        alt: 'Ammar with a Diamond DA20',
        title: 'Private & Glider Pilot',
        body: "Licensed private and glider pilot, trained on the Diamond DA20 and cross-country gliders. Active member of the University Soaring Society (USS); recognized with a President's Award for contributions to the club.",
    },
    {
        image: '/gallery/bramhacks.webp',
        alt: "Ammar's team at BramHacks 2025: Space Edition",
        title: 'BramHacks 2025: Space Edition — N.O.P.S.',
        body: 'Built N.O.P.S. (Navigation Offline Positioning System) with a 5-person team: an IMU-driven (gyroscope, accelerometer, magnetometer) offline autonomous navigation system for space and robotics applications. Took home an award, judged live.',
    },
    {
        image: '/gallery/ast501-placeholder.svg',
        alt: 'AST501 astronaut and space training placeholder',
        title: 'AST501 — Astronaut & Space Training',
        body: 'Astronaut and space-systems training program. (Sample placeholder graphic below — swap in training photo and finalize details.)',
    },
    {
        image: '/gallery/bramhacksmentor.webp',
        alt: 'Ammar working at a hackathon',
        title: '25+ Hackathons',
        body: 'Competed in 25+ hackathons across North America building robotics and software systems on 24-48 hour deadlines — the same instinct behind the space and EV-charging robotics work on this site.',
    },
];

const printGalleryItems = [
    { src: '/gallery/withDA20.webp', caption: 'With a Diamond DA20' },
    { src: '/gallery/pilot.webp', caption: 'Mid-flight' },
    { src: '/gallery/pillot.webp', caption: 'USS glider training' },
    { src: '/gallery/presidentaward.webp', caption: "USS President's Award" },
    { src: '/gallery/bramhacks.webp', caption: 'BramHacks 2025: Space Edition' },
    { src: '/gallery/bramhacksmentor.webp', caption: 'Overnight build at BramHacks' },
    { src: '/gallery/Canada Leadership Conference.webp', caption: "Canadian Eng. Leadership Conf." },
    { src: '/gallery/ast501-placeholder.svg', caption: 'AST501 (sample placeholder)' },
];

export default function BeyondEngineeringPage() {
    return (
        <div className="beyond-engineering-page min-h-screen bg-black text-white">
            <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
                <Link
                    href="/"
                    className="no-print inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Portfolio
                </Link>

                {/* Screen: Hero */}
                <header className="no-print mt-14 flex flex-col items-start gap-8 sm:mt-20 sm:flex-row sm:items-center">
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
                        <h1 className={`${playfair.className} text-4xl uppercase leading-tight sm:text-6xl`}>
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

                {/* Screen: Intro */}
                <section className="no-print mt-14 max-w-3xl space-y-5 text-lg leading-relaxed text-white/80 sm:mt-20">
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

                {/* Screen: continuous bio — piloting, soaring, space hackathons */}
                <section className="no-print mt-20 space-y-20 sm:mt-28">
                    <BioBlock
                        image="/gallery/withDA20.webp"
                        imageAlt="Ammar with a Diamond DA20 trainer aircraft"
                        width={1286}
                        height={1714}
                    >
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
                        width={1920}
                        height={1280}
                        reverse
                    >
                        <p>
                            That involvement with USS was recognized with a President&apos;s Award for
                            contributions to the club — presented on stage alongside teammates who logged just as
                            many early mornings at the airfield. Between checklists, cockpit selfies, and the
                            occasional look straight down the wing at 2,000 feet, flying has stayed the one hobby
                            that has nothing to do with a keyboard.
                        </p>
                        <p>
                            The same instinct — chase the thing that gets you off the ground — carries over into
                            Ammar&apos;s space work.
                        </p>
                    </BioBlock>

                    <BioBlock
                        image="/gallery/bramhacks.webp"
                        imageAlt="Ammar's team at BramHacks 2025: Space Edition"
                        width={1440}
                        height={1920}
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
                        image="/gallery/ast501-placeholder.svg"
                        imageAlt="AST501 astronaut and space training placeholder"
                        width={1200}
                        height={1200}
                        reverse
                    >
                        <p>
                            <strong className="text-white">AST501 — Astronaut &amp; Space Training.</strong> Ammar
                            has also gone through space and astronaut-oriented training under this program. The
                            graphic here is a placeholder — swap it for the real training photo whenever it&apos;s
                            ready, and expand this paragraph with the specifics.
                        </p>
                    </BioBlock>

                    <BioBlock
                        image="/gallery/bramhacksmentor.webp"
                        imageAlt="Ammar's team working through the night at a hackathon"
                        width={1280}
                        height={1707}
                    >
                        <p>
                            AST501 sits alongside 25+ hackathons Ammar has competed in — evenings that usually end
                            with too much coffee, a pile of wires, and a demo assembled about ten minutes before
                            judging. It is also the throughline behind most of the robotics work on this site: an
                            IMU-driven navigation stack for space isn&apos;t so different from a perception stack
                            for an EV-charging robot arm.
                        </p>
                        <p>
                            Next on the list: turning &ldquo;aspiring skydiver&rdquo; into an actual jump —
                            watch this space.
                        </p>
                    </BioBlock>
                </section>

                {/* Screen: Gallery */}
                <section className="no-print mt-20 sm:mt-28">
                    <h2 className={`${playfair.className} text-2xl tracking-wide sm:text-3xl`}>Gallery</h2>
                    <div className="mt-8">
                        <CaptionedGallery items={galleryItems} />
                    </div>
                </section>

                {/* Screen: Contact */}
                <section className="no-print mt-20 border-t border-white/10 pt-12 sm:mt-28">
                    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                        <Image
                            src="/gallery/pilot.webp"
                            alt="Ammar in the cockpit"
                            width={1080}
                            height={1080}
                            loading="eager"
                            className="h-auto w-full rounded-2xl"
                        />
                        <div>
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
                        </div>
                    </div>
                </section>

                <div className="no-print mt-16 border-t border-white/10 pt-8 text-center">
                    <Link href="/" className="text-sm text-white/50 hover:text-white">
                        ← Back to Portfolio
                    </Link>
                </div>

                {/* Print-only: compact 2-page media kit */}
                <div className="print-only">
                    <div className="flex items-center gap-4 border-b border-zinc-300 pb-3">
                        <Image
                            src="/professional-headshot.webp"
                            alt="Ammar J Mahmood"
                            width={80}
                            height={80}
                            className="h-16 w-16 rounded-full object-cover"
                        />
                        <div>
                            <h1 className={`${playfair.className} text-2xl uppercase leading-none text-zinc-900`}>
                                Ammar J Mahmood
                            </h1>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                Private &amp; Glider Pilot · Space &amp; Robotics Hackathon Competitor
                            </p>
                        </div>
                    </div>

                    <p className="mt-3 text-[11px] leading-snug text-zinc-800">
                        Mechatronics Engineering student and robotics engineer. Licensed private and glider pilot;
                        competes at hackathons across North America — 25 and counting; builds navigation systems
                        for space and robotics applications. Aspiring skydiver.
                    </p>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {printCredentials.map((c) => (
                            <div key={c.title} className="flex gap-2">
                                <Image
                                    src={c.image}
                                    alt={c.alt}
                                    width={200}
                                    height={200}
                                    className="h-16 w-16 shrink-0 rounded-md object-cover"
                                />
                                <div>
                                    <p className={`${playfair.className} text-[12px] font-semibold leading-tight text-zinc-900`}>
                                        {c.title}
                                    </p>
                                    <p className="mt-0.5 text-[9px] leading-snug text-zinc-600">{c.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className={`${playfair.className} mt-4 text-sm uppercase tracking-wide text-zinc-900`}>
                        Gallery
                    </h2>
                    <div className="mt-2 grid grid-cols-4 gap-2">
                        {printGalleryItems.map((g) => (
                            <div key={g.src}>
                                <Image
                                    src={g.src}
                                    alt={g.caption}
                                    width={300}
                                    height={300}
                                    className="aspect-square w-full rounded-md object-cover"
                                />
                                <p className="mt-0.5 text-[8px] leading-tight text-zinc-500">{g.caption}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-zinc-300 pt-2 text-[10px] text-zinc-700">
                        <span>ammarjmahmood@gmail.com</span>
                        <span>linkedin.com/in/ammarjmahmood</span>
                        <span>github.com/ammarjmahmood</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
