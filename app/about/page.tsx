import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Target, Eye, Heart, Users, BookOpen, Gamepad2, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GeoJogos - our history, mission, and commitment to transforming Geography education through game-based learning.",
}

const values = [
  {
    icon: BookOpen,
    title: "Educational Excellence",
    description:
      "Every game we create is grounded in pedagogical research and designed to achieve specific learning outcomes.",
  },
  {
    icon: Users,
    title: "Teacher-Centered Design",
    description: "We work alongside educators to understand real classroom challenges and develop practical solutions.",
  },
  {
    icon: Gamepad2,
    title: "Meaningful Play",
    description:
      "Games should be engaging AND educational. We never sacrifice learning for entertainment or vice versa.",
  },
  {
    icon: Globe,
    title: "Local Relevance",
    description: "Our games reflect Brazilian geography and can be customized to address regional and local contexts.",
  },
]

const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description: "GeoJogos started as a research project exploring game-based learning in Geography education.",
  },
  {
    year: "2021",
    title: "First Games",
    description: "We developed our first educational board games and tested them in partner schools.",
  },
  {
    year: "2022",
    title: "Going Digital",
    description: "Expanded into digital game development, creating interactive experiences for computers and tablets.",
  },
  {
    year: "2023",
    title: "Custom Development",
    description: "Launched our custom game development service for schools and educational institutions.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description: "Our games are now used in classrooms across Brazil, helping thousands of students learn Geography.",
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                About <span className="text-primary">GeoJogos</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                We are an educational game studio dedicated to transforming how Geography is taught and learned in
                schools. Through innovative game design and pedagogical expertise, we create learning experiences that
                engage, challenge, and inspire students.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/students-board-game-map-spatial-thinking-classroom.jpg"
                alt="GeoJogos team at work"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading title="Our Story" subtitle="From research project to educational game studio" />
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                  <Card>
                    <CardContent className="p-6">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Mission</h3>
                <p className="mt-3 text-muted-foreground">
                  To improve Geography education in Brazil through innovative, research-based educational games that
                  engage students and support teachers in creating meaningful learning experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Vision</h3>
                <p className="mt-3 text-muted-foreground">
                  A future where every Geography classroom has access to high-quality educational games that make
                  learning engaging, accessible, and effective for all students.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Core Belief</h3>
                <p className="mt-3 text-muted-foreground">
                  Learning through play is not just for children. Well-designed games can create powerful learning
                  experiences for students of all ages and backgrounds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <SectionHeading title="Our Values" subtitle="The principles that guide everything we do" centered />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="group transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Geography + Education + Games */}
      <section className="bg-primary-muted py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Geography + Education + Game Design</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  GeoJogos exists at the intersection of three disciplines: Geography, Education, and Game Design. This
                  unique combination allows us to create educational experiences that are pedagogically sound,
                  geographically accurate, and genuinely fun to play.
                </p>
                <p>
                  Our team includes geographers who understand the content, educators who understand learning, and game
                  designers who understand engagement. Together, we create games that work in real classrooms with real
                  students.
                </p>
                <p>
                  We believe that games are not just entertainment—they are powerful tools for learning. When designed
                  thoughtfully, games can teach complex concepts, develop critical skills, and create memorable learning
                  experiences that traditional methods cannot match.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/digital-geography-quiz-game-brazil-map.jpg"
                alt="Geography"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/teacher-customizing-educational-materials-local-ma.jpg"
                alt="Education"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/educational-board-game-climate-zones-world-map.jpg"
                alt="Game Design"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
              <Image
                src="/classroom-students-playing-educational-game-geogra.jpg"
                alt="Students Learning"
                width={200}
                height={200}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Want to Work With Us?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Whether you&apos;re a teacher looking for educational games or a school interested in custom development,
          we&apos;d love to hear from you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground">
            <Link href="/custom-projects">Explore Custom Projects</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
