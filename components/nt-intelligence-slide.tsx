'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, TrendingUp } from "lucide-react"
import { useState } from "react"

export function NTIntelligenceSlide() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'creative' | 'optimization' | 'measurement'>('traditional')

  const comparisonData = [
    {
      approach: "Привычные креативы",
      problem: "Баннерная слепота",
      solution: "Уникальные форматы креативов"
    },
    {
      approach: "Оптимизация только по CTR",
      problem: "Много случайных кликов",
      solution: "In-banner и Post-view оптимизация"
    },
    {
      approach: "Last-click атрибуция",
      problem: "Недооценка влияния медийной рекламы",
      solution: "Аналитика на уровне инкрементального вклада"
    },
    {
      approach: "Верификация ПОСЛЕ кампании",
      problem: "Brand-safety- и fraud-риски",
      solution: "Pre-bid защита рекламного бюджета"
    },
  ]

  const intelligenceItems = [
    {
      id: 'creative',
      title: "Creative Intelligence",
      description: "привлекаем внимание через уникальный креатив",
      details: "проводим creative research"
    },
    {
      id: 'optimization',
      title: "Optimization Intelligence",
      description: "находим аудиторию по качественным сигналам внутри баннера",
      details: "проводим post-view оптимизацию, чтобы учесть вклад рекламы на всех этапах"
    },
    {
      id: 'measurement',
      title: "Measurement Intelligence",
      description: "Sales Lift доказываем влияние медийной рекламы на продажи",
      details: "Частота покупок и пенетрация бренда показывают как узнаваемость бренда перерастает в продажи"
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">

        {/* Block 1: Hero Section */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0029FF]">
              Programmatic, который влияет на бизнес-результат, а не только на медийные метрики.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              Партнеры выбирают NT Technology за влияние на продажи и эффективность рекламных инвестиций
            </p>
          </div>
        </section>

        {/* Block 2: Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Почему традиционного programmatic не всегда достаточно</h2>
          
          <div className="text-sm text-muted-foreground mb-4">
            Инсайт: стандартный подход подразумевает закупку показов, но не всегда учитывает управление вниманием и вклад в продажи.
          </div>

          <div className="space-y-3">
            {comparisonData.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-border bg-white">
                <div className="flex items-center">
                  <span className="font-medium text-foreground">{item.approach}</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-3 py-1 rounded-full bg-red-100 border border-red-300">
                    <span className="text-sm text-red-700 font-medium">{item.problem}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-sm font-medium text-[#0029FF]">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'creative' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border border-border text-foreground hover:bg-gray-50'
              }`}
            >
              Creative Intelligence
            </button>
            <button
              onClick={() => setActiveTab('optimization')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'optimization' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border border-border text-foreground hover:bg-gray-50'
              }`}
            >
              Optimization Intelligence
            </button>
            <button
              onClick={() => setActiveTab('measurement')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === 'measurement' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border border-border text-foreground hover:bg-gray-50'
              }`}
            >
              Measurement Intelligence
            </button>
          </div>
        </section>

        {/* Block 3: Creative Intelligence */}
        {activeTab === 'creative' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">Creative Intelligence как источник роста эффективности</h2>
            
            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF]">Уникальные форматы и Creative Research</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Собственные форматы креативов для Open RTB</p>
                    <p className="text-sm text-muted-foreground">Уникальные интерактивные креативы преодолевают баннерную слепоту и увеличивают вовлеченность</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Creative Research перед запуском</p>
                    <p className="text-sm text-muted-foreground">Позволяет не просто "сделать красивую картинку", а разработать полноценный инструмент для роста эффективности</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Подбор формата под задачу и аудиторию</p>
                    <p className="text-sm text-muted-foreground">Креативная команда подбирает формат исходя из опыта работы с разными категориями бизнеса и бизнес-целям</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-lg border border-border bg-white">
              <p className="font-semibold text-foreground mb-2">Мы не просто закупаем инвентарь — мы создаем дополнительные точки контакта с пользователем</p>
              <p className="text-sm text-muted-foreground">Media Buying + Creative Intelligence = Performance Growth</p>
            </div>
          </section>
        )}

        {/* Block 4: Optimization Intelligence */}
        {activeTab === 'optimization' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">Optimization Intelligence</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border bg-white">
                <p className="font-semibold text-foreground mb-2">Почему CTR больше не главный KPI</p>
                <p className="text-sm text-muted-foreground">CTR важен, но нельзя оценивать эффективность ТОЛЬКО по CTR. Случайные клики не всегда отражают реальное вовлечение.</p>
              </div>

              <Card className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF]">In-Banner Events Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Пользователь совершает микроконверсию внутри баннера (наводит курсор, проходит мини-опрос или прокручивает каталог)</li>
                    <li>Действие регистрируется как успешный ивент</li>
                    <li>Алгоритм DSP анализирует профиль этого пользователя и контекст показа</li>
                    <li>Ставки на аукционе повышаются для тех сегментов, которые с наибольшей вероятностью совершат целевое действие</li>
                  </ol>
                  <p className="text-sm font-medium text-[#0029FF] mt-4">Преимущество подхода: дает возможность отслеживать точные микроконверсии и оптимизировать РК по ним, а не только по кликам</p>
                </CardContent>
              </Card>

              <Card className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF]">Post-View Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Когда пользователь просматривает рекламу его cookie-файл или ID устройства запоминается</li>
                    <li>Система активирует окно атрибуции (от 1 до 30 дней)</li>
                    <li>Если в течение этого времени пользователь самостоятельно заходит на сайт и совершает покупку, алгоритм связывает этот визит с недавним показом рекламы</li>
                  </ol>
                  <p className="text-sm font-medium text-[#0029FF] mt-4">Преимущество подхода: позволяет учитывать влияние рекламы на пользователей, которые долго принимают решение</p>
                </CardContent>
              </Card>

              <Card className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF]">Pre-bid Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>DSP анализирует входящий запрос (размещение, устройство, географию, геолокацию пользователя) за миллисекунды до того, как ставка будет отправлена на аукцион</li>
                    <li>Алгоритмы оценивают вероятность конверсии для конкретного пользователя</li>
                    <li>Вместо того чтобы сразу платить максимальную цену, система прогнозирует минимальную ставку, которая позволит выиграть аукцион, или отказывается от участия, если вероятность целевого действия слишком мала</li>
                    <li>Автоматически выставляются ограничения для медийных кампаний, чтобы не переплачивать за показы с низкой Viewability</li>
                  </ol>
                  <p className="text-sm font-medium text-[#0029FF] mt-4">Преимущество подхода: снижение fraud- и brand safety-рисков, отборные White lists, выше прозрачность закупки</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Block 5: Measurement Intelligence */}
        {activeTab === 'measurement' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground">Measurement Intelligence</h2>
            
            <p className="text-lg text-muted-foreground">
              Мы меняем подход "нет клика = нет ценности" на оценку вклада медийной рекламы в бизнес-результат
            </p>

            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF]">Sales Lift</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm font-medium text-foreground">Как работает:</p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>После запуска рекламной кампании аудитория делится на две равные группы: тестовая группа (пользователи, которые видели рекламное объявление) и контрольная группа (пользователи с точно такими же характеристиками, которым рекламу не показывали)</li>
                  <li>Система отслеживает покупки или другие целевые действия в обеих группах</li>
                  <li>Из конверсии тестовой группы вычитается конверсия контрольной</li>
                </ol>
                <p className="text-sm font-medium text-foreground mt-4">Sales Lift = CRтест/CRконтроль - 100%, где CR - коэффициент конверсии</p>
                <p className="text-sm font-medium text-[#0029FF] mt-4">Преимущество подхода: позволяет оценить инкрементальный вклад медийной рекламы в продажи</p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF]">Частота покупок и пенетрация бренда</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Пенетрация бренда</p>
                    <p className="text-sm text-muted-foreground">Доля покупателей, которые хотя бы один раз за период купили что-то от этого бренда</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Частота покупок</p>
                    <p className="text-sm text-muted-foreground">Среднее количество покупок бренда за период теми, кто его покупал</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-4 border-t border-border">Источник данных: обезличенные электронные чеки ФНС России</p>
                <p className="text-sm font-medium text-[#0029FF]">Преимущества подхода: показывает, насколько хорошо работает реклама и узнаваемость (осведомленность переходит в покупку)</p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Final Block */}
        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-3xl font-bold text-foreground">NT Technology — это</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intelligenceItems.map((item) => (
              <Card key={item.id} className="border border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">→ {item.description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">→ {item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
