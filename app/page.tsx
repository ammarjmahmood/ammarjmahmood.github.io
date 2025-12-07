'use client';

import { useState } from 'react';
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Globe, CheckCircle2, Award, GraduationCap, FileText } from "lucide-react"
import {
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  FontAwesomeTikTokIcon,
  XIcon,
  InstructablesIcon,
  GoogleScholarIcon,
} from "@/components/icons"
import { ThemeToggle } from "@/components/theme-provider"
import { ProjectFilter } from "@/components/project-filter"
import { ProjectCard } from "@/components/project-card"
import { CertificationModal } from "@/components/certification-modal"
import { PhotoGallery } from "@/components/photo-gallery"
import { projects, certifications, type ProjectType } from "@/lib/projects-data"

export default function ResumePage() {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('All');
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);


  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.type.includes(activeFilter));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12 overflow-x-hidden">
        <div className="mb-6 flex justify-end">
          <ThemeToggle />
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Left Sidebar */}
          <aside className="space-y-6">
            {/* Profile Card */}
            <a href="https://www.linkedin.com/in/ammarjmahmood" target="_blank" rel="noopener noreferrer">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/professional-headshot.png"
                    alt="Ammar J Mahmood"
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                    priority
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h1 className="text-xl font-semibold">Ammar J Mahmood</h1>
                      <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">he/him</p>
                  </div>
                </div>
              </Card>
            </a>

            {/* 25+ Hackathons Badge */}
            <Card className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20">
                  <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm">25+ Hackathons</p>
                  <p className="text-xs text-muted-foreground">Competition Excellence</p>
                </div>
              </div>
            </Card>

            {/* About */}
            <div className="mt-6">
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">About</h2>
              <p className="text-sm leading-relaxed text-foreground">
                Mechatronics Engineering student passionate about Robotics, AI, and Embedded Systems.
                Full-stack developer, battle robot designer, and private & glider pilot.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Contact</h2>
              <div className="space-y-2">
                <a
                  href="mailto:ammarjmahmood@gmail.com"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <Globe className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://drive.google.com/drive/folders/16xlTKYRTrhAqe2WoXbv4He_-s8YwiVaI?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  <span>Resume</span>
                </a>
                <a
                  href="https://scholar.google.ca/citations?hl=en&view_op=list_works&gmla=AElLoL0Zc3-XITwkgGIZE8qJeANWCDQpaxe4eteBsJsZfXYXfghHXxDsXyqprvxWkSFF767PaiEOtaBaDT1XkKMROAZb&user=glPhta8AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <GoogleScholarIcon className="h-4 w-4" />
                  <span>Publications</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ammarjmahmood"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ammarjmahmood"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Robotics</Badge>
                <Badge variant="secondary">AI/ML</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">ROS</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">Embedded Systems</Badge>
                <Badge variant="secondary">CAD Design</Badge>
                <Badge variant="secondary">Arduino</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Isaac Lab</Badge>
                <Badge variant="secondary">Pybullet</Badge>
                <Badge variant="secondary">3D Printing</Badge>
                <Badge variant="secondary">IoT</Badge>
                <Badge variant="secondary">Pytorch</Badge>
                <Badge variant="secondary">Matlab</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Render</Badge>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Certifications
              </h2>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="w-full text-left p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                          {cert.title}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Languages</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xl">🇨🇦</span>
                  <span>English - Native</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-xl">🇫🇷</span>
                  <span>French - Fluent (DELF)</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ammarjmahmood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ammarjmahmood"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@amarssbarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@newbotics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <FontAwesomeTikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/aamarsbarr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instructables.com/member/amarsbar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <InstructablesIcon className="h-5 w-5" />
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-12">
            {/* Intro */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Intro</h2>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Hi there! I'm Ammar J Mahmood, a Mechatronics Engineering student with a passion for pushing
                  boundaries in Robotics, ML, AI, and Embedded Systems. Whether I'm working on projects, sharing knowledge,
                  or flying above the clouds, I'm always exploring new frontiers.
                </p>
                <p className="leading-relaxed">
                  <em>"Engineering is about pushing boundaries—one line of code and one circuit at a time."</em>
                </p>
              </div>
            </section>

            {/* Photo Gallery */}
            <PhotoGallery />

            {/* Projects */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured Projects
              </h2>

              <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

              <div className="grid gap-4 md:grid-cols-2">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            {/* Publications */}
            <section id="publications">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Publications</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white overflow-hidden border border-border">
                      <Image
                        src="/gallery/google_scholar_logo.png"
                        alt="Google Scholar"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="font-semibold text-lg">Research & Publications</h3>
                        <a
                          href="https://scholar.google.ca/citations?hl=en&view_op=list_works&gmla=AElLoL0Zc3-XITwkgGIZE8qJeANWCDQpaxe4eteBsJsZfXYXfghHXxDsXyqprvxWkSFF767PaiEOtaBaDT1XkKMROAZb&user=glPhta8AAAAJ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline flex items-center gap-1 mt-1"
                        >
                          View Google Scholar Profile
                          <Globe className="h-3 w-3" />
                        </a>
                      </div>

                      <div className="space-y-4">
                        <div className="border-l-2 border-muted pl-4">
                          <a
                            href="https://arxiv.org/abs/2510.05547"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              ARRC: Advanced Reasoning Robot Control—Knowledge-Driven Autonomous Manipulation Using Retrieval-Augmented Generation
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              arXiv:2510.05547
                            </p>
                          </a>
                        </div>

                        <div className="border-l-2 border-muted pl-4">
                          <a
                            href="https://arxiv.org/pdf/2510.03677"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                          >
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              Robust Visual Embodiment: How Robots Discover Their Bodies in Real Environments
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              arXiv:2510.03677
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Education</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900">
                      <GraduationCap className="h-6 w-6 text-yellow-700 dark:text-yellow-300" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold">Bachelor of Science in Mechatronics Engineering</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span>In Progress</span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Specializing in Robotics, AI, and Embedded Systems. Active leadership in robotics clubs,
                        competitions, and research initiatives. Focus on autonomous systems, machine learning, and
                        mechatronic design.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Certification Modal */}
      {
        selectedCert && (
          <CertificationModal
            title={selectedCert.title}
            description={selectedCert.description}
            imagePath={selectedCert.imagePath}
            isOpen={!!selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )
      }
    </div >
  )
}
