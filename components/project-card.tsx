'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Lock } from 'lucide-react';
import { Project } from '@/lib/projects-data';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={`/projects/${project.slug}`}>
            <Card
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                        src={isHovered && project.previewMedia ? project.previewMedia : project.thumbnail}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${project.thumbnailAlignment ? `object-${project.thumbnailAlignment}` : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Type badges overlay */}
                    <div className="absolute top-3 right-3 flex flex-wrap gap-1.5">
                        {project.type.map((type) => (
                            <Badge
                                key={type}
                                variant="secondary"
                                className="bg-background/90 backdrop-blur-sm text-xs"
                            >
                                {type}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                        {project.achievements && project.achievements.length > 0 && (
                            <Badge variant="outline" className="text-xs">
                                {project.achievements[0]}
                            </Badge>
                        )}
                        {project.isPrivate && (
                            <span className="flex items-center gap-1 text-muted-foreground italic">
                                <Lock className="h-3 w-3" />
                                Private
                            </span>
                        )}
                        {project.githubUrl && !project.isPrivate && (
                            <span className="flex items-center gap-1 text-primary hover:underline">
                                GitHub <ExternalLink className="h-3 w-3" />
                            </span>
                        )}
                    </div>
                </div>
            </Card>
        </Link>
    );
}
