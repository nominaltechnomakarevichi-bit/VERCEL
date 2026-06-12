'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react"

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
      icon: "🎯",
      title: "Полный охват",
      description: "Walled Gardens охватывают пользователей внутри своих экосистем, а Programmatic достраивает охват за их пределами в Open Internet",
    },
    {
      icon: "📊",
      title: "Диверсификация бюджета",
      description: "Бюджет распределяется между разными источниками инвентаря, что снижает риски роста цен и изменений правил отдельных площадок",
    },
    {
      icon: "🔄",
      title: "Оптимизация воронки",
      description: "Закрытые экосистемы хорошо работают на сбор спроса и вовлечение, а Programmatic усиливает узнаваемость и поддерживает пользователя на разных этапах Customer Journey",
    },
    {
      icon: "📱",
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0029FF] to-[#C13FFF] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-balance leading-tight">
            Walled Gardens vs NT Technology
          </h1>
        </div>
      </section>

      {/* Block 1: Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0029FF] mb-4">Walled Gardens</h2>
            <p className="text-lg text-[#000018] mb-6">
              Закрытые рекламные экосистемы с собственными данными и инвентарем.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Яндекс", "VK", "Ozon", "Wildberries", "Авито"].map((platform, idx) => (
                <span key={idx} className="px-4 py-2 bg-[#F0F0F0] text-[#000018] rounded-full font-medium">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="border-[#CCD8ED]">
              <CardHeader>
                <CardTitle className="text-[#0029FF]">Open Internet</CardTitle>
              </CardHeader>
              <CardContent className="text-[#000018]">
                Совокупность всех открытых цифровых площадок, доступных для programmatic-закупки.
              </CardContent>
            </Card>

            <Card className="border-[#CCD8ED]">
              <CardHeader>
                <CardTitle className="text-[#0029FF]">NT Technology</CardTitle>
              </CardHeader>
              <CardContent className="text-[#000018]">
                Технологическая платформа для эффективной закупки и управления рекламой в Open Internet.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 1b: Dialog */}
      <section className="bg-[#F0F0F0] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8 max-w-2xl">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#0029FF]">
              <p className="font-semibold text-[#000018] mb-2">Бизнес:</p>
              <p className="text-[#000018]">Что лучше выбрать для продвижения бренда: рекламу в Яндекс и VK или Programmatic?</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-l-4 border-[#C13FFF]">
              <p className="font-semibold text-[#000018] mb-2">Эксперт:</p>
              <p className="text-[#0029FF] font-semibold">
                Лучший результат достигается не выбором между Walled Gardens и Programmatic, а их комбинацией
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Comparison Table */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#0029FF] mb-8">Сравнение подходов</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#CCD8ED]">
                <th className="border border-[#CCD8ED] p-4 text-left font-bold text-[#000018]">Критерий</th>
                <th className="border border-[#CCD8ED] p-4 text-left font-bold text-[#000018]">Walled Gardens</th>
                <th className="border border-[#CCD8ED] p-4 text-left font-bold text-[#000018]">Programmatic-платформа</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F0F0F0]"}>
                  <td className="border border-[#CCD8ED] p-4 font-semibold text-[#000018]">{row.criterion}</td>
                  <td className="border border-[#CCD8ED] p-4 text-[#000018]">{row.walledGardens}</td>
                  <td className="border border-[#CCD8ED] p-4 text-[#000018]">{row.programmatic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-lg text-[#000018] leading-relaxed">
          Walled Gardens обеспечивают доступ к собственной аудитории внутри экосистемы, а Programmatic-платформа позволяет централизованно работать с аудиторией и инвентарем всего Open Internet, обеспечивая больший контроль, гибкость и прозрачность закупки.
        </p>
      </section>

      {/* Block 3: Interactive Map */}
      <section className="bg-gradient-to-b from-[#0029FF]/5 to-transparent py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0029FF] mb-8">Карта возможностей</h2>
          <div className="bg-white rounded-lg p-8 border border-[#CCD8ED]">
            <iframe
              src="https://market.nt1.tech/"
              className="w-full h-[600px] rounded-lg border border-[#CCD8ED]"
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>

      {/* Block 4: Risks */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-[#0029FF] mb-8">Риски продвижения только в закрытых экосистемах</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {risksData.map((risk, idx) => (
            <Card key={idx} className="border-[#CCD8ED]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#000018]">
                  <AlertCircle className="h-5 w-5 text-[#0029FF]" />
                  <span className="text-lg">{idx + 1}. {risk.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#000018]">
                {risk.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card style={{ backgroundColor: "#FF6B6B20", borderColor: "#FF6B6B" }} className="border-2">
          <CardHeader>
            <CardTitle className="text-[#000018] flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#0029FF]" />
              Главный риск
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#000018] font-semibold">
            Работа только через Walled Gardens — зависимость от нескольких закрытых экосистем и потеря части аудитории, находящейся за их пределами.
          </CardContent>
        </Card>
      </section>

      {/* Block 5: Why Media Mix */}
      <section className="bg-gradient-to-b from-[#C13FFF]/10 to-transparent py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0029FF] mb-12">Почему медиамикс – лучшая стратегия?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advantagesData.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-[#CCD8ED]">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#0029FF] mb-3">{item.title}</h3>
                <p className="text-[#000018]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Block 6: Conclusion */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Card style={{ backgroundColor: "#0029FF", borderColor: "#0029FF" }} className="border-2">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Вывод</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-white">
            <p>
              Лучший результат достигается не выбором между Walled Gardens и Programmatic, а их комбинацией.
            </p>
            <p>
              Закрытые экосистемы дают доступ к сильным данным и вовлеченной аудитории, а Programmatic обеспечивает дополнительный охват, гибкость и контроль над всей медиастратегией.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer spacing */}
      <div className="h-10" />
    </div>
  )
}
