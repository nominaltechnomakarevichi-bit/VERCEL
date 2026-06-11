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
  Home,
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
  Tv,
  MapPin,
} from "lucide-react"

// Progress-баннер Preview Component (was Touch, now with Touch video)
function ProgressBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2014.22.20-fqDUv0NZmyWzqdWOAqutkJWyre7Sv9.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Touch-баннер Preview Component (was Banner Stories)
function TouchBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#d4e8f0]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2014.25.45-Sepcqq4zNOcLhtzLp8ZQoI6ckylYbt.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Banner Stories Preview Component (was Video, now with new real estate video)
function BannerStoriesPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f0f5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2014.56.09-4kgfQvbl380AYzudVr1slz8yl03PTK.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Video-баннер Preview Component (остаёт без изменений)
function VideoBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0e8d4]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-17%20%D0%B2%2014.27.38-X1aoGJpK5fhXD2iOr8fCWupslaU0Fj.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Rich Media форматы для Real Estate
const richMediaFormats = [
  {
    name: "Progress-баннер",
    description: "Баннер с индикатором заполнения анкеты или прогресса поиска недвижимости. Показывает сколько шагов до идеального жилья",
    why: "Визуальный прогресс вызывает FOMO, мотивирует заполнить анкету, повышает lead generation",
    ctr: "1.3-2.2%",
    icon: Zap,
    preview: ProgressBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Touch-баннер",
    description: "Интерактивный баннер с опросом: бюджет, тип жилья, район. Собирает данные прямо в баннере без перехода на сайт",
    why: "Минимизирует friction в сборе лидов, увеличивает конверсию, собирает quality данные о клиенте",
    ctr: "1.5-2.5%",
    icon: Zap,
    preview: TouchBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Banner Stories",
    description: "Вертикальный формат Stories с фото/видео объектов недвижимости, план квартир, интерьеры на фоне lifestyle сцен",
    why: "Native format для мобильных, повышает engagement за счет визуального storytelling, создает эмоциональную связь",
    ctr: "2.0-3.2%",
    icon: Zap,
    preview: BannerStoriesPreview,
    type: "reach" as const,
  },
  {
    name: "Video-баннер",
    description: "Баннер с embedded видео: обзор квартир, район, инфраструктура. Pre-roll не более 15 сек с CTA на запись на просмотр",
    why: "Видеоконтент повышает trust к объекту, ускоряет decision-making, увеличивает вероятность записи на экскурсию",
    ctr: "0.8-1.6%",
    icon: Zap,
    preview: VideoBannerPreview,
    type: "reach" as const,
  },
]

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах партнеров и медиа",
    type: "mixed" as const,
    insights: [
      "Ретаргетинг посетителей сайта клиента - конверсия выше в 4+ раза",
      "Контекстный таргетинг по районам, цене и типу жилья",
      "Таргетинг на страницах о переездах, ремонтах, ипотеке в деловых медиа",
      "Размещение в lifestyle и architecture медиа для премиум-сегмента",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Tv,
    description: "Видеореклама в Premium окружении: VK Video, Smart TV, streaming",
    type: "reach" as const,
    insights: [
      "Pre-roll не более 15 сек — обзоры объектов и район с lifestyle сценами",
      "Storytelling о семье и новом доме повышает emotional engagement",
      "Таргетинг на контент о переездах, interior design, lifestyle",
      "QR-код в конце видео для перехода на виртуальный тур",
    ],
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "social",
    name: "Social",
    icon: Smartphone,
    description: "Реклама в социальных сетях: VK, Telegram",
    type: "reach" as const,
    insights: [
      "Быстрые переходы между комнатами, лайфстайл кадры",
      "Таргетинг по интересам: переезд, ремонт, инвестиции, семья",
      "Carousel ads с галереей объектов, гео-таргетинг по районам",
      "User-generated content: отзывы жильцов, влиянию дизайнеров",
    ],
    avgCtr: "0.6-1%",
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама в городе",
    type: "reach" as const,
    insights: [
      "Размещение в метро, ТЦ, бизнес-центрах в районах спроса на недвижимость",
      "Разбивка по времени суток: утром и вечером (часы пик) для максимального охвата",
      "QR-коды для перехода на виртуальный тур или онлайн-консультацию",
    ],
    recommended: false,
  },
]

// White-list площадки
const whiteListPlatforms = [
  { 
    category: "Порталы недвижимости", 
    sites: ["cian.ru", "avito.ru", "domclick.ru", "yandex.ru/realty"] 
  },
  { 
    category: "Деловые издания", 
    sites: ["Ведомости", "РБК", "Forbes.ru", "Tinkoff Journal"] 
  },
  { 
    category: "Lifestyle и дизайн", 
    sites: ["adme.ru", "houzz.ru", "Собака.ру", "Vogue.ru"] 
  },
]

// Технические особенности
const technicalRequirements = [
  {
    title: "Brand Safety",
    description: "Размещение рядом с контентом о переездах, жилье, дизайне. Исключение: новостные критические материалы",
  },
  {
    title: "Viewability",
    description: "Минимум 70% видео должно быть видимо пользователю",
  },
]

export function RealEstateSlide() {
  const [activeFormat, setActiveFormat] = useState(0)
  const [activeChannel, setActiveChannel] = useState(0)
  const exportRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = useCallback(async () => {
    if (!exportRef.current) return
    setIsExporting(true)
    try {
      const png = await domToPng(exportRef.current)
      const link = document.createElement("a")
      link.href = png
      link.download = `real-estate-presentation-${Date.now()}.png`
      link.click()
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }, [])

  return (
    <div className="w-full space-y-8 pb-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Home className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Real Estate</h1>
            <p className="text-sm text-muted-foreground">Программатик решения для риэлторов и девелоперов</p>
          </div>
        </div>
        <Button
          onClick={handleExport}
          disabled={isExporting}
          className="gap-2"
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
              Скачать презентацию
            </>
          )}
        </Button>
      </div>

      <div ref={exportRef} className="space-y-8">
        {/* Rich Media Formats */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-primary" />
              Rich Media форматы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {richMediaFormats.map((format, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFormat(idx)}
                  className={`space-y-3 rounded-lg border-2 p-3 transition-all ${
                    activeFormat === idx
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Preview */}
                  <div className="overflow-hidden rounded-lg border border-border">
                    <format.preview />
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-left">
                    <h3 className="font-semibold text-foreground text-sm">{format.name}</h3>
                    <p className="text-xs text-muted-foreground">{format.description}</p>
                    <div className="flex gap-1 flex-wrap">
                      <Badge 
                        className="text-[9px] bg-blue-500/10 text-blue-600 border-blue-500/30"
                        variant="outline"
                      >
                        Охват
                      </Badge>
                    </div>
                    <p className="text-xs text-primary/80">
                      <span className="font-medium">Почему работает:</span> {format.why}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Рекламные каналы */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" />
              Рекламные каналы
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={`channel-${activeChannel}`} onValueChange={(val) => setActiveChannel(parseInt(val.split("-")[1]))}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                {channels.map((channel, idx) => (
                  <TabsTrigger key={idx} value={`channel-${idx}`} className="text-xs sm:text-sm">
                    {channel.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {channels.map((channel, idx) => (
                <TabsContent key={idx} value={`channel-${idx}`}>
                  <div className="grid gap-4 md:grid-cols-2">
                    {/* Preview */}
                    <div className="overflow-hidden rounded-xl border border-border">
                      <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                        <channel.icon className="h-16 w-16 text-muted-foreground/30" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <channel.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{channel.name}</h3>
                          <div className="flex gap-2 mt-1 flex-wrap">
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
                            {channel.avgCtr !== "N/A" && channel.id !== "dooh" && (
                              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-[9px]">
                                CTR: {channel.avgCtr}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="mb-3 text-sm text-muted-foreground">{channel.description}</p>
                      <p className="text-xs text-primary/80 mb-3">
                        <span className="font-medium">Почему работает для Real Estate:</span> Размещение в контексте поиска жилья и lifestyle контента
                      </p>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-foreground">Инсайты для Real Estate:</p>
                        <ul className="space-y-1">
                          {channel.insights.map((insight, i) => (
                            <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                              <span className="text-primary mt-0.5">•</span>
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

        {/* White-list площадки */}
        <Card className="xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" />
              White-list площадки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {whiteListPlatforms.map((platform, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">{platform.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.sites.map((site, i) => (
                      <Badge key={i} variant="outline" className="border-border text-muted-foreground text-xs">
                        {site}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Технические особенности */}
        <Card className="xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="h-5 w-5 text-primary" />
              Технические особенности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              {technicalRequirements.map((req, idx) => (
                <div key={idx} className="rounded-lg border border-border p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-foreground text-sm">{req.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{req.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="rounded-lg bg-muted/50 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            Данные основаны на бенчмарках 2025-2026
          </p>
        </div>
      </div>
    </div>
  )
}
