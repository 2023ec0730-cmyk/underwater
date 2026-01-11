import Link from "next/link"
import { Waves, Mail, MapPin, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ocean-navy border-t border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Waves className="w-8 h-8 text-primary" />
              <span className="font-heading font-bold text-2xl text-white">URL</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              The UnderWater Research Lab at NITTTR is dedicated to advancing the frontier
              of underwater technology and ocean science.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>sakthivels@nitttrc.ac.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>NITTTR - 603110</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary" />
                <span>https://www.nitttrc.ac.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/research" className="hover:text-primary transition-colors">
                  Research Areas
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:text-primary transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-primary transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-primary transition-colors">
                  Lab Facilities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} URL@NITTTR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
