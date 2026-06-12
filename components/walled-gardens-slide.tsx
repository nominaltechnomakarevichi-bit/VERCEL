'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Zap } from "lucide-react"

export function WalledGardensSlide() {
  const risksData = [
    {
      title: "Ограниченный охват",
      description: "Часть целевой аудитории находится за пределами экосистем и не контактирует с рекламой бренда.",
    },
    {
      title: "Зависимость от платформы",
      description: "Изменения алгоритмов, правил или цен напрямую влияют на результаты кампаний.",
    },
    {
      title: "Рост стоимости контакта",
      description: "По мере насыщения аудитории внутри экосистемы стоимость привлечения пользователей увеличивается.",
    },
    {
      title: "Ограниченная прозрачность",
      description: "Доступны только те данные и метрики, которые предоставляет сама платформа.",
    },
    {
      title: "Сложности с единой аналитикой",
      description: "Трудно получить целостную картину эффективности кампаний при работе через несколько закрытых экосистем.",
    },
  ]

  const advantagesData = [
    {
      title: "Полный охват",
      description: "Walled Gardens охватывают пользователей внутри своих экосистем, а Programmatic достраивает охват за их пределами в Open Internet",
    },
    {
      title: "Диверсификация бюджета",
      description: "Бюджет распределяется между разными источниками инвентаря, что снижает риски роста цен и изменений правил отдельных площадок",
    },
    {
      title: "Оптимизация воронки",
      description: "Закрытые экосистемы хорошо работают на сбор спроса и вовлечение, а Programmatic усиливает узнаваемость и поддерживает пользователя на разных этапах Customer Journey",
    },
    {
      title: "Премиум-каналы",
      description: "Мобильные приложения, CTV, DOOH и другие premium каналы доступны только через Programmatic",
    },
  ]

  const tableData = [
    {
      criterion: "Контроль платформы",
      walledGardens: "Доступны только внутренние инструменты и данные",
      programmatic: "Независимая платформа, объединяющая множество источников инвентаря и данных",
    },
    {
      criterion: "Таргетинги",
      walledGardens: "First-party data на основе собственных данных платформы",
      programmatic: "Third-party data комбинация различных источников данных (поведенческие, соц-дем, гео и др)",
    },
    {
      criterion: "Площадки и каналы",
      walledGardens: "Только площадки внутри конкретной экосистемы",
      programmatic: "1000+ сайтов, приложений, видеоплощадок Open Internet",
    },
    {
      criterion: "Рекламные форматы",
      walledGardens: "Только форматы, доступные внутри платформы",
      programmatic: "Баннеры, видео, rich media, CTV, DOOH, нативная реклама в единой среде закупки",
    },
    {
      criterion: "Охват",
      walledGardens: "Высокий внутри конкретной экосистемы",
      programmatic: "Широкий охват аудитории за пределами закрытых платформ с возможностью объединения множества каналов",
    },
    {
      criterion: "Аукцион",
      walledGardens: "Внутренний аукцион платформы",
      programmatic: "Доступ к аукционам множества SSP и рекламных площадок через единую платформу",
    },
    {
      criterion: "Гибкость",
      walledGardens: "Ограничена правилами и возможностями конкретной экосистемы",
      programmatic: "Гибкая настройка стратегий, данных, инвентаря и KPI под задачи рекламодателя",
    },
    {
      criterion: "Отчетность",
      walledGardens: "Отчеты доступны только по данным внутри экосистемы",
      programmatic: "Единая аналитика по различным площадкам, форматам и источникам данных",
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
                  Walled Gardens vs NT Technology
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
            <div className="flex gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 flex flex-col items-center">
                <img 
                  src="/images/business-woman.png"
                  alt="Бизнес"
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#0029FF]"
                />
                <p className="mt-2 text-sm font-bold text-foreground">Бизнес</p>
              </div>
              <div className="flex-1 pt-4">
                <div className="bg-white border-2 border-[#0029FF] rounded-3xl p-6 md:p-8">
                  <p className="text-foreground text-base md:text-lg">
                    Что лучше выбрать для продвижения бренда: рекламу в Яндекс и VK или Programmatic?
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Answer */}
            <div className="flex gap-6 md:gap-12 items-start justify-end">
              <div className="flex-1 pt-4">
                <div className="bg-white border-2 border-[#0029FF] rounded-3xl p-6 md:p-8">
                  <p className="text-foreground text-base md:text-lg">
                    Лучший результат достигается не выбором между Walled Gardens и Programmatic, а их комбинацией
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <img 
                  src="/images/digital-expert-man.png"
                  alt="Digital-эксперт"
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#0029FF]"
                />
                <p className="mt-2 text-sm font-bold text-foreground">Digital-эксперт</p>
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
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#F0F0F0" }}>
                    <td className="border border-border p-4 font-semibold text-foreground text-sm whitespace-nowrap">{row.criterion}</td>
                    <td className="border border-border p-4 text-foreground text-sm">{row.walledGardens}</td>
                    <td className="border border-border p-4 text-foreground text-sm">{row.programmatic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: "#0029FF" }}>
            <p className="text-white text-sm">
              Walled Gardens обеспечивают доступ к собственной аудитории внутри экосистемы, а Programmatic-платформа позволяет централизованно работать с аудиторией и инвентарем всего Open Internet, обеспечивая больший контроль, гибкость и прозрачность закупки.
            </p>
          </div>
        </section>

        {/* Block 3: Interactive Map */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Карта digital-рекламы России</h2>
          <div className="bg-background rounded-lg p-6 border border-border">
            <iframe
              src="https://market.nt1.tech/"
              className="w-full h-[600px] rounded-lg border border-border"
              title="NT Market"
            />
          </div>
        </section>

        {/* Block 4: Risks */}
        <section>
          <h2 className="mb-8 text-3xl font-bold text-foreground">Риски продвижения только в закрытых экосистемах</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                <AlertCircle className="h-5 w-5 text-[#0029FF]" />
                Главный риск
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground font-semibold text-sm">
              Работа только через Walled Gardens — зависимость от нескольких закрытых экосистем и потеря части аудитории, находящейся за их пределами.
            </CardContent>
          </Card>
        </section>

        {/* Block 5: Why Media Mix */}
        <section>
          <h2 className="mb-12 text-3xl font-bold text-foreground">Почему медиамикс – лучшая стратегия?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
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

      </div>
    </main>
  )
}
