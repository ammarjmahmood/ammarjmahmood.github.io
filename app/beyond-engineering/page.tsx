import Image from 'next/image';
import Link from 'next/link';
import { Italiana, Kumbh_Sans } from 'next/font/google';
import { CaptionedGallery } from '@/components/captioned-gallery';
import { Reveal } from '@/components/reveal';

// Closest free matches to the source site's Canva fonts ("The Seasons" display + a geometric sans).
const display = Italiana({ subsets: ['latin'], weight: '400' });
const sans = Kumbh_Sans({ subsets: ['latin'], weight: ['300', '400'] });

export const metadata = {
    title: 'Ammar J Mahmood — Robotics & Astronaut Training',
    description:
        'Press kit for Ammar J Mahmood: robotics engineer, AST501 astronaut and space training, private and glider pilot.',
};

// Order matters: slots cycle 3:4, 4:3, 3:4 / 3:4, 3:4, 3:2 (see .be-tile in globals.css).
const gallery = [
    { src: '/gallery/ast501-placeholder.svg', caption: 'AST501 Astronaut Training', width: 1200, height: 1200 },
    { src: '/gallery/withDA20.webp', caption: 'Private Pilot', width: 1286, height: 1714, position: '50% 62%' },
    { src: '/gallery/pillot.webp', caption: 'In the Cockpit', width: 1286, height: 1714 },
    { src: '/gallery/bramhacks.webp', caption: 'BramHacks 2025: Space Edition', width: 1440, height: 1920 },
    { src: '/purpose-robotics-thumbnail.webp', caption: 'Purpose Robotics Humanoid', width: 862, height: 1200 },
    { src: '/gallery/skydiving-placeholder.svg', caption: 'Skydiving', width: 1500, height: 1000 },
    { src: '/viam-hackathon-team.webp', caption: 'Viam Robot Hackathon', width: 1932, height: 2576 },
    { src: '/gallery/pilot.webp', caption: 'Glider Training', width: 1080, height: 1080, position: '50% 20%' },
    { src: '/kiwi-charge-tmu-showcase.webp', caption: 'Clean Energy Showcase, TMU', width: 1600, height: 2134 },
    { src: '/gallery/bramhacksmentor.webp', caption: 'Overnight Build, BramHacks', width: 1280, height: 1707 },
    { src: '/gallery/Canada Leadership Conference.webp', caption: 'Engineering Leadership Conference', width: 1200, height: 1600 },
    { src: '/kiwi-charge-robot.webp', caption: 'Kiwi Charge EV-Charging Robot', width: 848, height: 1264, position: '50% 60%' },
];

const features = [
    { src: '/gallery/arrc_thumbnail.webp', width: 720, height: 530, label: 'ARRC — arXiv Research Paper', href: 'https://arxiv.org/abs/2510.05547' },
    { src: '/gallery/paper11.webp', width: 906, height: 734, label: 'Robust Visual Embodiment — arXiv Paper', href: 'https://arxiv.org/abs/2510.03677' },
    { src: '/Featured Instructables.webp', width: 3024, height: 1794, label: 'Featured on Instructables', href: 'https://www.instructables.com/member/amarsbar/' },
    { src: '/autodesk-assistant-fusion.jpg', width: 1280, height: 720, label: 'Autodesk AI Lab Internship', href: '/projects/autodesk-internship/' },
    { src: '/kiwi-fr5-mujoco-poster.webp', width: 1600, height: 922, label: 'Kiwi Charge Robot Simulation', href: '/projects/kiwi-fr5-mujoco-simulation/' },
    { src: '/viam-hackathon-medal.webp', width: 1242, height: 2208, label: 'Viam Hackathon — Fine Motor Skills Winner', href: '/projects/viam-robot-hackathon-jenga/' },
];

// Print-only one-page media kit (screen layout above is hidden when printing).
const printCredentials = [
    {
        image: '/gallery/ast501-placeholder.svg',
        title: 'AST501 — Astronaut & Space Training',
        body: 'Astronaut and space training through the AST501 program, paired with day-to-day robotics and autonomy research.',
    },
    {
        image: '/gallery/withDA20.webp',
        title: 'Private & Glider Pilot',
        body: "Licensed private and glider pilot (Diamond DA20, cross-country gliders). University Soaring Society President's Award.",
    },
    {
        image: '/gallery/bramhacks.webp',
        title: 'BramHacks 2025: Space Edition — N.O.P.S.',
        body: 'Award-winning IMU-based offline autonomous navigation system for space and robotics applications, built with a 5-person team.',
    },
    {
        image: '/kiwi-charge-robot.webp',
        title: 'Robotics Engineer — Kiwi Charge',
        body: 'Builds autonomous EV-charging robots; presented at the Clean Energy showcase at Toronto Metropolitan University. 25+ hackathons.',
    },
];

export default function BeyondEngineeringPage() {
    return (
        <div className={`be ${sans.className} beyond-engineering-page min-h-screen`}>
            {/* ---------- Screen layout ---------- */}
            <div className="no-print">
                <Link
                    href="/"
                    className="fixed bottom-4 left-4 z-40 rounded-full border border-[#eeeee6]/15 bg-[#0e0a0a]/80 px-3 py-1.5 text-[10px] tracking-widest text-[#eeeee6]/70 uppercase backdrop-blur transition-colors hover:text-[#eeeee6]"
                >
                    ← Portfolio
                </Link>

                {/* Hero */}
                <Reveal>
                    <header className="be-hero">
                        <div className="be-hero-photo">
                            <Image
                                src="/professional-headshot.webp"
                                alt="Ammar J Mahmood"
                                fill
                                sizes="34vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <h1 className={`be-hero-name be-name ${display.className}`}>
                            Ammar J
                            <br />
                            Mahmood
                        </h1>
                        <div className="be-hero-subs be-sub">
                            <p>Robotics Engineer · Astronaut Training (AST501)</p>
                            <p>Private &amp; Glider Pilot</p>
                        </div>
                    </header>
                </Reveal>

                {/* Bio row 1 — text left, image right */}
                <Reveal className="be-row be-row-1">
                    <p className="be-body font-light">
                        Ammar J Mahmood is a Mechatronics Engineering student and robotics engineer training for a
                        future in space. Through the AST501 astronaut and space training program, he pairs hands-on
                        astronaut preparation with the robotics and autonomy research he does every day — building
                        machines that can see, navigate, and act on their own.
                    </p>
                    <Image
                        src="/gallery/ast501-placeholder.svg"
                        alt="AST501 astronaut training (placeholder)"
                        width={1200}
                        height={1200}
                        loading="eager"
                        className="be-radius h-auto w-full"
                    />
                </Reveal>

                {/* Bio row 2 — image left, text right */}
                <Reveal className="be-row be-row-2">
                    <Image
                        src="/gallery/withDA20.webp"
                        alt="Ammar with a Diamond DA20 aircraft"
                        width={1286}
                        height={1714}
                        loading="eager"
                        className="be-radius aspect-[43.8/41] h-auto w-full object-cover object-[50%_60%]"
                    />
                    <p className="be-body font-light">
                        A licensed private and glider pilot, Ammar has trained on aircraft like the Diamond DA20 and
                        flies cross-country gliders with the University Soaring Society, where he received a
                        President&apos;s Award for his contributions to the club. Outside the cockpit, he has competed
                        in more than 25 hackathons across North America and is fluent in English and French.
                    </p>
                </Reveal>

                {/* Bio row 3 — text left, image right */}
                <Reveal className="be-row be-row-3">
                    <p className="be-body font-light">
                        His robotics work points skyward too. At BramHacks 2025 — Space Edition, his team built
                        N.O.P.S. (Navigation Offline Positioning System), an IMU-based autonomous navigation system for
                        space and robotics applications that tracks position without GPS, and took home an award. By
                        day he builds autonomous EV-charging robots at Kiwi Charge, work he has presented to industry
                        professionals and researchers at Toronto Metropolitan University.
                    </p>
                    <Image
                        src="/gallery/bramhacks.webp"
                        alt="Ammar's team at BramHacks 2025: Space Edition"
                        width={1440}
                        height={1920}
                        loading="eager"
                        className="be-radius h-auto w-full"
                    />
                </Reveal>

                {/* Pull quote */}
                <Reveal className="be-quote-wrap">
                    <p className="be-quote font-light">
                        &ldquo;Engineering is about pushing boundaries, one line of code and one circuit at a
                        time.&rdquo;
                    </p>
                </Reveal>

                {/* Gallery */}
                <section className="mt-[5vw]">
                    <Reveal>
                        <h2 className={`be-h2 ${display.className} ml-[4.1vw] mb-[3vw]`}>Gallery</h2>
                    </Reveal>
                    <CaptionedGallery items={gallery} captionClassName="be-caption font-light" />
                </section>

                {/* Publications & features (press) */}
                <section className="mt-[12vw]">
                    <Reveal>
                        <h2 className={`be-h2 ${display.className} ml-[4.1vw] mb-[5vw]`}>Publications &amp; Features</h2>
                    </Reveal>
                    <Reveal className="be-press">
                        {features.map((f) => (
                            <figure key={f.src}>
                                <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                    <Image
                                        src={f.src}
                                        alt={f.label}
                                        width={f.width}
                                        height={f.height}
                                        loading="eager"
                                        className="aspect-[16/10] h-auto w-full object-cover"
                                    />
                                </a>
                                <figcaption className="be-press-caption font-light">
                                    <a href={f.href} target={f.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                        {f.label}
                                    </a>
                                </figcaption>
                            </figure>
                        ))}
                    </Reveal>
                </section>

                {/* Contact */}
                <Reveal className="be-contact mt-[12vw] pb-[8vw]">
                    <div className="be-contact-photo">
                        <Image
                            src="/gallery/presidentaward.webp"
                            alt="Ammar at the University Soaring Society awards"
                            width={1920}
                            height={1280}
                            loading="eager"
                            className="h-auto w-full"
                        />
                    </div>
                    <div className="pr-[3vw]">
                        <h2 className={`be-contact-h ${display.className}`}>
                            Contact me and
                            <br />
                            follow my journey
                        </h2>
                        <div className="be-contact-links be-body font-light">
                            <p>
                                Email: <a href="mailto:ammarjmahmood@gmail.com">ammarjmahmood@gmail.com</a>
                            </p>
                            <p>
                                LinkedIn:{' '}
                                <a href="https://www.linkedin.com/in/ammarjmahmood" target="_blank" rel="noopener noreferrer">
                                    Ammar J Mahmood
                                </a>
                            </p>
                            <p>
                                YouTube:{' '}
                                <a href="https://www.youtube.com/@amarssbarr" target="_blank" rel="noopener noreferrer">
                                    @amarssbarr
                                </a>
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ---------- Print-only: one-page media kit ---------- */}
            <div className="print-only mx-auto max-w-5xl px-2">
                <div className="flex items-center gap-4 border-b border-zinc-300 pb-3">
                    <Image
                        src="/professional-headshot.webp"
                        alt="Ammar J Mahmood"
                        width={80}
                        height={80}
                        className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                        <h1 className={`${display.className} text-3xl uppercase leading-none text-zinc-900`}>
                            Ammar J Mahmood
                        </h1>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                            Robotics Engineer · Astronaut Training (AST501) · Private &amp; Glider Pilot
                        </p>
                    </div>
                </div>

                <p className="mt-3 text-[11px] leading-snug text-zinc-800">
                    Mechatronics Engineering student and robotics engineer training for a future in space. AST501
                    astronaut and space training, licensed private and glider pilot, 25+ hackathons, and
                    award-winning autonomous-navigation work for space and robotics applications.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                    {printCredentials.map((c) => (
                        <div key={c.title} className="flex gap-2">
                            <Image
                                src={c.image}
                                alt={c.title}
                                width={200}
                                height={200}
                                className="h-16 w-16 shrink-0 rounded-md object-cover"
                            />
                            <div>
                                <p className={`${display.className} text-[13px] leading-tight text-zinc-900`}>{c.title}</p>
                                <p className="mt-0.5 text-[9px] leading-snug text-zinc-600">{c.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className={`${display.className} mt-4 text-base uppercase tracking-wide text-zinc-900`}>Gallery</h2>
                <div className="mt-2 grid grid-cols-6 gap-2">
                    {gallery.map((g) => (
                        <div key={g.src}>
                            <Image
                                src={g.src}
                                alt={g.caption}
                                width={300}
                                height={300}
                                className="aspect-square w-full rounded-md object-cover"
                            />
                            <p className="mt-0.5 text-[7px] leading-tight text-zinc-500">{g.caption}</p>
                        </div>
                    ))}
                </div>

                <h2 className={`${display.className} mt-4 text-base uppercase tracking-wide text-zinc-900`}>
                    Publications &amp; Features
                </h2>
                <ul className="mt-1 grid grid-cols-2 gap-x-4 text-[9px] leading-relaxed text-zinc-700">
                    {features.map((f) => (
                        <li key={f.src}>
                            {f.label}
                            {f.href.startsWith('http') ? ` — ${f.href.replace('https://', '')}` : ''}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-zinc-300 pt-2 text-[10px] text-zinc-700">
                    <span>ammarjmahmood@gmail.com</span>
                    <span>linkedin.com/in/ammarjmahmood</span>
                    <span>ammarjmahmood.me</span>
                </div>
            </div>
        </div>
    );
}
