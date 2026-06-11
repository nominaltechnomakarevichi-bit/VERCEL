"use client"

import { useState, useCallback, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { domToPng } from "modern-screenshot"
import {
  Monitor,
  Download,
  Loader2,
  Pill,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Shield,
  Home,
  MapPin,
  Play,
  Tv,
  Target,
  Layers,
  Zap,
} from "lucide-react"

// Touch-banner Preview Component
function TouchBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#1a3a5c]">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A4%D0%BB%D1%8E%D0%B4%D0%B8%D1%82%D0%B5%D0%BA-dNmlCRHFYAJ9K5zsodckkFx2P52gvH.gif"
        alt="Touch-баннер Флюдитек"
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Cube-баннер Preview Component
function CubeBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0eef5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2015.37.05-0eLqpeQmwzpUj5iAJfODq2SdfTfuqC.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Scratch-баннер Preview Component
function ScratchBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f4f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B0%D0%BF%D0%B0%D0%BB%D0%B5%D0%BD-%D0%A1%D0%BA%D1%80%D0%B5%D1%82%D1%87-1VN76EPFNZt1qwOOqaYqugEjYR8mb3.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Banner Slider Preview Component
function BannerSliderPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f4f8]">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%94%D0%B0%D0%BF%D0%B0%D0%BB%D0%B5%D0%BD%20%D0%A1%D0%BB%D0%B0%D0%B8%CC%86%D0%B4%D0%B5%D1%80-cTTeh36Vr8xBU3sI4caPyWmm3cRnTI.gif"
        alt="Banner Slider Дапален"
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// GIF-баннер
const gifBannerFormat = {
  name: "GIF-баннер",
  description: "Анимированный баннер с визуализацией препарата и его действия",
  why: "Привлекает внимание анимацией, информирует о препарате без взаимодействия",
  ctr: "0.5-0.9%",
  icon: Pill,
  preview: TouchBannerPreview,
  type: "reach" as const,
}

// Rich Media форматы (интерактивные)
const richMediaFormats = [
  {
    name: "Cube-баннер",
    description: "Баннер не требует от пользователя действий для активации эффекта",
    why: "Привлекает внимания за счет 3D-эффекта, подходит для имиджевых кампаний, нет ограничений по тематикам",
    ctr: "0.6-1.1%",
    icon: Pill,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Scratch-баннер",
    description: "Интерактивный баннер со стираемым слоем. Пользователь стирает покрытие и видит эффект до/после — например, очищение кожи от акне после курса лечения",
    why: "Геймификация вовлекает, наглядно демонстрирует результат лечения, повышает запоминаемость бренда",
    ctr: "1.2-2.0%",
    icon: Pill,
    preview: ScratchBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Banner Slider",
    description: "Карусель с вертикальной прокруткой. Показывает проблему, способ применения (1 раз в день) и результат курса лечения в одном баннере",
    why: "Компактная подача информации о препарате и курсе лечения, увеличивает время контакта с рекламой",
    ctr: "0.9-1.6%",
    icon: Pill,
    preview: BannerSliderPreview,
    type: "reach" as const,
  },
]

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах и в приложениях",
    type: "mixed" as const,
    insights: [
      "Медицинские порталы дают CTR выше на 40% vs обычные сайты",
      "Контекстный таргетинг по запросам симптомов",
      "Возможность A/B тестирования креативов",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама",
    type: "reach" as const,
    insights: [
      "Размещение рядом с аптеками увеличивает намерение к покупке",
      "Разбивка по времени показа: головная боль — утро (7-10), насморк — день (12-18), бессонница — вечер (20-23)",
      "Геотаргетинг на поликлиники и ТЦ с аптеками",
      "Погодный триггер: показ рекламы средств от аллергии при высоком уровне пыльцы",
      "Возможность отслеживания квартилей, паузы видео",
      "Наличие альтернативного плейсмента",
      "Моушн дизайн / адаптация видео командой дизайнеров NT",
    ],
    avgCtr: "N/A",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream и out-stream",
    type: "reach" as const,
    insights: [
      "Pre-roll 15 сек — оптимальная длина для фармы",
      "Skippable форматы дешевле, но non-skip даёт +60% к brand lift",
      "Таргетинг на health & wellness контент",
    ],
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "ctv",
    name: "CTV",
    icon: Tv,
    description: "Реклама на Smart TV и стриминговых платформах",
    type: "reach" as const,
    insights: [
      "Премиум окружение = высокое доверие к бренду",
      "Охват старшей аудитории 45+, которая активно потребляет фарму",
      "QR-код в креативе для перехода на сайт",
    ],
    recommended: false,
  },
]

export function PharmaCaseSlide() {
  const [isExporting, setIsExporting] = useState(false)
  const [selectedRichMedia, setSelectedRichMedia] = useState(0)
  const [selectedChannel, setSelectedChannel] = useState(0)
  const exportRef = useRef<HTMLDivElement>(null)

  const handleExport = useCallback(async () => {
    if (!exportRef.current) return

    setIsExporting(true)
    try {
      const png = await domToPng(exportRef.current)
      const link = document.createElement("a")
      link.href = png
      link.download = `pharma-case-${Date.now()}.png`
      link.click()
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Export Button - Fixed */}
      <div className="fixed right-6 top-6 z-50 flex gap-2">
        <Button
          onClick={handleExport}
          disabled={isExporting}
          className="gap-2 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
          size="sm"
        >
          {isExporting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Экспорт...
            </>
          ) : (
            <>
              <Download className="h-4 w-4" />
              Скачать PNG
            </>
          )}
        </Button>
      </div>

      {/* Slide Content */}
      <div ref={exportRef} className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-6">
            {/* NT Technology Logo */}
            <img 
              src="/nt-logo.png" 
              alt="NT Technology" 
              className="h-14 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            {/* Queisser Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2015.52.59-K0mKNrjOWOmWiAnpJroeo9Dz3fVGCW.png" 
              alt="Queisser Pharma" 
              className="h-12 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Pill className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для Queisser Pharma
                </h1>
                <p className="text-sm text-muted-foreground">
                  Кейс успешной кампании: +153% узнаваемости бренда
                </p>
              </div>
            </div>
          </div>
          <Badge className="hidden gap-1 bg-primary text-primary-foreground sm:flex">
            <TrendingUp className="h-3.5 w-3.5" />
            Высокий потенциал
          </Badge>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {/* Rich Media Formats */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Pill className="h-5 w-5 text-primary" />
                Rich Media форматы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="0" className="w-full">
                <TabsList className="mb-4 flex w-full gap-0">
                  {richMediaFormats.map((format, idx) => (
                    <TabsTrigger key={idx} value={String(idx)} className="flex-1">
                      {format.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {richMediaFormats.map((format, idx) => {
                  const Preview = format.preview
                  return (
                    <TabsContent key={idx} value={String(idx)}>
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="overflow-hidden rounded-xl border border-border">
                            <Preview />
                          </div>

                          <div className="flex flex-col justify-between">
                            <div>
                              <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                  <Pill className="h-5 w-5" />
                                </div>
                                <div>
                                  <h3 className="text-base font-semibold text-foreground">{format.name}</h3>
                                </div>
                              </div>
                              <p className="mb-3 text-base text-muted-foreground">{format.description}</p>
                              <p className="text-sm text-primary/80 mb-3">
                                <span className="font-medium">Почему работает:</span> {format.why}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            </CardContent>
          </Card>

          {/* Рекламные каналы */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Monitor className="h-5 w-5 text-primary" />
                Рекламные каналы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="channel-0" className="w-full">
                <TabsList className="mb-4 flex w-full gap-0">
                  {channels.map((channel, idx) => (
                    <TabsTrigger key={idx} value={`channel-${idx}`} className="flex-1">
                      {channel.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {channels.map((channel, idx) => (
                  <TabsContent key={idx} value={`channel-${idx}`}>
                    <div className="space-y-4">
                      <div className="flex flex-col gap-4">
                        {/* Header with icon, name and badges */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                              <channel.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-foreground">{channel.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{channel.description}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 flex-wrap justify-end">
                            {channel.recommended && (
                              <Badge className="bg-primary text-primary-foreground text-[11px] px-2 py-1">
                                Рекомендуем
                              </Badge>
                            )}
                            <Badge 
                              className={`text-[11px] px-2 py-1 ${
                                channel.type === "reach"
                                ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                : "bg-purple-500/10 text-purple-600 border-purple-500/30"
                              }`}
                              variant="outline"
                            >
                              {channel.type === "reach" ? "Охват" : "Brandformance"}
                            </Badge>
                            {channel.avgCtr !== "N/A" && channel.id !== "ctv" && (
                              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-[11px] px-2 py-1">
                                CTR: {channel.avgCtr}
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Insights */}
                        <div className="space-y-2 pl-13">
                          <p className="text-base font-medium text-foreground">Инсайты:</p>
                          <ul className="space-y-1.5">
                            {channel.insights.map((insight, i) => (
                              <li key={i} className="flex gap-2 text-base text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Clients Logos */}
          <Card className="xl:col-span-2 bg-white">
            <CardContent className="py-3 px-6">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.15.14-1WHUh1lpPeH7DoLjFz0wivRgzbMIOv.png"
                  alt="MEGAPTEKA.RU"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.14.42-jDKTBgSDVtu66wcDHiX82hZiUQuKtO.png"
                  alt="VITABIOTICS"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.14.07-72kIBFkYHzW8b3VB5sbq7S2RDA513Z.png"
                  alt="GLS PHARMACEUTICALS"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.16.58-pmMJd8Be7dGx7AvRJIoHBJwDt63Z2Y.png"
                  alt="LAMYRA"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.18.20-kcqKW38PzoZwbj1rTgKj1SLim479Ha.png"
                  alt="ПОЗИТИВ БИО"
                  className="h-24 w-32 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study - Full Width */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Как микс форматов и точный таргетинг увеличил узнаваемость бренда на 153%
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left - Product Image */}
                <div className="flex items-center justify-center rounded-2xl bg-[#1a4d7a] p-6">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2015.37.05-prGsQLt2X5QujWgpI3Z6W5kqSofhxY.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-64 w-auto object-contain"
                  />
                </div>

                {/* Middle - About Campaign */}
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#0052cc]">о кампании</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Продукт: сироп от кашля для детей Флюдитек</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель кампании: увеличить узнаваемость бренда</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Каналы: Display, Video</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Strategy & Results */}
                <div className="space-y-4">
                  <div className="space-y-4 rounded-2xl bg-white p-4">
                    <h3 className="text-lg font-bold text-[#0052cc]">инсайты</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Использование Cube-баннера позволило преодолеть баннерную слепоту и увеличить ERR в 2,5 раза в сравнении со статикой</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Лучшие результаты по CTR показала женская аудитория 25-60 лет</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Block */}
                  <div className="space-y-3 rounded-2xl bg-[#0052cc] p-6 text-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-3xl font-bold">-18%</p>
                        <p className="text-sm">средний CPM</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">+153%</p>
                        <p className="text-sm">по брендовым запросам</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">+75%</p>
                      <p className="text-sm">средний прирост по охвату из запуска в запуск</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 flex justify-around border-t border-[#0052cc]/20 pt-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">4 месяца</p>
                  <p className="text-sm text-muted-foreground">период ведения</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <img 
              src="/nt-logo.png" 
              alt="NT Technology" 
              className="h-8 w-auto object-contain"
            />
            <div className="h-8 w-px bg-border" />
            <p className="text-sm text-muted-foreground">
              Программатик платформа NT Technology © 2026
            </p>
          </div>
          <p className="text-[12px] text-muted-foreground">
            nt.technology
          </p>
        </div>
      </div>
    </div>
  )
}
