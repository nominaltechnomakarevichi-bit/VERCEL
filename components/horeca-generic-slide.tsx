"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Monitor,
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

// Rich Media Preview Components for HoReCa
function CubeBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0eef5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-23%20%D0%B2%2012.04.33-0D8KzMaDuBPCedyCQ78WXD3stz9d44.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

function ProgressBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-23%20%D0%B2%2012.52.21-6UIARnLBS2Mj92wVmFJuN04YxIMNBS.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

function BannerStoriesPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#d4e8f0]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-23%20%D0%B2%2012.54.45-2MZdeT11QDYQbftA1hLzOa6UVltN0o.mov"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

function VideoBannerPreview() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f0e8]">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-23%20%D0%B2%2012.54.09-JoLrkdVmuYqsp8enpUDWW2is6bxh4A.mov"
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
    name: "Progress-баннер",
    description: "Баннер с прогресс-индикатором: дни до отпуска, этапы забронирования номера, рейтинг отеля",
    why: "Вызывает срочность, мотивирует к быстрому бронированию, увеличивает конверсию на сайт отеля",
    icon: Zap,
    preview: ProgressBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Cube-баннер",
    description: "3D-куб с гранями, каждая показывает номера отеля, услуги, бассейн, ресторан. Вращается автоматически или по клику",
    why: "Интерактивная презентация комнат и услуг, увеличивает время контакта и повышает engagement",
    icon: Zap,
    preview: CubeBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Video-баннер",
    description: "Видео-баннер: виртуальный тур по номерам, инфраструктура отеля, локация и развлечения",
    why: "Видеоконтент демонстрирует качество отеля, уменьшает сомнения путешественника, ускоряет решение о бронировании",
    icon: Target,
    preview: VideoBannerPreview,
    type: "reach" as const,
  },
]

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Программатик баннерная реклама на туристических и lifestyle сайтах",
    type: "mixed" as const,
    avgCtr: "0.4-0.8%",
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама в аэропортах, ж/д вокзалах, на автодорогах",
    type: "reach" as const,
    avgCtr: "N/A",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream и out-stream на YouTube, сервисах видеоконтента",
    type: "reach" as const,
    avgCtr: "0.8-1.4%",
    recommended: true,
  },
  {
    id: "inapp",
    name: "In-App",
    icon: Tv,
    description: "Реклама в мобильных приложениях туристов и путешественников",
    type: "reach" as const,
    avgCtr: "0.6-1%",
    recommended: true,
  },
]

const technicalCapabilities = [
  {
    title: "Акцент на бренд с отслеживанием post-view",
    description: "Акцент на бренд, но с отслеживанием post-view конверсий",
    icon: TrendingUp,
  },
  {
    title: "Диверсификация кампаний",
    description: "Возможность диверсификации кампаний с разными посылами для комплексной проработки продукта с разных сторон: креативы на разную аудиторию, РК с акциями, дни рождения",
    icon: Layers,
  },
  {
    title: "Глубокая Web-аналитика",
    description: "Возможность настройки глубокой Web-аналитики для комплексной оценки РК: анализ доходимости лидов, оптимизации по цели, аудит сайта и форм на сайте",
    icon: Target,
  },
]

export function HorecaGenericCaseSlide() {
  const [activeChannel, setActiveChannel] = useState("display")

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-border pb-6">
          <div className="flex items-center gap-6">
            <img 
              src="/nt-logo.png" 
              alt="NT Technology" 
              className="h-14 w-auto object-contain"
            />
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Предложение для HoReCa
                </h1>
                <p className="text-sm text-muted-foreground">
                  Кейс успешной кампании: как омниканальный подход обеспечил 73% post-view конверсий
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
                      <p className="mb-2 text-xs text-muted-foreground">{format.description}</p>
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
                        <div className="flex gap-2 flex-wrap">
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
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Технические возможности */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-primary" />
                Технические возможности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {technicalCapabilities.map((capability, idx) => {
                  const Icon = capability.icon
                  return (
                    <div key={idx} className="flex gap-4 rounded-lg border border-border p-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{capability.title}</h3>
                        <p className="text-sm text-muted-foreground">{capability.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Clients Logos */}
          <Card className="xl:col-span-2 bg-white">
            <CardContent className="py-3 px-6">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YyEUY6AsDNOsv1V6cOEOHMjQmfRcVM.png"
                  alt="Курорт Красная Поляна"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iBaMY4les3dIGa29YgiyhwfPsWkODS.png"
                  alt="Мантера"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lodhq3CQjMzpWhqZ2yUlgEUg2axsVl.png"
                  alt="Сочи Парк Отель"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MhWkeC8SOykMdJcA0VnAfxE8EjyzRh.png"
                  alt="Богатырь"
                  className="h-20 w-32 object-contain"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xc6kZLjZyCsthkef6TrRPRN3og5Bzz.png"
                  alt="Метрополь"
                  className="h-20 w-32 object-contain"
                />
              </div>
            </CardContent>
          </Card>

          {/* Case Study */}
          <Card className="xl:col-span-2 bg-gradient-to-br from-[#e8eef7] to-[#f5f1ff]">
            <CardContent className="pt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {/* Left - Image */}
                <div className="flex items-center justify-center rounded-2xl bg-white p-6">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2048-pcQd3h1Dpcxx9UsAwFxIOIxbxm5tvt.png"
                    alt="Красная Поляна"
                    className="h-64 w-auto object-contain"
                  />
                </div>

                {/* Right - Content */}
                <div className="flex flex-col justify-between gap-4">
                  <div>
                    <h2 className="mb-3 text-xl font-bold text-[#0052cc]">
                      Как омниканальный подход и 80 пакетов креативов обеспечили 73% post-view конверсий
                    </h2>
                  </div>

                  {/* About Campaign */}
                  <div>
                    <h3 className="mb-3 font-bold text-[#0052cc]">о кампании</h3>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Клиент: Курорт Красная Поляна</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Цель: рост узнаваемости бренда и post-view конверсии</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="font-medium text-foreground">Каналы: Display, DOOH</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div>
                    <h3 className="mb-3 font-bold text-[#0052cc]">инсайты</h3>
                    <div className="space-y-2">
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">В основе РК лежал омниканальный подход: микс programmatic-каналов и DOOH</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Оптимизация post-view и post-click конверсий</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="h-6 w-1 shrink-0 bg-[#0052cc]" />
                        <div>
                          <p className="text-sm text-foreground">Для сегментации аудитории было разработано 80 индивидуальных пакетов креативов</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 flex justify-around border-t border-[#0052cc]/20 pt-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">73%</p>
                  <p className="text-sm text-muted-foreground">доля post-view конверсий</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">+146%</p>
                  <p className="text-sm text-muted-foreground">к плану по кликам</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">+76%</p>
                  <p className="text-sm text-muted-foreground">к плану по показам</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#0052cc]">10 месяцев</p>
                  <p className="text-sm text-muted-foreground">период РК</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HorecaGenericCaseSlide;
