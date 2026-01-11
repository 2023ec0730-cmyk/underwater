import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        hover && "hover:border-primary/50 hover:shadow-primary/10 hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
