import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-primary font-medium text-lg uppercase tracking-wide">{subtitle}</p>}
    </div>
  )
}

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="pt-32 pb-16 bg-gradient-to-b from-ocean-navy to-background">
      <div className="container mx-auto px-6">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">{description}</p>
      </div>
    </div>
  )
}
