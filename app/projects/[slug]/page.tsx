import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, ExternalLink, Calendar, User, Clock, Target } from 'lucide-react';
import { projects } from '@/lib/projects-data';

// Generate static params for all projects
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} - Ammar J Mahmood`,
        description: project.shortDescription,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    // Get related projects
    const relatedProjects = project.relatedProjects
        ? projects.filter(p => project.relatedProjects?.includes(p.id)).slice(0, 2)
        : projects.filter(p =>
            p.id !== project.id &&
            p.type.some(t => project.type.includes(t))
        ).slice(0, 2);

    // Categorize technical stack
    const stackCategories: Record<string, string[]> = {
        'CAD': [],
        'Programming': [],
        'Hardware': [],
        'Frameworks': [],
        'Other': []
    };

    project.technicalStack.forEach(tech => {
        const lowerTech = tech.toLowerCase();
        if (lowerTech.includes('solidworks') || lowerTech.includes('fusion') || lowerTech.includes('cad')) {
            stackCategories['CAD'].push(tech);
        } else if (lowerTech.includes('python') || lowerTech.includes('javascript') || lowerTech.includes('c++') || lowerTech.includes('typescript')) {
            stackCategories['Programming'].push(tech);
        } else if (lowerTech.includes('arduino') || lowerTech.includes('motor') || lowerTech.includes('sensor') || lowerTech.includes('battery') || lowerTech.includes('imu')) {
            stackCategories['Hardware'].push(tech);
        } else if (lowerTech.includes('react') || lowerTech.includes('tensorflow') || lowerTech.includes('pytorch') || lowerTech.includes('ros') || lowerTech.includes('opencv') || lowerTech.includes('next') || lowerTech.includes('node')) {
            stackCategories['Frameworks'].push(tech);
        } else {
            stackCategories['Other'].push(tech);
        }
    });

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 lg:px-12">
                {/* Back Button */}
                <Link href="/#projects">
                    <Button variant="ghost" className="mb-8 gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Button>
                </Link>

                {/* Main Layout: Content + Sidebar */}
                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
                    {/* Main Content */}
                    <main>
                        {/* Header */}
                        <div className="mb-8">
                            <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
                                {project.type.join(' + ')} Project
                            </div>

                            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{project.title}</h1>

                            <p className="text-lg text-muted-foreground mb-6">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {project.githubUrl && !project.isPrivate && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="default" className="gap-2">
                                            <Github className="h-4 w-4" />
                                            View on GitHub
                                        </Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="gap-2">
                                            <ExternalLink className="h-4 w-4" />
                                            {project.liveUrl.includes('docs.google.com') ? 'Detailed Report' : 'Live Demo'}
                                        </Button>
                                    </a>
                                )}
                                {project.isPrivate && (
                                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1.5">
                                        Private Repository
                                    </Badge>
                                )}
                            </div>
                        </div>

                        {/* YouTube Video */}
                        {project.videoUrl && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Demo Video</h2>
                                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
                                    <iframe
                                        className="absolute inset-0 h-full w-full"
                                        src={project.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                        title={project.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </section>
                        )}

                        {/* Overview Section */}
                        {project.sections?.overview && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Overview</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    {project.sections.overview.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-foreground mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Mechanical Design Section */}
                        {project.sections?.mechanicalDesign && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Mechanical Design</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    {project.sections.mechanicalDesign.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-foreground mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Electrical Design Section */}
                        {project.sections?.electricalDesign && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Electrical Design</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    {project.sections.electricalDesign.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-foreground mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Software Architecture Section */}
                        {project.sections?.softwareArchitecture && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Software Architecture</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    {project.sections.softwareArchitecture.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-foreground mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Project Images Gallery */}
                        {project.detailImages.length > 1 && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
                                <div className="grid gap-4 md:grid-cols-2">
                                    {project.detailImages.slice(1).map((image, index) => (
                                        <div
                                            key={index}
                                            className="relative aspect-video overflow-hidden rounded-lg bg-muted"
                                        >
                                            {image.includes('youtube.com') || image.includes('youtu.be') ? (
                                                <iframe
                                                    className="absolute inset-0 h-full w-full"
                                                    src={image.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                                                    title={`${project.title} - Video ${index + 1}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            ) : (
                                                <Image
                                                    src={image}
                                                    alt={`${project.title} - Image ${index + 2}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Results & Achievements Section */}
                        {project.sections?.results && (
                            <section className="mb-12">
                                <h2 className="mb-4 text-2xl font-bold">Results & Achievements</h2>
                                <div className="prose prose-gray dark:prose-invert max-w-none">
                                    {project.sections.results.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="leading-relaxed text-foreground mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                {project.achievements && project.achievements.length > 0 && (
                                    <ul className="list-disc list-inside space-y-2 mt-4">
                                        {project.achievements.map((achievement, index) => (
                                            <li key={index} className="text-foreground">
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        )}

                        {/* Navigation to other projects */}
                        <div className="flex justify-between items-center pt-12 border-t">
                            {prevProject ? (
                                <Link href={`/projects/${prevProject.slug}`}>
                                    <Button variant="ghost" className="gap-2">
                                        <ArrowLeft className="h-4 w-4" />
                                        <div className="text-left">
                                            <p className="text-xs text-muted-foreground">Previous</p>
                                            <p className="font-medium">{prevProject.title}</p>
                                        </div>
                                    </Button>
                                </Link>
                            ) : (
                                <div />
                            )}

                            <Link href="/#projects">
                                <Button variant="outline">All Projects</Button>
                            </Link>

                            {nextProject ? (
                                <Link href={`/projects/${nextProject.slug}`}>
                                    <Button variant="ghost" className="gap-2">
                                        <div className="text-right">
                                            <p className="text-xs text-muted-foreground">Next</p>
                                            <p className="font-medium">{nextProject.title}</p>
                                        </div>
                                        <ExternalLink className="h-4 w-4" />
                                    </Button>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        {/* Hero Image */}
                        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Project at a Glance */}
                        <Card className="p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                                Project at a Glance
                            </h3>
                            <div className="space-y-4">
                                {project.role && (
                                    <div className="flex items-start gap-3">
                                        <User className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Role</p>
                                            <p className="font-medium">{project.role}</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-start gap-3">
                                    <Target className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Type</p>
                                        <p className="font-medium">{project.type.join(' + ')}</p>
                                    </div>
                                </div>
                                {project.duration && (
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Duration</p>
                                            <p className="font-medium">{project.duration}</p>
                                        </div>
                                    </div>
                                )}
                                {project.scope && (
                                    <div className="flex items-start gap-3">
                                        <Calendar className="h-4 w-4 mt-1 text-muted-foreground flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Scope</p>
                                            <p className="font-medium text-sm">{project.scope}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Card>

                        {/* Technical Stack */}
                        <Card className="p-6">
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                                Technical Stack
                            </h3>
                            <div className="space-y-4">
                                {Object.entries(stackCategories).map(([category, techs]) =>
                                    techs.length > 0 && (
                                        <div key={category}>
                                            <p className="text-xs text-muted-foreground mb-2">{category}</p>
                                            <p className="font-medium text-sm">{techs.join(', ')}</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </Card>

                        {/* Related Projects */}
                        {relatedProjects.length > 0 && (
                            <Card className="p-6">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
                                    Related Projects
                                </h3>
                                <div className="space-y-3">
                                    {relatedProjects.map((relProject) => (
                                        <Link
                                            key={relProject.id}
                                            href={`/projects/${relProject.slug}`}
                                            className="block group"
                                        >
                                            <div className="flex gap-3">
                                                <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                                                    <Image
                                                        src={relProject.thumbnail}
                                                        alt={relProject.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                                                        {relProject.title}
                                                    </p>
                                                    <div className="flex gap-1 mt-1">
                                                        {relProject.type.slice(0, 2).map((type) => (
                                                            <Badge key={type} variant="secondary" className="text-xs">
                                                                {type}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Card>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
}
