import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic-кампания для Mimimi | NT Technology',
  description: 'Комплексная стратегия продвижения детского бренда Mimimi с использованием программатик рекламы',
}

export default function MimimiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
