'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sparkles, Check, Monitor, Play, Tv, Shield, AlertCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function OnegaPage() {
  useEffect(() => {
    document.title = 'Programmatic-кампания для бренда «Онега» Как выиграть внимание в FMCG с минимальным временем контакта'
  }, [])
  const audiences = [
    {
      id: 1,
      name: 'Онега',
      title: 'Молодая семья',
      description: 'Вкус, объединяющий семью и друзей',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_17_19-pMEKSYrsWJWWRRqb8MO0if9Hhl5rHM.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 60%',
          'Мужчины 40%'
        ]
      },
      age: {
        label: 'Возраст',
        data: '28–42 года'
      },
      income: {
        label: 'Доход',
        data: 'Средний'
      },
      interests: [
        'просмотр фильма',
        'семейные выходные',
        'пикник',
        'гости дома'
      ],
      triggers: [
        'проверенный бренд',
        'большой выбор вкусов',
        'акции',
        'удобная упаковка'
      ]
    },
    {
      id: 2,
      name: 'Рень',
      title: 'Любитель традиционных снеков',
      description: 'Настоящий отдых начинается с простых удовольствий',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_19_45-A1eFbd8r2jT6phlImiKZwQsgCl0pdM.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 70%',
          'Мужчины 30%'
        ]
      },
      age: {
        label: 'Возраст',
        data: '30–55 лет'
      },
      income: {
        label: 'Доход',
        data: 'Средний'
      },
      interests: [
        'отдых на природе',
        'рыбалка',
        'дача',
        'футбол',
        'встречи с друзьями'
      ],
      triggers: [
        'качественные семечки',
        'натуральный вкус',
        'хорошая прожарка',
        'удобная упаковка'
      ]
    },
    {
      id: 3,
      name: 'Just Brutal',
      title: 'Трендсеттер',
      description: 'Будь смелее, пробуй новое',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_23_28-9KuLSlahz0YdxT1iLsZyxRJmDIlmN3.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 30%',
          'Мужчины 70%'
        ]
      },
      age: {
        label: 'Возраст',
        data: '18–30 лет'
      },
      income: {
        label: 'Доход',
        data: 'Средний'
      },
      interests: [
        'вечеринка',
        'отдых с друзьями',
        'просмотр сериалов',
        'компьютерные игры'
      ],
      triggers: [
        'необычные цвета',
        'нестандартные вкусы',
        'яркая упаковка',
        'ограниченные серии'
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
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-09%20%D0%B2%2017.50.32-umawnjaouxlqMrGSJclAiV5KbwzssP.mov',
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
      contactPoint: 'Точка контакта с аудиторией семей за просмотром кино (Онега) или Молодой аудиторией за просмотром сериалов (Just Brutal)',
      capabilities: 'подбор тематических площадок (WL), соответствующих интересам целевой аудитории'
    },
    {
      id: 'display',
      name: 'Display',
      contactPoint: 'Точка контакта с аудиторией любителей традиционных снеков',
      capabilities: 'подбор тематических площадок (WL), соответствующих интересам целевой аудитории'
    },
    {
      id: 'video',
      name: 'Video',
      contactPoint: 'Точка контакта с молодой аудиторией (Just Brutal)',
      capabilities: 'Размещение рекламы на каналах, ориентированных на молодую аудиторию'
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
                {/* Header */}
                <div className="bg-blue-50 px-6 py-4 border-b border-border">
                  <h3 className="text-2xl font-bold text-[#0029FF]">{audience.name}</h3>
                </div>
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

          {/* NT Proposal Block */}
          <Card className="border-2 border-border bg-blue-50 mt-12">
            <CardContent className="p-8">
              <p className="text-lg text-foreground">
                <span className="font-bold">Предложение NT:</span> для отбора необходимых сегментов аудитории можем использовать как стандартные таргетинги (интересы, поведенческие сегменты, тематические сайты), supergeo (торговые точки, продающие бренд Онега), так и нестандартные подходы (White lists)
              </p>
            </CardContent>
          </Card>
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

          {/* NT Proposal for Rich Media */}
          <Card className="border-2 border-border bg-blue-50 mt-12">
            <CardContent className="p-8">
              <p className="text-lg text-foreground">
                <span className="font-bold">Предложение NT:</span> с помощью Rich Media креативов можно показать все преимущества брендов, а также продемонстрировать разные сценарии потребления, чтобы зацепить нужный сегмент аудитории
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Channels Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Рекламные каналы</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {channels.filter(c => c.id === 'ctv').map((channel) => (
                <Card key={channel.id} className="border-2 border-border bg-white flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0029FF]">{channel.name}</CardTitle>
                  </CardHeader>
                <CardContent className="space-y-4 flex flex-col flex-1">
                  {/* TV Ad Image */}
                  <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_26_07-9o6IWG3p9LJ2IlbaPe7AvtENUYngQf.png"
                      alt="CTV Advertisement"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Inventory */}
                  <div>
                    <p className="font-bold text-foreground mb-3">Инвентарь</p>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQJ1w3AmyaXSI7bXjZ4FeBymzDaFhv.png" alt="ЗОНА ФИЛЬМОВ" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gPzrEh9HHN8AMMojYSPfDWHpL9QIHs.png" alt="LORDFILM" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-db0XS1o4y8l3qOPmuvb06eSgmFzprq.png" alt="New HDrezka" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GjMaxsz1xOXveutufJejJd8yZCB0jK.png" alt="ДОМАШНИЙ" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H6UOcDlFHHOXinoGSAWjNbiJhy8Yhp.png" alt="ВОКРУГ ТВ" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FvCJRSyaQv1TMCmxiIuazpQnOKo4N5.png" alt="FILM.RU" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mv849mgrQTSsqvs5R1ntEYyIFMRHL1.png" alt="LOSTFILM.TV" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nzdjAwJuEEFyleQ0WEAhtjPsmMfl3c.png" alt="LORDSERIALS" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRMLGOJgiTaRFRSEvLtioPK0k4mKzz.png" alt="CTC" className="h-12 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-20">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RsXbib4tHve2stMNxrkSWKLuINgqS2.png" alt="WINK" className="h-12 object-contain" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Аудитория</h4>
                    <p className="text-foreground text-sm">{channel.contactPoint}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Возможности</h4>
                    <p className="text-foreground text-sm">{channel.capabilities}</p>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-8">
              {channels.filter(c => c.id === 'display' || c.id === 'video').map((channel) => (
                <Card key={channel.id} className="border-2 border-border bg-white flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0029FF]">{channel.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex flex-col flex-1">
                    <div className="bg-slate-100 rounded-lg flex-1 flex items-center justify-center overflow-hidden">
                      {channel.id === 'display' && (
                        <img 
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_45_14-zvfa8YbBcCtQBaQntmzBPVixcNGCdo.png"
                          alt="Display Advertisement"
                          className="w-full h-full object-cover"
                        />
                      )}
                      {channel.id === 'video' && (
                        <img 
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%207%20%D0%B8%D1%8E%D0%BB.%202026%20%D0%B3.%2C%2017_30_51-oXCEzkBZzqtzO8Qsdlhb8Vnha9Bdws.png"
                          alt="Video Advertisement"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-2">Аудитория</h4>
                      <p className="text-foreground text-sm">{channel.contactPoint}</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-2">Возможности</h4>
                      <p className="text-foreground text-sm">{channel.capabilities}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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

      {/* Process Workflow Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Процесс работы</h2>
          <div className="space-y-4">
            <Card className="border-2 border-border bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0029FF] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                  <p className="text-lg text-foreground pt-1">Разрабатываем креативы под разные сегменты аудитории и разные продукты</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-border bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0029FF] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                  <p className="text-lg text-foreground pt-1">Используем нестандартный подход к подбору аудитории</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-border bg-white">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0029FF] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">3</div>
                  <p className="text-lg text-foreground pt-1">Запускаем омниканальную медийную кампанию с учетом разных сегментов аудитории и задач</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="border-2 border-border bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-wrap justify-center gap-12 w-full">
                {/* Brand Logos */}
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7hBU7YK0CjpGigm1MSlxLRYwGfaCo6.png" alt="BORJOMI" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zi8vS3EU2cZ2uBUCLTtCDCvZxOiJeb.png" alt="Школково" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bfRcn1o9KW2f1sactHZTOoDBY3YiNL.png" alt="Снарпак" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BSNGQ58AkQ1EIdnuA9mRwpeSbDa1Xo.png" alt="Витьба" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kqld9FrINHYwiFrgPI8WPMiyoASlKP.png" alt="Fresco Coffee" className="h-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-20">
                  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-shCkgYKW75oLtzazCR7P933BwRKb3D.png" alt="BARON" className="h-full object-contain" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Кейс</h2>

          <Card className="border-2 border-border bg-white overflow-hidden">
            <div className="flex flex-col p-8 space-y-6">
              {/* Top Section: Video + Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Video Preview - Left (1/3) */}
                <div className="bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden w-fit h-fit">
                  <video 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-22%20%D0%B2%2016.48.46-xhVwHuce85HHPh46La5tBEuDgvlg5z.mov"
                    autoPlay
                    loop
                    muted
                    className="object-contain"
                  />
                </div>

                {/* Content - Right (2/3) */}
                <div className="md:col-span-2 flex flex-col justify-between h-full space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-3">Как привлечь внимание к новому позиционированию бренда и удержать 0,3% GIVT+SIVT</p>
                  </div>

                  <div>
                    <p className="text-lg font-bold text-foreground mb-3">О кампании</p>
                    <div className="space-y-2 text-base text-foreground">
                      <p><span className="font-semibold">Продукт:</span> минеральная вода Borjomi</p>
                      <p><span className="font-semibold">Цель:</span> продвижение нового позиционирования</p>
                      <p><span className="font-semibold">Каналы:</span> Display</p>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <p className="text-lg font-bold text-foreground mb-3">Особенности кампании</p>
                    <ul className="space-y-2 text-base text-foreground">
                      <li>• Rich Media (Cube-баннер) позволил визуально передать идею Food Pairing и увеличить время контакта с брендом</li>
                      <li>• Жесткий контроль качества: использование собственной антифрод-системы обеспечило кристально чистый трафик (менее 0.3% фрода)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Results */}
              <div>
                <p className="font-bold text-foreground mb-4">Результаты</p>
                <div className="grid grid-cols-5 gap-4">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-[#0029FF] mb-2">+11%</p>
                    <p className="text-sm text-foreground">перевыполнение плана по показам</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-[#0029FF] mb-2">+9%</p>
                    <p className="text-sm text-foreground">узнаваемость бренда</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-[#0029FF] mb-2">-10%</p>
                    <p className="text-sm text-foreground">средний СРМ</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-[#0029FF] mb-2">0,3%</p>
                    <p className="text-sm text-foreground">GIVT+SIVT</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <p className="text-2xl font-bold text-[#0029FF] mb-2">1,5 месяца</p>
                    <p className="text-sm text-foreground">пери��д ведения</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Discussion CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Side - Text */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-foreground mb-8">Давайте обсудим запуск вашей кампании</h2>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2061-sEBQqUCRZG5ktlm0wggBi7vIcU9fbf.png"
                alt="NT Technology Lanyard Badge"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
