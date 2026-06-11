"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Monitor,
  TrendingUp,
  CheckCircle2,
  Layers,
  Zap,
  ShoppingCart,
  Play,
  Tv,
  Target,
} from "lucide-react"

// Multi-Layer Banner Preview
function MultiLayerBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#e8f4f8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-04%20%D0%B2%2017.53.39-BWSkpirWHMbclxPfASoGnkASglb7Hk.mov"
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

// Rich Media форматы для Retail (из FMCG)
const richMediaFormats = [
  {
    name: "Tap&Melt-баннер",
    description: "Интерактивный баннер с эффектом таяния по клику.",
    why: "Необычный интерактив привлекает внимание, увеличивает время контакта, повышает запоминаемость.",
    ctr: "0.8-1.3%",
    icon: Target,
    preview: MultiLayerBannerPreview,
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmcg-generic-slide__TapMeltBannerPreview-ejB8dSFljWJqP4GeFQKrKjDlZFxtgo.mov",
    type: "reach" as const,
  },
  {
    name: "Hover-баннер",
    description: "Баннер, меняющий креатив при наведении.",
    why: "Геймификация позволяет раскрыть разные ситуация потребления продукта в одном рекламном месте.",
    ctr: "1.1-1.5%",
    icon: Zap,
    preview: ThreeDimensionalBannerPreview,
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmcg-generic-slide__HoverBannerPreview-Eb18duiwV8GBrruYyu1H9dtT0pTbFa.mov",
    type: "reach" as const,
  },
  {
    name: "Banner Slider",
    description: "Карусель товаров и категорий.",
    why: "Показывает разнообразие товаров, увеличивает охват категорий, усиливает brand presence.",
    ctr: "0.9-1.2%",
    icon: Layers,
    preview: ShowcaseBannerPreview,
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fmcg-generic-slide__BannerSliderPreview-ErafICbkBxzNejOyziw1iLoH1to5Q8.mov",
    type: "reach" as const,
  },
]

// Каналы для Retail (FMCG без DOOH + некоторые от Fashion)
const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах партнеров и медиа",
    type: "mixed" as const,
    avgCtr: "0.1-0.4%",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream, out-stream и на платформах",
    type: "reach" as const,
    avgCtr: "0.6-1.2%",
    recommended: true,
  },
  {
    id: "ctv",
    name: "CTV",
    icon: Tv,
    description: "Реклама на Smart TV и стриминговых платформах",
    type: "reach" as const,
    recommended: true,
  },
]

const technicalCapabilities = [
  {
    title: "Подбор нестандартных аудиторий",
    description: "Возможность подбора нестандартных аудиторий",
    icon: Target,
  },
  {
    title: "Работа с бенчмарками",
    description: "Возможность работы с бенчмарками клиента и оптимизации РК под них",
    icon: TrendingUp,
  },
  {
    title: "Маркетинговые исследования",
    description: "Оценка влияния брендовых кампаний на метрики узнаваемости (в том числе Brand Lift, оценка намерения купить)",
    icon: Layers,
  },
  {
    title: "Диверсификация кампаний",
    description: "Разные посылы для комплексной проработки продукта с разных сторон: креативы на разную аудиторию, РК с акциями, дни рождения",
    icon: Zap,
  },
]

export function RetailGenericSlide() {
  return (
    <div className="min-h-screen bg-background">
      {/* Slide Content */}
      <div className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-6">
            {/* NT Technology Logo */}
            <img 
              src="/nt-logo.png" 
              alt="NT Technology" 
              className="h-14 w-auto object-contain"
            />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для Retail
                </h1>
                <p className="text-sm text-muted-foreground">
                  Комплексное решение для привлечения покупателей в онлайн и оффлайн магазины
                </p>
              </div>
            </div>
          </div>
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
                    {/* Preview Video Area */}
                    <div className="h-64 bg-gray-100 overflow-hidden flex items-center justify-center">
                      <video
                        src={format.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    
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
                            className="bg-blue-500/10 text-blue-600 border-blue-500/30 text-[9px]"
                            variant="outline"
                          >
                            Охват
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
                              <div className="flex items-center gap-2">
                                <h3 className="text-base font-semibold text-foreground">{channel.name}</h3>
                                {channel.avgCtr && <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">CTR: {channel.avgCtr}</Badge>}
                              </div>
                              <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
                            </div>
                          </div>
                          <Badge className={`shrink-0 ${channel.type === "performance" ? "bg-green-500/10 text-green-600" : "bg-blue-500/10 text-blue-600"}`} variant="outline">
                            {channel.type === "performance" ? "Performance" : "Охват"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Technical Capabilities */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-primary" />
                Технические возможности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {technicalCapabilities.map((capability, idx) => (
                  <div key={idx} className="rounded-lg border border-border p-4 hover:border-primary/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <capability.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{capability.title}</h4>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Clients Logos */}
          <Card className="xl:col-span-2 bg-white">
            <CardContent className="py-3 px-6">
              <div className="flex items-center justify-center gap-6 overflow-x-auto">
                {/* FMCG Logos */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IU2732yKjRYxMJTtOZHifxtu9EZVyY.png"
                  alt="Borjomi"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f2ksxNJjR7Pr540PrpDi0FEP1V3MzA.png"
                  alt="Шоколадово"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CArUJU9heqdG0EnQriVgr2a8tS987Q.png"
                  alt="Спартак"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BWY2fEjt3PDJ71EIjpBJiVs7rvDSr8.png"
                  alt="Витьба"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jHnsD4tvBYvJhi88qo1E5xpaIrUPPm.png"
                  alt="Fresco"
                  className="h-20 w-28 object-contain shrink-0"
                />
                
                {/* Fashion Logos */}
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ACwEEKovGc7EfLnlMVhzYsDxa0Mj5F.png"
                  alt="Monro"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xdvBDjjJNzmPfdGxforIgPRirHHKYL.png"
                  alt="7 карат"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MExp1c3sdLySx0WmsvjZt5ZgvikdWk.png"
                  alt="Павелецкая плаза"
                  className="h-20 w-28 object-contain shrink-0"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-g3gdTsZVYYfly4BLuxndYX1m4dEqtl.png"
                  alt="Peplos"
                  className="h-20 w-28 object-contain shrink-0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study - Full Width */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="p-8">
              <h2 className="mb-8 text-3xl font-bold text-foreground">
                Как smart-баннеры и ручная оптимизация увеличили доход от рекламной кампании на 111%?
              </h2>
              
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left - Product Video */}
                <div className="flex items-center justify-center rounded-2xl bg-white p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/300%D1%85500_%D0%A3%D0%B4%D0%B0%D1%87%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0%D1%82%D0%B8%D0%BA-rPnpUK2kcJlcH2IgqolyF7jLd632zI.jpg"
                    alt="Универсам Удача"
                    className="h-96 w-auto object-contain"
                  />
                </div>

                {/* Middle - About Campaign */}
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-4 text-lg font-bold text-[#0052cc]">о кампании</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Клиент: Универсам Удача</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель: привлечение покупателей в онлайн-магазин, рост конверсий</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Каналы: display</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Форматы: баннеры, smart-баннеры, нативная реклама</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-bold text-[#0052cc]">особенности</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Для достижения цели "конверсии" акцент делали на smart-баннеры</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">С помощью нативной и медийной рекламы поддерживали интерес к бренду</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Кампания оптимизировалась вручную и автоматически по цели "добавить в корзину"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right - Results */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0052cc]">результаты</h3>
                  
                  {/* Two Equal Blocks Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Dynamics Block */}
                    <div className="rounded-2xl bg-[#0052cc] p-6 text-white flex flex-col justify-center">
                      <div className="space-y-3">
                        <div>
                          <p className="text-3xl font-bold">+98%</p>
                          <p className="text-sm">к количеству покупок</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold">+92%</p>
                          <p className="text-sm">к добавлениям в корзину</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold">+111%</p>
                          <p className="text-sm">к доходу от кампании</p>
                        </div>
                      </div>
                    </div>

                    {/* KPIs Block */}
                    <div className="rounded-2xl bg-white border border-[#0052cc]/20 p-6 flex flex-col justify-center">
                      <div className="space-y-4">
                        <div>
                          <p className="text-3xl font-bold text-[#0052cc]">0,9%</p>
                          <p className="text-sm text-foreground">CTR</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-[#0052cc]">23%</p>
                          <p className="text-sm text-foreground">ДРР</p>
                        </div>
                        <div>
                          <p className="text-3xl font-bold text-[#0052cc]">344%</p>
                          <p className="text-sm text-foreground">ROI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 flex justify-around border-t border-[#0052cc]/20 pt-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">1 месяц</p>
                  <p className="text-sm text-muted-foreground">период анализа</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default RetailGenericSlide
