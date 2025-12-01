'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface CertificationModalProps {
    title: string;
    description: string;
    imagePath: string;
    isOpen: boolean;
    onClose: () => void;
}

export function CertificationModal({
    title,
    description,
    imagePath,
    isOpen,
    onClose,
}: CertificationModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="relative w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                    <Image
                        src={imagePath}
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
