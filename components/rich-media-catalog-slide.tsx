"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Gift } from "lucide-react"

// Rich Media Creative Examples with full details
const richMediaFormats = [
  {
    id: 1,
    name: "Banner Spinner",
    isNew: true,
    description: "Вращающийся баннер с динамичной анимацией",
    advantages: ["Позволяет показать несколько вариантов продукта в одном креативе", "Эффект витрины усиливает восприятие ассортимента", "Повышает узнаваемость продуктовой линейки"],
    forWhom: "FMCG и food-бренды, Напитки, Beauty, Fashion, E-commerce, Pharma",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Spinner-PlChE8Qnm6vEAIcAKJ3nKle2Tkyu0g.mov",
  },
  {
    id: 2,
    name: "Pull Coupon Banner",
    isNew: true,
    description: "Интерактивный баннер с вытягиванием купона",
    advantages: ["Эффект получения награды усиливает мотивацию к действию", "Увеличенное время взаимодействия с баннером", "Хорошо работает с промокодами и спецпредложениями"],
    forWhom: "E-commerce, Fashion, FMCG, Сервисы доставки, FinTech, Travel",
    sizes: "300x600, 240x400, 240x600, 300x250, 300x500",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pull%20Coupon%20Banner-dlhcrsNcKqfmY86TBaQ7J64KdTNdv2.mov",
  },
  {
    id: 3,
    name: "Tap&Melt-баннер",
    isNew: true,
    description: "Баннер с эффектом таяния/разрушения при касании",
    advantages: ["Геймификация: пользователь добывает контент сам", "Эффект прогресса удерживает внимание пользователя", "Хорошо подходит для продвижения напитков и food-брендов"],
    forWhom: "FMCG (напитки, еда), Fashion, Развлечения, Travel, Техника",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tap%26Melt-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-HDWAGlXuqIOwWMqGvgYlPXXxJl199t.mov",
  },
  {
    id: 4,
    name: "Progress-баннер",
    description: "Баннер с возможностью протянуть progress bar на нужный уровень и увидеть соответствующий результат",
    advantages: ["Позволяет показать несколько вариантов продукта в одном креативе", "Вовлекает пользователя во взаимодействие", "Эффект получения результата усиливает мотивацию к действию"],
    forWhom: "Travel, FMCG, Real Estate, Beauty, Техника",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Progress-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-2xek5GsnMVI1p4BiEFQc8Q1Cr92vSx.mov",
  },
  {
    id: 5,
    name: "Hover-баннер",
    description: "Баннер-витрина с динамическим эффектом при наведении",
    advantages: ["Позволяет показать несколько товаров в одном креативе", "Выглядит дорого за счет имитации витрины", "Подходит для ниш, требующих лаконичности и деловой подачи: финансы, B2B"],
    forWhom: "FMCG, FinTech, Beauty, Техника, Fashion",
    sizes: "300x250, 300x600, 336x280, 728x90, 970x90",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hover-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-NKfy62Ky2xjIpCmtpmxc3LFHTi7teb.mov",
  },
  {
    id: 6,
    name: "Showcase-баннер",
    description: "Интерактивная витрина позволяет либо открыть подробности о товаре по клику на инфоточки, либо представляет собой мини-каталог",
    advantages: ["Позволяет показать несколько товаров в одном креативе", "Мотивирует узнать больше о товаре за счет инфоточек", "Хорошо работает для выбора одного из нескольких вариантов"],
    forWhom: "Auto, Техника, Beauty, Home goods, Fashion",
    sizes: "300x600, 300x500, 970x250, 728x90",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Showcase-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-NzuvP8IDwjIpuQzvBT76mWBnC3SA9b.mov",
  },
  {
    id: 7,
    name: "Scratch-баннер",
    description: "Интерактивный баннер, где пользователь стирает защитный слой и видит спецпредложение",
    advantages: ["Практически нет ограничений по использованию для разных ниш и рекламных каналов", "Хорошо подходит для рекламы акций, промокодов", "Уникальный промокод позволяет оценить офлайн-конверсии"],
    forWhom: "FMCG, HoReCa, E-commerce, Beauty, Education",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Scratch-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-Gq1MMn3UxgGKAkxWwPUeZEVkoVpaXj.mov",
  },
  {
    id: 8,
    name: "Banner Slider",
    description: "Карусель с изображениями внутри баннера",
    advantages: ["Компактная демонстрация ассортимента", "Сокращает путь к покупке", "Повышает вовлеченность"],
    forWhom: "E-commerce, Fashion, Beauty, Travel, FMCG",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Slider-F8ZTDxjG3N8cJYgQCjoUbAZtXa7V3b.mov",
  },
  {
    id: 9,
    name: "Cube-баннер",
    description: "3D куб с возможностью взаимодействия",
    advantages: ["Предлагает интерактивное взаимодействие", "Показывает до 4-х баннеров в одном креативе", "Может вращаться как автономно, так и пользователем"],
    forWhom: "Всем без ограничений",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cube-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-47Zgxe0qHV8j084TvbHhQCt6eNbGFr.mov",
  },
  {
    id: 10,
    name: "3D-баннер",
    description: "Интерактивный баннер с эффектом объема",
    advantages: ["Привлекает ����������нимание за счет 3D-эффекта", "Позволяет детально продемонстрировать товар", "Подходит для брендовых и имиджевых кампаний"],
    forWhom: "Всем без ограничений",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3D-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-Y1c3mtmeoWn0MEmchBbaNISDX4KQg7.mov",
  },
  {
    id: 11,
    name: "Expandable-баннер",
    description: "Баннер с расширением при наведении",
    advantages: ["При наведении баннер раскрывается и перекрывает другой контент страницы", "В мобильной версии занимает весь экран", "Позволяет органично включить в креатив большой объем информации"],
    forWhom: "Всем без ограничений",
    sizes: "300x600, 240x600, 300x500, 970x250, 320x480",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Expandable-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-zCxKRNpjhSCpOc5WYhr6h1cTEzUfbX.mov",
  },
  {
    id: 12,
    name: "Touch-баннер",
    description: "Баннер с эффектом опроса: в зависимости от сделанных выборов пользователь видит релевантный результат",
    advantages: ["Вовлекает пользователя во взаимодействие с креативом", "Можно использовать для размещения тестов, опросов, шарад", "Хорошо адаптируется под мобильный формат"],
    forWhom: "Больше подходит для B2C сектора",
    sizes: "300x600, 240x400, 240x600, 300x250, 336x280, 300x500",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Touch-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-97wfZIlPSSkCkEQcDkHqqw870m4b4G.mov",
  },
  {
    id: 13,
    name: "Video-баннер",
    description: "Встроенное видео с автозапуском",
    advantages: ["Привлекает внимание благодаря динамике", "Улучшает восприятие и запоминаемость", "Способствует формированию имиджа бренда"],
    forWhom: "Всем без ограничений",
    sizes: "300x600, 240x400, 300x250, 336x280, 300x500, 970x250",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-UITsOLx0zPNq49pjlx5tFFvgAqQUEL.mov",
  },
  {
    id: 14,
    name: "Banner-stories",
    description: "История в формате мобильных Stories",
    advantages: ["Каждый слайд может иметь свой формат (видео, статика, опрос)", "Позволяет рассказать историю посредством креатива", "Подходит для брендовых и имиджевых кампаний"],
    forWhom: "Всем сферам бизнеса\n*Креатив доступен в Беларуси и Казахстане",
    sizes: "1080x1920, 1080x1350, 1080x1080",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner-stories-fSp3NsuELa0KrkunJ1dzjiTpPpnrdo.mov",
  },
]

// Pricing and Coefficients
const pricingData = {
  costs: [
    { label: "Стоимость разработки интерактивов", value: "19 000,00 ₽" },
    { label: "Базовый СРМ за размещение формата", value: "88,00 ₽" },
  ],
  coefficients: [
    { category: "WL", value: "1,2" },
  ],
}

export function RichMediaCatalogSlide() {
  const [displayCount, setDisplayCount] = useState(3)
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="bg-background p-6 lg:p-10">
        {/* Header */}
        <div className="mb-12 border-b border-border pb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Rich Media каталог
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Креативные возможности, стоимость и рекомендации по нишам
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rich Media HTML5 Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Rich Media HTML5
          </h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {richMediaFormats.slice(0, displayCount).map((example, idx) => (
              <Card key={idx} className="flex flex-col hover:shadow-md transition-shadow overflow-hidden relative">
                {/* NEW Badge */}
                {example.isNew && (
                  <div className="absolute top-3 right-3 z-10 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </div>
                )}
                
                {/* Video Preview Area - Square */}
                <div className="aspect-square w-full bg-gradient-to-br from-primary/5 to-primary/10 border-b border-border flex items-center justify-center overflow-hidden">
                  {example.videoUrl ? (
                    <video 
                      src={example.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      <div className="text-center">
                        <div className="text-base font-semibold mb-2">Превью баннера</div>
                        <div className="text-xs">360x240</div>
                      </div>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-foreground">
                    {example.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">
                    {example.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Преимущества:</p>
                    <ul className="space-y-1">
                      {example.advantages.map((adv, i) => (
                        <li key={i} className="text-muted-foreground flex gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Кому подходит:</p>
                    <p className="text-muted-foreground">{example.forWhom}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="font-semibold text-foreground mb-1">Размеры:</p>
                    <p className="text-xs text-muted-foreground leading-tight">{example.sizes}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Show More Button */}
          {displayCount < richMediaFormats.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setDisplayCount(displayCount + 3)}
                className="px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>

        {/* Format Selection Algorithm */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-left">
            Как выбрать подходящий формат креатива
          </h2>
          <Card>
            <CardContent className="p-4 md:p-6">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/battle-card-format-selection-qkSsYuhNNXYSHNbAkG28RJUU32ryMi.jpg"
                alt="Battle Card - Как выбрать формат креатива"
                className="w-full h-auto object-contain rounded-lg"
              />
            </CardContent>
          </Card>
        </div>

        {/* Pricing and Coefficients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Стоимость и коэффициенты
          </h2>

          {/* Scrolling Ribbon */}
          <style>{`
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .ribbon-container {
              animation: scroll-left 20s linear infinite;
            }
            .ribbon-container:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="mb-8 rounded-lg bg-gradient-to-r from-primary via-primary to-primary overflow-hidden">
            <div className="flex gap-4 py-4 px-4">
              <div className="ribbon-container flex gap-4 whitespace-nowrap">
                {/* Original items */}
                <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0 min-w-fit">
                  <Gift className="h-6 w-6 text-white" />
                  <p className="text-base font-bold text-white">При бюджете от 600 тыс руб — разработка креатива в подарок</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0 min-w-fit">
                  <Gift className="h-6 w-6 text-white" />
                  <p className="text-base font-bold text-white">При бюджете от 600 тыс руб — разработка креатива в подарок</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0 min-w-fit">
                  <Gift className="h-6 w-6 text-white" />
                  <p className="text-base font-bold text-white">При бюджете от 600 тыс руб — разработка креатива в подарок</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0 min-w-fit">
                  <Gift className="h-6 w-6 text-white" />
                  <p className="text-base font-bold text-white">При бюджете от 600 тыс руб — разработка креатива в подарок</p>
                </div>
              </div>
            </div>
          </div>

            {/* Costs Card */}
            <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg font-bold">
                  Стоимость разработки интерактивов
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                {pricingData.costs.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-secondary border border-border">
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                    <span className="text-lg font-bold text-primary">{item.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Coefficients Card */}
            <Card>
              <CardHeader className="border-b border-border">
                <CardTitle className="text-lg font-bold">
                  Коэффициенты
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 mb-6">
                  {pricingData.coefficients.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-lg bg-secondary border border-border">
                      <span className="text-sm font-medium text-foreground">{item.category}</span>
                      <span className="text-lg font-bold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </div>
        </div>
      </div>
    </div>
  )
}

