import { RealEstateSlide } from "@/components/real-estate-slide"

export const metadata = {
  title: "Real Estate - Programmatic Solutions",
  description: "Programmatic advertising solutions for real estate, developers and realtors",
}

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <RealEstateSlide />
      </div>
    </main>
  )
}
