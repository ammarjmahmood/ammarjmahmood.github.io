'use client';

import { useState } from 'react';
import { ProjectType } from '@/lib/projects-data';
import { Badge } from '@/components/ui/badge';

interface ProjectFilterProps {
    activeFilter: ProjectType;
    onFilterChange: (filter: ProjectType) => void;
}

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
    const filters: ProjectType[] = ['All', 'Mechanical', 'Electrical', 'Software', 'Machine Learning', 'Web Design'];

    return (
        <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onFilterChange(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${activeFilter === filter
                        ? 'bg-primary text-primary-foreground shadow-md scale-105'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}
