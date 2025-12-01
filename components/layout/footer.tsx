import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Games", href: "/games" },
    { name: "Custom Projects", href: "/custom-projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Digital Games", href: "/games?type=digital" },
    { name: "Board Games", href: "/games?type=boardgame" },
    { name: "For Teachers", href: "/custom-projects" },
    { name: "Research", href: "/blog" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/geojogos-20-283-29.png"
                alt="GeoJogos Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-primary">GeoJogos</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Educational games designed for real classrooms. Transforming Geography education through play.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contact@geojogos.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Brazil</span>
              </li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} GeoJogos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
