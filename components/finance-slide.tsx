"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Monitor,
  MapPin,
  Play,
  Tv,
  Landmark,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Layers,
  Zap,
  FileWarning,
  Shield,
  Download,
  Loader2,
} from "lucide-react"


// Cube-баннер Preview Component
function CubeBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0eef5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2014.58.11-LBQJX8lmLevEr7IDQ2D1aO8xIrxFVx.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// 3D-баннер Preview Component
function Banner3DPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#0a1628]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2016.08.49-aautcs5AJWpMtHRnYOlsJKkDipRgm9.mov"
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
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#1a1a2e]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2016.18.22-UR8fzCadjowaeU3OcQwNSkPA8BI5rt.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Hover-баннер Preview Component
function HoverBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2016.17.17-D6eB9A1IwP7mSWrW6VMNXU2Ndoy6M9.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Rich Media форматы (интерактивные)
const richMediaFormats = [
  {
    name: "Cube-баннер",
    description: "3D-куб с гранями, каждая показывает продукт банка: карту, условия, бонусы, CTA. Вращается автоматически или по клику",
    why: "Нестандартная визуализация привлекает внимание, увеличивает время контакта с рекламой",
    ctr: "0.8-1.4%",
    icon: Zap,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "3D-баннер",
    description: "Баннер с 3D-анимацией банковской карты или продукта. Карта вращается, показывая дизайн и ключевые преимущества",
    why: "Эффектная визуализация продукта, создает премиальное восприятие бренда, повышает запоминаемость",
    ctr: "0.7-1.3%",
    icon: Zap,
    preview: Banner3DPreview,
    type: "reach" as const,
  },
  {
    name: "Banner Slider",
    description: "Карусель с горизонтальной прокруткой. Показывает линейку продуктов банка: карты, вклады, кредиты в одном баннере",
    why: "Компактная демонстрация продуктового портфеля, увеличивает охват аудитории разных продуктов",
    ctr: "1.0-1.8%",
    icon: Layers,
    preview: BannerSliderPreview,
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Интерактивный баннер с анимацией при наведении курсора. Раскрывает детали продукта, условия или бонусы при взаимодействии",
    why: "Вовлекает пользователя во взаимодействие, увеличивает время контакта, повышает CTR за счет интерактива",
    ctr: "1.2-2.0%",
    icon: Target,
    preview: HoverBannerPreview,
    type: "reach" as const,
  },
]

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама в деловых и финансовых медиа",
    type: "mixed" as const,
    insights: [
      "Размещение в деловых медиа (РБК, Коммерсант, Ведомости) — высокий trust",
      "Контекстный таргетинг по запросам: кредит, ипотека, вклад",
      "Ретаргетинг посетителей страниц продуктов без конверсии",
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
      "Размещение в бизнес-центрах для продвижения корпоративных продуктов",
      "Ипотека — выходные, кредиты — начало месяца",
      "Триггер по курсу валют: реклама вкладов при росте курса",
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
      "Pre-roll не более 15 сек — оптимальная длина для финансов",
      "Storytelling о жизненных ситуациях повышает brand lift на 40%",
      "Таргетинг на бизнес-контент для B2B продуктов",
      "Интеграция калькулятора в интерактивный видеоформат",
    ],
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "inapp",
    name: "In-App",
    icon: Tv,
    description: "Реклама в мобильных приложениях",
    type: "reach" as const,
    insights: [
      "Таргетинг на пользователей финансовых и банковских приложений",
      "Rewarded-форматы для продвижения карт с кэшбэком",
      "Геотаргетинг на посетителей ТЦ и бизнес-центров",
    ],
    avgCtr: "0.8-1%",
    recommended: true,
  },
]

const whitelistPlatforms = [
  { category: "Финансовые порталы", sites: ["banki.ru", "sravni.ru", "rbc.ru/finances", "quote.rbc.ru"] },
  { category: "Деловые СМИ", sites: ["vedomosti.ru", "kommersant.ru", "forbes.ru", "bfm.ru"] },
  { category: "Недвижимость", sites: ["cian.ru", "domclick.ru", "realty.yandex.ru", "avito.ru/nedvizhimost"] },
  { category: "Автомобили", sites: ["auto.ru", "drom.ru", "avito.ru/avtomobili", "drive.ru"] },
]

const technicalFeatures = [
  {
    icon: FileWarning,
    title: "Лицензия ЦБ",
    description: "Все креативы должны содержать номер лицензии банка и ссылку на условия",
  },
  {
    icon: AlertCircle,
    title: "Полная стоимость кредита",
    description: "Обязательное указание ПСК при рекламе кредитных продуктов согласно 353-ФЗ",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Исключение негативного контента: банкротства, мошенничество, экономические кризисы",
  },
  {
    icon: CheckCircle2,
    title: "Fraud Protection",
    description: "Обязательная верификация трафика для защиты от фрода в финансовой вертикали",
  },
]

export function FinanceSlide() {
  const [activeChannel, setActiveChannel] = useState("display")
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
      link.download = "finance-slide-presentation.png"
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
      {/* Export Button - Fixed */}
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
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                Финансы
              </h1>
              <p className="text-sm text-muted-foreground">
                Программатик решения для банков и финтеха
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
        {/* Rich Media Formats - интерактивные форматы */}
        <Card className="xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="h-5 w-5 text-primary" />
              Rich Media форматы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                    <p className="mb-2 text-xs text-muted-foreground">{format.description}</p>
                    <p className="mt-auto text-[11px] text-primary/80">
                      <span className="font-medium">Почему работает:</span> {format.why}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Channels */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Monitor className="h-5 w-5 text-primary" />
              Рекламные каналы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeChannel} onValueChange={setActiveChannel} className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-4 bg-muted">
                {channels.map((channel) => (
                  <TabsTrigger
                    key={channel.id}
                    value={channel.id}
                    className="flex items-center gap-1.5 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
                  >
                    <channel.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{channel.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {channels.map((channel) => (
                <TabsContent key={channel.id} value={channel.id} className="mt-0">
                  <div className="rounded-lg border border-border bg-secondary/30 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <channel.icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground">{channel.name}</h3>
                          <p className="text-xs text-muted-foreground">{channel.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex gap-1">
                          {channel.recommended && (
                            <Badge className="bg-primary text-primary-foreground text-[9px]">
                              Рекомендуем
                            </Badge>
                          )}
                          <Badge 
                            className={`text-[9px] ${
                              channel.type === "performance" 
                                ? "bg-green-500/10 text-green-600 border-green-500/30" 
                                : channel.type === "reach"
                                ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                : "bg-purple-500/10 text-purple-600 border-purple-500/30"
                            }`}
                            variant="outline"
                          >
                            {channel.type === "performance" ? "Performance" : channel.type === "reach" ? "Охват" : "Охват + Perf"}
                          </Badge>
                        </div>
                        {channel.avgCtr !== "N/A" && (
                          <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-[9px]">
                            CTR: {channel.avgCtr}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Инсайты для финансов:</p>
                      <ul className="space-y-1.5">
                        {channel.insights.map((insight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 rounded-md bg-card p-2.5 text-xs text-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Right Column: White-list & Technical */}
        <div className="flex flex-col gap-6">
          {/* White-list Platforms */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-primary" />
                White-list площадки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {whitelistPlatforms.map((platform) => (
                  <div
                    key={platform.category}
                    className="rounded-lg border border-border bg-card p-3"
                  >
                    <h4 className="mb-2 text-sm font-semibold text-foreground">{platform.category}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {platform.sites.map((site) => (
                        <Badge
                          key={site}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground text-[10px]"
                        >
                          {site}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Features */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <AlertCircle className="h-5 w-5 text-primary" />
                Технические особенности
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              {technicalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3 rounded-lg border border-border bg-card p-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{feature.title}</h4>
                    <p className="text-[11px] text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
        <div className="flex items-center gap-4">
          <img 
            src="/nt-logo.png" 
            alt="NT Technology" 
            className="h-8 w-auto object-contain"
          />
          <div className="h-6 w-px bg-border" />
          <p className="text-sm text-muted-foreground">
            nt.technology
          </p>
          <div className="h-6 w-px bg-border" />
          <p className="text-xs text-muted-foreground">
            Данные основаны на бенчмарках 2025-2026
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Finance Vertical
          </Badge>
          <Badge className="bg-primary text-primary-foreground">
            v2.0
          </Badge>
        </div>
      </div>
      </div>
    </div>
  )
}
