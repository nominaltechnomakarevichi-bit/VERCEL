"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { domToPng } from "modern-screenshot"
import {
  Monitor,
  Play,
  Smartphone,
  ShoppingCart,
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

// Tap&Melt-баннер Preview Component (was Slider, now Hover video)
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

// Progress-баннер Preview Component (was Tap&Melt)
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

// Hover-баннер Preview Component (was Slider, now Tap&Melt video)
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

// Banner Slider Preview Component (was Hover)
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

// Rich Media форматы
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
    name: "Progress-баннер",
    description: "Баннер с индикатором скидки или прогресса акции. Создает ощущение срочности и ограниченности предложения",
    why: "Визуальный прогресс вызывает FOMO, способствует немедленному клику, повышает CTR",
    ctr: "1.2-2.0%",
    icon: Zap,
    preview: ProgressBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Баннер с раскрытием деталей при наведении: рейтинги, отзывы, характеристики товара",
    why: "Интерактивное откровение информации повышает engagement, помогает принять решение о покупке",
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

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах партнеров и медиа",
    type: "mixed" as const,
    insights: [
      "Ретаргетинг посетителей корзины и карточек товаров — конверсия выше в 5+ раз",
      "Интеграция с ОФД-данными: реклама покупателей конкурентов, которые ищут товары",
      "Контекстный таргетинг по категориям товаров и брендам",
      "Dynamic Product Ads: реклама конкретных товаров из просмотренного каталога",
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
      "Unboxing и обзоры товаров: повышает trust и brand recall на 60%",
      "Шоппинг-видео с прямой покупкой товаров из плеера (YouTube Shorts, TikTok, не более 15 сек)",
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
      "Охват семей с доходом выше среднего — целевая аудитория для премиум товаров",
      "QR-код и текст для перехода на лендинг или приложение",
      "Синхронизация с мобильным ретаргетингом для последующего преследования",
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
      "Размещение рекламы рядом с необходимыми оффлайн-точками/в определенных локациях",
      "Разбивка по времени суток: утром — завтраки, днем — обеды, вечером — ужины",
      "Интеграция с мобильным приложением: qR-коды для перехода и получения промокода",
    ],
    avgCtr: "N/A",
    recommended: true,
  },
]

const whitelistPlatforms = [
  { category: "Деловые медиа", sites: ["rbc.ru", "forbes.ru", "vedomosti.ru", "tinkoff-journal.ru"] },
  { category: "Lifestyle & Fashion", sites: ["vogue.ru", "buro247.ru", "adme.ru", "fashiontime.ru"] },
  { category: "Технологические сайты", sites: ["dtf.ru", "geekbrains.ru", "habr.com", "4pda.ru"] },
]

const technicalFeatures = [
  {
    icon: FileWarning,
    title: "Цена и промокоды",
    description: "Актуальная цена и промокоды в баннере, синхронизированы с реальным каталогом",
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Указание рекламного статуса, условия доставки, наличие товара",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Исключение контента о подделках, отрицательных отзывах, возвратах",
  },
  {
    icon: CheckCircle2,
    title: "Tracking & Pixels",
    description: "Установка конверсионных пикселей для отслеживания покупок и ROAS",
  },
]

export function EcommerceSlide() {
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
      link.download = "ecommerce-slide-presentation.png"
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
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                E-commerce
              </h1>
              <p className="text-sm text-muted-foreground">
                Программатик решения для интернет-магазинов и маркетплейсов
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
                          {channel.avgCtr !== "N/A" && channel.id !== "ctv" && (
                            <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-[9px]">
                              CTR: {channel.avgCtr}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Инсайты для E-commerce:</p>
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
          <div className="h-8 w-px bg-border" />
          <p className="text-sm text-muted-foreground">
            Программатик платформа NT Technology © 2026
          </p>
        </div>
        <p className="text-[12px] text-muted-foreground">
          Данные основаны на внутреннем анализе кампаний 2024-2025
        </p>
      </div>
      </div>
    </div>
  )
}
