import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { BookOpen, MapPin, Users, Target, Monitor, Puzzle, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Projects",
  description:
    "Custom educational game development for schools and teachers. We create games adapted to your curriculum, local reality, and educational objectives.",
}

const adaptations = [
  {
    icon: BookOpen,
    title: "School Curriculum",
    description: "Games aligned with your specific curriculum requirements and learning standards.",
  },
  {
    icon: MapPin,
    title: "Local Reality",
    description: "Content that reflects your region's geography, landmarks, and cultural context.",
  },
  {
    icon: Users,
    title: "Student Age Group",
    description: "Difficulty and complexity tailored to your students' developmental level.",
  },
  {
    icon: Target,
    title: "Educational Objectives",
    description: "Game mechanics designed to achieve your specific learning goals.",
  },
]

const formats = [
  {
    icon: Monitor,
    title: "Digital Games",
    features: [
      "Interactive web-based or app experiences",
      "Automatic progress tracking",
      "Adaptive difficulty",
      "Multimedia content integration",
      "Works on computers and tablets",
    ],
  },
  {
    icon: Puzzle,
    title: "Board Games",
    features: [
      "Physical components and materials",
      "Face-to-face collaboration",
      "Tactile learning experiences",
      "No technology required",
      "Includes teacher guide",
    ],
  },
]

const examples = [
  {
    title: "Regional Geography Quiz",
    description: "A customized quiz game featuring your state's municipalities, landmarks, and geographic features.",
    image: "/digital-geography-quiz-game-brazil-map.jpg",
  },
  {
    title: "Local Climate Board Game",
    description: "A board game exploring climate patterns and environmental challenges specific to your region.",
    image: "/educational-board-game-climate-zones-world-map.jpg",
  },
  {
    title: "City Planning Simulation",
    description: "A digital simulation using real data from your city or neighborhood for urban geography lessons.",
    image: "/city-planning-simulation-game-urban-development.jpg",
  },
]

const processSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "We discuss your educational needs, curriculum requirements, and project goals.",
  },
  {
    step: 2,
    title: "Proposal & Planning",
    description: "We create a detailed proposal including game concept, timeline, and deliverables.",
  },
  {
    step: 3,
    title: "Development",
    description: "Our team designs and develops the game with regular check-ins and feedback sessions.",
  },
  {
    step: 4,
    title: "Testing & Refinement",
    description: "We test the game with real students and incorporate feedback for improvements.",
  },
  {
    step: 5,
    title: "Delivery & Support",
    description: "You receive the final game with teacher guides and ongoing support.",
  },
]

export default function CustomProjectsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Custom <span className="text-primary">Game Development</span> for Schools
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Every classroom is unique. We create custom educational games tailored to your specific curriculum,
                students, and educational goals. Whether digital or analog, we design games that work for your reality.
              </p>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground">
                <Link href="/contact">Start a Custom Project</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/teacher-customizing-educational-materials-local-ma.jpg"
                alt="Custom game development process"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Adapt */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Customized for Your Needs"
          subtitle="We adapt every aspect of the game to fit your educational context"
          centered
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adaptations.map((item) => (
            <Card
              key={item.title}
              className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Digital & Analog Formats"
            subtitle="Choose the format that works best for your classroom"
            centered
          />
          <div className="grid gap-8 md:grid-cols-2">
            {formats.map((format) => (
              <Card key={format.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary p-6 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <format.icon className="h-8 w-8" />
                      <h3 className="text-xl font-semibold">{format.title}</h3>
                    </div>
                  </div>
                  <ul className="p-6 space-y-3">
                    {format.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading title="How It Works" subtitle="Our collaborative development process" centered />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2" />
          <div className="space-y-8">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="hidden lg:block lg:w-1/2" />
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="ml-16 lg:ml-0 lg:w-1/2 lg:px-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="bg-primary-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading title="Example Applications" subtitle="Ideas for custom game projects" centered />
          <div className="grid gap-6 md:grid-cols-3">
            {examples.map((example) => (
              <Card key={example.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[3/2]">
                  <Image src={example.image || "/placeholder.svg"} alt={example.title} fill className="object-cover" />
                </div>
                <CardContent className="p-5">
                  <h3 className="mb-2 font-semibold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Start Your Custom Project?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Tell us about your educational needs and let&apos;s create something amazing for your students.
          </p>
          <Button asChild size="lg" className="mt-8 bg-background text-primary hover:bg-background/90">
            <Link href="/contact" className="inline-flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
