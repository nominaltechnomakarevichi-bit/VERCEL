"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { domToPng } from "modern-screenshot"
import {
  Monitor,
  Download,
  Loader2,
  Shirt,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Shield,
  Home,
  Smartphone,
  Play,
  Tv,
  MapPin,
  Layers,
  Zap,
} from "lucide-react"

// Cube-баннер Preview
function CubeBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0e6d2]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2017.36.15-CUiPstNmwNofK3rnB1JjN8dFQCtxP1.mov"
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
function HoverBannerRetailPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f8f8f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2017.37.13-DnImkLwkXi38GmM9V6Tuxt4VQzVQXf.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Showcase-баннер Preview
function ShowcaseBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#fff5e6]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2017.37.57-xO3PuOrLlTFfNncq4jasp80w3Y1gqN.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// 3D-баннер Preview
function ThreeDimensionalBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f4f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2017.38.34-Ji8zTpd0X4WOvS2xrknwG8RImIH9YL.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

// Rich Media форматы для retail
const richMediaFormats = [
  {
    name: "Cube-баннер",
    description: "3D-куб с гранями, каждая показывает разные модели одежды/обуви в разных ракурсах и цветах. Может вращаться как самостоятельно, так и при помощи курсора",
    why: "Позволяет показать товар со всех сторон, преодолевает баннерную слепоту",
    ctr: "0.8-1.4%",
    icon: Zap,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Баннер с раскрытием информации при наведении: размеры, доступные цвета, цену со скидкой, материалы",
    why: "Интерактивный контроль информации помогает покупателю быстро найти нужный размер и цвет",
    ctr: "0.9-1.6%",
    icon: Zap,
    preview: HoverBannerRetailPreview,
    type: "reach" as const,
  },
  {
    name: "Showcase-баннер",
    description: "Динамическая витрина с демонстрацией коллекций сезона. Позволяет просмотраивать товары без перехода на сайт, имеет интерактивные точки с подробностями о товаре",
    why: "Создает атмосферу и показывает разнообразие, повышает brand recall, особенно эффективна в fashion",
    ctr: "1.0-1.7%",
    icon: Zap,
    preview: ShowcaseBannerPreview,
    type: "reach" as const,
  },
  {
    name: "3D-баннер",
    description: "Баннер не требует от пользователя действий для активации эффекта. Преимущества формата: перетягивает внимания за счет 3D-анимации. Подходит для имиджевых кампаний. Нет ограничений по тематикам",
    why: "Максимальное погружение в товар, высокая степень engagement, помогает принять решение о покупке",
    ctr: "1.2-2.0%",
    icon: Zap,
    preview: ThreeDimensionalBannerPreview,
    type: "reach" as const,
  },
]

// Каналы для retail
const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах и в приложениях",
    type: "mixed" as const,
    insights: [
      "Чем выше дисконт на баннере, тем выше СTR",
      "Витрина на одном креативе снижает стоимость перехода",
      "Креатив, показывающий готовый образ, дает более высокую конверсию в покупку, так как продает готовое решение",
    ],
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "inapp",
    name: "In-App",
    icon: Smartphone,
    description: "Реклама в приложениях и сервисах",
    type: "mixed" as const,
    insights: [
      "Использование полноэкранных форматов позволяет рассмотреть детали обуви, что критично для этой категории. Это обеспечивает 95%+ видимость и CTR в 3 раза выше по сравнению со стандартными мобильными баннерами 320x50",
      "Обязателен показ рекламы в приложениях, связанных с созданием контента (фото, видеоредакторы и тд) - там находится аудитория с высоким фокусом на визуальный контент и собственный имидж",
    ],
    avgCtr: "0.8-1%",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама на платформах и стриминговых сервисах",
    type: "reach" as const,
    insights: [
      "Look-book видео и fashion film: показ образов и стилизаций с использованием товаров",
      "Видео примерки: как выглядит на модели разных комплекции и роста",
      "Shorts-контент: быстрые трендовые луки и советы по сочетанию вещей",
      "Unboxing и отзывы: авторитетные fashion-блогеры и инфлюенсеры",
    ],
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама в местах интереса",
    type: "reach" as const,
    insights: [
      "Размещение в торговых центрах и около магазинов конкурентов",
      "Сезонная ротация: коллекции сезона, праздничные предложения (школьная мода, зимняя коллекция)",
      "QR-коды для перехода в приложение, получения промокода на покупку",
    ],
    avgCtr: "N/A",
    recommended: true,
  },
]

export function RetailCaseSlide() {
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
      link.download = "retail-case-presentation.png"
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
            {/* Stockmann Logo */}
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A2wEk3Lq0goCyO0XMCculhLygfneOa.png" 
              alt="Stockmann" 
              className="h-12 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shirt className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для бренда Стокманн
                </h1>
                <p className="text-sm text-muted-foreground">
                  Кейс успешной кампании: +90% брендовых запросов
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T97cuhLivTFlo8w9WhtsK0zXikigNS.png"
                  alt="Baroko"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ACwEEKovGc7EfLnlMVhzYsDxa0Mj5F.png"
                  alt="Monro"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9qob8wbry3LpiMV7v80wlEaErBDm9Q.png"
                  alt="Mad Wave"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xdvBDjjJNzmPfdGxforIgPRirHHKYL.png"
                  alt="7 карат"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MExp1c3sdLySx0WmsvjZt5ZgvikdWk.png"
                  alt="Павелецкая плаза"
                  className="h-24 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g3gdTsZVYYfly4BLuxndYX1m4dEqtl.png"
                  alt="Peplos"
                  className="h-24 w-32 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study - Full Width */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Как 3D-баннер и сезонный спрос обеспечили +90% брендовых запросов
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left - Product Video */}
                <div className="flex items-center justify-center rounded-2xl bg-[#1a4d7a] p-6">
                  <video
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2017.47.50-p9ymyXG6tEU76JpOKXCfJaftVxmULr.mov"
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
                          <p className="font-medium text-foreground">Клиент: бренд детской одежды и обуви Kapika</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель: рост трафика и конверсий на сайте</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Каналы: Display (Native, Video)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#0052cc]">инсайты</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">В соответствии с сезонностью сделали акцент на школьную коллекцию</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Использовали принцип омниканальности, чтобы сопровождать пользователя на всех этапах CJM</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Для упрощения оптимизации разделили запуски на охватные и связанные с привлечением аудитории на сайт</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0052cc]">результаты</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-[#0052cc]/20 bg-white p-3">
                      <p className="text-2xl font-bold text-[#0052cc]">+171%</p>
                      <p className="text-xs text-muted-foreground">перевыполнение плана по показам</p>
                    </div>
                    <div className="rounded-lg border border-[#0052cc]/20 bg-white p-3">
                      <p className="text-2xl font-bold text-[#0052cc]">+20%</p>
                      <p className="text-xs text-muted-foreground">рост CR добавления в корзину</p>
                    </div>
                    <div className="rounded-lg border border-[#0052cc]/20 bg-white p-3">
                      <p className="text-2xl font-bold text-[#0052cc]">-33%</p>
                      <p className="text-xs text-muted-foreground">средний СРМ</p>
                    </div>
                    <div className="rounded-lg border border-[#0052cc]/20 bg-white p-3">
                      <p className="text-2xl font-bold text-[#0052cc]">+90%</p>
                      <p className="text-xs text-muted-foreground">рост брендовых запросов Kapika</p>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="mt-8 border-t border-[#0052cc]/20 pt-6 text-center">
                    <p className="text-3xl font-bold text-[#0052cc]">1 месяц</p>
                    <p className="text-sm text-muted-foreground">период ведения</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
