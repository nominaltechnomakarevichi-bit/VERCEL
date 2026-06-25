import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programmatic-кампания для Коломенское | NT Technology',
  description: 'Комплексная стратегия продвижения FMCG бренда с использованием Rich Media, DOOH и CTV',
}

export default function BkkKolomenskyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
