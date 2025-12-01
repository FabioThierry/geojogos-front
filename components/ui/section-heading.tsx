interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  )
}
