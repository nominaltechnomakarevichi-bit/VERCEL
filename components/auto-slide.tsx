"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Monitor,
  Play,
  Smartphone,
  Car,
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
  FileText,
} from "lucide-react"


// Cube-баннер Preview Component (was Showcase)
function CubeBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2016.55.07-QeAkFLAMvNkr8cMKYANYSUawJxDCrh.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Video-баннер Preview Component (was Cube/Zeekr)
function VideoBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#0a0a0a]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2016.56.56-x2sCDqyeBXeWYvH2DmYSkAb6DdeJfz.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Expandable-баннер Preview Component (was Video/Volkswagen)
function ExpandableBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#1a1a2e]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2017.00.19-60Ea5QejYaYTUhhM2dfwrUqqv2v1R8.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Showcase-баннер Preview Component (was Expandable/Gamedev)
function ShowcaseBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#0f0f1a]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-16%20%D0%B2%2017.01.58-vh4fp4eEMxMSrS2a3bWHqNG2UaZtko.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Rich Media форматы
const richMediaFormats = [
  {
    name: "Cube-баннер",
    description: "3D-куб с гранями, демонстрирующими автомобиль с разных ракурсов: экстерьер, интерьер, характеристики, CTA",
    why: "Нестандартная визуализация привлекает внимание, позволяет показать авто со всех сторон в одном креативе",
    ctr: "0.8-1.5%",
    icon: Zap,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Video-баннер",
    description: "Баннер с встроенным видео автомобиля в движении. Автозапуск при попадании в viewport, звук по клику",
    why: "Видео передает динамику и эмоции от вождения, повышает вовлеченность и brand recall на 70%",
    ctr: "1.0-2.0%",
    icon: Play,
    preview: VideoBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Expandable-баннер",
    description: "Раскрывающийся баннер с дополнительным контентом: галерея авто, конфигуратор, форма заявки на тест-драйв",
    why: "Максимум информации в одном креативе, возможность взаимодействия без перехода на сайт",
    ctr: "1.2-2.2%",
    icon: Layers,
    preview: ExpandableBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Showcase-баннер",
    description: "Интерактивная витрина моделей с возможностью выбора цвета, комплектации и сравнения характеристик",
    why: "Персонализация выбора повышает конверсию, собирает данные о предпочтениях для ретаргетинга",
    ctr: "1.5-2.5%",
    icon: Target,
    preview: ShowcaseBannerPreview,
    type: "reach" as const,
  },
]

const channels = [
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream и out-stream",
    type: "reach" as const,
    insights: [
      "Pre-roll не более 15 сек — оптимальная длина для автомобильной рекламы",
      "Storytelling о путешествиях и lifestyle повышает brand lift на 50%",
    ],
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на автомобильных площадках",
    type: "mixed" as const,
    insights: [
      "Размещение на площадках автоподбора (auto.ru, drom.ru, avito авто)",
      "Ретаргетинг посетителей страниц моделей и конфигуратора",
      "Контекстный таргетинг по ключевым словам: купить авто, тест-драйв, кредит на авто",
      "Деловые СМИ для премиум-сегмента (Forbes, РБК, Коммерсант)",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "native",
    name: "Native",
    icon: FileText,
    description: "Нативная реклама в редакционном контенте",
    type: "mixed" as const,
    insights: [
      "Спецпроекты с автомобильными изданиями (Авторевю, За рулем)",
      "Интеграция в статьи о путешествиях и lifestyle-контент",
      "Рекомендательные виджеты на новостных площадках",
      "Высокий trust — воспринимается как редакционный контент",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "inapp",
    name: "In-App",
    icon: Smartphone,
    description: "Реклама в мобильных приложениях",
    type: "reach" as const,
    insights: [
      "Таргетинг на пользователей навигаторов и приложений для водителей",
      "Геотаргетинг на посетителей автосалонов конкурентов",
      "Rewarded-форматы в игровых приложениях для молодой аудитории",
    ],
    avgCtr: "0.8-1%",
    recommended: true,
  },
]

const whitelistPlatforms = [
  { category: "Автомобильные порталы", sites: ["auto.ru", "drom.ru", "avito.ru/avtomobili", "avtovzglyad.ru"] },
  { category: "Автомобильные СМИ", sites: ["zr.ru", "autorevue.ru", "drive.ru", "kolesa.ru"] },
  { category: "Деловые СМИ", sites: ["rbc.ru", "forbes.ru", "kommersant.ru", "vedomosti.ru"] },
  { category: "Lifestyle & Travel", sites: ["afisha.ru", "the-village.ru", "nat-geo.ru", "travel.ru"] },
]

const technicalFeatures = [
  {
    icon: FileWarning,
    title: "Кредитные условия",
    description: "При рекламе автокредита обязательно указание ПСК и условий согласно 353-ФЗ",
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Указание «не является офертой», характеристики могут отличаться от фактических",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Исключение контента о ДТП, авариях, отзывных кампаниях, негативных отзывах",
  },
  {
    icon: CheckCircle2,
    title: "Viewability",
    description: "Viewability минимум 70% для видеорекламы автомобилей",
  },
]

export function AutoSlide() {
  const [activeChannel, setActiveChannel] = useState("video")
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
      link.download = "auto-slide-presentation.png"
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
              <Car className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                Авто
              </h1>
              <p className="text-sm text-muted-foreground">
                Программатик решения для автомобильной индустрии
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
                      <p className="text-xs font-medium text-foreground">Инсайты для авто:</p>
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
            Программатик-платформа для автомобильной рекламы
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>nt.technology</span>
          <span>|</span>
          <span>sales@nt.technology</span>
        </div>
      </div>
      </div>
    </div>
  )
}
