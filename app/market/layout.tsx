import ReturnButton from "@/src/components/return-button/ReturnButton";



export default function MarketLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <ReturnButton />
        {children}
      </section>
    )
  }