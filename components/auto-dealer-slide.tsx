"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Car,
  TrendingUp,
  Layers,
  Zap,
  Target,
  CheckCircle2,
  Tv,
  BarChart3,
  Users,
  Smartphone,
  AlertCircle,
  FileWarning,
  Shield,
  ArrowRight,
  Info,
  Gauge,
  Compass,
} from "lucide-react"

// Pain points data with comprehensive structure
const painPointsData = {
  title: "Как Programmatic реагирует на Pain Points автодилеров",
  blocks: [
    {
      id: "cpl",
      number: "1",
      title: "Рост стоимости лида",
      subtitle: "Что разгоняет CPL в категории автодилеров и как programmatic снимает давление",
      chartData: [
        { label: "Базис", value: 100 },
        { label: "Перегретый search-аукцион", value: 115 },
        { label: "Рост CPC в social", value: 127 },
        { label: "Новый intent last-click", value: 136 },
        { label: "Длинный цикл", value: 141 },
        { label: "Потеря между касаниями", value: 148 },
      ],
      insights: [
        {
          title: "Что происходит на рынке",
          items: [
            "Search / social закрывают нижний этап воронки продаж, ставки растут",
            "Пользователь сравнивает несколько брендов",
            "Last-click лиды дорожают, качество нестабильно",
          ],
        },
        {
          title: "Что делает programmatic",
          items: [
            "Расширяет охват до верхнего и среднего этапов воронки",
            "Формирует спрос до брендового поиска и визита на сайт",
            "Снижает зависимость от дорогого last-click трафика",
          ],
        },
        {
          title: "Что получает дилер",
          items: [
            "Более устойчивая стоимость лида",
            "Выше доля прогретой аудитории",
            "Поддержку performance-каналов",
          ],
        },
      ],
      insightText: "Инсайт: чем раньше бренд входит в СJ, тем ниже давление на CPL. Медийный контакт и performance работают как единая система.",
    },
  ],
}

// Customer journey stages
const cjStages = [
  {
    id: "awareness",
    title: "Узнавание",
    description: "Пользователь формирует shortlist брендов и моделей",
    task: "Привлечь внимание с помощью нестандартных креативов",
    formats: ["CTV и In-/Out-Stream", "Static / GIF / Rich Media"],
    utp: ["Новый кроссовер 2025 уже в наличии", "5 лет гарантии"],
    bannerText: "Новый кроссовер 2025 уже в наличии",
    bannerButtonText: "Узнать подробнее",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-%D0%B7%D0%B0%D0%B1%D0%B8%D1%80%D0%B0%D0%B8%CC%86%D1%82%D0%B5-dbjMEtw24aNQ6SQBay2XgGX2LUXVSW.jpg",
  },
  {
    id: "interest",
    title: "Интерес",
    description: "Пользователь смотрит модели, оценивает выгоду и условия",
    task: "Рассказать про технические особенности, внешний вид, модельный ряд",
    formats: ["Rich Media / Native / HTML5", "Video"],
    utp: ["Trade-in до 450 000 ₽", "Кредит от 0,01%*"],
    bannerText: "Trade-in до 450 000₽",
    bannerButtonText: "Подобрать авто",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-%D1%82%D1%80%D0%B5%D0%B8%CC%86%D0%B4-3w9t9brmyw6hjF26fWecN3I5kLXehF.jpg",
  },
  {
    id: "comparison",
    title: "Сравнение",
    description: "Пользователь сравнивает комплектацию, стоимость и отзывы",
    task: "Показать, почему выгодно купить у данного дилера",
    formats: ["HTML5 / Rich Media", "Retargeting"],
    utp: ["Упор на стоимость: акции, скидки", "Кредитные калькуляторы"],
    bannerText: "Сравните комплектации. Платеж за 1 минуту",
    bannerButtonText: "Рассчитать",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-%D1%81%D0%BA%D0%B8%D0%B4%D0%BA%D0%B0-lZbwZslpPG0lKQzy57zXSrLY96A6oX.jpg",
  },
  {
    id: "conversion",
    title: "Конверсия",
    description: "Ищет удобную точку контакта и готов записаться",
    task: "Удобная точка контакта для целевого действия",
    formats: ["Static / HTML5", "Retargeting", "Геотаргетинг"],
    utp: ["Запишитесь на тест-драйв сегодня", "Забронируйте авто в наличии"],
    bannerText: "Тест-драйв сегодня. Авто в наличии",
    bannerButtonText: "Записаться",
    bannerImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-%D1%82%D0%B5%D1%81%D1%82-%D0%B4%D1%80%D0%B0%D0%B8%CC%86%D0%B2-nHGNiRTw2RhFhfSdkC2Iq9ebXUVg5X.jpg",
  },
]

// Retargeting mechanics
const retargetingSteps = [
  {
    step: "1",
    title: "Был интерес",
    description: "Пользователь посмотрел модель, условия кредита или калькулятор и ушёл без целевого действия",
  },
  {
    step: "2",
    title: "Сегмент и оффер",
    description: "Собираем retargeting-сегмент и показываем выбранную модель, trade-in, кредит и понятный CTA",
  },
  {
    step: "3",
    title: "Возврат к действию",
    description: "Пользователь возвращается на сайт, продолжает сценарий и оставляет заявку / записывается на тест-драйв",
  },
]

// Retargeting benefits
const retargetingBenefits = [
  {
    metric: "до 5х",
    description: "CTR retargeting-аудиторий выше, чем у холодной аудитории",
  },
  {
    metric: "до +70%",
    description: "CR может быть выше у прогретых retargeting-аудиторий",
  },
]

// Retargeting mechanics details
const retargetingMechanics = [
  {
    title: "сигналы",
    items: "карточка модели / калькулятор / CTA / форма",
  },
  {
    title: "окно ретаргетинга",
    items: "7–14 дней",
  },
  {
    title: "форматы",
    items: "Static / HTML5 / Rich Media",
  },
]

// Brandformance solutions
const brandformanceSolutions = [
  {
    id: "data-targeting",
    title: "Data & Targeting",
    content: {
      description: "Работа с нестандартными �� узкоспециализированными аудиториями",
      blocks: [
        {
          title: "Работа с нестандартными и узкоспециализированными аудиториями",
          description: "Работа с аудиториями, недоступными в рамках стандартных таргетингов, включая использование специализированных White List и собственных подходов в закупке трафика.",
          result: "Сужение аудитории улучшает качество контакта: \nViewability 70-85%\nCTR может быть выше до +30%\nCR может быть выше до +20%",
        },
        {
          title: "Сбор и передача аудиторных сегментов",
          description: "Возможность сбора и передачи клиенту аудиторных сегментов с помощью собственных пикселей для дальнейшей работы по воронке и ретаргетинга.",
          result: "Retargeting audiences vs prospecting: CTR может быть выше до 5x\nCR может быть выше до +70%",
        },
        {
          title: "Диверсификация коммуникации под сегменты аудитории",
          description: "Запуск различных креативных сообщений и механик под отдельные сегменты аудитории, акции, сезонные события и этапы воронки.",
          result: "Персонализированные коммуникации могут улучшить показатели:\nCTR может быть выше до +40%\nERR может быть выше до +30%\nConversion может быть выше до +20%",
        },
        {
          title: "Аудитории с интересом к автокредитованию",
          description: "Работа с аудиторией, проявляющей интерес к автокредитованию, финансовым продуктам и программам рассрочки, включая прогностические и intent-сигналы пользователей.",
          result: "Аудитория с интересами к финансам vs общий таргетинг на автомобильную ЦА: \nCTR может быть выше до +50%\nERR может быть выше до +30%",
        },
      ],
    },
    icon: Target,
  },
  {
    id: "formats",
    title: "Форматы креативов",
    content: {
      description: "Низкая эффективность стандартных креативов",
      metrics: [
        { value: "до 2x", description: "CTR Rich Media / Video выше, чем у стандартных баннеров" },
        { value: "до +30%", description: "ERR может расти за счет интерактивных сценариев" },
        { value: "до +20%", description: "Прирост конверсии при персонализированных сообщениях и CTA" },
      ],
      examples: "Примеры Rich Media с креативами можно увидеть в интерактивных демо",
      mechanics: [
        {
          title: "Почему это работает",
          items: [
            "В одном блоке можно показать несколько моделей, офферов и CTA",
            "Можно встроить калькулятор для расчета кредита, trade-in или выбора комплектации",
            "Сообщение адаптируется под сегмент и этап CJ",
          ],
        },
      ],
      insight: "Rich Media усиливает вовлечение за счет интерактива — пользователь не просто видит сообщение, а взаимодействует с оффером еще до перехода на сайт.",
    },
    icon: Zap,
  },
  {
    id: "ctv-cross",
    title: "CTV + Cross-device",
    content: {
      description: "Как CTV формирует первый видеоконтакт, а cross-device додерживает пользователя до заявки",
      stats: [
        { value: "68%", description: "домохозяйств регулярно используют Smart TV" },
        { value: "10-15 млрд Р", description: "оценка объема CTV в 2025 году" },
        { value: "+257%", description: "рост доли брендов, размещающих рекламу в CTV" },
      ],
      ctvBenefits: [
        "растёт потребление онлайн-видео на Smart TV",
        "часть digital-инвентаря ограничена или нестабильна",
        "при перебоях mobile/web CTV остаётся устойчивым большим экраном",
        "CTV даёт видеоконтакт в brand safe окружении",
      ],
      touchChain: [
        { label: "CTV", description: "первый видеоконтакт" },
        { label: "Mobile", description: "догрев баннером" },
        { label: "Desktop display", description: "повторный контакт" },
        { label: "Заявка / визит", description: "целевое действие" },
      ],
      insight: "CTV становится особенно полезным в РФ, когда часть инвентаря ограничена или нестабильна, поэтому он дает устойчивый видеоконтакт, а cross-device переводит его в рекламные касания до заявки",
    },
    icon: Tv,
  },
  {
    id: "measurement",
    title: "Оценка влияния на лидогенерацию",
    content: {
      description: "«Невозможно связать медийку с бизнес-результатом»",
      infoPanels: [
        {
          title: "Почему так кажется",
          items: [
            "медийку часто оценивают только по охвату и CTR",
            "часть конверсий приходит позже и через другие каналы",
            "вклад верхних этапов не виден в last-click отчётах",
          ],
        },
        {
          title: "Принцип оценки",
          description: "Смотрим не один последний клик, а набор сигналов: что пользователь сделал после контакта с рекламой, вырос ли интерес к бренду, были ли звонки/заявки и какую роль сыграли медийные касания",
        },
      ],
      blocks: [
        {
          number: 1,
          title: "Post-view аналитика",
          reason: "медийку часто оценивают только по оценку CTR",
          what: "визиты, возвраты и целевые действия после рекламного контакта",
          why: "видеть отложенный эффект медийного размещения, который не попадает в last-click",
        },
        {
          number: 2,
          title: "Search lift / brand lift",
          reason: "смотрим ��е один посл клик, а набор сигналов: что пользователь делал после контакта с рекламой",
          what: "смотрим динамику брендовых запросов, прямых визитов, знания бренда и интерес к дилеру после кампании",
          why: "оцениваем, вырос ли спрос и узнаваемость бренда до заявки или визита на сайт",
        },
        {
          number: 3,
          title: "Call-tracking и CRM matching",
          reason: "звонки, Формы и обращения пользователей, которые были в контакте с рекламой",
          what: "звонки, формы и обращения пользователей, которые были в контакте с рекламой",
          why: "связать рекламный контакт с реальными лидами и качеством обращений",
        },
        {
          number: 4,
          title: "Ассоциированные конверсии",
          reason: "роль медийного касания в цепочке до заявки, звонка или тест-драйва",
          what: "роль медийного касания в цепочке до заявки, звонка или тест-драйва",
          why: "показать вклад канала не только по последнему клику, а по влиянию на путь пользователя",
        },
      ],
      insight: "связь медийки с бизнес-результатом появляется, когда каждый блок оценки отвечает на свой вопрос — что произошло после контакта, усилился ли интерес к бренду, пришли ли лиды и какую роль сыграл канал",
    },
    icon: BarChart3,
  },
]

// Banner component
function JourneyBanner({ text, buttonText, bannerImage }: { text: string; buttonText: string; bannerImage: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-background w-full flex items-center justify-center" style={{aspectRatio: "16 / 9"}}>
      <img 
        src={bannerImage}
        alt="Journey banner"
        className="w-full h-full object-contain p-3"
      />
    </div>
  )
}

export function AutoDealerSlide() {
  const [activeCapability, setActiveCapability] = useState("data-targeting")

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-8 border-b border-border pb-6">
          <div className="flex items-center gap-6 mb-4">
            <img
              src="/nt-logo.png"
              alt="NT Technology"
              className="h-14 w-auto object-contain"
            />
            <div className="h-12 w-px bg-border" />
            <div className="flex items-center gap-4 flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground lg:text-3xl">
                  Programmatic НЕ «охватная медийка», а инструмент для управления вниманием
                </h1>
                <p className="text-sm text-muted-foreground">
                  Programmatic Brandformance для автомобильных дилеров
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {/* Section Title */}
          <div className="xl:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Как Programmatic реагирует на Pain Points автодилеров
            </h2>
          </div>

          {/* Pain Point 1: CPL */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">
                1. Рост стоимости лида
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                Что разгоняет CPL в категории автодилеров и как programmatic снимает давление
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image instead of chart */}
              <div className="rounded-lg border border-border p-4 bg-white flex justify-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/faktory_rosta_cpl_high_quality-GkpodptBfIrEzOQ6NtMgEs1yAWJswT.jpg"
                  alt="Факторы роста CPL"
                  className="h-auto max-w-2xl"
                />
              </div>

              {/* Insights Boxes */}
              <div className="grid grid-cols-3 gap-4">
                {painPointsData.blocks[0].insights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-border p-4 bg-card"
                  >
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      {insight.title}
                    </h4>
                    <ul className="space-y-1">
                      {insight.items.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Insight banner */}
              <div className="rounded-lg bg-blue-600 text-white p-4 flex gap-3">
                <Info className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm">{painPointsData.blocks[0].insightText}</p>
              </div>
            </CardContent>
          </Card>

          {/* Customer Journey */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">
                2. Длинный цикл принятия решения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="awareness" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-4 h-auto">
                  {cjStages.map((stage) => (
                    <TabsTrigger
                      key={stage.id}
                      value={stage.id}
                      className="text-sm lg:text-base font-medium"
                    >
                      {stage.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {cjStages.map((stage) => (
                  <TabsContent key={stage.id} value={stage.id}>
                    <div className="space-y-4">
                      {/* What happens and Task */}
                      <div className="grid gap-4 lg:grid-cols-2">
                        <div className="rounded-lg border border-border p-4 bg-card">
                          <h4 className="font-semibold text-foreground mb-2">
                            Что происходит
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {stage.description}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border p-4 bg-card">
                          <h4 className="font-semibold text-foreground mb-2">
                            Задача
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {stage.task}
                          </p>
                        </div>
                      </div>

                      {/* Formats and UTP */}
                      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
                        {/* Banner */}
                        <div>
                          <JourneyBanner text={stage.bannerText} buttonText={stage.bannerButtonText} bannerImage={stage.bannerImage} />
                        </div>

                        {/* Text content on the right */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">
                              Рекомендуемые форматы
                            </h4>
                            <ul className="space-y-2">
                              {stage.formats.map((format, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 text-sm text-muted-foreground"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  {format}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm">
                              УТП / примеры сообщений
                            </h4>
                            <ul className="space-y-2">
                              {stage.utp.map((msg, idx) => (
                                <li
                                  key={idx}
                                  className="flex gap-2 text-sm text-muted-foreground"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                  {msg}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              {/* Journey Insight */}
              <div className="mt-6 rounded-lg bg-primary/5 border border-primary/20 p-4">
                <div className="flex gap-3">
                  <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground">
                    <strong>Инсайт:</strong> на длинном CJ работает не одно касание, а последовательность сообщений: бренд → выгода → сравнение → действие.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Retargeting Mechanics */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">
                3. Потеря аудитории после первого контакта
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
                {/* Retargeting Steps */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {retargetingSteps.map((step) => (
                      <div
                        key={step.step}
                        className="rounded-lg border border-border p-4 bg-card"
                      >
                        <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
                          {step.step}
                        </div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          {step.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Insight */}
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                    <p className="text-sm text-foreground">
                      <strong>Инсайт:</strong> retargeting работает не сам по себе — сначала фиксируем сигнал интереса, затем возвращаем пользователя персональным оффером и доводим до целевого действия.
                    </p>
                  </div>
                </div>

                {/* Car Image */}
                <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-8 flex items-center justify-center">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20-%20%D1%80%D0%B5%D1%82%D0%B0%D1%80%D0%B3%D0%B5%D1%82%D0%B8%D0%BD%D0%B3-5m4WvRUs00Jy8R2jae8iHfFiBct0E5.jpg"
                    alt="Retargeting car"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Benefits and Mechanics */}
              <div className="mt-6 grid gap-6">
                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    Преимущества программатик подхода
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {retargetingBenefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border p-4 bg-card"
                      >
                        <p className="text-2xl font-bold text-primary mb-1">
                          {benefit.metric}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What's important */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3 text-sm">
                    Что важно в механике
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {retargetingMechanics.map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-border p-3 bg-card"
                      >
                        <h5 className="text-xs font-semibold text-foreground mb-2 uppercase">
                          {item.title}
                        </h5>
                        <p className="text-xs text-muted-foreground">
                          {item.items}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brandformance Solution */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-4">
              <div>
                <CardTitle className="text-lg mb-2">
                  Решение — BRANDFORMANCE
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs value={activeCapability} onValueChange={setActiveCapability} className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-4 h-auto">
                  {brandformanceSolutions.map((solution) => (
                    <TabsTrigger
                      key={solution.id}
                      value={solution.id}
                      className="text-xs lg:text-sm font-medium"
                    >
                      {solution.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {brandformanceSolutions.map((solution) => (
                  <TabsContent key={solution.id} value={solution.id}>
                    <div className="space-y-4">
                      {solution.id === "data-targeting" && (
                        <div className="space-y-4">
                          {solution.content.blocks.map((block, idx) => (
                            <div
                              key={idx}
                              className="grid gap-4 lg:grid-cols-3 lg:items-center rounded-lg border border-border p-4 bg-card"
                            >
                              <div>
                                <h4 className="font-semibold text-foreground mb-2 text-sm">
                                  {block.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {block.description}
                                </p>
                              </div>
                              <div className="flex justify-center">
                                <ArrowRight className="h-5 w-5 text-primary" />
                              </div>
                              <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
                                <p className="text-sm text-foreground font-semibold mb-2">
                                  Результат
                                </p>
                                <p className="text-xs text-muted-foreground whitespace-pre-line">
                                  {block.result.split(/(\d+)/g).map((part, idx) => 
                                    /^\d+$/.test(part) ? <strong key={idx}>{part}</strong> : part
                                  )}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {solution.id === "formats" && (
                        <div className="space-y-4">
                          <div className="grid gap-3 sm:grid-cols-3">
                            {solution.content.metrics.map((metric, idx) => (
                              <div
                                key={idx}
                                className="rounded-lg border border-border p-4 bg-card"
                              >
                                <p className="text-2xl font-bold text-primary mb-1">
                                  {metric.value}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {metric.description}
                                </p>
                              </div>
                            ))}
                          </div>

                          {solution.content.mechanics.map((item, idx) => (
                            <div key={idx} className="rounded-lg border border-border p-4 bg-card">
                              <h4 className="font-semibold text-foreground mb-2 text-base">
                                {item.title}
                              </h4>
                              <ul className="space-y-1">
                                {item.items.map((subitem, i) => (
                                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                                    <span className="text-primary">•</span>
                                    {subitem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Video Previews */}
                          <div className="rounded-lg border border-border p-4 bg-card xl:col-span-2">
                            <h4 className="font-semibold text-foreground mb-4 text-base">
                              Rich Media форматы
                            </h4>
                            <div className="grid gap-6 sm:grid-cols-3">
                              {/* Cube Banner */}
                              <div className="space-y-3">
                                <video className="w-full h-auto rounded-lg max-h-64" autoPlay muted loop>
                                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-12%20%D0%B2%2020.34.18-BBmCkwUsX6819iWn6PTYRwqiN2sNC7.mov" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                                <h5 className="font-semibold text-sm text-foreground">
                                  Cube-баннер
                                </h5>
                                <p className="text-xs text-muted-foreground">
                                  3D-куб с гранями, демонстрирующими автомобиль с разных ракурсов: экстерьер, интерьер, характеристики, CTA
                                </p>
                              </div>
                              
                              {/* Video Banner */}
                              <div className="space-y-3">
                                <video className="w-full h-auto rounded-lg max-h-64" autoPlay muted loop>
                                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-12%20%D0%B2%2020.36.02-WkFK1D3XpVFFJeD1nyMUSdkvD64v8B.mov" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                                <h5 className="font-semibold text-sm text-foreground">
                                  Video-баннер
                                </h5>
                                <p className="text-xs text-muted-foreground">
                                  Баннер с встроенным видео автомобиля в движении. Автозапуск при попадании в viewport, звук по клику
                                </p>
                              </div>

                              {/* Showcase Banner */}
                              <div className="space-y-3">
                                <video className="w-full h-auto rounded-lg max-h-64" autoPlay muted loop>
                                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-13%20%D0%B2%2016.21.57-ebMY2OkTuF4JSD96saUetf8Hvnfj3v.mov" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                                <h5 className="font-semibold text-sm text-foreground">
                                  Showcase-баннер
                                </h5>
                                <p className="text-xs text-muted-foreground">
                                  Интерактивная витрина моделей с возможностью выбора цвета, комплектации и сравнения характеристик
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Conversion Path */}
                          <div className="rounded-lg border border-border p-4 bg-card xl:col-span-2">
                            <h4 className="font-semibold text-foreground mb-4 text-base">
                              Путь к конверсии
                            </h4>
                            <div className="flex items-center gap-3 overflow-x-auto pb-2">
                              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border whitespace-nowrap">
                                <span className="text-sm font-medium text-foreground">Взаимодействие</span>
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </div>
                              <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg border border-border whitespace-nowrap">
                                <span className="text-sm font-medium text-foreground">Переход на сайт</span>
                                <ArrowRight className="h-4 w-4 text-primary" />
                              </div>
                              <div className="px-3 py-2 bg-background rounded-lg border border-border whitespace-nowrap">
                                <span className="text-sm font-medium text-foreground">Заявка / тест-драйв</span>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                            <p className="text-sm text-foreground">
                              <strong>Инсайт:</strong> {solution.content.insight}
                            </p>
                          </div>
                        </div>
                      )}

                      {solution.id === "ctv-cross" && (
                        <div className="space-y-4">
                          <div className="grid gap-3 sm:grid-cols-3">
                            {solution.content.stats.map((stat, idx) => (
                              <div
                                key={idx}
                                className="rounded-lg border border-border p-4 bg-card"
                              >
                                <p className="text-2xl font-bold text-primary mb-1">
                                  {stat.value}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {stat.description}
                                </p>
                              </div>
                            ))}
                          </div>

                          <div className="flex gap-4">
                            <div className="rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 p-3 flex items-center justify-center w-2/5" style={{aspectRatio: "1 / 1"}}>
                              <img 
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ctv-screen-nt%20%281%29-WsOjkm8Ba2tnUEbFP8F5q8qEmxcIzE.jpg"
                                alt="CTV Connected TV"
                                className="h-full w-full object-cover rounded-lg"
                              />
                            </div>

                            <div className="rounded-lg border border-border p-4 bg-card space-y-3 flex-1">
                              <h4 className="font-semibold text-foreground text-sm">
                                Почему CTV растёт в РФ
                              </h4>
                              <ul className="space-y-2">
                                {solution.content.ctvBenefits.map((benefit, idx) => (
                                  <li
                                    key={idx}
                                    className="text-xs text-muted-foreground flex gap-2"
                                  >
                                    <span className="text-primary">•</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="xl:col-span-2">
                            <h4 className="font-semibold text-foreground mb-4 text-base">
                              Связка касаний
                            </h4>
                            <div className="flex gap-3 flex-wrap">
                              {solution.content.touchChain.map((touch, idx) => (
                                <div key={idx} className="flex items-center gap-3 flex-1 min-w-40">
                                  <div className="rounded-lg border border-border p-4 bg-card text-center flex-1">
                                    <p className="text-sm font-semibold text-foreground">
                                      {touch.label}
                                    </p>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {touch.description}
                                    </p>
                                  </div>
                                  {idx < solution.content.touchChain.length - 1 && (
                                    <ArrowRight className="h-6 w-6 text-primary shrink-0" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
                            <p className="text-xs text-foreground">
                              <strong>Инсайт:</strong> {solution.content.insight}
                            </p>
                          </div>
                        </div>
                      )}

                      {solution.id === "measurement" && (
                        <div className="space-y-4">
                          <div className="rounded-lg border border-border p-4 bg-card">
                            <h4 className="font-semibold text-foreground mb-4">
                              {solution.content.description}
                            </h4>
                            
                            {/* Info panels */}
                            <div className="grid gap-4 sm:grid-cols-2 mb-6">
                              {solution.content.infoPanels.map((panel, idx) => (
                                <div key={idx} className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                                  <h5 className="font-semibold text-foreground mb-3 text-sm">
                                    {panel.title}
                                  </h5>
                                  {panel.items ? (
                                    <ul className="space-y-2 text-xs text-muted-foreground">
                                      {panel.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex gap-2">
                                          <span className="text-primary shrink-0">•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  ) : (
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                      {panel.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* Evaluation table */}
                            <div className="overflow-x-auto">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-border">
                                    <th className="text-left p-3 text-xs font-semibold text-foreground">Блок оценки</th>
                                    <th className="text-left p-3 text-xs font-semibold text-foreground">Что даёт отследить</th>
                                    <th className="text-left p-3 text-xs font-semibold text-foreground">Зачем это нужно</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {solution.content.blocks.map((block, idx) => (
                                    <tr key={idx} className="border-b border-border hover:bg-primary/5">
                                      <td className="p-3">
                                        <div className="flex items-center gap-2">
                                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-xs font-bold shrink-0">
                                            {block.number}
                                          </div>
                                          <span className="text-xs font-semibold text-foreground">{block.title}</span>
                                        </div>
                                      </td>
                                      <td className="p-3">
                                        <p className="text-xs text-muted-foreground">{block.what}</p>
                                      </td>
                                      <td className="p-3">
                                        <p className="text-xs text-muted-foreground">{block.why}</p>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>

                          <div className="rounded-lg bg-primary/5 border border-primary/20 p-3">
                            <p className="text-xs text-foreground">
                              <strong>Инсайт:</strong> {solution.content.insight}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
          {/* Case Study - Disabled */}
        </div>
      </div>
    </div>
  )
}
