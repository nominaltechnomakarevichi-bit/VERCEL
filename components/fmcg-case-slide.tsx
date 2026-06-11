"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
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
  ShoppingCart,
  FileWarning,
} from "lucide-react"

// Tap&Melt-баннер Preview
function TapMeltBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f4f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2012.03.27-swyJuZNsGRXHxt2wafwbxXn4qHSW9i.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Progress-баннер Preview
function ProgressBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#fff5e6]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2012.04.23-WRcwruU4uZHManmFYOyUA6ddvMLCFJ.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Hover-баннер Preview
function HoverBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f8f8f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2012.04.52-vnZircfR5aX0YwUzNCjiTNErEWB0gz.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Banner Slider Preview
function BannerSliderPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0f0f0]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2012.05.17-N3ZtjSXenD7KpQstxLFxm3dYzqK4D9.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Rich Media форматы из ecommerce
const richMediaFormats = [
  {
    name: "Tap&Melt-баннер",
    description: "Интерактивный баннер с эффектом таяния при наведении. Показывает товар, который трансформируется для привлечения внимания",
    why: "Необычный интерактив привлекает взгляд, увеличивает время контакта, повышает запоминаемость",
    ctr: "0.8-1.4%",
    icon: Zap,
    preview: TapMeltBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Баннер, меняющий креатив при наведении (подойдет для демонстрации дневного / вечернего сценария потребления энергетика)",
    why: "Геймификация позволяет раскрыть разные ситуация потребления продукта в одном рекламном месте",
    ctr: "0.9-1.6%",
    icon: Zap,
    preview: HoverBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Banner Slider",
    description: "Карусель товаров и категорий. Компактная демонстрация ассортимента и распродаж в одном баннере",
    why: "Показывает разнообразие товаров, увеличивает охват категорий, усиливает brand presence",
    ctr: "1.0-1.7%",
    icon: Zap,
    preview: BannerSliderPreview,
    type: "reach" as const,
  },
]

// Каналы из ecommerce
const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах партнеров и медиа",
    type: "mixed" as const,
    insights: [
      "Погодные триггеры: запуск медийной рекламы воды и лимонадов только при определенной температуре (например от 20 или 25)",
      "Таргетинг по интересам: геймеры, студенты и водители для продвижения энергетических напитков",
      "Контекстный таргетинг по категориям товаров и брендам",
      "Возможность проведения sales lift",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream, out-stream и на платформах",
    type: "reach" as const,
    insights: [
      "Taргетинг на образ жизни (beauty, fashion, tech, lifestyle) с точной аудиторией",
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
      "Premium окружение = высокое доверие к бренду и товарам",
    ],
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама в местах покупки и около конкурентов",
    type: "reach" as const,
    insights: [
      "Размещение в торговых центрах и вблизи магазинов конкурентов",
      "Геотаргетинг: реклама скидок и новинок когда пользователь рядом с магазином",
    ],
    avgCtr: "N/A",
    recommended: true,
  },
]

export function FmcgCaseSlide() {
  const [isExporting, setIsExporting] = useState(false)
  const slideRef = useRef<HTMLDivElement>(null)

  const handleExport = useCallback(async () => {
    if (!slideRef.current) return
    
    setIsExporting(true)
    
    try {
      const dataUrl = await domToPng(slideRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
      })
      
      const link = document.createElement("a")
      link.download = "fmcg-case-presentation.png"
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Export Button */}
      <div className="fixed right-6 top-6 z-50 flex gap-2">
        <Button
          onClick={handleExport}
          disabled={isExporting}
          className="gap-2 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
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
      <div ref={slideRef} className="bg-background p-6 lg:p-10">
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
            {/* Baltika Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.46.20-oq3VPSbsPalhunEURQDV1J7zbbrt8x.png" 
              alt="Baltika" 
              className="h-12 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для Пивоваренной компании «Балтика»
                </h1>
                <p className="text-sm text-muted-foreground">
                  Как выиграть внимание в FMCG с минимальным временем контакта
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
                <Layers className="h-5 w-5 text-primary" />
                Rich Media форматы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {richMediaFormats.map((format) => (
                  <div
                    key={format.name}
                    className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    {/* Preview Area */}
                    <format.preview />
                    
                    {/* Info Area */}
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <format.icon className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-sm font-semibold text-foreground">{format.name}</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge 
                            className={`text-[9px] ${
                              format.type === "performance" 
                                ? "bg-green-500/10 text-green-600 border-green-500/30" 
                                : "bg-blue-500/10 text-blue-600 border-blue-500/30"
                            }`}
                            variant="outline"
                          >
                            {format.type === "performance" ? "Performance" : "Охват"}
                          </Badge>
                        </div>
                      </div>
                      <p className="mb-2 text-base text-muted-foreground">{format.description}</p>
                      <p className="mt-auto text-sm text-primary/80">
                        <span className="font-medium">Почему работает:</span> {format.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                                channel.type === "reach" || channel.id === "display"
                                ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                : "bg-purple-500/10 text-purple-600 border-purple-500/30"
                              }`}
                              variant="outline"
                            >
                              {channel.type === "reach" || channel.id === "display" ? "Охват" : "Performance"}
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IU2732yKjRYxMJTtOZHifxtu9EZVyY.png"
                  alt="Borjomi"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2ksxNJjR7Pr540PrpDi0FEP1V3MzA.png"
                  alt="Шоколадово"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CArUJU9heqdG0EnQriVgr2a8tS987Q.png"
                  alt="Спартак"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BWY2fEjt3PDJ71EIjpBJiVs7rvDSr8.png"
                  alt="Витьба"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jHnsD4tvBYvJhi88qo1E5xpaIrUPPm.png"
                  alt="Fresco"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vOtPA5xXfkiOYrf3edXASoWNsGNrzV.png"
                  alt="Baron"
                  className="h-24 w-32 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study - Full Width */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Как привлечь внимание к новому позиционированию бренда и удержать 0,3% GIVT+SIVT
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left - Product Video */}
                <div className="flex items-center justify-center rounded-2xl bg-[#1a4d7a] p-6">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.48.46-v9mryXnyMcaTSQIQQpFLRfLMlOHRDz.mov"
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
                          <p className="font-medium text-foreground">Продукт: минеральная вода Borjomi</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель: продвижение нового позиционирования</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Каналы: Display</p>
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
                          <p className="text-sm text-foreground">Rich Media (Cube-баннер) позволил визуально передать идею Food Pairing и увеличить время контакта с брендом</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Жесткий контроль качества: использование собственной антифрод-системы обеспечило кристально чистый трафик (менее 0.3% фрода)</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Идеальная механика для безалкогольных напитков</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Block */}
                  <div className="space-y-3 rounded-2xl bg-[#0052cc] p-6 text-white">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-3xl font-bold">+11%</p>
                        <p className="text-sm">перевыполнение плана по показам</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">+9%</p>
                        <p className="text-sm">узнаваемость бренда</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-3xl font-bold">-10%</p>
                        <p className="text-sm">средний СРМ</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold">0,3%</p>
                        <p className="text-sm">GIVT+SIVT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 flex justify-around border-t border-[#0052cc]/20 pt-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">1,5 месяца</p>
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
              nt.technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
