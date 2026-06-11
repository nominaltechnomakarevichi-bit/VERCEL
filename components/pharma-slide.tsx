"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Monitor,
  MapPin,
  Play,
  Tv,
  Pill,
  Clock,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Layers,
  Zap,
  FileWarning,
  Building2,
} from "lucide-react"

const richMediaFormats = [
  {
    name: "3D Product Viewer",
    description: "Интерактивный 3D-просмотр упаковки препарата с возможностью вращения",
    why: "Повышает доверие к бренду, показывает реальный продукт до покупки",
    ctr: "0.8-1.2%",
    icon: Layers,
  },
  {
    name: "Expandable Banner",
    description: "Разворачивающийся баннер с подробной информацией о показаниях и противопоказаниях",
    why: "Позволяет разместить обязательную юридическую информацию без перегрузки основного креатива",
    ctr: "0.5-0.9%",
    icon: Zap,
  },
  {
    name: "Quiz / Symptom Checker",
    description: "Интерактивный тест: «Определите тип вашей головной боли»",
    why: "Вовлекает пользователя, собирает данные для ретаргетинга по симптомам",
    ctr: "1.5-2.5%",
    icon: Target,
  },
  {
    name: "Countdown Timer",
    description: "Счётчик времени до начала действия препарата или сезонной акции",
    why: "Создаёт срочность, особенно эффективен в сезон простуд",
    ctr: "0.6-1.0%",
    icon: Clock,
  },
]

const channels = [
  {
    id: "display",
    name: "Display",
    icon: Monitor,
    description: "Баннерная реклама на сайтах и в приложениях",
    insights: [
      "Медицинские порталы дают CTR выше на 40% vs обычные сайты",
      "Контекстный таргетинг по запросам симптомов",
      "Возможность A/B тестирования креативов",
    ],
    avgCtr: "0.15-0.35%",
    recommended: true,
  },
  {
    id: "dooh",
    name: "DOOH",
    icon: MapPin,
    description: "Цифровая наружная реклама",
    insights: [
      "Размещение рядом с аптеками увеличивает конверсию в покупку до 25%",
      "Dayparting: головная боль — утро (7-10), насморк — день (12-18), бессонница — вечер (20-23)",
      "Геотаргетинг на поликлиники и ТЦ с аптеками",
      "Погодный триггер: показ рекламы средств от аллергии при высоком уровне пыльцы",
    ],
    avgCtr: "N/A (охватный формат)",
    recommended: true,
  },
  {
    id: "video",
    name: "Video",
    icon: Play,
    description: "Видеореклама in-stream и out-stream",
    insights: [
      "Pre-roll 15 сек — оптимальная длина для фармы",
      "Skippable форматы дешевле, но non-skip даёт +60% к brand lift",
      "Обязательный disclaimer в последних 3 секундах",
      "Таргетинг на health & wellness контент",
    ],
    avgCtr: "0.8-1.5%",
    recommended: true,
  },
  {
    id: "ctv",
    name: "CTV",
    icon: Tv,
    description: "Реклама на Smart TV и стриминговых платформах",
    insights: [
      "Премиум окружение = высокое доверие к бренду",
      "Охват старшей аудитории 45+, которая активно потребляет фарму",
      "QR-код в креативе для перехода на сайт",
      "Возможность ретаргетинга на мобильные устройства в той же сети",
    ],
    avgCtr: "0.3-0.6%",
    recommended: false,
  },
]

const whitelistPlatforms = [
  { category: "Медицинские порталы", sites: ["health.mail.ru", "medportal.ru", "kp.ru/health", "aif.ru/health"] },
  { category: "Женские издания", sites: ["woman.ru", "cosmo.ru", "passion.ru"] },
  { category: "Lifestyle / Wellness", sites: ["sports.ru/tribuna", "championat.com", "the-challenger.ru"] },
  { category: "Новостные (здоровье)", sites: ["rbc.ru/life", "lenta.ru/rubrics/wellness", "gazeta.ru/lifestyle"] },
]

const technicalFeatures = [
  {
    icon: FileWarning,
    title: "Обязательный disclaimer",
    description: "Все креативы должны содержать предупреждение «Имеются противопоказания» и призыв к консультации врача",
  },
  {
    icon: AlertCircle,
    title: "Модерация площадок",
    description: "Яндекс, Google и соцсети требуют сертификаты на рекламу лекарственных средств",
  },
  {
    icon: Building2,
    title: "Brand Safety",
    description: "Исключение негативного контента: новости о смертях, катастрофы, политика",
  },
  {
    icon: CheckCircle2,
    title: "Viewability",
    description: "Рекомендуемый порог видимости для фарма-рекламы — не менее 70% MRC",
  },
]

export function PharmaSlide() {
  const [activeChannel, setActiveChannel] = useState("display")

  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Pill className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
              Фармацевтика
            </h1>
            <p className="text-sm text-muted-foreground">
              Программатик решения для фарма-брендов
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="hidden sm:flex bg-accent text-accent-foreground">
          <TrendingUp className="mr-1 h-3 w-3" />
          Высокий потенциал
        </Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Rich Media Formats */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Layers className="h-5 w-5 text-primary" />
              Rich Media форматы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {richMediaFormats.map((format) => (
              <div
                key={format.name}
                className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <format.icon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-foreground">{format.name}</span>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    CTR {format.ctr}
                  </Badge>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{format.description}</p>
                <p className="text-xs text-primary/80">
                  <span className="font-medium">Почему работает:</span> {format.why}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Channels */}
        <Card className="lg:col-span-2">
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
                    className="flex items-center gap-1.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <channel.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{channel.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {channels.map((channel) => (
                <TabsContent key={channel.id} value={channel.id} className="mt-0">
                  <div className="rounded-lg border border-border bg-secondary/30 p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <channel.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{channel.name}</h3>
                          <p className="text-sm text-muted-foreground">{channel.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {channel.recommended && (
                          <Badge className="bg-accent text-accent-foreground">
                            Рекомендуем
                          </Badge>
                        )}
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {channel.avgCtr}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Инсайты для фармы:</p>
                      <ul className="space-y-2">
                        {channel.insights.map((insight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 rounded-md bg-card p-3 text-sm text-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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

        {/* White-list Platforms */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-primary" />
              White-list площадки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {whitelistPlatforms.map((platform) => (
                <div
                  key={platform.category}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h4 className="mb-3 font-semibold text-foreground">{platform.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.sites.map((site) => (
                      <Badge
                        key={site}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
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
        <Card className="lg:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="h-5 w-5 text-primary" />
              Технические особенности
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalFeatures.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-3 rounded-lg border border-border bg-card p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <feature.icon className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-primary/5 p-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          Данные основаны на бенчмарках 2025-2026. Показатели могут варьироваться в зависимости от категории препарата.
        </p>
        <Badge variant="outline" className="border-primary/30 text-primary">
          Pharma Vertical Guide v2.0
        </Badge>
      </div>
    </div>
  )
}
