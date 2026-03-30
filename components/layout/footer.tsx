import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import type { Footer } from "@/lib/data/types";

interface FooterProps {
  footerData: Footer;
}

export function Footer({ footerData }: FooterProps) {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/geojogos-20-283-29.png"
                alt={footerData.brand.logoAlt}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-primary">
                {footerData.brand.name}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {footerData.brand.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {footerData.navigation.title}
            </h3>
            <ul className="space-y-2">
              {footerData.navigation.items.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {footerData.resources.title}
            </h3>
            <ul className="space-y-2">
              {footerData.resources.items.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              {footerData.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>{footerData.contact.email}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{footerData.contact.location}</span>
              </li>
            </ul>
            {/* <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={footerData.contact.social.linkedin}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={footerData.contact.social.instagram}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={footerData.contact.social.youtube}
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
