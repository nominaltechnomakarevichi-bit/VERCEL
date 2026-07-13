'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sparkles, Check } from 'lucide-react'
import { useState } from 'react'

export default function AkrikhinPage() {
  const richMediaFormats = [
    {
      id: 1,
      name: 'Banner Spinner',
      description: 'Вращающийся баннер с динамичной анимацией',
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Spinner-PlChE8Qnm6vEAIcAKJ3nKle2Tkyu0g.mov',
      advantages: [
        'Позволяет показать несколько вариантов продукта в одном креативе',
        'Эффект витрины усиливает восприятие ассортимента',
        'Повышает узнаваемость продуктовой линейки'
      ]
    },
    {
      id: 2,
      name: 'Cube-баннер',
      description: '3D куб с возможностью взаимодействия',
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.36.44-ROTecWU18Vjx7pn8xwFFaFdhgWkOYY.mov',
      advantages: [
        'Предлагает интерактивное взаимодействие',
        'Показывает до 4-х баннеров в одном креативе',
        'Может вращаться как автономно, так и пользователем'
      ]
    },
    {
      id: 3,
      name: 'Multi-Layer Banner',
      description: 'Баннер с эффектом подвижных шторок',
      videoUrl: 'https://presentation-nt-technology.vercel.app/videos/multi-layer-banner.mov',
      advantages: [
        'Пользователь самостоятельно исследует ассортимент, что увеличивает время контакта с брендом',
        'Подходит для новых линеек и продуктовых коллекций',
        'Не требует перехода на сайт для первичного знакомства с ассортиментом'
      ],
      strategy: [
        'В статичных блоках демонстрируем товар/линейку товаров бренда',
        'В видео-блоке (по центру) демонстрируем легкий рецепт',
        'Преимущество: демонстрируем пользователю на реальном примере, как можно использовать продукцию и замотивировать к покупке'
      ]
    }
  ]

  const audienceSegments = [
    {
      title: 'Сегмент «Мамы»',
      products: [
        'Аквадетрим (капли)',
        'Боботик (капли от коликов)',
        'Бронхо-Ваксом детский (иммуномодулятор)'
      ],
      profile: {
        title: 'Социально-демографический профиль',
        description: 'Женщины, 23–50 лет, имеют одного или нескольких детей (от младенцев до младших школьников)'
      },
      behavior: {
        title: 'Как выбирает',
        description: 'Читает чаты, форумы для мам, доверяет рекомендациям педиатров и «проверенных блогеров-мам».'
      },
      triggers: {
        title: 'Триггеры для покупок',
        description: 'Авторитет бренда и безопасность состава'
      },
      interests: [
        'дети',
        'доказательная медицина',
        'педиатры (Доктор Комаровский)',
        'консультанты по ГВ и сну',
        'покупки на МП',
        'сериалы',
        'здоровье',
        'дом',
        'красота'
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2015_48_24-OuSdyRnGcicECgR5vO3hm9sItrSKIJ.png'
    },
    {
      title: 'Сегмент «Сам себе доктор»',
      products: [
        'Амброксол-Акрихин',
        'Бромгексин-Акрихин (кашель)',
        'Галазолин (назальные капли)'
      ],
      profile: {
        title: 'Социально-демографический профиль',
        description: 'Мужчины и женщины, 20–45 лет. Работают, учатся, ведут активный образ жизни'
      },
      behavior: {
        title: 'Как выбирает',
        description: 'Ищет эффективные препараты, сравнивает цены, читает отзывы'
      },
      triggers: {
        title: 'Триггеры для покупок',
        description: 'Эффективность и быстродействие препарата'
      },
      interests: [
        'карьера',
        'учеба',
        'семья',
        'здоровье',
        'покупки',
        'сериалы и фильмы',
        'спорт',
        'новости',
        'бизнес'
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2015_53_37-VAD5J3JDvYvmTfC1dhc02uSr0CZ4ur.png'
    },
    {
      title: 'Сегмент «Менеджер аптечки»',
      products: [
        'Любые безрецептурные препараты и БАДы от простуды и «для профилактики»'
      ],
      profile: {
        title: 'Социально-демографический профиль',
        description: 'Женщины, 35–60 лет. Закупают лекарства на всю семью (муж, взрослые дети, пожилые родители)'
      },
      behavior: {
        title: 'Как выбирает',
        description: 'Ищет препараты по действующему веществу в онлайн-аптеках, сравнивает цены, держит аптечку укомплектованной «на всякий случай» до начала сезона простуд'
      },
      triggers: {
        title: 'Триггеры для покупок',
        description: 'Цена, качество, проверенность'
      },
      interests: [
        'сериалы и фильмы',
        'спорт',
        'новости',
        'покупки',
        'дача',
        'покупки на МП',
        'развлечения',
        'путешествия',
        'ремонт'
      ],
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2016_00_59-66pKWknbESuT2Si1BKNy7gVa7jSPli.png'
    }
  ]

  const caseStudies = [
    {
      id: 1,
      title: 'Как кастомные сегменты и кросс-девайсная оптимизация увеличили знание о бренде на 13%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2026%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2017_44_50-NKW3xSNYe2pRLhJ28bJ6t4jyiK2aKR.png',
      campaign: {
        product: 'бренд детского питания',
        goal: 'рост узнаваемости и лояльности к бренду',
        channels: 'Social + Media',
        period: '3 месяца'
      },
      features: [
        'Для точности таргетинга использовали кастомные сегменты',
        'Собрали аудиторию, которая ранее заходила на сайт',
        'Настроили таргетинг на аудиторию конкурентов',
        'Настроили кросс-девайсную оптимизацию'
      ],
      results: [
        { value: '1.5+ млн', label: 'охват' },
        { value: '3+ млн', label: 'показов' },
        { value: '13%+', label: 'Brand Lift' }
      ]
    },
    {
      id: 2,
      title: 'Как White list из тематических площадок привел к росту KPI на 206%+',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000025729-I9qoD4dfopcQO1SSYovrQsXYPYiwQX.png',
      campaign: {
        product: 'детские подгузники MOMI',
        goal: 'продвижение розыгрыша призов',
        channels: 'Social + Media',
        period: '1 месяц'
      },
      features: [
        'Для роста качества аудитории собрали White list, включающий тематические приложения (календари беременности) и сайты с целевым контентом (материнство, путешествия с детьми, советы будущим мамам)'
      ],
      results: [
        { value: '500+ тыс', label: 'показов' },
        { value: '3+ тыс', label: 'переходов' },
        { value: '206%+', label: 'к прогнозам' }
      ]
    },
    {
      id: 3,
      title: 'Как кастомные сегменты и ОФД данные привели к перевыполнению плановых KPI на 169%+',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%B0%20%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%20240x400%20%D0%9F%D0%98%CC%86_2%20%283%29-gfTZIkefhx7rhXb6Vs72Fo68pHGI8P.jpg',
      campaign: {
        product: 'детское питание Фрутоняня',
        goal: 'повышение лояльности к бренду, охват',
        channels: 'Media',
        period: '3 месяца'
      },
      features: [
        'Сегментировали аудиторию на 4 тематические группы',
        'Использовали технологию Affinity List Builder',
        'Использовали данные ОФД для расширения аудитории'
      ],
      results: [
        { value: '1.5+ млн', label: 'охват' },
        { value: '4.6+ млн', label: 'показов' },
        { value: '28+ тыс', label: 'кликов' }
      ]
    },
    {
      id: 4,
      title: 'Как микс форматов и точный таргетинг увеличил узнаваемость бренда на 153%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2016_10_06-9N8uNE3qB0SaD3F2gPkIAB7oyy162x.png',
      campaign: {
        product: 'сироп от кашля для детей Флюдитек',
        goal: 'увеличить узнаваемость бренда',
        channels: 'Display, Video',
        period: '4 месяца'
      },
      features: [
        'Использование Cube-баннера позволило преодолеть баннерную слепоту и увеличить ERR в 2,5 раза в сравнении со статикой'
      ],
      results: [
        { value: '-18%', label: 'средний CPM' },
        { value: '+153%', label: 'по брендовым запросам' },
        { value: '+75%', label: 'средний прирост охвата' }
      ]
    }
  ]

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-start gap-8">
            {/* Logos */}
            <div className="flex gap-6 items-center flex-shrink-0">
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulbU9iEEau7dtNf8jpBqUpuSopx3mL.png" 
                  alt="NT Technology" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_90_new-akij9bAAqlpWZPmGtWZmPbJLhK3BBy.png" 
                  alt="Акрихин" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда «Акрихин»
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section - 3 Column Layout */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Аудитория бренда</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audienceSegments.map((segment, idx) => (
              <Card key={idx} className="border-2 border-border bg-white overflow-hidden flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-6">
                  {/* Image */}
                  <div className="bg-slate-100 rounded-lg overflow-hidden h-48 flex items-center justify-center">
                    <img 
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Products */}
                  <div>
                    <p className="font-bold text-foreground mb-2">Препараты</p>
                    <ul className="space-y-1">
                      {segment.products.map((product, pidx) => (
                        <li key={pidx} className="text-sm text-foreground">{product}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Profile */}
                  <div>
                    <p className="font-bold text-foreground mb-2">{segment.profile.title}</p>
                    <p className="text-sm text-foreground">{segment.profile.description}</p>
                  </div>

                  {/* Behavior */}
                  <div>
                    <p className="font-bold text-foreground mb-2">{segment.behavior.title}</p>
                    <p className="text-sm text-foreground">{segment.behavior.description}</p>
                  </div>

                  {/* Triggers */}
                  <div>
                    <p className="font-bold text-foreground mb-2">{segment.triggers.title}</p>
                    <p className="text-sm text-foreground">{segment.triggers.description}</p>
                  </div>

                  {/* Interests */}
                  <div>
                    <p className="font-bold text-foreground mb-2">Интересы</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.interests.map((interest, iidx) => (
                        <span 
                          key={iidx}
                          className="px-2 py-1 bg-blue-100 text-[#0029FF] font-semibold rounded-full text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Таргетинги</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-border">
                  <th className="border-r-2 border-border p-4 text-left font-bold text-foreground">Интересы</th>
                  <th className="border-r-2 border-border p-4 text-left font-bold text-foreground">Поведенческие сегменты</th>
                  <th className="p-4 text-left font-bold text-foreground">Посещение сайтов</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-border hover:bg-slate-50">
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Здоровье</li>
                      <li>• Семья</li>
                      <li>• Медицина</li>
                      <li>• Онлайн-покупки</li>
                    </ul>
                  </td>
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Покупают лекарства</li>
                      <li>• Часто посещают аптеки</li>
                      <li>• Интересуются здоровьем</li>
                      <li>• Регулярно совершают покупки</li>
                      <li>• Активные онлайн-покупатели</li>
                    </ul>
                  </td>
                  <td className="p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Статьи о здоровье</li>
                      <li>• Информация о препаратах</li>
                      <li>• Медицинские консультации</li>
                      <li>• Аптечные сайты</li>
                      <li>• Форумы о здоровье</li>
                      <li>• Медицинские портали</li>
                      <li>• Профилактика</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rich Media Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Rich Media форматы</h2>

          <div className="space-y-12">
            {richMediaFormats.map((format) => (
              <Card key={format.id} className="border-2 border-border bg-white overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{format.name}</CardTitle>
                  <p className="text-foreground mt-2">{format.description}</p>
                </CardHeader>
                <CardContent>
                  {format.id === 3 ? (
                    <div className="space-y-8">
                      <div className="bg-slate-100 rounded-lg overflow-hidden h-56">
                        <video 
                          className="w-full h-full object-contain"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        >
                          <source src={format.videoUrl} type="video/mp4" />
                        </video>
                      </div>

                      <div>
                        <h4 className="font-bold text-foreground mb-4">Преимущества:</h4>
                        <ul className="space-y-2">
                          {format.advantages.map((adv, idx) => (
                            <li key={idx} className="flex gap-3 text-foreground">
                              <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                      <div className="bg-slate-100 rounded-lg overflow-hidden h-96">
                        <video 
                          className="w-full h-full object-contain"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        >
                          <source src={format.videoUrl} type="video/mp4" />
                        </video>
                      </div>

                      <div>
                        <h4 className="font-bold text-foreground mb-4">Преимущества:</h4>
                        <ul className="space-y-3">
                          {format.advantages.map((adv, idx) => (
                            <li key={idx} className="flex gap-3 text-foreground">
                              <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Отчетность</h2>
          
          <Card className="border-2 border-border bg-blue-50 overflow-hidden">
            <CardContent className="p-8 space-y-4">
              <p className="text-foreground text-lg">Готовим отчеты любой сложности по метрикам, интересующим бизнес</p>
              <div className="flex items-center gap-3 text-foreground">
                <span className="text-[#0029FF] font-bold">№1</span>
                <span>в категории «Высокая скорость подготовки отчетов» Технологического индекса AdIndex</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advertising Channels Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Рекламные каналы</h2>

          <div className="space-y-12">
            {/* CTV Section */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">CTV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-slate-100 rounded-lg overflow-hidden h-80 flex items-center justify-center">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2016_08_02-Mglsy5Jn2Cd3lxCDPJwAAVplheKodp.png"
                      alt="CTV Advertising"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Форматы</h4>
                      <ul className="space-y-2">
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>Стандартные видео-объявления</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>Интерактивные видео</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>Видео с паузой</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DOOH Section */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">DOOH (Digital Out-of-Home)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-slate-100 rounded-lg overflow-hidden h-80 flex items-center justify-center">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2013%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2016_10_06-9N8uNE3qB0SaD3F2gPkIAB7oyy162x.png"
                      alt="DOOH Advertising"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Форматы</h4>
                      <ul className="space-y-3">
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Indoor</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Outdoor</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Транзитная</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-2">Таргетинги</h4>
                      <ul className="space-y-2">
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Время</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Погода</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Температура</span>
                        </li>
                        <li className="flex gap-2 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                          <span>Локация</span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-foreground mt-4 pt-4 border-t border-border">
                      Подберем поверхности рядом с офлайн-точками продаж препаратов и покажем на карте, где будет размещаться ваша реклама
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Технические возможности</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Safety */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">Brand Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Исключает показ рекламы рядом с нежелательным контентом (насилие, политика, трагедии, контент 18+).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Обеспечивает размещение в безопасном окружении, соответствующем бренду.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Снижает репутационные риски и повышает доверие к бренду.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AntiFraud */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">AntiFraud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Блокирует недействительный трафик (ботов, фейковые показы и клики).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Исключает сайты и приложения с подозрительной активностью.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">Повышает качество охвата и гарантирует, что рекламный бюджет расходуется на реальных пользователей.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Кейсы</h2>

          <Carousel className="w-full">
            <CarouselContent>
              {caseStudies.map((caseStudy) => (
                <CarouselItem key={caseStudy.id} className="lg:basis-1/2">
                  <Card className="border-2 border-border bg-white overflow-hidden h-full">
                    <div className="bg-slate-100 overflow-hidden h-72">
                      <img 
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-[#0029FF]">{caseStudy.title}</h3>
                      
                      <div className="space-y-2">
                        <div><span className="font-bold text-foreground">Продукт: </span><span className="text-foreground">{caseStudy.campaign.product}</span></div>
                        <div><span className="font-bold text-foreground">Цель: </span><span className="text-foreground">{caseStudy.campaign.goal}</span></div>
                        <div><span className="font-bold text-foreground">Каналы: </span><span className="text-foreground">{caseStudy.campaign.channels}</span></div>
                        <div><span className="font-bold text-foreground">Период: </span><span className="text-foreground">{caseStudy.campaign.period}</span></div>
                      </div>

                      <div>
                        <p className="font-bold text-foreground mb-2">Особенности:</p>
                        <ul className="space-y-1">
                          {caseStudy.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-foreground">• {feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-bold text-foreground mb-2">Результаты:</p>
                        <div className="grid grid-cols-3 gap-2">
                          {caseStudy.results.map((result, idx) => (
                            <div key={idx} className="text-center p-2 bg-blue-50 rounded">
                              <div className="text-xl font-bold text-[#0029FF]">{result.value}</div>
                              <div className="text-xs text-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </main>
  )
}
