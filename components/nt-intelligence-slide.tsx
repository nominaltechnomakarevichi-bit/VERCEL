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
            <img src="/logos/nt-logo.png" alt="NT" className="h-12 w-12 object-contain" />
            <BarChart3 className="w-8 h-8 text-[#0029FF]" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Programmatic, который влияет на бизнес-результат</h1>
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
                  <span className="text-[#0029FF] text-right">{item.solution}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Insight Badge */}
          <div className="p-6 rounded-lg bg-white border-2 border-[#0029FF]">
            <p className="text-foreground text-lg">
              💡 <span className="font-bold">Инсайт:</span> стандартный подход подразумевает закупку показов, но не всегда учитывает управление вниманием и вклад в продажи
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

            {/* Creative Examples */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Примеры креативов</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Banner Spinner */}
                <div className="space-y-3">
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                    <video 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Spinner-PlChE8Qnm6vEAIcAKJ3nKle2Tkyu0g.mov"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Banner Spinner</p>
                    <p className="text-sm text-muted-foreground">Вращающийся баннер с динамичной анимацией</p>
                  </div>
                </div>

                {/* Pull Coupon Banner */}
                <div className="space-y-3">
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                    <video 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pull%20Coupon%20Banner-dlhcrsNcKqfmY86TBaQ7J64KdTNdv2.mov"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Pull Coupon Banner</p>
                    <p className="text-sm text-muted-foreground">Интерактивный баннер с вытягиванием купона</p>
                  </div>
                </div>

                {/* Tap&Melt Banner */}
                <div className="space-y-3">
                  <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                    <video 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tap%26Melt-%D0%B1%D0%B0%D0%BD%D0%BD%D0%B5%D1%80-HDWAGlXuqIOwWMqGvgYlPXXxJl199t.mov"
                      className="w-full h-full object-contain"
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Tap&Melt-баннер</p>
                    <p className="text-sm text-muted-foreground">Баннер с эффектом таяния/разрушения</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border-2 border-[#0029FF] bg-white">
              <p className="text-foreground text-lg">Мы не просто закупаем инвентарь — мы создаем дополнительные точки контакта с пользователем</p>
            </div>

            {/* How Creative Impacts Results */}
            <div className="space-y-6 border-t-2 border-border pt-8">
              <h3 className="text-3xl font-bold text-foreground">Как креатив влияет на результат</h3>
              
              {/* Case 1: Dapalen */}
              <Card className="border-2 border-border bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-[#0029FF] font-bold mb-2">КЕЙС</p>
                      <CardTitle className="text-[#0029FF] text-3xl">NT Technology × Дапален гель</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground mt-3">Как с помощью Rich Media увеличить CTR в 1,5 раза?</p>
                    </div>
                    <img src="/logos/lamyra-logo.png" alt="Lamyra Pharmacare" className="w-16 h-16 rounded-full flex-shrink-0 object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">цель:</span> рост эффективности текущей кампании</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">каналы:</span> Display</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">формат:</span> banner slider, scratch-баннер</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">процесс:</span> анимировали первоначальный баннер и получили рост CTR на 43%, а затем ещё на 5%. При этом визуал остался без изменений и не требовал дополнительных согласований</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-3 flex flex-col items-center">
                        <div className="w-full bg-slate-100 rounded-xl p-4 flex items-center justify-center h-56">
                          <video 
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-17%20%D0%B2%2017.58.03-dELEOGj6boHwWJMer4qibftAwrYHIQ.mov"
                            className="max-h-full object-contain"
                            autoPlay
                            loop
                            muted
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#0029FF]">0.28%</p>
                          <p className="text-sm text-muted-foreground">статичный баннер</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 flex flex-col items-center">
                        <div className="w-full bg-slate-100 rounded-xl p-4 flex items-center justify-center h-56">
                          <video 
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-17%20%D0%B2%2017.58.24-KphEe1CAEqzbKkghMFHK7ZbECEYDk9.mov"
                            className="max-h-full object-contain"
                            autoPlay
                            loop
                            muted
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#0029FF]">0.4%</p>
                          <p className="text-sm text-muted-foreground">banner slider</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 flex flex-col items-center border-2 border-[#0029FF] rounded-xl p-2">
                        <div className="w-full bg-slate-100 rounded-xl p-4 flex items-center justify-center h-56">
                          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0YF9UdGIbKad9sl2J6LA9uIW5rGani.png" alt="Scratch-баннер" className="max-h-full object-contain" />
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-[#0029FF]">0.42%</p>
                          <p className="text-sm text-muted-foreground">scratch-баннер</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Case 2: MTBank */}
              <Card className="border-2 border-border bg-white">
                <CardHeader>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-[#0029FF] font-bold mb-2">КЕЙС</p>
                      <CardTitle className="text-[#0029FF] text-3xl">NT Technology × МТБанк</CardTitle>
                      <p className="text-lg font-medium text-muted-foreground mt-3">Rich Media vs Статика: чей CTR выше и причём тут кошка?</p>
                    </div>
                    <img src="/logos/mtbank-logo.png" alt="МТБанк" className="w-16 h-16 rounded-full flex-shrink-0 object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">цель:</span> продвижение новой МТКарты</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">каналы:</span> Display</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">гео:</span> Республика Беларусь</p>
                    <p className="text-muted-foreground"><span className="font-semibold text-foreground">формат:</span> статичные баннеры, banner spinner</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4 p-6 bg-slate-50 rounded-xl border border-border">
                        <p className="font-bold text-foreground text-center">Статичный баннер</p>
                        <div className="flex flex-col items-center gap-6">
                          <div className="w-40 h-64 bg-white rounded-lg flex items-center justify-center shadow-md">
                            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/240x400-qI4qJgSwXJCqjbBshdZJ48ZIJKX5Ou.jpg" alt="Статичный баннер" className="max-h-full object-contain p-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-12 text-center w-full">
                            <div>
                              <p className="text-2xl font-bold text-[#0029FF]">30%</p>
                              <p className="text-sm text-muted-foreground">viewability</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-[#0029FF]">0.05%</p>
                              <p className="text-sm text-muted-foreground">ctr</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 p-6 bg-[#0029FF] rounded-xl border-2 border-[#0029FF]">
                        <p className="font-bold text-white text-center">Banner Spinner</p>
                        <div className="flex flex-col items-center gap-6">
                          <div className="w-40 h-64 bg-white rounded-lg flex items-center justify-center shadow-md">
                            <video 
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-17%20%D0%B2%2018.03.59-zmQi8E6yW2kYyIv34O1cO58fnLlLH1.mov"
                              className="max-h-full object-contain p-2"
                              autoPlay
                              loop
                              muted
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-12 text-center w-full">
                            <div>
                              <p className="text-2xl font-bold text-white">75%</p>
                              <p className="text-sm text-white/70">viewability</p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-white">0.2%</p>
                              <p className="text-sm text-white/70">ctr</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <li>Алгоритм DSP анализирует профиль этого ��ользователя и контекст показа</li>
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
                <p className="font-medium text-foreground">Как работа��т:</p>
                <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                  <li>После запуска рекламной кампании аудитория делится на две равные группы: тестовая группа (пользователи, которые видели рекламное объявление) и контрольная группа (пользователи с точно такими же характеристиками, которым рекламу не показывали)</li>
                  <li>Система отслеживает покупки ��ли другие целевые действия в обеих г��уппах</li>
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
