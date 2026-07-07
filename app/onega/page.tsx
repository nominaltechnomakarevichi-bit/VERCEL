'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sparkles, Check, Monitor, Play, Tv, Shield, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function OnegaPage() {
  const audiences = [
    {
      id: 1,
      name: 'Онега',
      title: 'Молодая семья',
      description: 'Активная семья, ценящая качество напитков и здоровый образ жизни',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2026%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2013_58_08-a8nRjOCqFOltMYq2XJwtA5aGl909b5.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 55-60%',
          'Мужчины 40-45%'
        ]
      },
      age: {
        label: 'Возраст',
        data: 'Основная группа 25-40 лет'
      },
      income: {
        label: 'Доход',
        data: 'Средний и выше среднего'
      },
      interests: [
        'здоровый образ жизни',
        'здоровое питание',
        'природа',
        'активный отдых',
        'путешествия',
        'экология'
      ],
      triggers: [
        'качество',
        'натуральность',
        'безопасность',
        'вкус',
        'удобство',
        'цена'
      ]
    },
    {
      id: 2,
      name: 'Рень',
      title: 'Рень',
      description: 'Экономный покупатель, ищущий хорошее соотношение цены и качества',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000025729-I9qoD4dfopcQO1SSYovrQsXYPYiwQX.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 60-70%',
          'Мужчины 30-40%'
        ]
      },
      age: {
        label: 'Возраст',
        data: 'Основная группа 30-50 лет'
      },
      income: {
        label: 'Доход',
        data: 'Средний'
      },
      interests: [
        'экономия',
        'скидки и акции',
        'маркетплейсы',
        'бюджетный шопинг',
        'распродажи',
        'кэшбек'
      ],
      triggers: [
        'цена',
        'скидка',
        'пакет товаров',
        'качество по цене',
        'удобство'
      ]
    },
    {
      id: 3,
      name: 'Just Brutal',
      title: 'Just Brutal',
      description: 'Молодой активный потребитель с экстремальным образом жизни',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80%D0%B0%20%D0%9A%D0%BE%D0%BD%D1%82%D0%B5%D0%BA%D1%81%D1%82%20240x400%20%D0%9F%D0%98%CC%86_2%20%283%29-gfTZIkefhx7rhXb6Vs72Fo68pHGI8P.jpg',
      gender: {
        label: 'Пол',
        data: [
          'Мужчины 70-80%',
          'Женщины 20-30%'
        ]
      },
      age: {
        label: 'Возраст',
        data: 'Основная группа 18-35 лет'
      },
      income: {
        label: 'Доход',
        data: 'Средний и выше среднего'
      },
      interests: [
        'спорт',
        'экстремальные виды спорта',
        'путешествия',
        'авто',
        'видеоигры',
        'социальные сети'
      ],
      triggers: [
        'энергия',
        'адреналин',
        'стиль',
        'качество',
        'инновация'
      ]
    }
  ]

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
      ]
    }
  ]

  const channels = [
    {
      id: 'ctv',
      name: 'CTV',
      description: 'Реклама на Smart TV и стриминговых платформах',
      advantages: [
        'Полноэкранный формат',
        'Высокая визуальное воздействие',
        'Целевая аудитория дома'
      ]
    },
    {
      id: 'display',
      name: 'Display',
      description: 'Баннерная реклама на сайтах партнеров и медиа',
      advantages: [
        'Широкий охват',
        'Гибкий таргетинг',
        'Видимость в течение дня'
      ]
    },
    {
      id: 'video',
      name: 'Video',
      description: 'Видеореклама in-stream, out-stream и на платформах',
      advantages: [
        'Эмоциональное воздействие',
        'Высокая запоминаемость',
        'Социальные сети'
      ]
    }
  ]

  const technicalCapabilities = [
    {
      title: 'Подбор нестандартных аудиторий',
      description: 'Возможность подбора нестандартных аудиторий'
    },
    {
      title: 'WL аудитории',
      description: 'Возможность работы с нестандартными аудиториями (недоступны в рамках стандартных таргетингов) при помощи узко специализированных WL'
    },
    {
      title: 'Работа с бенчмарками',
      description: 'Возможность работы с бенчмарками клиента и оптимизации РК под них'
    },
    {
      title: 'Увеличение выкупа трафика',
      description: 'Возможность увеличения выкупа трафика по определенным WL в рамках нашей DSP'
    },
    {
      title: 'Brand Safety',
      description: 'Обеспечивает размещение в безопасном окружении и снижает репутационные риски'
    },
    {
      title: 'AntiFraud',
      description: 'Блокирует недействительный трафик (ботов, фейковые показы и клики) и исключает площадки с подозрительной активностью'
    }
  ]

  const brands = [
    {
      name: 'Borjomi',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/borjomi-logo.svg'
    },
    {
      name: 'Цимкаева',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tsimkaeva-logo.svg'
    },
    {
      name: 'Сиар Така',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siar-taka-logo.svg'
    },
    {
      name: 'Витьба',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vityba-logo.svg'
    },
    {
      name: 'Fresco Coffee',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fresco-logo.svg'
    },
    {
      name: 'Baron',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baron-logo.svg'
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
              <div className="w-24 h-24 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#E31E24' }}>
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Onega_logo-ovw5p6q3oin3a29l6x07in08fp60m15fsotj6zfy6i-mdh3zpvhDxT6jNMgnYvqrHM1ZhL8Dk.png" 
                  alt="Onega" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда «Онега»
              </h1>
              <p className="text-xl text-muted-foreground">
                Как выиграть внимание в FMCG с минимальным временем контакта
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Целевая аудитория</h2>
          </div>

          {/* Three Audience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {audiences.map((audience) => (
              <Card key={audience.id} className="border-2 border-border bg-white overflow-hidden">
                <div className="space-y-6 p-6">
                  {/* Image */}
                  <div className="bg-slate-100 rounded-lg h-48 flex items-center justify-center overflow-hidden">
                    <img 
                      src={audience.image}
                      alt={audience.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Name and Title */}
                  <div>
                    <h3 className="text-xl font-bold text-[#0029FF] mb-2">{audience.title}</h3>
                    <p className="text-foreground text-sm">{audience.description}</p>
                  </div>

                  {/* Demographics */}
                  <div className="space-y-4">
                    {/* Gender */}
                    <div>
                      <p className="font-bold text-foreground mb-2">{audience.gender.label}</p>
                      <div className="space-y-1">
                        {audience.gender.data.map((item, idx) => (
                          <p key={idx} className="text-foreground text-sm">{item}</p>
                        ))}
                      </div>
                    </div>

                    {/* Age */}
                    <div>
                      <p className="font-bold text-foreground mb-2">{audience.age.label}</p>
                      <p className="text-foreground text-sm">{audience.age.data}</p>
                    </div>

                    {/* Income */}
                    <div>
                      <p className="font-bold text-foreground mb-2">{audience.income.label}</p>
                      <p className="text-foreground text-sm">{audience.income.data}</p>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <p className="font-bold text-foreground mb-2">Интересы</p>
                    <div className="flex flex-wrap gap-2">
                      {audience.interests.map((interest, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-[#0029FF] text-xs rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Purchase Triggers */}
                  <div>
                    <p className="font-bold text-foreground mb-2">Триггеры для покупки</p>
                    <div className="flex flex-wrap gap-2">
                      {audience.triggers.map((trigger, idx) => (
                        <span key={idx} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
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

      {/* Channels Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Рекламные каналы</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {channels.map((channel) => (
              <Card key={channel.id} className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{channel.name}</CardTitle>
                  <p className="text-foreground mt-2">{channel.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Преимущества:</h4>
                    <ul className="space-y-2">
                      {channel.advantages.map((adv, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Технические возможности</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCapabilities.map((capability, idx) => (
              <Card key={idx} className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[#0029FF]">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground text-sm">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-2 border-border bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center justify-center gap-12">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-8">Бренды, с которыми мы работаем</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {/* Static Logos */}
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">BORJOMI</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-orange-500">Царская</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-600">Сиартака</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">ВИТЬБА</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-amber-700">FRESCO COFFEE</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-bold text-red-500">BARON</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Кейсы</h2>

          <Card className="border-2 border-border bg-white overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="bg-slate-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2026%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2017_44_50-NKW3xSNYe2pRLhJ28bJ6t4jyiK2aKR.png"
                  alt="Borjomi Case Study"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Как кастомные сегменты и кросс-девайсная оптимизация увеличили знание о бренде на 13%
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-foreground mb-2">Продукт</p>
                      <p className="text-foreground text-sm">Вода Borjomi</p>
                    </div>

                    <div>
                      <p className="font-bold text-foreground mb-2">Цель</p>
                      <p className="text-foreground text-sm">Рост узнаваемости и лояльности к бренду</p>
                    </div>

                    <div>
                      <p className="font-bold text-foreground mb-2">Каналы</p>
                      <p className="text-foreground text-sm">Social + Media</p>
                    </div>

                    <div>
                      <p className="font-bold text-foreground mb-2">Период</p>
                      <p className="text-foreground text-sm">3 месяца</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-bold text-foreground mb-3">Ключевые приемы</p>
                    <ul className="space-y-2">
                      <li className="flex gap-3 text-foreground">
                        <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                        <span>Использовали кастомные сегменты</span>
                      </li>
                      <li className="flex gap-3 text-foreground">
                        <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                        <span>Собрали аудиторию, которая ранее заходила на сайт</span>
                      </li>
                      <li className="flex gap-3 text-foreground">
                        <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                        <span>Настроили таргетинг на аудиторию конкурентов</span>
                      </li>
                      <li className="flex gap-3 text-foreground">
                        <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                        <span>Настроили кросс-девайсную оптимизацию</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-foreground mb-3">Результаты</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-[#0029FF]">1.5+ млн</p>
                        <p className="text-xs text-foreground">охват</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-[#0029FF]">3+ млн</p>
                        <p className="text-xs text-foreground">показов</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <p className="text-lg font-bold text-[#0029FF]">13%+</p>
                        <p className="text-xs text-foreground">Brand Lift</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
