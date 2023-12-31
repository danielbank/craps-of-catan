export interface SectionProps {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => (
  <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    {children}
  </section>
)
export { Section }
