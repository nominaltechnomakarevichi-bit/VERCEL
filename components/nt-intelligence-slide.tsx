'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, TrendingUp, Menu, BarChart3 } from "lucide-react"
import { useState } from "react"

export function NTIntelligenceSlide() {
  const [activeTab, setActiveTab] = useState<'creative' | 'optimization' | 'measurement'>('creative')

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

        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <img src="/logos/nt.png" alt="NT" className="h-10 w-10 object-contain" />
            <BarChart3 className="w-8 h-8 text-[#0029FF]" />
            <span className="text-2xl font-bold text-[#0029FF]">Programmatic, который влияет на бизнес-результат</span>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-foreground">Почему традиционного programmatic не всегда достаточно</h2>
          
          {/* Table */}
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 p-4 rounded-lg border-2 border-border bg-background font-bold text-foreground">
              <div>Стандартный подход</div>
              <div className="text-center">К чему приводит</div>
              <div className="text-right">Решение NT Technology</div>
            </div>
            
            {comparisonData.map((item, idx) => (
              <div key={idx} className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-border bg-white">
                <div className="flex items-center">
                  <span className="text-foreground">{item.approach}</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="px-3 py-1 rounded-full bg-red-100 border border-red-300">
                    <span className="text-foreground text-red-700">{item.problem}</span>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-[#0029FF]">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Insight Badge */}
          <div className="p-6 rounded-lg bg-[#0029FF] border-2 border-[#0029FF]">
            <p className="text-white text-lg">
              💡 <span className="font-bold">Инсайт:</span> стандартный подход подразумевает закупку показов, но не всегда учитывает управление вниманием и вклад в продажи.
            </p>
          </div>

          {/* Tab Navigation - Full Width */}
          <div className="flex gap-4 flex-col md:flex-row">
            <button
              onClick={() => setActiveTab('creative')}
              className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-colors ${
                activeTab === 'creative' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border-2 border-[#0029FF] text-[#0029FF] hover:bg-blue-50'
              }`}
            >
              Creative Intelligence
            </button>
            <button
              onClick={() => setActiveTab('optimization')}
              className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-colors ${
                activeTab === 'optimization' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border-2 border-[#0029FF] text-[#0029FF] hover:bg-blue-50'
              }`}
            >
              Optimization Intelligence
            </button>
            <button
              onClick={() => setActiveTab('measurement')}
              className={`flex-1 px-6 py-4 rounded-lg font-bold text-lg transition-colors ${
                activeTab === 'measurement' 
                  ? 'bg-[#0029FF] text-white' 
                  : 'bg-white border-2 border-[#0029FF] text-[#0029FF] hover:bg-blue-50'
              }`}
            >
              Measurement Intelligence
            </button>
          </div>
        </section>

        {/* Block 3: Creative Intelligence */}
        {activeTab === 'creative' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-4xl font-bold text-foreground">Creative Intelligence как источник роста эффективности</h2>
            
            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Уникальные форматы и Creative Research</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Собственные форматы креативов для Open RTB</p>
                    <p className="text-muted-foreground">Уникальные интерактивные креативы преодолевают баннерную слепоту и увеличивают вовлеченность</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Creative Research перед запуском</p>
                    <p className="text-muted-foreground">Позволяет не просто "сделать красивую картинку", а разработать полноценный инструмент для роста эффективности</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Подбор формата под задачу и аудиторию</p>
                    <p className="text-muted-foreground">Креативная команда подбирает формат исходя из опыта работы с разными категориями бизнеса и бизнес-целям</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 rounded-lg border-2 border-[#0029FF] bg-white">
              <p className="text-foreground text-lg">Мы не просто закупаем инвентарь — мы создаем дополнительные точки контакта с пользователем</p>
            </div>
          </section>
        )}

        {/* Block 4: Optimization Intelligence */}
        {activeTab === 'optimization' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-4xl font-bold text-foreground">Optimization Intelligence</h2>
            
            <div className="space-y-6">
              <Card className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF] text-2xl">In-Banner Events Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Пользователь совершает микроконверсию внутри баннера (наводит курсор, проходит мини-опрос или прокручивает каталог)</li>
                    <li>Действие регистрируется как успешный ивент</li>
                    <li>Алгоритм DSP анализирует профиль этого пользователя и контекст показа</li>
                    <li>Ставки на аукционе повышаются для тех сегментов, которые с наибольшей вероятностью совершат целевое действие</li>
                  </ol>
                  <p className="text-muted-foreground font-bold text-[#0029FF] mt-4">Преимущество подхода: дает возможность отслеживать точные микроконверсии и оптимизировать РК по ним, а не только по кликам</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF] text-2xl">Post-View Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>Когда пользователь просматривает рекламу его cookie-файл или ID устройства запоминается</li>
                    <li>Система активирует окно атрибуции (от 1 до 30 дней)</li>
                    <li>Если в течение этого времени пользователь самостоятельно заходит на сайт и совершает покупку, алгоритм связывает этот визит с недавним показом рекламы</li>
                  </ol>
                  <p className="text-muted-foreground font-bold text-[#0029FF] mt-4">Преимущество подхода: позволяет учитывать влияние рекламы на пользователей, которые долго принимают решение</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF] text-2xl">Pre-bid Optimization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-medium text-foreground">Как работает:</p>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>DSP анализирует входящий запрос (размещение, устройство, географию, геолокацию пользователя) за миллисекунды до того, как ставка будет отправлена на аукцион</li>
                    <li>Алгоритмы оценивают вероятность конверсии для конкретного пользователя</li>
                    <li>Вместо того чтобы сразу платить максимальную цену, система прогнозирует минимальную ставку, которая позволит выиграть аукцион, или отказывается от участия, если вероятность целевого действия слишком мала</li>
                    <li>Автоматически выставляются ограничения для медийных кампаний, чтобы не переплачивать за показы с низкой Viewability</li>
                  </ol>
                  <p className="text-muted-foreground font-bold text-[#0029FF] mt-4">Преимущество подхода: снижение fraud- и brand safety-рисков, отборные White lists, выше прозрачность закупки</p>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {/* Block 5: Measurement Intelligence */}
        {activeTab === 'measurement' && (
          <section className="space-y-6 animate-fadeIn">
            <h2 className="text-4xl font-bold text-foreground">Measurement Intelligence</h2>
            
            <p className="text-lg text-muted-foreground">
              Мы меняем подход "нет клика = нет ценности" на оценку вклада медийной рекламы в бизнес-результат
            </p>

            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Sales Lift</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-medium text-foreground">Как работает:</p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li>После запуска рекламной кампании аудитория делится на две равные группы: тестовая группа (пользователи, которые видели рекламное объявление) и контрольная группа (пользователи с точно такими же характеристиками, которым рекламу не показывали)</li>
                  <li>Система отслеживает покупки или другие целевые действия в обеих г��уппах</li>
                  <li>Из конверсии тестовой группы вычитается конверсия контрольной</li>
                </ol>
                <p className="font-medium text-foreground mt-4">Sales Lift = CRтест/CRконтроль - 100%, где CR - коэффициент конверсии</p>
                <p className="text-muted-foreground font-medium text-[#0029FF] mt-4">Преимущество подхода: позволяет оценить инкрементальный вклад медийной рекламы в продажи</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-border bg-white">
              <CardHeader>
                <CardTitle className="text-[#0029FF] text-2xl">Частота покупок и пенетрация бренда</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Пенетрация бренда</p>
                    <p className="text-muted-foreground">Доля покупателей, которые хотя бы один раз за период купили что-то от этого бренда</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-[#0029FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Частота покупок</p>
                    <p className="text-muted-foreground">Среднее количество покупок бренда за период теми, кто его покупал</p>
                  </div>
                </div>
                <p className="text-muted-foreground pt-4 border-t border-border">Источник данных: обезличенные электронные чеки ФНС России</p>
                <p className="text-muted-foreground font-medium text-[#0029FF]">Преимущества подхода: показывает, насколько хорошо работает реклама и узнаваемость (осведомленность переходит в покупку)</p>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Final Block */}
        <section className="space-y-8 border-t-2 border-border pt-12">
          <h2 className="text-4xl font-bold text-foreground">NT Technology — это</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {intelligenceItems.map((item) => (
              <Card key={item.id} className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-[#0029FF] text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-foreground">→ {item.description}</p>
                  </div>
                  <div>
                    <p className="text-foreground">→ {item.details}</p>
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
