'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Zap, Lock, Globe, Monitor, BarChart3, Shield } from "lucide-react"

export function WalledGardensSlide() {
  const risksData = [
    {
      title: "Ограниченный охват",
      description: "Часть целевой аудитории находится за пределами экосистем и не контактирует с рекламой бренда.",
    },
    {
      title: "Рост стоимости контакта",
      description: "По мере насыщения аудитории внутри экосистемы стоимость привлечения пользователей увеличивается.",
    },
    {
      title: "Ограниченная прозрачность",
      description: "Доступны только те данные и метрики, которые предоставляет сама платформа.",
    },
  ]

  const advantagesData = [
    {
      title: "Полный охват",
      description: "Walled Gardens охватывают пользователей внутри своих экосистем, а Programmatic достраивает охват за их пределами в Open Internet"
    },
    {
      title: "Диверсификация бюджета",
      description: "Бюджет распределяется между разными источниками инвентаря, что снижает риски роста цен и изменений правил отдельных площадок"
    },
    {
      title: "Оптимизация воронки",
      description: "Закрытые экосистемы хорошо работают на сбор спроса и вовлечение, а Programmatic усиливает узнаваемость и поддерживает пользователя на разных этапах Customer Journey"
    },
  ]

  const tableData = [
    {
      criterion: "Контроль платформы",
      icon: Lock,
      walledGardens: "Доступны только внутренние инструменты и данные",
      programmatic: "Независимая платформа, объединяющая множество источников инвентаря и данных",
      benefit: "Больше возможностей для оптимизации кампаний без зависимости от одной экосистемы.",
    },
    {
      criterion: "Площадки и каналы",
      icon: Globe,
      walledGardens: "Только площадки внутри конкретной экосистемы",
      programmatic: "10 000+ сайтов, приложений, видеоплощадок Open Internet",
      benefit: "Расширение охвата целевой аудитории и возможность находить пользователей в разных цифровых средах.",
    },
    {
      criterion: "Рекламные форматы",
      icon: Monitor,
      walledGardens: "Только форматы, доступные внутри платформы",
      programmatic: "Баннеры, видео, rich media, CTV, DOOH, нативная реклама в единой среде закупки",
      benefit: "Возможность выбрать наиболее эффективный формата под конкретную маркетинговую задачу.",
    },
    {
      criterion: "Управление площадками",
      icon: BarChart3,
      walledGardens: "Ограниченные возможности контроля инвентаря",
      programmatic: "Возможность использовать White Lists (списки разрешенных площадок) и Black Lists (списки исключенных площадок) для точного контроля окружения рекламы",
      benefit: "Реклама показывается только на релевантных площадках, что повышает качество трафика и снижает расходы.",
    },
    {
      criterion: "Brand Safety",
      icon: Shield,
      walledGardens: "Настройки безопасности зависят от правил экосистемы",
      programmatic: "Гибкие инструменты Brand Safety через сторонних вендоров, настройка безопасных категорий и контента",
      benefit: "Защита репутации бренда за счет исключения нежелательного контента и мошеннического трафика.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-primary/5 to-transparent px-4 py-6 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-6">
            <img 
              src="/nt-logo.png"
              alt="NT Technology"
              className="h-14 w-auto object-contain flex-shrink-0"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <Zap className="h-6 w-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  Walled Gardens vs Open Internet
                </h1>
                <p className="mt-2 text-base text-muted-foreground">
                  Почему медиамикс — лучшая стратегия
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-6 lg:px-8">
        
        {/* Block 1: Dictionary of Terms */}
        <section className="space-y-8">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Словарь терминов</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Walled Gardens Card */}
            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-lg font-bold">Walled Gardens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground text-sm">
                  Закрытые рекламные экосистемы с собственными данными и инвентарем.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <img src="/logos/yandex.png" alt="Яндекс" className="h-10 w-10 object-contain" />
                  <img src="/logos/vk.png" alt="VK" className="h-10 w-10 object-contain" />
                  <img src="/logos/ozon.png" alt="Ozon" className="h-10 w-10 object-contain" />
                  <img src="/logos/wildberries.png" alt="Wildberries" className="h-10 w-10 object-contain" />
                  <img src="/logos/avito.png" alt="Авито" className="h-10 w-10 object-contain" />
                </div>
              </CardContent>
            </Card>

            {/* Open Internet Card */}
            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-lg font-bold">Open Internet</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground text-sm">
                Совокупность всех открытых цифровых площадок, доступных для programmatic-закупки.
              </CardContent>
            </Card>

            {/* NT Technology Card */}
            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-lg font-bold">NT Technology</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground text-sm">
                Технологическая платформа для эффективной закупки и управления рекламой в Open Internet.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Block 1b: Dialog */}
        <section className="py-8">
          <div className="space-y-12">
            {/* Business Question */}
            <div className="flex gap-6 md:gap-12 items-center">
              <div className="flex-shrink-0 flex flex-col items-center">
                <img 
                  src="/images/business-woman.png"
                  alt="Бизнес"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#0029FF]"
                />
                <p className="mt-3 text-sm font-bold text-foreground">Бизнес</p>
              </div>
              <div className="flex-1">
                <div className="bg-white border-2 border-[#0029FF] rounded-3xl p-6 md:p-8 h-full flex items-center">
                  <p className="text-foreground text-base md:text-lg">
                    Что лучше выбрать для продвижения бренда: рекламу в Яндекс и VK или Programmatic?
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Answer */}
            <div className="flex gap-6 md:gap-12 items-center justify-end">
              <div className="flex-1">
                <div className="bg-white border-2 border-[#0029FF] rounded-3xl p-6 md:p-8 h-full flex items-center">
                  <p className="text-foreground text-base md:text-lg">
                    Лучший результат достигается не выбором между Walled Gardens и Programmatic, а их комбинацией
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <img 
                  src="/images/digital-expert-man.png"
                  alt="Digital-эксперт"
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#0029FF]"
                />
                <p className="mt-3 text-sm font-bold text-foreground">Digital-эксперт</p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 2: Comparison Table */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Сравнение подходов</h2>
          
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#0029FF" }}>
                  <th className="border border-[#0029FF] p-4 text-left font-bold text-white text-sm"></th>
                  <th className="border border-[#0029FF] p-4 text-left font-bold text-white text-sm">Walled Gardens<br /><span className="font-normal text-xs">(Яндекс, VK, Ozon и др)</span></th>
                  <th className="border border-[#0029FF] p-4 text-left font-bold text-white text-sm">Programmatic-платформа<br /><span className="font-normal text-xs">(NT Technology)</span></th>
                  <th className="border border-[#0029FF] p-4 text-left font-bold text-white text-sm">Польза для бизнеса</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => {
                  const IconComponent = row.icon
                  return (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F0F0F0" }}>
                      <td className="border border-border p-4 font-semibold text-foreground text-sm whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <IconComponent className="h-5 w-5 text-[#0029FF] flex-shrink-0" />
                          <span>{row.criterion}</span>
                        </div>
                      </td>
                      <td className="border border-border p-4 text-foreground text-sm">{row.walledGardens}</td>
                      <td className="border border-border p-4 text-foreground text-sm">{row.programmatic}</td>
                      <td className="border border-border p-4 text-foreground text-sm">{row.benefit}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: "#0029FF" }}>
            <p className="text-white text-sm">
              Walled Gardens обеспечивают доступ к собственной аудитории внутри экосистемы, а Programmatic-платформа позво��яет централизованно работать с аудиторией и инвентарем всего Open Internet, обеспечивая больший контроль, гибкость и прозрачность закупки.
            </p>
          </div>
        </section>

        {/* Block 3: Interactive Map */}
        <section>
          <div className="bg-background rounded-lg p-6 border border-border">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%208%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_05_04-BkORdwRlsZMGUBX90sS7djdqyRg8wb.png"
              alt="Digital-реклама России"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Block 4: Risks */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Риски продвижения только в закрытых экосистемах</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {risksData.map((risk, idx) => (
              <Card key={idx} className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground text-sm font-bold">
                    <AlertCircle className="h-5 w-5 text-[#0029FF] flex-shrink-0" />
                    <span>{risk.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-foreground text-sm">
                  {risk.description}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card style={{ backgroundColor: "#FF6B6B15", borderColor: "#FF6B6B" }} className="border-2">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2 text-sm font-bold">
                <AlertCircle className="h-5 w-5 text-[#FF6B6B]" />
                Главный риск
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground text-sm">
              <span className="font-normal">Главный риск работы только через Walled Gardens — зависимость от нескольких закрытых экосистем и потеря части аудитории, находящейся за их предел������ми.</span>
            </CardContent>
          </Card>
        </section>

        {/* Block 5: Why Media Mix */}
        <section>
          <h2 className="mb-12 text-3xl font-bold text-foreground">Почему медиамикс – лучшая стратегия?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {advantagesData.map((item, idx) => (
              <Card key={idx} className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground text-sm font-bold">
                    <Zap className="h-5 w-5 text-[#0029FF] flex-shrink-0" />
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-foreground text-sm">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Block 6: Conclusion */}
        <section>
          <Card style={{ backgroundColor: "#0029FF", borderColor: "#0029FF" }} className="border">
            <CardHeader>
              <CardTitle className="text-white text-lg font-bold">Вывод</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white text-sm">
              <p>
                Лучший результат достигается не выбором между Walled Gardens и Programmatic, а их комбинацией.
              </p>
              <p>
                Закрытые экосистемы дают доступ к сильным данным и вовлеченной аудитории, а Programmatic обеспечивает дополнительный охват, гибкость и контроль над всей медиастратегией.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Block 7: Additional Materials */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Дополнительные материалы</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Article Card */}
            <Card className="border-2 border-border bg-white flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle className="text-foreground text-lg font-bold">Статья</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="w-full bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-plHxRqtHckYMINbRs2gtPuHjuQvFw3.png"
                    alt="Walled Gardens vs Open Internet"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <CardContent className="flex items-center justify-start pt-0">
                <a
                  href="https://nt.technology/blog/walled-gardens-vs-open-internet-zachem-brendam-programmatic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-[#0029FF] text-white font-semibold text-sm rounded-lg hover:bg-[#0020CC] transition-colors"
                >
                  Читать
                </a>
              </CardContent>
            </Card>

            {/* Case Study Card */}
            <Card className="border-2 border-border bg-white flex flex-col overflow-hidden">
              <CardHeader>
                <CardTitle className="text-foreground text-lg font-bold">Кейс</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6">
                <div className="w-full bg-slate-100 rounded-lg overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-08%20%D0%B2%2017.30.17.png-vZ1pdC6xTeuUtqtEPcA4iaBFcPIdp3.jpeg"
                    alt="Fresco Programmatic Campaign"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <CardContent className="flex items-center justify-start pt-0">
                <a
                  href="https://www.figma.com/proto/H6vtvf9ubhUYSiKqg1o9kQ/%D0%9A%D0%B5%D0%B9%D1%81-%22Fresco%22--NT-Technology?node-id=1-6&viewport=622%2C168%2C0.07&t=oMd5wOweYmNuY2JN-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-[#0029FF] text-white font-semibold text-sm rounded-lg hover:bg-[#0020CC] transition-colors"
                >
                  Подробнее
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </main>
  )
}
