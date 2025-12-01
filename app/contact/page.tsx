import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, MessageSquare, Building2, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with GeoJogos for custom educational game projects, school partnerships, or research collaboration.",
}

const contactReasons = [
  {
    icon: Building2,
    title: "Custom Projects",
    description: "Interested in developing a custom educational game for your school or institution.",
  },
  {
    icon: GraduationCap,
    title: "School Partnerships",
    description: "Explore partnership opportunities for educational game implementation.",
  },
  {
    icon: MessageSquare,
    title: "Research Collaboration",
    description: "Collaborate on academic research related to game-based learning in Geography.",
  },
]

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-muted via-background to-background py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Have a project in mind? Want to learn more about our educational games? We&apos;d love to hear from you.
            Let&apos;s discuss how we can help transform Geography education in your school.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <p className="mt-2 text-muted-foreground">Reach out through the form or contact us directly.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">contact@geojogos.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-muted">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Brazil</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">How Can We Help You?</h3>
              {contactReasons.map((reason) => (
                <Card key={reason.title} className="bg-muted/50">
                  <CardContent className="flex gap-4 p-4">
                    <reason.icon className="h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground">{reason.title}</h4>
                      <p className="text-sm text-muted-foreground">{reason.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
