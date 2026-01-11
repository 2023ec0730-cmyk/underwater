"use client"

import { useState } from "react"
import { PageHeader } from "@/components/ui/SectionHeader"
import { LoadingSpinner } from "@/components/ui/LoadingSpinner"
import { AnimatedSection, StaggerContainer, staggerChild } from "@/components/ui/AnimatedSection"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useGalleryItems } from "@/hooks/useLabData"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState("all")
  const { galleryItems, isLoading } = useGalleryItems()

  const filteredItems = galleryItems.filter((item) => filter === "all" || item.category === filter)

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="pb-24">
      <PageHeader
        title="Gallery"
        description="Capturing moments from our field trials, lab experiments, and team events."
      />

      <AnimatedSection className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["all", "lab", "sea_trials", "students", "visitors"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all capitalize ${
                filter === cat
                  ? "bg-primary border-primary text-white"
                  : "bg-white/5 border-white/10 text-muted-foreground"
              }`}
            >
              {cat.replace("_", " ")}
            </button>
          ))}
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={staggerChild}
              className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden border border-white/10"
              onClick={() => setSelectedImage(item.image_url)}
            >
              <img
                src={item.image_url || "/placeholder.svg"}
                alt={item.title || "Gallery Image"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="text-white font-bold">{item.title || "Lab Activity"}</h3>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-primary transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
