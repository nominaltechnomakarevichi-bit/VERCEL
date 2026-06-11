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
  Landmark,
  TrendingUp,
  Layers,
  Zap,
  Target,
  CheckCircle2,
  Play,
  Tv,
  MapPin,
  AlertCircle,
  FileWarning,
  Shield,
} from "lucide-react"

// Rich Media Preview Components
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

const richMediaFormats = [
  {
    name: "Cube-баннер",
    description: "3D-куб с гранями, каждая показывает продукт банка: карту, условия, бонусы, CTA",
    why: "Нестандартная визуализация привлекает внимание, увеличивает время контакта с рекламой",
    icon: Zap,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "3D-баннер",
    description: "Баннер с 3D-анимацией банковской карты или продукта. Карта вращается, показывая дизайн и ключевые преимущества",
    why: "Эффектная визуализация продукта, создает премиальное восприятие бренда, повышает запоминаемость",
    icon: Zap,
    preview: Banner3DPreview,
    type: "reach" as const,
  },
  {
    name: "Banner Slider",
    description: "Карусель с горизонтальной прокруткой. Показывает линейку продуктов банка: карты, вклады, кредиты в одном баннере",
    why: "Компактная демонстрация продуктового портфеля, увеличивает охват аудитории разных продуктов",
    icon: Layers,
    preview: BannerSliderPreview,
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Интерактивный баннер с анимацией при наведении курсора. Раскрывает детали продукта, условия или бонусы при взаимодействии",
    why: "Вовлекает пользователя во взаимодействие, увеличивает время контакта, повышает CTR за счет интерактива",
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
      "Обязательная прошивка на post-view конверсии дает возможность отслеживать качественный post-click",
      "Размещение по white-list обеспечивает низкий fraud и высокий Brand Safety 97%",
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
      "Rewarded-форматы для продвижения карт с кэшбэком",
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
    title: "Лице��зия ЦБ",
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

export function FinanceCaseSlide() {
  const [activeChannel, setActiveChannel] = useState("premium-display")
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
      link.download = "finance-case-presentation.png"
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

      <div ref={slideRef} className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-6">
            <img 
              src="/nt-logo.png" 
              alt="NT Technology" 
              className="h-14 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OYmp4BQjnpwS0qwms0L2zJUpGHvXiW.png" 
              alt="Сбербанк" 
              className="h-12 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для ПАО Сбербанк
                </h1>
                <p className="text-sm text-muted-foreground">
                  Кейс успешной кампании: 95% viewability
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
                    <format.preview />
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <format.icon className="h-3.5 w-3.5" />
                          </div>
                          <span className="text-sm font-semibold text-foreground">{format.name}</span>
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

          {/* Channels */}
          <Card className="xl:col-span-2">
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
                      className="text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground sm:text-sm"
                    >
                      <span>{channel.name}</span>
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
                        {(channel.avgCtr !== "N/A" || channel.id === "dooh") && (
                          <div className="flex gap-2">
                            <Badge 
                              className={`text-[9px] ${
                                channel.type === "reach"
                                ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                                : "bg-purple-500/10 text-purple-600 border-purple-500/30"
                              }`}
                              variant="outline"
                            >
                              {channel.type === "reach" ? "Охват" : "Brandformance"}
                            </Badge>
                            {channel.avgCtr !== "N/A" && (
                              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-[9px]">
                                CTR: {channel.avgCtr}
                              </Badge>
                            )}
                          </div>
                        )}
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-20eHeooXm0idjVWqwcthIq7Xb61F0G.png"
                  alt="Совкомбанк"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7svZzXrHEGf5HUxAxMRLGaWp3rIToc.png"
                  alt="Газпромбанк"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-En9MQzulAzt2Up2pvQN2pAeepMFgud.png"
                  alt="Морской банк"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AngLz0bsgTjTXGREOB5Oudm6OWqjwg.png"
                  alt="МТБанк"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UGarSrV4xvRvfRD1lTLSXwPvNsTX6W.png"
                  alt="АкБарс Финанс"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BF1WlQZpT8QEcb0ICItele1fwxVOJm.png"
                  alt="Доходъ"
                  className="h-20 w-32 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left - Video */}
                <div className="flex items-center justify-center rounded-2xl bg-white p-6">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-23%20%D0%B2%2011.25.43-SSP5vMywtFeVTpQbfzCMoJHi3taraz.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-64 w-auto object-contain"
                  />
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-[#0052cc]">
                      Как Rich Media обеспечили 95% viewability
                    </h2>
                  </div>

                  {/* About Campaign */}
                  <div>
                    <h3 className="mb-3 font-bold text-[#0052cc]">о кампании</h3>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Продукт: новая МТКарта от МТБанк</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель: рост узнаваемости продукта</p>
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

                  {/* Insights */}
                  <div>
                    <h3 className="mb-3 font-bold text-[#0052cc]">инсайты</h3>
                    <div className="flex gap-3">
                      <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                      <div>
                        <p className="text-sm text-foreground">Для размещения большого объема информации о карте использовали Cube-баннер</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 flex justify-around border-t border-[#0052cc]/20 pt-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">95%</p>
                  <p className="text-sm text-muted-foreground">Viewability</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">0,2%</p>
                  <p className="text-sm text-muted-foreground">CTR</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">2,7%</p>
                  <p className="text-sm text-muted-foreground">SIVT</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">0,9%</p>
                  <p className="text-sm text-muted-foreground">GIVT</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
