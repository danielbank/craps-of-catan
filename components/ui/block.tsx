export interface BlockProps {
  children: React.ReactNode
}

const Block = ({ children }: BlockProps) => (
  <div className="flex flex-col items-start gap-2">{children}</div>
)

const BlockBody = ({ children }: BlockProps) => (
  <p className="mt-1 text-sm text-muted-foreground">{children}</p>
)

const BlockHeader = ({ children }: BlockProps) => (
  <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
    {children}
  </h1>
)
export { Block, BlockBody, BlockHeader }
