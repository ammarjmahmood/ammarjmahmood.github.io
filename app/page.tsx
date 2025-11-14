import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Globe, CheckCircle2, Calendar, Building2, GraduationCap, Award, ExternalLink } from "lucide-react"
import {
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  FontAwesomeTikTokIcon,
  XIcon,
  InstructablesIcon,
} from "@/components/icons"
import { ThemeToggle } from "@/components/theme-provider"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
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
                <Badge variant="secondary">Issac Lab</Badge>
                <Badge variant="secondary">Pybullet</Badge>
                <Badge variant="secondary">3D Printing</Badge>
                <Badge variant="secondary">IoT</Badge>
                <Badge variant="secondary">Pytorch</Badge>
                <Badge variant="secondary">Matlab</Badge>
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
                  <span>French - Fluent (DELF - Diplôme d'Études en Langue Française)</span>
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
                  I constantly experiment with AI, 3D Printing, and IoT. I serve as a Project Lead @ Elixer Labs for Autonomous Robotic Research, Freelance Full-Stack Developer, and University
                  Robotics Captain. When I'm not engineering, you'll find me piloting aircraft or just trying to build something to make life easy and fun.
                </p>
                <p className="leading-relaxed">
                  <em>"Engineering is about pushing boundaries—one line of code and one circuit at a time."</em>
                </p>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Featured Projects
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="overflow-hidden">
                  <Image
                    src="/ml-arm.png"
                    alt="ML Arm"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                        <span className="text-xl">🤖</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">3D Printed ASL Robotic Hand</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            Robotics • Python
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Machine-learning-powered robotic hand with precision 3D-printed parts and servo-controlled
                      articulation for American Sign Language gestures.
                    </p>
                    <a
                      href="https://github.com/ammarjmahmood/ASLRoboticHand"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    >
                      View on GitHub <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/NemaRobotArm.png"
                    alt="Custom Robot"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
                        <span className="text-xl">🤖</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Custom Robot Trained in Isaac Sim/Lab</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            Isaac Sim • Python
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      A custom robot designed and trained in NVIDIA's Isaac Sim for advanced robotics and AI research.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/RidgeClone.png"
                    alt="Ridge Wallet Clone"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
                        <span className="text-xl">💳</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Ridge Wallet Clone</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            3D Printing • CAD
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      A 3D-printed clone of the popular Ridge Wallet, designed for durability and minimalism.
                    </p>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/lebotjames.png"
                    alt="Ridge Wallet Clone"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                        <span className="text-xl">⚔️</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">1lb Battle Bot</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            Competition Robot
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Competition-ready combat robot featuring an optimized weapon system and reinforced chassis for
                      maximum impact in battle competitions.
                    </p>
                    <span className="text-xs text-muted-foreground italic">Private Repository</span>
                  </div>
                </Card>

                <Card className="overflow-hidden">
                  <Image
                    src="/fpvdrone.png"
                    alt="Ridge Wallet Clone"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                        <span className="text-xl">✈️</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">FPV Drone</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            Sponsored by PCB Way
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      High-performance FPV drone with custom-designed parts and advanced features for an immersive
                      flying experience.
                    </p>
                  </div>
                </Card>


                <Card className="overflow-hidden">
                  <Image
                    src="/skadis.png"
                    alt="Ridge Wallet Clone"
                    width={500}
                    height={300}
                    className="aspect-video object-cover"
                  />
                  <div className="p-4">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                        <span className="text-xl">🛠️</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">IKEA Skadis CAD Attachments</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" />
                            CAD • 3D Printing
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Custom-designed 3D-printed attachments for IKEA Skadis pegboards, enhancing workspace organization
                      and functionality.
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Experience</h2>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                      <span className="text-2xl">🔬</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold">Machine Learning and Robotics Engineer</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Present
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" />
                            Elixer Labs
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Conducting research in autonomous systems, machine learning applications, and embedded systems.
                        Developing algorithms for robotic control and AI integration in mechatronic systems.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
                      <span className="text-2xl">💻</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold">Full-Stack Developer</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Present
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" />
                            Anomaily (startup)
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Developer specializing in web applications, IoT integrations, and embedded
                        systems. Building full-stack solutions with modern frameworks and technologies.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-semibold">University Robotics Captain & Avionics Team</h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Present
                          </span>
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" />
                            University Robotics Club
                          </span>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        Leading the university robotics team and avionics division. Coordinating competition
                        preparations, mentoring team members, and developing innovative robotic systems for
                        competitions.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Certifications & Achievements */}
            <section>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Certifications & Achievements
              </h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                      <Award className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">CSWA (Certified SolidWorks Associate)</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Professional certification in SolidWorks CAD software, demonstrating proficiency in 3D modeling
                        and engineering design.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
                      <Award className="h-6 w-6 text-purple-700 dark:text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Provincial Winner - Engineering Competition</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        First place winner at the provincial engineering competition, showcasing excellence in
                        engineering design and innovation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900">
                      <span className="text-2xl">✈️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Private & Glider Pilot License</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Licensed private pilot and glider pilot, combining passion for aviation with engineering
                        expertise.
                      </p>
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
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            In Progress
                          </span>
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
    </div>
  )
}
