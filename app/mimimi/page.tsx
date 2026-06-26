'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles, Check } from 'lucide-react'

export default function MimimiPage() {
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

  const interests = [
    'беременность и материнство',
    'развитие детей',
    'покупки на маркетплейсах',
    'советы педиатров',
    'детские товары',
    'путешествия с детьми'
  ]

  const purchaseTriggers = [
    'натуральность',
    'безопасность',
    'польза',
    'удобство',
    'вкус',
    'яркий дизайн',
    'эмоциональная составляющая'
  ]

  const youtubeChannels = [
    'Малышарики',
    'Фиксики',
    'Синий трактор',
    'Три кота',
    'Маша и медведь'
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-HBx5dYzOTSoDHTWnFJd2Ori4TEuEz9.svg" 
                  alt="Mimimi" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда «Mimimi»
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Аудитория бренда</h2>
            <p className="text-lg text-foreground">Портрет целевой аудитории</p>
          </div>

          {/* Audience Portrait Card */}
          <Card className="border-2 border-border bg-white overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Image Section */}
              <div className="min-h-96 bg-slate-100 flex items-center justify-center rounded-lg p-4">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2025%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2016_22_16-llFMP5cdZOr2KT7e2BV7p2e1bDwgiY.png"
                  alt="Целевая аудитория"
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0029FF] mb-4">Молодая активная мама</h3>
                  <p className="text-foreground mb-6">Современная женщина, которая ценит качество, безопасность и удобство в товарах для своей семьи. Активна в соцсетях, доверяет отзывам и советам педиатров.</p>
                </div>

                {/* Gender */}
                <div>
                  <p className="font-bold text-foreground mb-3">Пол</p>
                  <div className="space-y-2">
                    <p className="text-foreground text-sm">Женщины 75–85%</p>
                    <p className="text-foreground text-sm">Мужчины 15–25%</p>
                  </div>
                </div>

                {/* Age */}
                <div>
                  <p className="font-bold text-foreground mb-2">Возраст</p>
                  <p className="text-foreground text-sm">Основная группа 25–35 лет</p>
                </div>

                {/* Income */}
                <div>
                  <p className="font-bold text-foreground mb-2">Доход</p>
                  <p className="text-foreground text-sm">Средний и выше среднего</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Interests Badges */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4">Интересы</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-blue-100 text-[#0029FF] font-semibold rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Purchase Triggers */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Основные триггеры покупки</h3>
            <div className="flex flex-wrap gap-3">
              {purchaseTriggers.map((trigger, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-purple-100 text-purple-700 font-semibold rounded-full text-sm"
                >
                  {trigger}
                </span>
              ))}
            </div>
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
                      <li>• Материнство</li>
                      <li>• Детские товары</li>
                      <li>• ЗОЖ</li>
                      <li>• Онлайн-покупки</li>
                    </ul>
                  </td>
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Покупают товары для детей</li>
                      <li>• Часто посещают детские магазины</li>
                      <li>• Интересуются детским питанием</li>
                      <li>• Регулярно совершают покупки в супермаркетах</li>
                      <li>• Активные онлайн-покупатели</li>
                    </ul>
                  </td>
                  <td className="p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Статьи о прикорме</li>
                      <li>• Развитие ребенка</li>
                      <li>• Рецепты для малышей</li>
                      <li>• Аллергии</li>
                      <li>• Детские болезни</li>
                      <li>• Советы педиатров</li>
                      <li>• Форумы молодых мам</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SuperGeo Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">SuperGeo</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-border">
                  <th className="border-r-2 border-border p-4 text-left font-bold text-foreground">Торговые точки</th>
                  <th className="border-r-2 border-border p-4 text-left font-bold text-foreground">Медицинские учреждения</th>
                  <th className="border-r-2 border-border p-4 text-left font-bold text-foreground">Детская инфраструктура</th>
                  <th className="p-4 text-left font-bold text-foreground">ЖК для молодых семей</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-border hover:bg-slate-50">
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Детские магазины</li>
                      <li>• Сети, где продается бренд Mimimi</li>
                      <li>• Аптеки</li>
                      <li>• Торговые центры</li>
                    </ul>
                  </td>
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Детские поликлиники</li>
                      <li>• Родильные дома</li>
                      <li>• Женские консультации</li>
                    </ul>
                  </td>
                  <td className="border-r-2 border-border p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Развивающие центры</li>
                      <li>• Детские сады</li>
                      <li>• Парки</li>
                    </ul>
                  </td>
                  <td className="p-4 text-foreground align-top">
                    <ul className="space-y-2">
                      <li>• Новая Боровая</li>
                      <li>• Минск-мир</li>
                      <li>• Лебяжий</li>
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
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Rich Media форматы</h2>
            <p className="text-lg text-foreground">Интерактивные решения для максимального привлечения внимания</p>
          </div>

          <div className="space-y-12">
            {richMediaFormats.map((format) => (
              <Card key={format.id} className="border-2 border-border bg-white overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{format.name}</CardTitle>
                  <p className="text-foreground mt-2">{format.description}</p>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Video Preview */}
                  <div className="bg-slate-100 rounded-lg overflow-hidden h-96">
                    <video 
                      className="w-full h-full object-cover"
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
                    <ul className="space-y-2">
                      {format.advantages.map((adv, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategy */}
                  {format.strategy && (
                    <div>
                      <h4 className="font-bold text-foreground mb-4">Рекомендуемая стратегия:</h4>
                      <ul className="space-y-2">
                        {format.strategy.map((str, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground">
                            <span className="text-[#0029FF] font-bold flex-shrink-0">→</span>
                            <span>{str}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Channels Section */}
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2025%20%D0%B8%D1%8E%D0%BD.%202026%20%D0%B3.%2C%2018_40_51-SryPujynM0IZ6Rd9W6X1J1tln3jDwa.png"
                    alt="CTV Example"
                    className="w-full h-auto max-h-96 object-contain"
                  />
                </div>
                <p className="text-foreground">
                  Параллельно запускаем CTV рекламу, которая охватывает аудиторию во время домашнего просмотра. Видео-контент с продуктовой линейкой и рецептами органично интегрируется в видео-сервисы, усиливая осведомленность и формируя кросс-канальное воздействие на пользователя.
                </p>

                {/* CTV Inventory */}
                <div>
                  <h4 className="font-bold text-foreground mb-4">Инвентарь:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border border-border p-4 bg-slate-50">
                      <p className="font-semibold text-foreground mb-2">Видео 15 сек</p>
                      <p className="text-foreground text-sm">1920x1080 px, MP4</p>
                    </Card>
                    <Card className="border border-border p-4 bg-slate-50">
                      <p className="font-semibold text-foreground mb-2">Видео 30 сек</p>
                      <p className="text-foreground text-sm">1920x1080 px, MP4</p>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* YouTube */}
            <Card className="border-2 border-border bg-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0029FF]">Youtube</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-bold text-foreground mb-4">Реклама по White list</h4>
                  <p className="text-foreground mb-4">Размещение рекламы на каналах, ориентированных на семейный контент и развитие детей</p>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4">Избранные каналы:</h4>
                  <div className="flex flex-wrap gap-3">
                    {youtubeChannels.map((channel, idx) => (
                      <span 
                        key={idx}
                        className="px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-full text-sm"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground mb-4">Форматы:</h4>
                  <ul className="space-y-2 text-foreground">
                    <li>• In-stream видео рекламы (до 30 сек)</li>
                    <li>• Bumper ads (6 сек)</li>
                    <li>• Masthead (баннер на главной странице YouTube)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Технические возможности</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Brand Safety */}
            <Card className="border-2 border-border bg-white p-8">
              <h3 className="text-2xl font-bold text-[#0029FF] mb-6">Brand Safety</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Исключает показ рекламы рядом с нежелательным контентом (насилие, политика, трагедии, контент 18+).</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Обеспечивает размещение в безопасном семейном окружении, соответствующем бренду детского питания.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Снижает репутационные риски и повышает доверие родителей к бренду.</span>
                </li>
              </ul>
            </Card>

            {/* AntiFraud */}
            <Card className="border-2 border-border bg-white p-8">
              <h3 className="text-2xl font-bold text-[#0029FF] mb-6">AntiFraud</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Блокирует недействительный трафик (ботов, фейковые показы и клики).</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Исключает сайты и приложения с подозрительной активностью.</span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground">Повышает качество охвата и гарантирует, что рекламный бюджет расходуется на реальных пользователей — родителей и семьи с детьми.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
