import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar, Youtube } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-provider';
import { tutorials } from '@/lib/tutorials-data';

export const metadata = {
    title: 'Blog & Tutorials - Ammar J Mahmood',
    description: 'Guides, tutorials, and write-ups on 3D printing, robotics, embedded systems, and more.',
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto max-w-4xl px-4 py-8 md:px-8">
                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Portfolio
                    </Link>
                    <ThemeToggle />
                </div>

                <div className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-3">Blog & Tutorials</h1>
                    <p className="text-lg text-muted-foreground">
                        How-to guides, project write-ups, and things I&apos;ve learned along the way.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="space-y-6">
                    {tutorials.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                                <div className="flex flex-col sm:flex-row">
                                    {/* Thumbnail */}
                                    <div className="relative sm:w-64 h-48 sm:h-auto flex-shrink-0 bg-muted">
                                        {post.thumbnail ? (
                                            <Image
                                                src={post.thumbnail}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                                <span className="text-4xl">📝</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-6">
                                        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3.5 w-3.5" />
                                                {new Date(post.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                {post.readTime}
                                            </span>
                                            {post.youtubeUrl && (
                                                <span className="flex items-center gap-1 text-red-500">
                                                    <Youtube className="h-3.5 w-3.5" />
                                                    Video
                                                </span>
                                            )}
                                        </div>

                                        <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                            {post.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {post.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                {tutorials.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">No posts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
