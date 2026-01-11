"use client"

import { PageHeader, SectionHeader } from "@/components/ui/SectionHeader"
import { GlassCard } from "@/components/ui/GlassCard"
import { AnimatedSection, FadeIn } from "@/components/ui/AnimatedSection"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHeader
        title="Contact Us"
        description="Have questions about our research or interested in collaborating? We'd love to hear from you."
      />

      <AnimatedSection className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <FadeIn className="lg:col-span-1 space-y-6">
            <GlassCard className="p-8 border-primary/20">
              <Mail className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">For general inquiries and research collaborations.</p>
              <a href="mailto:sakthivels@nitttrc.edu.in" className="text-primary font-semibold hover:underline">
                sakthivels@nitttrc.edu.in
              </a>
            </GlassCard>

            <GlassCard className="p-8">
              <MapPin className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">Visit Lab</h3>
              <p className="text-muted-foreground mb-2">URL, Dept of ECE,</p>
              <p className="text-muted-foreground"> National Institute of Technical Teachers Training and Research,CSIR Rd near TIDEL Park, Tharamani, Chennai - 603110</p>
            </GlassCard>

            <GlassCard className="p-8">
              <Phone className="w-8 h-8 text-primary mb-6" />
              <h3 className="font-heading text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Available during office hours (9 AM - 4:30 PM).</p>
              <p className="text-primary font-semibold">+91 44 2746 9700</p>
            </GlassCard>
          </FadeIn>

          <FadeIn className="lg:col-span-2">
            <GlassCard className="p-10 md:p-12 h-full">
              <SectionHeader title="Send a Message" subtitle="Direct Inquiry" className="mb-8" />
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Research Collaboration"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </AnimatedSection>
    </div>
  )
}
