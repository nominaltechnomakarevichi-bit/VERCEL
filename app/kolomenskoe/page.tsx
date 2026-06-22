'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Flame, Sparkles, Tv } from 'lucide-react'

const ntLogo = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSI4IiBmaWxsPSIjMDAyOUZGIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIj5OVDwvdGV4dD48L3N2Zz4='

export default function KolomenskePage() {
  const richMediaFormats = [
    {
      id: 1,
      name: 'Banner Spinner',
      description: 'Интерактивный баннер с вращающимися слоями, привлекающий внимание пользователя динамическими переходами.',
      advantages: [
        'Высокая CTR за счет интерактивности',
        'Увеличенное время взаимодействия',
        'Легко адаптируется к любому формату'
      ],
      color: 'from-blue-50'
    },
    {
      id: 2,
      name: 'Cube-баннер',
      description: 'Трехмерный баннер в формате куба с возможностью вращения и демонстрации разных сторон товара.',
      advantages: [
        'Визуально привлекательный эффект',
        'Показывает товар со всех сторон',
        'Высокая запоминаемость'
      ],
      color: 'from-purple-50'
    },
    {
      id: 3,
      name: 'Multi-Layer Banner',
      description: 'Многоуровневый баннер с видео по центру и статичными блоками товаров по сторонам для комплексной демонстрации.',
      advantages: [
        'Сочетание статики и видео',
        'Показывает применение товара в реальной ситуации',
        'Максимальный инкрементальный вклад в метрики'
      ],
      strategy: [
        'В статичных блоках демонстрируем товар/линейку товаров бренда',
        'В видео-блоке (по центру) демонстрируем легкий рецепт',
        'Преимущество: сразу показать пользователю на реальном примере, как можно использовать продукцию и замотивировать к покупке'
      ]
    }
  ]

  const ctvInventory = {
    web: ['FILM.TU', 'WINK', 'MATCH', 'СМОТРЕТЬ TV', 'ВОКРУГ ТВ'],
    app: ['PEERS TV', 'TV+', 'ЦТВ', 'Jiggle', 'Лайт HD TV', 'ЛАЙМ'],
    digital: ['ДОМАШНИЙ', 'СТС', 'ЧЕ!', '5 КАНАЛ', 'ПЛЕЙ']
  }

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-start gap-8">
            {/* Logos */}
            <div className="flex gap-6 items-center flex-shrink-0">
              <img src={ntLogo} alt="NT Technology" className="w-16 h-16" />
              <img 
                src="https://kolomenskoe.com/static/images/logo-simple-large.svg" 
                alt="Kolomenskoe" 
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда Коломенское
              </h1>
              <p className="text-xl text-foreground font-semibold">
                ТОП-3 инструмента для роста брендовых метрик
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Media Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-3">
            1. Rich Media. Инструмент удержания внимания в эпоху баннерной слепоты
          </h2>
          <p className="text-lg text-foreground mb-12">
            Уникальные интерактивные креативы, которые преодолевают баннерную слепоту и удерживают внимание пользователя
          </p>

          {/* Rich Media Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {richMediaFormats.map((format) => (
              <Card key={format.id} className="border-2 border-border bg-white overflow-hidden">
                <CardHeader className={`bg-gradient-to-br ${format.color} to-white p-8`}>
                  <CardTitle className="text-[#0029FF] text-2xl">{format.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <p className="text-foreground text-lg leading-relaxed">
                    {format.description}
                  </p>

                  <div className="space-y-3">
                    <p className="font-bold text-foreground">Преимущества:</p>
                    <ul className="space-y-2">
                      {format.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground">
                          <span className="text-[#0029FF] font-bold flex-shrink-0">✓</span>
                          <span>{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {format.strategy && (
                    <div className="pt-6 border-t-2 border-border space-y-3">
                      <p className="font-bold text-foreground">Стратегия для Коломенское:</p>
                      <ul className="space-y-2">
                        {format.strategy.map((point, idx) => (
                          <li key={idx} className="text-foreground text-sm">
                            <span className="text-[#0029FF] font-bold">→</span> {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Rich Media Insight */}
          <div className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-white border-2 border-[#0029FF]">
            <p className="text-lg text-foreground font-bold">
              💡 <span className="text-[#0029FF]">Инсайт:</span> Rich Media креативы обеспечивают рост внимания пользователя, увеличивают время взаимодействия с креативом и обеспечивают высокую запоминаемость бренда
            </p>
          </div>
        </div>
      </section>

      {/* DOOH Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            2. DOOH. Рекламный канал для О2О (online-to-offline) взаимодействия
          </h2>

          {/* DOOH Formats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Outdoor */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Outdoor</CardTitle>
                <p className="text-foreground mt-2">Ситиборды, билборды</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                  [Место для изображения билборда]
                </div>
                <div>
                  <p className="font-bold text-foreground mb-3">Возможности расположения:</p>
                  <ul className="space-y-2 text-foreground">
                    <li>• Рядом с ЖК</li>
                    <li>• Рядом с дорогами с высоким трафиком</li>
                    <li>• Рядом с МКАД</li>
                    <li>• Рядом с физическими точками продаж (магазины)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Indoor */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Indoor</CardTitle>
                <p className="text-foreground mt-2">В магазинах Лента, Пятерочка, Перекресток, Дикси, Магнит</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-100 rounded-lg h-64 flex items-center justify-center text-muted-foreground">
                  [Место для изображений экранов в магазинах]
                </div>
                <p className="text-foreground text-sm">
                  Цифровые экраны в точках продажи для прямой коммуникации с покупателями в момент принятия решения о покупке
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Store Map */}
          <Card className="border-2 border-border bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-[#0029FF] text-2xl">Физические точки продажи</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://kolomenskoe.com/where-to-buy/"
                className="w-full h-96 rounded-lg border border-border"
                title="Kolomenskoe Store Locator"
              />
            </CardContent>
          </Card>

          {/* DOOH Insights */}
          <div className="space-y-4">
            <div className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-white border-2 border-[#0029FF]">
              <p className="text-lg text-foreground font-bold">
                💡 <span className="text-[#0029FF]">Инсайт 1:</span> С помощью DOOH-рекламы есть возможность выстроить взаимосвязь между Digital и физическими точками продаж, тем самым пройдя вместе с пользователем весь путь к покупке
              </p>
            </div>
            <div className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-white border-2 border-[#0029FF]">
              <p className="text-lg text-foreground font-bold">
                💡 <span className="text-[#0029FF]">Инсайт 2:</span> С помощью DOOH мы можем охватить физические точки контакта с аудиторией и создать полноценное О2О взаимодействие
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTV Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            3. CTV. Реклама бренда дома у потенциального покупателя
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* CTV Description */}
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Programmatic CTV</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-foreground mb-4">
                    Реклама на TV-устройствах, подключенных к интернету: Smart TV, OTT-приставки (Apple TV, Android TV Box, Chromecast) и игровые консоли.
                  </p>
                  <p className="text-foreground font-bold text-[#0029FF]">
                    Это значит, что аудитория активно растет — с 18 млн в 2022 году до 30 млн в 2024 году*
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="font-bold text-foreground">Типы устройств:</p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <Tv className="w-8 h-8 text-[#0029FF] mx-auto mb-2" />
                      <p className="text-sm text-foreground">Smart TVs</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <Sparkles className="w-8 h-8 text-[#0029FF] mx-auto mb-2" />
                      <p className="text-sm text-foreground">Game consoles</p>
                    </div>
                    <div className="text-center p-3 bg-slate-50 rounded-lg">
                      <Flame className="w-8 h-8 text-[#0029FF] mx-auto mb-2" />
                      <p className="text-sm text-foreground">Streaming devices</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  *Источник: Digital Alliance
                </p>
              </CardContent>
            </Card>

            {/* CTV Example */}
            <div className="flex flex-col gap-6">
              <div className="bg-slate-100 rounded-lg h-80 flex items-center justify-center text-muted-foreground border-2 border-border">
                [Место для примера CTV рекламы на телевизоре]
              </div>
            </div>
          </div>

          {/* CTV Inventory */}
          <Card className="border-2 border-border bg-white mb-12">
            <CardHeader>
              <CardTitle className="text-[#0029FF] text-2xl">Инвентарь CTV</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* CTV WEB */}
              <div className="p-6 bg-slate-50 rounded-lg border border-border">
                <h4 className="font-bold text-[#0029FF] mb-4">CTV WEB</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {ctvInventory.web.map((platform, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-border text-center text-foreground font-semibold">
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTV APP */}
              <div className="p-6 bg-slate-50 rounded-lg border border-border">
                <h4 className="font-bold text-[#0029FF] mb-4">CTV APP</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {ctvInventory.app.map((platform, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-border text-center text-foreground font-semibold">
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              {/* Digital TV */}
              <div className="p-6 bg-slate-50 rounded-lg border border-border">
                <h4 className="font-bold text-[#0029FF] mb-4">Цифровое ТВ-вещание</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {ctvInventory.digital.map((platform, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-border text-center text-foreground font-semibold">
                      {platform}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTV Insight */}
          <div className="p-8 rounded-lg bg-gradient-to-r from-blue-50 to-white border-2 border-[#0029FF]">
            <p className="text-lg text-foreground font-bold">
              💡 <span className="text-[#0029FF]">Инсайт:</span> CTV реклама — значимый крючок для привлечения внимания аудитории, т.к. ее практически невозможно пропустить
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">
            4. Rich Media + DOOH + CTV = рост брендовых метрик
          </h2>

          <Card className="border-2 border-[#0029FF] bg-white">
            <CardHeader>
              <CardTitle className="text-[#0029FF] text-2xl">Комплексная стратегия для FMCG бренда Коломенское</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Этап 1: Digital Awareness (Rich Media)</h3>
                <p className="text-foreground ml-6">
                  Запускаем Rich Media кампанию в programmatic каналах с высокой интерактивностью. Multi-Layer баннеры демонстрируют товары Коломенского и рецепты их использования, создавая первичный интерес и запоминаемость бренда.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Этап 2: Расширенное охватение (CTV)</h3>
                <p className="text-foreground ml-6">
                  Параллельно запускаем CTV рекламу, которая охватывает аудиторию во время домашнего просмотра. Видео-контент о брендовых продуктах и рецептах органично интегрируется в видео-сервисы, усиливая осведомленность и формируя желание покупки.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Этап 3: Конверсия в точке продажи (DOOH)</h3>
                <p className="text-foreground ml-6">
                  DOOH рекламу размещаем в магазинах Лента, Пятерочка и других торговых сетях, где пользователь принимает финальное решение о покупке. Outdoor реклама рядом с торговыми точками и на высокотрафичных дорогах напоминает о бренде перед посещением магазина.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground text-lg">Результат: Кросс-канальное взаимодействие</h3>
                <ul className="space-y-2 text-foreground ml-6">
                  <li>✓ <span className="font-semibold">Awareness</span> — пользователь видит Rich Media и CTV контент</li>
                  <li>✓ <span className="font-semibold">Consideration</span> — DOOH усиливает информацию перед покупкой</li>
                  <li>✓ <span className="font-semibold">Conversion</span> — пользователь конвертируется в точке продажи</li>
                  <li>✓ <span className="font-semibold">Максимальный охват</span> — комбинация digital, video и out-of-home обеспечивает 360° взаимодействие</li>
                </ul>
              </div>

              <div className="pt-6 border-t-2 border-border mt-6">
                <p className="text-lg font-bold text-foreground">
                  Данная стратегия позволяет выстроить полный customer journey от первого контакта до покупки, максимизируя качественный охват целевой аудитории FMCG товаров.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
