import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Sparkles, Check, Monitor, Play, Tv, Shield, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Programmatic-кампания для бренда «Нордар»',
  description: 'Programmatic-кампания для бренда «Нордар».',
}

export default function NordarPage() {
  const audiences = [
    {
      id: 1,
      name: 'Мороженое Feelin со вкусом пива',
      title: 'Любитель экспериментов',
      description: 'Любит необычные продукты и готов покупать их ради нового опыта, эмоций и контента',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-removebg-preview-h3mUmh1hTUAMt9GtclxeJQ9203GqmI.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 45%',
          'Мужчины 55%'
        ]
      },
      age: {
        label: 'Возраст',
        data: '18-34 года'
      },
      income: {
        label: 'Доход',
        data: 'Средний'
      },
      interests: [
        'Новинки FMCG',
        'необычная еда и напитки',
        'пиво и безалкогольное пиво',
        'гастрономия'
      ],
      triggers: [
        'Необычный вкус',
        '«Хочу попробовать»',
        'вирусность в соцсетях',
        'рекомендации друзей/блогеров'
      ]
    },
    {
      id: 2,
      name: 'Мороженое Feelin с ароматом соленого огурца',
      title: 'Любитель необычных вкусов',
      description: 'Молодая аудитория, которая активно пробует необычные и вирусные продукты и воспринимает покупку как развлечение',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ctjzwit949aPCmD0EqSEpoHPwmc2jt.png',
      gender: {
        label: 'Пол',
        data: [
          'Женщины 55%',
          'Мужчины 45%'
        ]
      },
      age: {
        label: 'Возраст',
        data: '16-30 лет'
      },
      income: {
        label: 'Доход',
        data: 'средний, средний-'
      },
      interests: [
        'TikTok, Reels и короткие видео',
        'мемы и интернет-культура',
        'гастрономические тренды',
        'необычная еда'
      ],
      triggers: [
        '«Надо попробовать!»',
        'необычный вкус',
        'вирусность продукта',
        'рекомендации блогеров'
      ]
    },
  ]

  const richMediaFormats = [
    { id: 1, name: 'Мороженое Feelin со вкусом пива — Tap&Melt-баннер', description: 'Интерактивный сценарий для продукта со вкусом пива', videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-08-24%20%D0%B2%2016.12.39-af7x5CWcMJZpK3unQhehEoznsjfXwx.mov', advantages: ['Раскрывает продукт по сценарию', 'Увеличивает время контакта'] },
    { id: 2, name: 'Мороженое Feelin со вкусом пива — Cube-баннер', description: '3D-формат для демонстрации продукта', videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-07-09%20%D0%B2%2017.50.32-umawnjaouxlqMrGSJclAiV5KbwzssP.mov', advantages: ['Привлекает внимание', 'Показывает продукт с разных сторон'] },
    { id: 3, name: 'Мороженое Feelin со вкусом пива — Multi-Layer Banner', description: 'Баннер с эффектом подвижных шторок', videoUrl: 'https://presentation-nt-technology.vercel.app/videos/multi-layer-banner.mov', advantages: ['Позволяет исследовать ассортимент', 'Увеличивает время контакта'] },
    { id: 4, name: 'Video', description: 'Видеоформат для яркой подачи продукта', videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-08-24%20%D0%B2%2016.13.16-VsBDyxkKxPZfhfLWaAShH9jfmaBuRM.mov', advantages: ['Динамично показывает продукт', 'Работает на узнаваемость'] },
    { id: 5, name: 'Scratch-баннер', description: 'Механика с эффектом проявления', videoUrl: 'https://presentation-nt-technology.vercel.app/videos/scratch-banner.mov', advantages: ['Создает интригу', 'Подходит для акций и промокодов'] },
    { id: 6, name: 'Banner Spinner', description: 'Вращающийся баннер с динамичной анимацией', videoUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banner%20Spinner-PlChE8Qnm6vEAIcAKJ3nKle2Tkyu0g.mov', advantages: ['Показывает несколько вариантов продукта', 'Усиливает восприятие ассортимента'] }
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
    { title: 'AntiFraud', description: 'Блокирует недействительный трафик и исключает площадки с подозрительной активностью' },
    { title: 'Brand Safety', description: 'Обеспечивает размещение в безопасном окружении и снижает репутационные риски' },
    { title: 'Post-view аналитика', description: 'Показывает действия пользователей после контакта с рекламой' },
    { title: 'Контроль Viewability', description: 'Контролирует видимость рекламных размещений' }
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
              <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-white">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-obV3ycqp7kWbYY9xgJpcdrQvb62Qb0.png" 
                  alt="Нордар" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-foreground mb-3">
                Programmatic-кампания для бренда «Нордар»
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

          {/* Two Audience Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {audiences.map((audience) => (
              <Card key={audience.id} className="border-2 border-border bg-white overflow-hidden">
                {/* Header */}
                <div className="bg-blue-50 px-6 py-4 border-b border-border">
                  <h3 className="text-lg font-bold text-[#0029FF] whitespace-nowrap">{audience.name}</h3>
                </div>
                <div className="space-y-6 p-6">
                  {/* Image */}
                  <div className="bg-white rounded-lg h-48 flex items-center justify-center overflow-hidden">
                    <img 
                      src={audience.image}
                      alt={audience.name}
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>

                  {/* Name and Title */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0029FF] mb-2">{audience.title}</h3>
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
                <span className="font-bold">Предложение NT:</span> для отбора необходимых сегментов аудитории можем использовать как ст��ндартные таргетинги (интересы, поведенческие сегменты, тематические сайты), supergeo (торговые точки, продающие бренд Feelin), так и нестандартные подходы (White lists)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rich Media Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Форматы креативов</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {richMediaFormats.map((format) => (
              <div key={format.id} className="space-y-3">
                {format.id === 1 && <h3 className="text-lg font-bold text-foreground whitespace-nowrap">Мороженое Feelin со вкусом пива</h3>}
                {format.id === 2 && <h3 className="text-lg font-bold text-foreground whitespace-nowrap">Мороженое Feelin с ароматом соленого огурца</h3>}
              <Card className="border-2 border-border bg-white overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{format.name.replace('Мороженое Feelin со вкусом пива — ', '')}</CardTitle>
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
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a href="https://nt.technology/creative" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-[#0029FF] px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity">
              Больше форматов
            </a>
          </div>

          {/* NT Proposal for Rich Media */}
          <Card className="border-2 border-border bg-blue-50 mt-12">
            <CardContent className="p-8">
              <p className="text-lg text-foreground">
                <span className="font-bold">Предложение NT:</span> по запросу можем разработать эксклюзивную механику под ваш продукт
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Channels Section */}
      <section className="border-b-2 border-border py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-foreground mb-12">Рекламные каналы</h2>

          <div className="grid grid-cols-1 gap-8">
            {/* Display and Video row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

            {/* CTV row - full width */}
            {channels.filter(c => c.id === 'ctv').map((channel) => (
              <Card key={channel.id} className="border-2 border-border bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0029FF]">{channel.name}</CardTitle>
                </CardHeader>
              <CardContent className="flex gap-8 h-80">
                {/* Left side - Image */}
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-lg h-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vmMm8XNmGzKWP4mdH6Z5LkSpE9jfO8.png"
                      alt="CTV Advertisement"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right side - Text and Inventory */}
                <div className="flex-1 space-y-4">
                  {/* Inventory */}
                  <div>
                    <p className="font-bold text-foreground mb-3">Инвентарь</p>
                    <div className="grid grid-cols-5 gap-1">
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FQJ1w3AmyaXSI7bXjZ4FeBymzDaFhv.png" alt="ЗОНА ФИЛЬМОВ" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gPzrEh9HHN8AMMojYSPfDWHpL9QIHs.png" alt="LORDFILM" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-db0XS1o4y8l3qOPmuvb06eSgmFzprq.png" alt="New HDrezka" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GjMaxsz1xOXveutufJejJd8yZCB0jK.png" alt="ДОМАШНИЙ" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H6UOcDlFHHOXinoGSAWjNbiJhy8Yhp.png" alt="ВОКРУГ ТВ" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FvCJRSyaQv1TMCmxiIuazpQnOKo4N5.png" alt="FILM.RU" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mv849mgrQTSsqvs5R1ntEYyIFMRHL1.png" alt="LOSTFILM.TV" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nzdjAwJuEEFyleQ0WEAhtjPsmMfl3c.png" alt="LORDSERIALS" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xRMLGOJgiTaRFRSEvLtioPK0k4mKzz.png" alt="CTC" className="h-8 object-contain" />
                      </div>
                      <div className="flex items-center justify-center bg-slate-50 rounded-lg p-1 h-14">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RsXbib4tHve2stMNxrkSWKLuINgqS2.png" alt="WINK" className="h-8 object-contain" />
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
              <Card key={idx} className={`border-2 border-border bg-white ${idx === 3 ? 'md:col-span-2 lg:col-span-3' : ''}`}>
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
                    <p className="text-sm text-foreground">период ведения</p>
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
