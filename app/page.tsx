"use client"

import { Hero } from "@/components/home/Hero"
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { useResearchAreas, useLabInfo } from "@/hooks/useLabData"
import { Cpu, Navigation, Waves, ImageIcon, Microscope, ShieldCheck } from "lucide-react"
import Link from "next/link"

const iconMap: Record<string, any> = {
  Waves,
  Cpu,
  Navigation,
  Microscope,
  ImageIcon,
  ShieldCheck,
}

export default function Home() {
  const { researchAreas, isLoading: areasLoading } = useResearchAreas()
  const { labInfo, isLoading: labLoading } = useLabInfo()

  if (areasLoading || labLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="flex flex-col gap-24 pb-24">
      <Hero />

      {/* Intro Section */}
      <AnimatedSection className="container mx-auto px-6">
        <GlassCard className="p-12 md:p-16 border-primary/20 bg-primary/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Pioneering Underwater Innovation" subtitle="About URL" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {labInfo?.short_description ||
                  "The UnderWater Research Lab (URL) at NITTTR is a premier research facility dedicated to solving the complex challenges of the marine environment."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Led by Dr. S. Sakthivel Murugan, our team integrates expertise in electronics, signal processing to develop cutting-edge solutions for ocean exploration and national security.
              </p>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={labInfo?.hero_image_url || "/underwater-lab-research.jpg"}
                alt="Lab Research"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy/80 to-transparent" />
            </div>
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* Research Areas Grid */}
      <section className="container mx-auto px-6">
        <SectionHeader title="Our Research Focus" subtitle="Specializations" centered />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, i) => {
            const Icon = iconMap[area.icon] || Waves
            return (
              <FadeIn key={area.id} delay={i * 0.1}>
                <GlassCard className="h-full group hover:border-primary/50">
                  <Icon
                    className={`w-12 h-12 ${area.color || "text-blue-400"} mb-6 transition-transform group-hover:scale-110`}
                  />
                  <h3 className="font-heading text-xl font-bold text-white mb-3">{area.title}</h3>
                  <p className="text-muted-foreground">{area.summary}</p>
                </GlassCard>
              </FadeIn>
            )
          })}
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden py-20 px-12 text-center bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10">
          <div className="absolute inset-0 z-0 opacity-30">
            <img src="/deep-ocean-waves.jpg" alt="Ocean Background" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-white mb-6">Join Our Research Mission</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We are always looking for passionate researchers and students to join our laboratory and push the
              boundaries of what's possible underwater.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all"
              >
                Get In Touch
              </Link>
              <Link
                href="/team"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10"
              >
                Meet The Team
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
