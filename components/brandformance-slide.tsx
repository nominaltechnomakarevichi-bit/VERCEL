'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Zap, Target, TrendingUp, AlertTriangle, TrendingDown, Lock, Users, Clock, Share2, BarChart3, Zap as ZapIcon, Trophy } from "lucide-react"

export function BrandformanceSlide() {
  const [activeScenario, setActiveScenario] = useState<1 | 2 | null>(null)
  const performanceChannels = [
    'Поиск',
    'Маркетплейсы',
    'Ретаргетинг'
  ]

  const performanceRisks = [
    'Стоимость лида начинает расти',
    'Объем спроса перестает увеличиваться',
    'Масштабировать продажи становится невозможно'
  ]

  const tableRows = [
    {
      criterion: 'Бизнес-логика',
      performance: 'Работает с уже сформированным спросом',
      brandformance: 'Формирует новый спрос и одновременно конвертирует существующий'
    },
    {
      criterion: 'Момент подключения',
      performance: 'Подключается, когда пользователь уже ищет решение',
      brandformance: 'Начинает работать до возникновения поиска и покупки'
    },
    {
      criterion: 'Каналы',
      performance: 'Search, ретаргетинг, маркетплейсы',
      brandformance: 'Programmatic, Online Video, Digital OOH, Display + Search + Retargeting'
    },
    {
      criterion: 'Работа с аудиторией',
      performance: 'Конкурирует за один и тот же объем потенциальных покупателей',
      brandformance: 'Увеличивает количество потенциальных покупателей в воронке'
    },
    {
      criterion: 'Измерение и оптимизация',
      performance: 'Оптимизация по last-click',
      brandformance: 'Измерение полного вклада рекламы: Post-view, Brand Lift, Sales Lift, Search Lift, Incrementality'
    },
    {
      criterion: 'Результат',
      performance: 'Перераспределение существующего рынка',
      brandformance: 'Рост рынка для бренда, больше лидов и продаж'
    }
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <TrendingUp className="h-6 w-6 text-[#0029FF]" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  Performance vs Brandformance
                </h1>
                <p className="mt-2 text-base text-muted-foreground">
                  Programmatic — не «охватная медийка», а технология для создания дополнительного спроса
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-6 lg:px-8">

        {/* Block 1: Dialog */}
        <section className="py-8">
          <div className="flex gap-6 md:gap-12 items-center">
            <div className="flex-shrink-0 flex flex-col items-center">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%91%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-sHCrwoKLelyBGAKlMKOygWKT2IUsjl.png"
                alt="Бизнес"
                className="w-40 h-40 rounded-full object-cover border-4 border-[#0029FF]"
              />
              <p className="mt-3 text-sm font-bold text-foreground">Бизнес</p>
            </div>
            <div className="flex-1">
              <div className="bg-white border-2 border-[#0029FF] rounded-3xl p-6 md:p-8 h-full flex items-center">
                <p className="text-foreground text-base md:text-lg">
                  «Нам нужен Performance, а не охват»
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Block 2: Scenario Selection */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">Разбираемся, что для вас Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setActiveScenario(1)}
              className={`p-6 rounded-lg border-2 text-left transition-all transform hover:scale-105 cursor-pointer ${
                activeScenario === 1
                  ? 'border-[#0029FF] bg-[#0029FF] text-white shadow-lg'
                  : 'border-[#0029FF] bg-white text-foreground hover:bg-[#0029FF]/10'
              }`}
            >
              <p className="font-bold text-base">Last-click продажи здесь и сейчас</p>
            </button>
            <button
              onClick={() => setActiveScenario(2)}
              className={`p-6 rounded-lg border-2 text-left transition-all transform hover:scale-105 cursor-pointer ${
                activeScenario === 2
                  ? 'border-[#7C5CFF] bg-[#7C5CFF] text-white shadow-lg'
                  : 'border-[#7C5CFF] bg-white text-foreground hover:bg-[#7C5CFF]/10'
              }`}
            >
              <p className="font-bold text-base">Измеримый результат кампании</p>
            </button>
          </div>
        </div>

          {activeScenario === 1 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-blue-50 border-2 border-[#0029FF] rounded-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#0029FF]">«Нам нужен performance» = last-click продажи здесь и сейчас</h3>
              </div>

              <Card className="border-2 border-[#0029FF] bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF] text-lg">Performance-решения</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {performanceChannels.map((channel, idx) => (
                      <div key={idx} className="px-4 py-2 rounded-full bg-[#0029FF] text-white text-sm font-medium">
                        {channel}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CJM Performance */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CJM%20%D0%BF%D1%80%D0%B8%20Performance-%D0%BF%D0%BE%D0%B4%D1%85%D0%BE%D0%B4%D0%B5-lOxB2YbjTVOQAGdEBwlQmbsa4ghb2m.png"
                  alt="CJM при Performance подходе"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Risks */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  Риски
                </h4>
                <div className="grid gap-3">
                  {performanceRisks.map((risk, idx) => (
                    <div key={idx} className="flex gap-4 items-start p-4 rounded-lg bg-red-50 border border-red-200">
                      <TrendingDown className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground text-base font-medium">
                        {risk}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Card style={{ backgroundColor: "#0029FF15", borderColor: "#0029FF" }} className="border-2">
                <CardHeader>
                  <CardTitle className="text-foreground font-bold">Инсайт</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground text-base">
                  <span className="font-semibold text-[#0029FF]">Performance не создает спрос</span> — он перераспределяет уже существующий.
                </CardContent>
              </Card>

              <Card className="border-2 border-[#7C5CFF] bg-white">
                <CardHeader>
                  <CardTitle className="text-[#7C5CFF] text-lg">Brandformance-решение</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-4 py-2 rounded-full bg-[#7C5CFF] text-white text-sm font-medium">
                      Programmatic
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CJM Brandformance */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CJM%20%D0%BF%D1%80%D0%B8%20Brandformance-%D0%BF%D0%BE%D0%B4%D1%85%D0%BE%D0%B4%D0%B5-i4py6cGZ7y4r15wBPcIEDJV1D7h53d.png"
                  alt="CJM при Brandformance подходе"
                  className="w-full h-auto object-contain"
                />
              </div>

              <Card style={{ backgroundColor: "#7C5CFF15", borderColor: "#7C5CFF" }} className="border-2">
                <CardHeader>
                  <CardTitle className="text-foreground font-bold">Инсайт</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground text-base">
                  <span className="font-semibold text-[#7C5CFF]">Programmatic начинает работать ДО момента покупки</span> — он формирует дополнительный спрос и заводит новых потенциальных покупателей в воронку продаж.
                </CardContent>
              </Card>

              {/* Kapika Case Study */}
              <Card className="border-2 border-border bg-white overflow-hidden">
                <div className="flex items-center gap-3 px-6 pt-1 pb-0 mb-1">
                  <span className="inline-block px-6 py-2 rounded-full bg-[#0029FF] text-white text-sm font-bold">
                    Кейс
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Case Images */}
                  <div className="flex flex-col gap-4">
                    <div className="rounded-lg overflow-hidden border border-border bg-white">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1200x628_2_tgb_ru%20%281%29-Lmbt9mUSVTxb1g66v83N3ZpDEqn4eE.png"
                        alt="Новая школьная коллекция 2024"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border bg-white">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A2%D0%93%D0%91%201200_628%20%281%29-YveH26MCvzQsxevz7fI1oIKKQAI5a8.png"
                        alt="Школьная коллекция 2024"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Case Content */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Как Brandformance-подход и микс форматов увеличил ЦД на 640%
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Особенности кейса</p>
                          <p className="text-sm text-foreground">Интернет-магазин детской одежды и обуви достиг потолка по поиску и ретаргетингу</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Цель</p>
                          <p className="text-sm text-foreground">Привлечение аудитории на сайт, рост конверсий</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Период РК</p>
                          <p className="text-sm text-foreground">1 месяц</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Стратегия</p>
                          <div className="space-y-1">
                            <p className="text-sm text-foreground">Основной Brandformance-инструмент – нативная реклама (ТГБ)</p>
                            <p className="text-sm text-foreground">Оптимизировали и обучали РК на микроконверсиях</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Результаты</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#0029FF]">+275%</p>
                            <p className="text-xs text-foreground">Search Lift</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#0029FF]">+364%</p>
                            <p className="text-xs text-foreground">Visit Lift</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#0029FF]">+89%</p>
                            <p className="text-xs text-foreground">оформленных заказов</p>
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#0029FF]">+100%</p>
                            <p className="text-xs text-foreground">CR в клик</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2F62uZeg%2Bpepy3ZwHxH%2FtoZ9kAiePpXuRP5t0SJ5INSDePu34nDRFiQJ2sjUs5bs4Bq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=Programmatic%20%D0%BA%D0%B0%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0%20%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B8%CC%86%20%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D1%8B%20%D0%B8%20%D0%BE%D0%B1%D1%83%D0%B2%D0%B8%20Kapika%20(%D0%A0%D0%A4).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center px-6 py-2 rounded-lg border-2 border-[#0029FF] text-[#0029FF] font-bold text-sm hover:bg-[#0029FF] hover:text-white transition-all"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {activeScenario === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-purple-50 border-2 border-[#7C5CFF] rounded-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-[#7C5CFF]">«Нам нужен performance» = измеримый результат</h3>
              </div>

              {/* What Brandformance Measures */}
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A7%D1%82%D0%BE%20%D0%B8%D0%B7%D0%BC%D0%B5%D1%80%D1%8F%D0%B5%D1%82%20Brandformance-uiktV5XvuPFf08FAU9BxsnNXiEkyST.png"
                  alt="Что измеряет Brandformance"
                  className="w-full h-auto object-contain"
                />
              </div>

              <Card style={{ backgroundColor: "#0029FF15", borderColor: "#0029FF" }} className="border-2">
                <CardHeader>
                  <CardTitle className="text-foreground font-bold">Инсайт</CardTitle>
                </CardHeader>
                <CardContent className="text-foreground text-base">
                  Если после запуска рекламы выросли <span className="font-semibold">продажи, брендовый поиск, органический трафик</span> → повлияла медийная реклама. Даже если последний клик был из поиска.
                </CardContent>
              </Card>

              <h3 className="text-xl font-bold text-foreground">Кейс</h3>

              {/* Krasnaya Polyana Case Study */}
              <Card className="border-2 border-border bg-white overflow-hidden">
                <div className="flex items-center gap-3 px-6 pt-1 pb-0 mb-1">
                  <span className="inline-block px-6 py-2 rounded-full bg-[#7C5CFF] text-white text-sm font-bold">
                    Кейс
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                  {/* Case Image */}
                  <div className="flex items-center justify-center">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-02%20%D0%B2%2016.54.35-xsEE6nb3113me3xzZjz3KzYhFfebH8.png"
                      alt="Красная Поляна горнолыжный курорт"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  {/* Case Content */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          Как омниканальный подход обеспечил 73% post-view конверсий
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Особенности кейса</p>
                          <p className="text-sm text-foreground">Необходимость отследить влияние медийной рекламы на бизнес-результат</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Цель</p>
                          <p className="text-sm text-foreground">Рост узнаваемости бренда и конверсий</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Период РК</p>
                          <p className="text-sm text-foreground">10 месяцев</p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-muted-foreground">Стратегия</p>
                          <div className="space-y-1">
                            <p className="text-sm text-foreground">Использовали 80 пакетов креативов, разделенных по сегментам</p>
                            <p className="text-sm text-foreground">Провели многоканальное АВС тестирование</p>
                            <p className="text-sm text-foreground">Интегрировали DOOH</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">Результаты</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-purple-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#7C5CFF]">+146%</p>
                            <p className="text-xs text-foreground">к плану по кликам</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#7C5CFF]">+76%</p>
                            <p className="text-xs text-foreground">к плану по показам</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#7C5CFF]">73%</p>
                            <p className="text-xs text-foreground">post-view конверсий</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-3">
                            <p className="text-sm font-bold text-[#7C5CFF]">86%</p>
                            <p className="text-xs text-foreground">доход от post-view</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href="https://www.figma.com/deck/vCB0JLRcc5F45FrGAR30Fg/%D0%9A%D0%B5%D0%B9%D1%81-programmatic-%D0%B4%D0%BB%D1%8F---%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F-%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D0%B0--?node-id=217-20&t=4b8Smwq62LIC1tOh-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center px-6 py-2 rounded-lg border-2 border-[#7C5CFF] text-[#7C5CFF] font-bold text-sm hover:bg-[#7C5CFF] hover:text-white transition-all"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          )}

        {/* Block 7: Comparison Table */}
        <section className="space-y-8">
            <h2 className="mb-8 text-2xl font-bold text-foreground">Сравнение подходов</h2>
            
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#0029FF" }}>
                    <th className="p-4 text-left font-bold text-white text-sm">Параметр</th>
                    <th className="p-4 text-left font-bold text-white text-sm">Performance</th>
                    <th className="p-4 text-left font-bold text-white text-sm">Brandformance</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.filter(row => row.criterion !== 'Момент подключения').map((row, idx) => {
                    const iconMap: Record<string, React.ReactNode> = {
                      'Бизнес-логика': <Users className="h-6 w-6" />,
                      'Каналы': <Share2 className="h-6 w-6" />,
                      'Работа с аудиторией': <BarChart3 className="h-6 w-6" />,
                      'Измерение и оптимизация': <ZapIcon className="h-6 w-6" />,
                      'Результат': <Trophy className="h-6 w-6" />
                    };
                    
                    const filteredRows = tableRows.filter(row => row.criterion !== 'Момент подключени��');
                    const isLastRow = idx === filteredRows.length - 1;
                    
                    return (
                      <tr 
                        key={idx} 
                        style={{ 
                          backgroundColor: row.criterion === 'Результат' ? "#0029FF15" : (idx % 2 === 0 ? "#FFFFFF" : "#F8F8F8"),
                          borderTop: idx === 0 ? 'none' : `1px solid #E5E7EB`,
                          borderBottom: isLastRow ? 'none' : undefined
                        }}
                      >
                        <td className={`p-4 text-foreground font-bold flex items-center gap-3 ${row.criterion === 'Результат' ? 'text-[#0029FF]' : ''} text-sm`}>
                          {iconMap[row.criterion]}
                          <span>{row.criterion}</span>
                        </td>
                        <td className={`p-4 text-foreground text-sm ${row.criterion === 'Результат' ? 'text-[#0029FF]' : ''}`}>
                          {row.performance}
                        </td>
                        <td className={`p-4 text-foreground text-sm ${row.criterion === 'Результат' ? 'text-[#0029FF]' : ''}`}>
                          {row.brandformance}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        </section>

        {/* Block 8: Why Programmatic */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Почему Brandformance подход реализуется именно через Programmatic?</h2>
          
          <p className="text-foreground">
            Programmatic позволяет работать не только с горячим спросом, но и с аудиторией на более ранних этапах принятия решения.
          </p>

          <Card className="border-2 border-[#0029FF] bg-white">
            <CardHeader>
              <CardTitle className="text-[#0029FF] text-lg">Платформа может:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Target className="h-6 w-6 text-[#0029FF] flex-shrink-0 mt-1" />
                <p className="text-foreground text-sm">
                  Находить потенциальных покупателей до момента поиска
                </p>
              </div>
              <div className="flex gap-3">
                <Target className="h-6 w-6 text-[#0029FF] flex-shrink-0 mt-1" />
                <p className="text-foreground text-sm">
                  Исключать уже сконвертировавшихся пользователей
                </p>
              </div>
              <div className="flex gap-3">
                <Target className="h-6 w-6 text-[#0029FF] flex-shrink-0 mt-1" />
                <p className="text-foreground text-sm">
                  Измерять вклад кампании не только по кликам, но и по инкрементальному эффекту
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Block 9: Conclusion */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">Вывод</h2>
            <div className="flex gap-6 md:gap-12 items-center justify-end">
              <div className="flex-1">
                <Card className="bg-white border-2 border-[#0029FF]">
                  <CardContent className="pt-6">
                    <p className="text-foreground text-base md:text-lg leading-relaxed">
                      Если ваша задача — собрать максимум «дешевых» лидов из уже существующего спроса, начните с поиска, ретаргетинга и маркетплейсов. Но если вы хотите масштабировать продажи, а не только перераспределять существующий спрос, вам нужен Brandformance
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Digital-%D1%8D%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82-D0HHJNYGYL38nwUPHPZhZ8ipghtbvq.png"
                  alt="Digital-эксперт"
                  className="w-40 h-40 rounded-full object-cover border-4 border-[#0029FF]"
                />
                <p className="mt-3 text-sm font-bold text-foreground">Digital-эксперт</p>
              </div>
            </div>
          </section>

        {/* Block 10: Final Conclusion */}
        <section>
          <Card style={{ backgroundColor: "#0029FF" }} className="border-0">
            <CardContent className="space-y-4 text-white text-base md:text-lg pt-6">
              <p>
                <span className="font-semibold">Programmatic — это не альтернатива performance.</span> Это инструмент, который создает дополнительный спрос, усиливает работу performance-каналов и позволяет измерять бизнес-результат.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
