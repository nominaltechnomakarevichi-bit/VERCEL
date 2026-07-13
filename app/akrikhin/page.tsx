'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sparkles, Check } from 'lucide-react'
import { useState } from 'react'

export default function AkrikhinPage() {
  const richMediaFormats = [
    {
      id: 1,
      name: 'Banner Slider',
      description: 'Слайдер с кнопками навигации',
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.05.01-qO08QxdicptnIm9XtUmGMHT2KgBDP3.mov',
      advantages: [
        'Позволяет показать несколько вариантов в одном креативе',
        'Пользователь сам управляет контентом',
        'Повышает время взаимодействия с брендом'
      ]
    },
    {
      id: 2,
      name: 'Scratch-баннер',
      description: 'Интерактивный баннер с эффектом соскребания',
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.03.55-YeL1uR2Y1J2IPokSTUaxdmjQJxmoRH.mov',
      advantages: [
        'Создает эффект открытия подарка',
        'Привлекает внимание интерактивностью',
        'Идеален для промо-акций'
      ]
    },
    {
      id: 3,
      name: 'Cube-баннер',
      description: '3D куб с возможностью взаимодействия',
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.06.50-tViX84i1lnvNpRTeG7Bc67NNhLrGDr.mov',
      advantages: [
        'Предлагает интерактивное взаимодействие',
        'Показывает до 4-х баннеров в одном креативе',
        'Может вращаться как автономно, так и пользователем'
      ]
    }
  ]

  const audienceSegments = [
    {
      title: 'Мамы',
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
      title: 'Сам себе доктор',
      products: [
        'Амброксол-Акрихин',
        'Бромгексин-Акрихин (кашель)',
        'Галазолин (назальные капли)'
      ],
      profile: {
        title: 'Социально-демографический профиль',
        description: 'Мужчины и женщины, 20–45 лет. Работают, учатся, ведят активный образ жизни'
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
      title: 'Менеджер аптечки',
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
      title: 'Меноpace - как детальный таргетинг увеличил конверсии на 60%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.11.31-FZPT3BPZefkjXq9xAXynTmpPBWA8Vj.png'
    },
    {
      id: 2,
      title: 'Бетаргин - как микс форматов увеличил узнаваемость на 10%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.11.07-go8rFu9qRdjPHQRXFiPg1FEEbtecWr.png'
    },
    {
      id: 3,
      title: 'Дапален - как кастомные креативы увеличили конверсии на 43%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.10.12-1FNFhMnK2tgXT3zCgKKgpqWWk4zqHb.png'
    },
    {
      id: 4,
      title: 'Флюдитек - как микс форматов и таргетинг увеличили узнаваемость на 153%',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.10.39-oQ0E57XUUa2e6gUVieECZfoIepNkWO.png'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left - Logo and Text */}
            <div className="flex-1">
              <div className="mb-8">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_90_new-akij9bAAqlpWZPmGtWZmPbJLhK3BBy.png"
                  alt="Акрихин"
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6">Programmatic-кампания для бренда «Акрихин»</h1>
              <p className="text-lg text-foreground/70">Как выиграть внимание в фармацевтической категории с минимальным временем контакта</p>
            </div>

            {/* Right - Stats or Visual */}
            <div className="flex-1">
              <Sparkles className="w-24 h-24 text-[#0029FF]" />
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Аудитория бренда</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {audienceSegments.map((segment) => (
              <Card key={segment.title} className="border-2 border-border bg-white overflow-hidden flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex-1 flex flex-col">
                  {/* Image */}
                  <div className="bg-slate-100 rounded-lg overflow-hidden h-48">
                    <img 
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Flexing content */}
                  <div className="flex-1 space-y-6">
                    {/* Products */}
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Препараты</h4>
                      <ul className="space-y-2">
                        {segment.products.map((product, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                            <span>{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Profile */}
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{segment.profile.title}</h4>
                      <p className="text-sm text-foreground">{segment.profile.description}</p>
                    </div>

                    {/* Behavior */}
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{segment.behavior.title}</h4>
                      <p className="text-sm text-foreground">{segment.behavior.description}</p>
                    </div>

                    {/* Triggers */}
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{segment.triggers.title}</h4>
                      <p className="text-sm text-foreground">{segment.triggers.description}</p>
                    </div>

                    {/* Interests */}
                    <div>
                      <h4 className="font-bold text-foreground mb-3">Интересы</h4>
                      <div className="flex flex-wrap gap-2">
                        {segment.interests.map((interest, idx) => (
                          <span key={idx} className="bg-slate-100 text-foreground text-xs px-3 py-1 rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Section */}
      <section className="border-b-2 border-border py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Таргетинги</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border-2 border-border">
              <thead>
                <tr className="bg-[#0029FF] text-white">
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">Аудитория</th>
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">Поведенческие таргетинги</th>
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">Интересы</th>
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">SuperGeo</th>
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">OFD-сегменты</th>
                  <th className="border-2 border-border px-4 py-3 text-left font-bold">White Lists</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-100">
                  <td className="border-2 border-border px-4 py-3 font-bold text-[#0029FF]">Мамы</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Покупатели детских товаров<br/>• Посетители детских магазинов<br/>• Активные покупатели маркетплейсов</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Материнство<br/>• Детское здоровье<br/>• Развитие ребенка</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Детские поликлиники<br/>• Аптеки<br/>• Детские магазины</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Покупатели детского питания<br/>• Покупатели витаминов</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Родительские сообщества<br/>• Медицинские ресурсы</td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td className="border-2 border-border px-4 py-3 font-bold text-[#0029FF]">Активные взрослые</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Покупатели OTC-препаратов<br/>• Активные онлайн-покупатели</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Здоровье<br/>• Спорт<br/>• Карьера</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Аптеки<br/>• Фитнес-клубы<br/>• Вокзалы/аэропорты</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Препараты от простуды<br/>• Витамины</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Новостные ресурсы<br/>• Контент о здоровье</td>
                </tr>
                <tr className="hover:bg-slate-100">
                  <td className="border-2 border-border px-4 py-3 font-bold text-[#0029FF]">Менеджер аптечки</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Покупатели лекарств для семьи<br/>• Регулярные посетители аптек</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Семья<br/>• Дом и быт<br/>• Здоровье</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Аптеки<br/>• ТЦ<br/>• Поликлиники</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Препараты от простуды<br/>• Витамины</td>
                  <td className="border-2 border-border px-4 py-3 text-sm">• Lifestyle-ресурсы<br/>• E-commerce</td>
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
                  <p className="text-sm text-foreground/60 mt-2">{format.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Video */}
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

                    {/* Advantages */}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Section */}
      <section className="border-b-2 border-border py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Отчетность</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Image */}
            <div className="bg-white rounded-lg overflow-hidden h-96 shadow-lg">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-13%20%D0%B2%2017.07.59.png-ScawCzjT83rcnmhC4gdLcRa2nBrFyB.jpeg"
                alt="Dashboard"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right - Two text blocks */}
            <div className="space-y-6">
              <Card className="border-2 border-border bg-white">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground font-semibold">Готовим отчеты любой сложности по метрикам, интересующим бизнес</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-white">
                <CardContent className="pt-6">
                  <p className="text-lg text-foreground font-semibold">№1 в категории «Высокая скорость подготовки отчетов» Технологического индекса AdIndex</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Channels Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Рекламные каналы</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* CTV */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">CTV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center min-h-80">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2026%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2014_04_24-iydlTnjPaDtQTUGHmbH9uNkZcxfsyr.png"
                    alt="CTV Example"
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>

                {/* CTV Inventory */}
                <div>
                  <h4 className="font-bold text-foreground mb-6">Инвентарь</h4>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201000006326-9y1BWXoCA7jHuYMucBYzX5ZUtMNNfa.png"
                        alt="ЗОНА ФИЛЬМОВ"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lordfilm.ru-rKgEf5m5NwFLr4UerZwkiuvIMFMGJS.png"
                        alt="LORDFILM"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New%20HDrezka-uSHAaOOyhuT4In0WzijVOIdtZeGgzj.png"
                        alt="New HDrezka"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB_%C2%AB%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B8%CC%86%C2%BB-h4rCBSSwrtAD3InK2AfkNrOcC8S0gX.png"
                        alt="ДОМАШНИЙ"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg flex items-center justify-center h-24">
                      <img 
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vokrug.tv%201-xbswxoc4eynjFgq5SHz8uLxqskFvyH.png"
                        alt="ВОКРУГ ТВ"
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* DOOH */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">DOOH</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Форматы</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Indoor</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Outdoor</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Транзитная</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4">Таргетинги</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Время</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Погода</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Температура</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#0029FF] font-bold flex-shrink-0">•</span>
                      <span className="text-foreground">Локация</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-foreground/70">Подберем поверхности рядом с офлайн-точками продаж препаратов и покажем на карте, где будет размещаться ваша реклама</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="border-b-2 border-border py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Технические возможности</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Safety */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">Brand Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">Исключает показ рекламы рядом с нежелательным контентом (насилие, политика, трагедии, контент 18+).</p>
                <p className="text-foreground">Обеспечивает размещение в безопасном окружении, соответствующем бренду.</p>
                <p className="text-foreground">Снижает репутационные риски и повышает доверие к бренду.</p>
              </CardContent>
            </Card>

            {/* AntiFraud */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">AntiFraud</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">Блокирует недействительный трафик (ботов, фейковые показы и клики).</p>
                <p className="text-foreground">Исключает сайты и приложения с подозрительной активностью.</p>
                <p className="text-foreground">Повышает качество охвата и гарантирует, что рекламный бюджет расходуется на реальных пользователей.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Кейсы</h2>

          <Carousel className="w-full">
            <CarouselContent>
              {caseStudies.map((caseStudy) => (
                <CarouselItem key={caseStudy.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-2 border-border overflow-hidden">
                      <div className="bg-slate-100 h-64 overflow-hidden">
                        <img 
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="pt-6">
                        <p className="text-sm font-semibold text-foreground">{caseStudy.title}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section>
    </main>
  )
}
