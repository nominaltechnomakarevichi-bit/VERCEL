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
  Home,
  Smartphone,
  Play,
  Tv,
  MapPin,
  Layers,
  Zap,
  TrendingUp,
  CheckCircle2,
  Users,
  Target,
  Shield,
  Sparkles,
} from "lucide-react"

// Preview Components for Real Estate Rich Media
function ProgressBannerPreview() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
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

function TouchBannerPreview() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#d4e8f0]">
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

function VideoBannerPreview() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f0e8d4]">
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

function ExpandableBannerPreview() {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#fff5e6]">
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

// Rich Media форматы (дублированы со страницы Real Estate, без Banner Stories)
const richMediaFormats = [
  {
    name: "Progress-баннер",
    description: "Баннер с индикатором заполнения анкеты или прогресса поиска недвижимости. Показывает сколько шагов до идеального жилья",
    why: "Визуальный прогресс вызывает FOMO, мотивирует заполнить анкету, повышает lead generation",
    icon: Zap,
    preview: ProgressBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Touch-баннер",
    description: "Интерактивный баннер с опросом: бюджет, тип жилья, район. Собирает данные прямо в баннере без перехода на сайт",
    why: "Минимизирует friction в сборе лидов, увеличивает конверсию, собирает quality данные о клиенте",
    icon: Zap,
    preview: TouchBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Video-баннер",
    description: "Баннер с видео: обзор квартир, район, инфраструктура. Pre-roll не более 15 сек с CTA запись на просмотр",
    why: "Видеоконтент повышает trust к объекту, ускоряет decision-making, увеличивает вероятность записи на экскурсию",
    icon: Zap,
    preview: VideoBannerPreview,
    type: "reach" as const,
  },
  {
    name: "Showcase-баннер",
    description: "Баннер с галереей фото и видео: полная визуализация объекта с разными ракурсами, планировками и характеристиками",
    why: "Позволяет показать объект во всех деталях, увеличивает время взаимодействия, повышает качество лидов за счет предварительного ознакомления",
    icon: Zap,
    preview: ExpandableBannerPreview,
    type: "reach" as const,
  },
]

// Сегменты аудитории
const audienceSegments = [
  {
    category: "AmberData",
    segments: [
      { name: "Интерес к застройщикам недвижимости", volume: "12 385 098" },
      { name: "Интерес к сайтам недвижимости (яндекс недвижимость, циан)", volume: "724 159" },
      { name: "Интерес к сайтам недвижимости (Самолет, Этажи)", volume: "117 486" },
      { name: "Инвестиционная недвижимость", volume: "1 319 263" },
    ],
  },
  {
    category: "Aidata",
    segments: [
      { name: "Городская недвижимость", volume: "4 840 298", featured: false },
      { name: "Квартиры (первичный рынок)", volume: "357 949", featured: false },
      { name: "Квартиры в Москве (первичный рынок)", volume: "14 738", featured: false },
      { name: "Недвижимость среднего класса", volume: "299 951", featured: false },
      { name: "Интерес к покупке элитной недвижимости", volume: "764 355", featured: true },
    ],
  },
]

// Портрет целевого пользователя
const targetAudience = {
  title: "Элитная недвижимость",
  demographics: [
    { label: "Возраст", value: "35–55 лет" },
    { label: "Доход", value: "высокий" },
    { label: "Образование", value: "высшее" },
    { label: "Семейное положение", value: "женат, есть дети" },
    { label: "Статус", value: "собственник бизнеса, топ-менеджер, инвестор, предприниматель" },
  ],
  interests: [
    "Инвестиции и бизнес",
    "Премиальные автомобили",
    "Путешествия и яхтинг",
    "Спорт и wellness",
    "Закрытые клубы и нетворкинг",
  ],
  behavior: [
    "Ценит приватность и безопасность",
    "Выбирает объекты через рекомендации",
    "Ориентирован на статус и престиж",
    "Рассматривает недвижимость к��к актив",
    "Предпочитает персональный сервис",
  ],
}

const femaleAudience = {
  title: "Элитная недвижимость (Женский портрет)",
  demographics: [
    { label: "Возраст", value: "30–50 лет" },
    { label: "Доход", value: "высокий" },
    { label: "Образование", value: "высшее" },
    { label: "Семейное положение", value: "замужем, есть дети" },
    { label: "Статус", value: "предприниматель, медийная персона, супруга бизнесмена, топ-менеджер" },
  ],
  interests: [
    "Дизайн и интерьер",
    "Семья и комфорт",
    "Мода и luxury-бренды",
    "Путешествия и гастрономия",
    "Здоровье и beauty",
  ],
  behavior: [
    "Уделяет внимание эстетике жилья",
    "Влияет на финальный выбор объекта",
    "Ценит инфраструктуру и сервис",
    "Ищет комфорт и безопасность для семьи",
    "Активно изучает отзывы и репутацию застройщика",
  ],
}

// ОФД данные
const ofdData = [
  "Сегменты собираются на основе данных об оплатах",
  "Включают тех, кто покупает предметы роскоши или определенные бренды техники",
  "ОФД обеспечивает прямой доступ к платежной информации и паттернам потребления",
  "Идентификация инвесторов по истории крупных транзакций и финансовых операций",
]

// White list примеры
const whitelistExamples = [
  { name: "forbes.ru", category: "Business" },
  { name: "finance.rambler.ru", category: "Finance" },
  { name: "1prime.ru", category: "Business" },
  { name: "openbusiness.ru", category: "Business" },
  { name: "ru.investing.com", category: "Finance" },
  { name: "mfd.ru", category: "Finance" },
  { name: "aviasales.ru", category: "Travel" },
  { name: "travel.yandex.ru", category: "Travel" },
  { name: "garant.ru", category: "Legal" },
  { name: "assistentus.ru", category: "Business" },
  { name: "bankiros.ru", category: "Finance" },
  { name: "expert.ru", category: "Business" },
  { name: "rbc.ru", category: "Business" },
  { name: "ria.ru", category: "News" },
  { name: "interfax.ru", category: "News" },
  { name: "auto.ru", category: "Real Estate" },
]

export function EliteRealEstateSlide() {
  const contentRef = useRef(null)

  const handleDownloadPNG = useCallback(async () => {
    console.log("Download functionality disabled")
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <div className="w-full bg-gradient-to-r from-primary/5 to-transparent px-4 py-6 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <img 
                  src="/nt-logo.png"
                  alt="NT Technology"
                  className="h-10 w-auto object-contain flex-shrink-0"
                />
                <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                  Решение для продвижения элитной недвижимости с использованием Rich Media и programmatic подхода
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="mx-auto max-w-7xl space-y-12 px-4 py-12 md:px-6 lg:px-8">
        {/* Rich Media Форматы */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">Rich Media форматы</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {richMediaFormats.map((format, idx) => {
              const PreviewComponent = format.preview
              return (
                <Card key={idx} className="overflow-hidden">
                  <CardHeader>
                    <div>
                      <CardTitle className="text-xl">{format.name}</CardTitle>
                      <p className="mt-1 text-sm text-muted-foreground">{format.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <PreviewComponent />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Сегменты аудитории */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">Сегменты аудитории</h2>
          <div className="space-y-8">
            {audienceSegments.map((categoryData, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    Сегменты {categoryData.category}
                  </h3>
                </div>
                <div className="space-y-2">
                  {categoryData.segments.map((segment, segIdx) => (
                    <div
                      key={segIdx}
                      className={`flex items-center justify-between rounded-lg p-3 ${
                        segment.featured
                          ? "bg-primary/10 border-2 border-primary"
                          : "bg-white border border-border"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {segment.featured && (
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        )}
                        <span className={segment.featured ? "font-semibold text-primary" : "text-foreground"}>
                          {segment.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Портрет целевого пользователя */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">Портрет целевого пользователя</h2>
          
          {/* Male Portrait Row */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Мужской портрет</h3>
            <div className="grid gap-6 lg:grid-cols-4">
              {/* Illustration */}
              <Card className="lg:col-span-1 flex flex-col items-center justify-center p-6">
                <div className="w-full h-48 bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2021%20%D0%BC%D0%B0%D1%8F%202026%20%D0%B3.%2C%2016_37_28-7brOGIBt615s89PKnVGTTIeUuBPYyg.png"
                    alt="Elite Buyer"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-foreground">Акцент в креативах на</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">технические характеристики</span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">инженерные решения</span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">инвестиционный потенциал</span>
                  </div>
                </div>
              </Card>

              {/* Demographics */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="h-5 w-5" />
                    Демографика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {targetAudience.demographics.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-xs font-semibold text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Target className="h-5 w-5" />
                    Интересы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {targetAudience.interests.map((interest, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-foreground">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Behavior */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="h-5 w-5" />
                    Поведение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {targetAudience.behavior.map((behavior, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-foreground">{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Female Portrait Row */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Женский портрет</h3>
            <div className="grid gap-6 lg:grid-cols-4">
              {/* Illustration */}
              <Card className="lg:col-span-1 flex flex-col items-center justify-center p-6">
                <div className="w-full h-48 bg-gradient-to-b from-primary/10 to-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20%D0%BC%D0%B0%D1%8F%202026%20%D0%B3.%2C%2016_25_42-X5KuNjVyXNap0SYamCaSWzhalbmRYp.png"
                    alt="Elite Buyer Women"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-foreground">Акцент в креативах на</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">SPA и Wellnes</span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">медитативные пространства</span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">дизайн и комфорт</span>
                    <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-foreground">семейный образ жизни</span>
                  </div>
                </div>
              </Card>

              {/* Demographics */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Users className="h-5 w-5" />
                    Демографика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {femaleAudience.demographics.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-xs font-semibold text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Target className="h-5 w-5" />
                    Интересы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {femaleAudience.interests.map((interest, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-foreground">{interest}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Behavior */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <TrendingUp className="h-5 w-5" />
                    Поведение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {femaleAudience.behavior.map((behavior, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="text-foreground">{behavior}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ОФД Данные */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">ОФД данные</h2>
          
          {/* Main OFD Info */}
          <Card className="bg-gradient-to-br from-primary/5 to-transparent mb-6">
            <CardContent className="pt-6 space-y-4">
              {ofdData.map((point, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <p className="font-semibold text-foreground">ОФД-партнер NT</p>
                <div className="flex items-center justify-center px-8 py-4 rounded-2xl bg-white border border-gray-200 w-fit">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7cRdRxNSqU7uytNaq24iDGEMH7ml7T.png"
                    alt="CleverData"
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* White List */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">White List площадок</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Рекомендуемые площадки в РФ
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {whitelistExamples.map((platform, idx) => (
                  <Badge key={idx} variant="outline" className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default">
                    {platform.name}
                  </Badge>
                ))}
              </div>
              <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
                <p className="font-semibold text-foreground mb-2">Почему эти площадки:</p>
                <p className="text-muted-foreground">
                  White List обеспечивает размещение на верифицированных, качественных площадках с высокой концентрацией целевой аудитории. Это исключает мошеннический трафик и гарантирует видимость объявлений перед правильной аудиторией.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Programmatic Подход */}
        <section>
          <h2 className="mb-6 text-3xl font-bold text-foreground">Programmatic подход</h2>
          <div className="space-y-4">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle>Взаимосвязь компонентов для результата</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Rich Media + понятный оффер",
                      description: "Интерактивные форматы (Progress-баннер, Touch-баннер) с четким CTA для сбора лидов элитного сегмента",
                      icon: Zap,
                    },
                    {
                      title: "Качественные площадки + кастомные сегменты",
                      description: "White List размещение на премиум-медиа с ОФД таргетингом по инвестиционному профилю и платежеспособности",
                      icon: Shield,
                    },
                    {
                      title: "Post-view аналитика",
                      description: "Отслеживание поведения пользователей после показа баннера: визиты на сайт, заполнение анкет, записи на экскурсии, конверсия в продажу",
                      icon: TrendingUp,
                    },
                  ].map((step, idx) => {
                    const StepIcon = step.icon
                    return (
                      <div key={idx} className="flex gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 rounded-lg bg-white border-2 border-primary/30 p-4">
                  <p className="font-semibold text-primary mb-2">Результат:</p>
                  <p className="text-foreground">
                    Синергия всех компонентов обеспечивает максимальную эффективность РК: качественный трафик на понятный оффер через правильные каналы, с полной аналитикой для оптимизации и масштабирования.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  )
}
