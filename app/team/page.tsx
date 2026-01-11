"use client"

import { PageHeader, SectionHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AnimatedSection, StaggerContainer, staggerChild } from "@/components/ui/AnimatedSection"
import { motion } from "framer-motion"
import { User, Linkedin, Mail, GraduationCap } from "lucide-react"
import { usePIProfile, useStudents } from "@/hooks/useLabData"

export default function TeamPage() {
  const { piProfile, isLoading: piLoading } = usePIProfile()
  const { students, isLoading: studentsLoading } = useStudents()

  const phdStudents = students.filter((s) => s.level === "PhD")
  const pgStudents = students.filter((s) => s.level === "PG")
  const ugStudents = students.filter((s) => s.level === "UG")

  if (piLoading || studentsLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="pb-24">
      <PageHeader
        title="Our Team"
        description="Meet the researchers and students driving innovation in underwater acoustics and ocean technology."
      />

      {/* PI Section */}
      {piProfile && (
        <AnimatedSection className="container mx-auto px-6 py-20">
          <SectionHeader title="Principal Investigator" subtitle="Leadership" />
          <GlassCard className="flex flex-col md:flex-row gap-12 p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="shrink-0 relative">
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-2 border-primary/20 bg-primary/10">
                <img
                  src={piProfile.profile_image_url || "/pi-placeholder.jpg"}
                  alt={piProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4 mt-6 justify-center">
                {piProfile.linkedin_url && (
                  <a
                    href={piProfile.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                )}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="font-heading text-3xl font-bold text-white mb-2">{piProfile.name}</h3>
              <p className="text-primary font-semibold text-lg mb-4">{piProfile.title}</p>
              <p className="text-muted-foreground text-sm mb-8 uppercase tracking-widest">{piProfile.affiliation}</p>
              <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6">
                {piProfile.bio_md}
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>
      )}

      {/* Students Section */}
      <section className="container mx-auto px-6 py-20">
        <SectionHeader title="Research Scholars" subtitle="Students" centered />

        <div className="space-y-20">
          {[
            { title: "PhD Scholars", data: phdStudents },
            { title: "PG Students", data: pgStudents },
            { title: "UG Students", data: ugStudents },
          ].map((group, idx) =>
            group.data.length > 0 ? (
              <div key={idx}>
                <h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  {group.title}
                </h3>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.data.map((student, i) => (
                    <motion.div key={student.id} variants={staggerChild}>
                      <GlassCard className="text-center h-full group">
                        <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                          {student.profile_image_url ? (
                            <img
                              src={student.profile_image_url || "/placeholder.svg"}
                              alt={student.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-12 h-12 text-primary/50" />
                          )}
                        </div>
                        <h4 className="font-heading text-xl font-bold text-white mb-2">{student.name}</h4>
                        <div className="flex justify-center gap-2 mb-4">
                          <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            {student.level}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${student.status === "completed" ? "bg-green-500/10 text-green-400" : "bg-blue-500/10 text-blue-400"}`}
                          >
                            {student.status}
                          </span>
                        </div>
                        {student.thesis_title && (
                          <p className="text-sm text-muted-foreground line-clamp-2 italic">{student.thesis_title}</p>
                        )}
                      </GlassCard>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            ) : null,
          )}
        </div>
      </section>
    </div>
  )
}
