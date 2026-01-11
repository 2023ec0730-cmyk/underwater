"use client"

import { useState } from "react"
import { PageHeader, SectionHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AnimatedSection, FadeIn, StaggerContainer, staggerChild } from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { Tag } from "lucide-react"
import { useResearchAreas, useProjects } from "@/hooks/useLabData"

export default function ResearchPage() {
  const [filter, setFilter] = useState("all")
  const { researchAreas, isLoading: areasLoading } = useResearchAreas()
  const { projects, isLoading: projectsLoading } = useProjects()

  const filteredProjects = projects.filter((p) => filter === "all" || p.status === filter)

  if (areasLoading || projectsLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="pb-24">
      <PageHeader
        title="R&D / Research"
        description="Exploring the depths of ocean technology through innovative research and sponsored projects."
      />

      {/* Research Areas */}
      <AnimatedSection className="container mx-auto px-6 py-20">
        <SectionHeader title="Research Domains" subtitle="Core Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, i) => (
            <FadeIn key={area.id} delay={i * 0.1}>
              <GlassCard className="h-full border-primary/20">
                <h3 className="font-heading text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-muted-foreground">{area.summary}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="container mx-auto px-6 py-20 bg-ocean-navy/30 rounded-[3rem]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <SectionHeader title="Sponsored Projects" subtitle="Impactful Initiatives" className="mb-0" />

          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 self-start">
            {["all", "ongoing", "completed"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${
                  filter === type
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div key={project.id} variants={staggerChild}>
              <GlassCard className="group">
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      project.status === "ongoing"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">{project.start_year}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mb-4 text-primary font-medium">
                  <Tag className="w-4 h-4" />
                  <span>Sponsor: {project.sponsor}</span>
                </div>
                <p className="text-muted-foreground">{project.short_description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </AnimatedSection>
    </div>
  )
}
