import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Youtube, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-provider';
import { tutorials } from '@/lib/tutorials-data';

export async function generateStaticParams() {
    return tutorials.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = tutorials.find((p) => p.slug === slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.title} - Ammar J Mahmood`,
        description: post.description,
    };
}

function getYouTubeEmbedUrl(url: string): string | null {
    if (!url) return null;
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = tutorials.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const currentIndex = tutorials.findIndex((p) => p.slug === slug);
    const prevPost = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
    const nextPost = currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

    const embedUrl = post.youtubeUrl ? getYouTubeEmbedUrl(post.youtubeUrl) : null;

    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-3xl px-4 py-8 md:px-8">
                {/* Top Bar */}
                <div className="mb-10 flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        All Posts
                    </Link>
                    <ThemeToggle />
                </div>

                {/* Article Header */}
                <header className="mb-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {post.title}
                    </h1>

                    <p className="text-lg text-muted-foreground mb-4">{post.description}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </span>
                    </div>

                    {post.instructablesUrl && (
                        <a
                            href={post.instructablesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-sm font-medium text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500/20 transition-colors"
                        >
                            <ExternalLink className="h-4 w-4" />
                            View full tutorial on Instructables
                        </a>
                    )}
                </header>

                {/* YouTube Video */}
                {embedUrl && (
                    <div className="mb-10">
                        <Card className="overflow-hidden">
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    src={embedUrl}
                                    title={post.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>
                        </Card>
                        <a
                            href={post.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-3 text-sm text-red-500 hover:text-red-400 transition-colors"
                        >
                            <Youtube className="h-4 w-4" />
                            Watch on YouTube
                        </a>
                    </div>
                )}

                {/* Article Body */}
                <article className="space-y-10">
                    {post.content.map((section, idx) => (
                        <section key={idx}>
                            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>

                            <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground">
                                {section.body.split('\n\n').map((paragraph, pIdx) => {
                                    // Check if it's a list
                                    const lines = paragraph.split('\n');
                                    const isList = lines.every(
                                        (l) => l.startsWith('- ') || l.startsWith('  ') || l.trim() === ''
                                    );
                                    const isNumberedList = lines.every(
                                        (l) => /^\d+\./.test(l.trim()) || l.trim() === ''
                                    );

                                    if (isNumberedList) {
                                        return (
                                            <ol key={pIdx} className="list-decimal list-inside space-y-2 my-4 text-sm leading-relaxed">
                                                {lines
                                                    .filter((l) => l.trim())
                                                    .map((line, lIdx) => (
                                                        <li key={lIdx} className="pl-1">
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: line
                                                                        .replace(/^\d+\.\s*/, '')
                                                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                                        .replace(
                                                                            /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
                                                                            '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
                                                                        ),
                                                                }}
                                                            />
                                                        </li>
                                                    ))}
                                            </ol>
                                        );
                                    }

                                    if (isList) {
                                        return (
                                            <ul key={pIdx} className="list-disc list-inside space-y-2 my-4 text-sm leading-relaxed">
                                                {lines
                                                    .filter((l) => l.startsWith('- '))
                                                    .map((line, lIdx) => (
                                                        <li key={lIdx} className="pl-1">
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: line
                                                                        .replace(/^- /, '')
                                                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                                        .replace(
                                                                            /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
                                                                            '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
                                                                        ),
                                                                }}
                                                            />
                                                        </li>
                                                    ))}
                                            </ul>
                                        );
                                    }

                                    return (
                                        <p
                                            key={pIdx}
                                            className="text-sm leading-relaxed my-3"
                                            dangerouslySetInnerHTML={{
                                                __html: paragraph
                                                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                                    .replace(
                                                        /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,
                                                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
                                                    ),
                                            }}
                                        />
                                    );
                                })}
                            </div>

                            {section.image && (
                                <div className="mt-6 rounded-lg overflow-hidden border border-border">
                                    <Image
                                        src={section.image}
                                        alt={section.imageAlt || section.heading}
                                        width={800}
                                        height={450}
                                        className="w-full object-cover"
                                    />
                                </div>
                            )}

                            {section.code && (
                                <pre className="mt-4 p-4 rounded-lg bg-muted overflow-x-auto text-sm">
                                    <code>{section.code}</code>
                                </pre>
                            )}
                        </section>
                    ))}
                </article>

                {/* Post Navigation */}
                <nav className="mt-16 pt-8 border-t border-border">
                    <div className="flex justify-between gap-4">
                        {prevPost ? (
                            <Link
                                href={`/blog/${prevPost.slug}`}
                                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                <div>
                                    <p className="text-xs text-muted-foreground">Previous</p>
                                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                                        {prevPost.title}
                                    </p>
                                </div>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {nextPost ? (
                            <Link
                                href={`/blog/${nextPost.slug}`}
                                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
                            >
                                <div>
                                    <p className="text-xs text-muted-foreground">Next</p>
                                    <p className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                                        {nextPost.title}
                                    </p>
                                </div>
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        ) : (
                            <div />
                        )}
                    </div>
                </nav>

                {/* Footer */}
                <div className="mt-12 pt-8 border-t border-border text-center">
                    <Link
                        href="/blog"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </div>
    );
}
