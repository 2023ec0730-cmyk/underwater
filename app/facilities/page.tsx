"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AnimatedSection, FadeIn, StaggerContainer, staggerChild } from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { Waves, Box, Cpu, Camera } from "lucide-react"
import { useFacilities } from "@/hooks/useLabData"

const categories = [
  { id: "all", label: "All Facilities", icon: Box },
  { id: "tank", label: "Test Tank", icon: Waves },
  { id: "vehicles", label: "Vehicles", icon: Cpu },
  { id: "sensors", label: "Sensors", icon: Camera },
]

export default function FacilitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const { facilities, isLoading } = useFacilities()

  const filteredFacilities = facilities.filter((f) => activeCategory === "all" || f.category === activeCategory)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="pb-24">
      <PageHeader
        title="Lab Facilities"
        description="State-of-the-art equipment and infrastructure for cutting-edge underwater research."
      />

      <AnimatedSection className="container mx-auto px-6 py-12">
        <FadeIn className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl border font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-primary border-primary text-white shadow-xl shadow-primary/20"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              <span>{cat.label}</span>
            </button>
          ))}
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility, i) => (
            <motion.div key={facility.id} variants={staggerChild}>
              <GlassCard className="p-0 overflow-hidden group border-white/10">
                <div className="aspect-video bg-primary/10 overflow-hidden relative">
                  <img
                    src={facility.image_url || "/placeholder.svg"}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-primary/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest">
                      {facility.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-white mb-4">{facility.name}</h3>
                  <p className="text-muted-foreground mb-6">{facility.description}</p>
                  {facility.specs_md && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Specifications</h4>
                      <div
                        className="text-sm text-foreground/80 prose prose-invert prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: facility.specs_md }}
                      />
                    </div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </AnimatedSection>
    </div>
  )
}
