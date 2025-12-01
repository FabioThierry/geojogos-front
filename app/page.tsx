import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { GameCard } from "@/components/ui/game-card"
import { getFeaturedGames } from "@/lib/data/games"
import {
  Gamepad2,
  Puzzle,
  Sparkles,
  GraduationCap,
  Target,
  BookOpen,
  Brain,
  Globe,
  Lightbulb,
  Building2,
} from "lucide-react"

const services = [
  {
    icon: Gamepad2,
    title: "Custom Digital Educational Games",
    description: "Interactive digital experiences tailored to your curriculum and student needs.",
  },
  {
    icon: Puzzle,
    title: "Educational Board Games",
    description: "Tactile learning experiences that promote collaboration and spatial thinking.",
  },
  {
    icon: Sparkles,
    title: "Gamified Learning Experiences",
    description: "Transform traditional lessons into engaging game-based activities.",
  },
  {
    icon: GraduationCap,
    title: "Teacher-Oriented Tools",
    description: "Resources and guides to help educators implement game-based learning effectively.",
  },
]

const benefits = [
  {
    icon: Target,
    title: "Engagement",
    description: "Games capture attention and motivate students to actively participate in learning.",
  },
  {
    icon: BookOpen,
    title: "Meaningful Learning",
    description: "Game mechanics reinforce concepts through practice, feedback, and progression.",
  },
  {
    icon: Globe,
    title: "Cartographic Reasoning",
    description: "Interactive maps and spatial challenges develop essential map reading skills.",
  },
  {
    icon: Brain,
    title: "Spatial Thinking",
    description: "Games naturally develop the ability to visualize and reason about space.",
  },
  {
    icon: Lightbulb,
    title: "Interdisciplinary Learning",
    description: "Geography games naturally connect to history, science, economics, and more.",
  },
]

const partners = [
  { name: "Partner School 1", logo: "/school-logo-educational.jpg" },
  { name: "Partner School 2", logo: "/university-logo-academic.jpg" },
  { name: "Partner School 3", logo: "/placeholder.svg?height=60&width=120&text=Partner" },
  { name: "Partner School 4", logo: "/placeholder.svg?height=60&width=120&text=Institution" },
]

export default function HomePage() {
  const featuredGames = getFeaturedGames()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-muted via-background to-background">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 h-32 w-32 rounded-xl border-4 border-primary rotate-12" />
          <div className="absolute top-40 right-20 h-24 w-24 rounded-xl border-4 border-primary -rotate-6" />
          <div className="absolute bottom-20 left-1/4 h-20 w-20 rounded-xl border-4 border-primary rotate-45" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <h1 className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
                Educational Games Designed for <span className="text-primary">Real Classrooms</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                We create customized digital and analog games to transform Geography education in schools. Built by
                educators, for educators.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  <Link href="/games">View Games</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/custom-projects">Request a Custom Project</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-square">
                <Image
                  src="/images/geojogos-20-283-29.png"
                  alt="GeoJogos - Educational Games"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GeoJogos */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              title="What is GeoJogos?"
              subtitle="An educational game studio dedicated to transforming how Geography is taught and learned in schools across Brazil."
            />
            <div className="space-y-4 text-muted-foreground">
              <p>
                GeoJogos was founded on the belief that learning should be engaging, meaningful, and accessible. We
                combine pedagogical expertise with game design principles to create educational experiences that work.
              </p>
              <p>
                Our team works directly with teachers and schools to develop games that address real classroom
                challenges. Every game we create is rooted in educational research and adapted to specific curricular
                needs.
              </p>
              <p>
                Whether digital or analog, our games are designed to develop spatial thinking, cartographic reasoning,
                and geographic literacy while keeping students engaged and motivated to learn.
              </p>
            </div>
            <Button asChild className="mt-8 bg-primary hover:bg-primary-dark text-primary-foreground">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/classroom-students-playing-educational-game-geogra.jpg"
              alt="Students playing educational games"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="What We Create"
            subtitle="From digital simulations to tactile board games, we develop educational tools that make Geography come alive."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Games in Geography Education */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Why Use Games in Geography Education?"
          subtitle="Research shows that game-based learning significantly improves student engagement and knowledge retention."
          centered
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex gap-4 rounded-xl p-6 transition-all duration-300 hover:bg-muted"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <benefit.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Games */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Featured Games"
            subtitle="Explore our collection of educational games designed for Geography classrooms."
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGames.slice(0, 3).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="/games">View All Games</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading
          title="Institutional Partnerships"
          subtitle="We work with schools, universities, and educational institutions across Brazil."
          centered
        />
        <div className="flex flex-wrap items-center justify-center gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="grayscale transition-all duration-300 hover:grayscale-0">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-xl bg-primary-muted px-6 py-4">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-foreground">
              Interested in partnering with GeoJogos?{" "}
              <Link href="/contact" className="font-semibold text-primary hover:underline">
                Get in touch
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Transform Your Geography Classroom?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Let&apos;s create a custom game tailored to your curriculum, students, and educational goals.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
              <Link href="/custom-projects">Start a Custom Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
