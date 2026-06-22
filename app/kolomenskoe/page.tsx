'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

export default function KolomenskePage() {
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
      videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cube-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-47Zgxe0qHV8j084TvbHhQCt6eNbGFr.mov',
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

  const storeLogos = [
    { name: 'Perekrestok', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.01.26-zEAd4AEloXLkwoVkxbsL37JCYeJ1wd.png' },
  ]

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-start gap-8">
            {/* Logos */}
            <div className="flex gap-6 items-center flex-shrink-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ulbU9iEEau7dtNf8jpBqUpuSopx3mL.png" 
                alt="NT Technology" 
                className="w-20 h-20 object-contain"
              />
              <img 
                src="https://kolomenskoe.com/static/images/logo-simple-large.svg" 
                alt="Kolomenskoe" 
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда «Коломенское»
              </h1>
              <p className="text-xl text-foreground">
                ТОП-3 инструмента для роста брендовых метрик
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Media Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">Rich Media форматы</h2>
            <p className="text-xl text-foreground">Инструмент удержания внимания в эпоху баннерной слепоты</p>
          </div>

          {/* Rich Media Cards */}
          <div className="space-y-8">
            {richMediaFormats.map((format, idx) => (
              <div key={format.id} className="border-2 border-border rounded-xl p-4 bg-white">
                <div className={format.strategy ? "flex flex-col" : "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6"}>
                  <div className={format.strategy ? "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6" : ""}>
                    {/* Video Preview */}
                    <div className="flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden h-64">
                      <video 
                        src={format.videoUrl}
                        className="w-full h-full object-contain"
                        autoPlay
                        loop
                        muted
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{format.name}</h3>
                      <p className="text-base text-foreground mb-4">{format.description}</p>
                      
                      <div className="mb-6">
                        <p className="font-bold text-foreground mb-3">Преимущества:</p>
                        <ul className="space-y-2">
                          {format.advantages.map((adv, i) => (
                            <li key={i} className="text-foreground flex gap-3">
                              <span className="text-[#0029FF] flex-shrink-0">•</span>
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {format.strategy && (
                    <div className="bg-blue-50 border-l-4 border-[#0029FF] p-4 rounded">
                      <p className="font-bold text-foreground mb-3">Стратегия для «Коломенское»:</p>
                      <div className="space-y-2">
                        {format.strategy.map((item, i) => (
                          <p key={i} className="text-foreground">
                            → {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Rich Media Insight */}
          <div className="mt-12 p-6 rounded-lg bg-blue-50 border-l-4 border-[#0029FF]">
            <p className="text-lg">
              <span className="font-bold text-foreground">Инсайт:</span>{' '}
              <span className="text-foreground">Rich Media креативы обеспечивают рост внимания пользователя, увеличивают время взаимодействия с креативом и обеспечивают высокую запоминаемость бренда</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTV Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">CTV</h2>
            <p className="text-xl text-foreground">Реклама бренда дома у потенциального покупателя</p>
          </div>

          {/* CTV Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left - Description */}
            <Card className="border-2 border-border bg-white">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                <CardTitle className="text-[#0029FF] text-2xl">Programmatic CTV</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <p className="text-foreground mb-6">
                    Реклама на TV-устройствах, подключенных к интернету: Smart TV, OTT-приставки (Apple TV, Android TV Box, Chromecast) и игровые консоли.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#0029FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xl">📺</span>
                    </div>
                    <p className="text-sm text-foreground">Smart TVs</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#0029FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xl">🎮</span>
                    </div>
                    <p className="text-sm text-foreground">Game consoles</p>
                  </div>
                  <div className="text-center p-3 bg-slate-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#0029FF] rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <p className="text-sm text-foreground">Streaming devices</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right - Example */}
            <div className="bg-slate-900 rounded-lg overflow-hidden flex items-center justify-center min-h-96">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2013.41.06-kTR0bT0CwlACInMKzX65teeNxARff.png"
                alt="CTV Example"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTV Inventory */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Инвентарь</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CTV WEB */}
              <div className="p-3 border-2 border-border rounded-lg bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.17.53-a63Qj0hFVZ8yVgv9NVIOwXgSc4sIcj.png"
                  alt="CTV WEB Inventory"
                  className="w-full rounded"
                />
              </div>
              {/* CTV APP */}
              <div className="p-3 border-2 border-border rounded-lg bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.18.05-9m72whGEsQMSNrB7Kq7W9q0bBnQddY.png"
                  alt="CTV APP Inventory"
                  className="w-full rounded"
                />
              </div>
              {/* Цифровое ТВ-вещание */}
              <div className="p-3 border-2 border-border rounded-lg bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.18.20-bOg2nD4GKeqJjQbyE8PgfL7WigbRW6.png"
                  alt="Digital TV"
                  className="w-full rounded"
                />
              </div>
              {/* Нелицензионные онлайн-кинотеатры */}
              <div className="p-3 border-2 border-border rounded-lg bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.18.33-tGryTjqPK1MsyYs0SFuA7IibBpVeXY.png"
                  alt="Unlicensed Cinemas"
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>

          {/* CTV Insight */}
          <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-[#0029FF]">
            <p className="text-lg">
              <span className="font-bold text-foreground">Инсайт:</span>{' '}
              <span className="text-foreground">СTV реклама - значимый крючок для привлечения внимания аудитории, т.к. ее практически невозможно пропустить</span>
            </p>
          </div>
        </div>
      </section>

      {/* DOOH Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-2">DOOH</h2>
            <p className="text-xl text-foreground">Рекламный канал для О2О (online-to-offline) взаимодействия</p>
          </div>

          {/* DOOH Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Indoor Card */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Indoor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">LED-экраны в магазинах</p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="font-semibold text-foreground mb-3">Возможности расположения:</p>
                  <ul className="space-y-2">
                    {['Лента', 'Пятерочка', 'Перекресток', 'Дикси', 'Магнит'].map((store, i) => (
                      <li key={i} className="text-foreground flex gap-2">
                        <span className="text-[#0029FF]">−</span>
                        <span>{store}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Outdoor Card */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Outdoor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">Ситиборды, билборды</p>
                <div className="bg-blue-50 rounded p-4">
                  <p className="font-semibold text-foreground mb-3">Возможности расположения:</p>
                  <ul className="space-y-2">
                    {[
                      'рядом с ЖК',
                      'рядом с дорогами с высоким трафиком',
                      'рядом с МКАД',
                      'рядом с физическими точками продаж'
                    ].map((item, i) => (
                      <li key={i} className="text-foreground flex gap-2">
                        <span className="text-[#0029FF]">−</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Store Locator Map */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Физические точки продаж</h3>
            <div className="bg-slate-100 rounded-lg overflow-hidden max-w-md">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-22%20%D0%B2%2014.20.24-RCepqEtb45YBlWOtVmpieNWtGeNGr5.png"
                alt="Russia Coverage Map"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* DOOH Insights */}
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-[#0029FF]">
              <p className="text-lg">
                <span className="font-bold text-foreground">Инсайт 1:</span>{' '}
                <span className="text-foreground">с помощью DOOH-рекламы есть возможность выстроить взаимосвязь между Digital и физическими точками продаж, тем самым пройдя вместе с пользователем весь путь к покупке</span>
              </p>
            </div>
            <div className="p-6 rounded-lg bg-blue-50 border-l-4 border-[#0029FF]">
              <p className="text-lg">
                <span className="font-bold text-foreground">Инсайт 2:</span>{' '}
                <span className="text-foreground">с помощью DOOH мы можем охватить их физические точки контакта с аудиторией</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Комплексная стратегия для бренда «Коломенское»</h2>

          <div className="space-y-8">
            {/* Stage 1 */}
            <div className="border-l-4 border-[#0029FF] pl-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Этап 1: Digital Awareness (Rich Media)</h3>
              <p className="text-lg text-foreground mb-3">
                Запускаем медийную programmatic-кампанию. Rich Media креативы демонстрируют товары бренда и рецепты их использования, создавая первичный интерес и запоминаемость бренда.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="border-l-4 border-[#0029FF] pl-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Этап 2: Расширение охвата (CTV)</h3>
              <p className="text-lg text-foreground mb-3">
                Параллельно запускаем CTV рекламу, которая охватывает аудиторию во время домашнего просмотра. Видео-контент с продуктовой линейкой и рецептами органично интегрируется в видео-сервисы, усиливая осведомленность и формируя кросс-канальное воздействие на пользователя
              </p>
            </div>

            {/* Stage 3 */}
            <div className="border-l-4 border-[#0029FF] pl-6">
              <h3 className="text-2xl font-bold text-foreground mb-3">Этап 3: Конверсия в точке продажи (DOOH)</h3>
              <p className="text-lg text-foreground mb-3">
                DOOH рекламу размещаем в магазинах Лента, Пятерочка и других торговых сетях, где пользователь принимает финальное решение о покупке. Outdoor реклама рядом с торговыми точками и на высокотрафиковых дорогах напоминает о бренде перед посещением магазина.
              </p>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-[#0029FF] rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Результат: Кросс-канальное взаимодействие</h3>
              <div className="space-y-3">
                {[
                  { label: 'Awareness', desc: 'пользователь видит Rich Media и CTV контент' },
                  { label: 'Consideration', desc: 'DOOH усиливает информацию перед покупкой' },
                  { label: 'Conversion', desc: 'пользователь конвертируется в точке продажи' },
                  { label: 'Максимальный охват', desc: 'комбинация digital, video и out-of-home обеспечивает 360° взаимодействие' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                    <div>
                      <span className="font-semibold text-foreground">{item.label}</span>
                      <span className="text-foreground"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Note */}
            <div className="p-6 rounded-lg bg-slate-50 border border-border">
              <p className="text-lg text-foreground">
                Данная стратегия позволяет выстроить полный customer journey от первого контакта до покупки, максимизируя качественный охват целевой аудитории FMCG товаров.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
