"use client"

import { useState } from "react"
import { PageHeader, SectionHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AnimatedSection, StaggerContainer, staggerChild } from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { Search, FileText, Calendar, User } from "lucide-react"
import { usePublications } from "@/hooks/useLabData"

export default function PublicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const { publications, isLoading } = usePublications()

  const filteredPubs = publications.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.authors.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="pb-24">
      <PageHeader
        title="Publications"
        description="A comprehensive list of our research findings published in reputed journals and conferences."
      />

      <AnimatedSection className="container mx-auto px-6 py-12">
        <div className="relative mb-16">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-primary/50 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <SectionHeader title="Recent Work" subtitle="Our Findings" />

        <StaggerContainer className="flex flex-col gap-6">
          {filteredPubs.map((pub, i) => (
            <motion.div key={pub.id} variants={staggerChild}>
              <GlassCard className="flex flex-col md:flex-row gap-6 p-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
                      {pub.type}
                    </span>
                    {pub.highlight && (
                      <span className="px-2 py-0.5 rounded bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 leading-tight">{pub.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{pub.authors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.year}</span>
                    </div>
                    <div className="font-medium text-primary/80 italic">{pub.venue}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </StaggerContainer>
      </AnimatedSection>
    </div>
  )
}
