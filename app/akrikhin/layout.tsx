import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic-кампания для Akrikhin | NT Technology',
  description: 'Комплексная стратегия продвижения бренда Akrikhin с использованием программатик рекламы',
}

export default function AkrihkinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
