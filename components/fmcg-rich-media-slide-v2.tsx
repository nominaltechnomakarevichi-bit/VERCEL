"use client"

import { useState } from "react"
import { CheckCircle2, Users, FileText, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Video Preview Component
function RichMediaVideoPreview({ src }: { src: string }) {
  return (
    <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#f5f5f5]">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-auto object-contain"
      />
    </div>
  )
}

export function FmcgRichMediaSlideV2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="bg-background p-6 lg:p-10">
        {/* Header with Logo and Title */}
        <div className="mb-8 flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nt_logo_%D0%B1%D0%BB%D1%83-hfiUbu7oWbMdfn72ughuOlde6MhNBS.png"
            alt="NT Technology"
            className="h-12 w-auto"
          />
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
              Специальное предложение для FMCG-брендов
            </h1>
          </div>
        </div>
        <p className="text-lg text-foreground mb-8">
          Охватная рекламная кампания под ключ с Rich Media креативами и аналитикой на основе чеков покупателей
        </p>

        <div className="space-y-8">
          {/* Section 1: Rich Media для FMCG */}
          <Card className="border border-border">
            <CardHeader className="border-b border-border bg-white">
              <div className="flex items-baseline gap-3">
                <CardTitle className="text-3xl text-primary">
                  Multi-Layer Banner
                </CardTitle>
                <Badge className="bg-primary text-white hover:bg-primary">NEW</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Two Videos */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-3">
                  <RichMediaVideoPreview src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-04%20%D0%B2%2017.53.39-BWSkpirWHMbclxPfASoGnkASglb7Hk.mov" />
                  <p className="text-base font-semibold text-foreground text-center">STATIC</p>
                </div>
                <div className="space-y-3">
                  <RichMediaVideoPreview src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-04%20%D0%B2%2017.58.19-K6udALyAj3bn5rzJsOIINOspajzlAl.mov" />
                  <p className="text-base font-semibold text-foreground text-center">VIDEO</p>
                </div>
              </div>

              {/* Description Text Below Videos */}
              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <h3 className="mb-2 text-base font-bold text-primary">
                    ОПИСАНИЕ МЕХАНИКИ
                  </h3>
                  <p className="text-base text-foreground">
                    Пользователь взаимодействует с подвижными вертикальными шторками, открывая различные варианты продукта.
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-bold text-primary">
                    КОМУ ПОДХОДИТ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-base px-4 py-2 bg-primary text-white hover:bg-primary">Напитки</Badge>
                    <Badge className="text-base px-4 py-2 bg-primary text-white hover:bg-primary">Снеки</Badge>
                    <Badge className="text-base px-4 py-2 bg-primary text-white hover:bg-primary">Косметика</Badge>
                    <Badge className="text-base px-4 py-2 bg-primary text-white hover:bg-primary">Продукты питания</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-base font-bold text-primary">
                    ПРЕИМУЩЕСТВА
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-base text-foreground">✅ Возможность показать сразу несколько продуктов в одном баннере.</li>
                    <li className="text-base text-foreground">✅ Пользователь самостоятельно исследует ассортимент, что увеличивает время контакта с брендом.</li>
                    <li className="text-base text-foreground">✅ Эффект «открытия» повышает запоминаемость рекламного сообщения.</li>
                    <li className="text-base text-foreground">✅ Подходит для новых линеек и продуктовых коллекций.</li>
                    <li className="text-base text-foreground">✅ Не требует перехода на сайт для первичного знакомства с ассортиментом.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2: Пенетрация бренда и частота покупок */}
          <Card className="border border-border">
            <CardHeader className="border-b border-border bg-white">
              <CardTitle className="text-3xl text-primary">Оценка результатов рекламной кампании</CardTitle>
              <p className="text-base text-foreground mt-2">Исследование пенетрации бренда и частоты покупок</p>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {/* Definitions */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-primary/10 border border-primary p-4">
                  <h3 className="mb-2 font-semibold text-primary">ПЕНЕТРАЦИЯ БРЕНДА</h3>
                  <p className="text-base text-foreground">
                    Доля покупателей, которые хотя бы один раз за период купили хоть что-то из этого бренда
                  </p>
                </div>
                <div className="rounded-lg bg-primary/10 border border-primary p-4">
                  <h3 className="mb-2 font-semibold text-primary">ЧАСТОТА ПОКУПОК</h3>
                  <p className="text-base text-foreground">
                    Среднее количество покупок бренда за период теми, кто его покупал
                  </p>
                </div>
              </div>

              {/* Data Source Badges - One Row */}
              <div className="flex flex-col gap-3 md:flex-row">
                <Badge className="flex-1 justify-start gap-2 px-4 py-3 text-base bg-white text-foreground border border-border hover:bg-white">
                  <Users className="h-4 w-4" />
                  Исследования: Потребительская панель NTech
                </Badge>
                <Badge className="flex-1 justify-start gap-2 px-4 py-3 text-base bg-white text-foreground border border-border hover:bg-white">
                  <FileText className="h-4 w-4" />
                  Источник: обезличенные электронные чеки ФНС России
                </Badge>
              </div>

              {/* Screenshots/Reports Grid - Same Height */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">ПРИМЕРЫ ОТЧЕТОВ</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Report 1 */}
                  <div 
                    onClick={() => setSelectedImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-02%20%D0%B2%2017.42.20-SNNb1xM1AfrIAfb29GazpQSJEHGsWq.png")}
                    className="cursor-pointer overflow-hidden rounded-lg border border-border flex items-center justify-center bg-gray-50 p-4 transition-transform hover:scale-105"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-02%20%D0%B2%2017.42.20-SNNb1xM1AfrIAfb29GazpQSJEHGsWq.png"
                      alt="Data Report 1"
                      className="max-w-full max-h-96 object-contain"
                    />
                  </div>

                  {/* Report 2 */}
                  <div 
                    onClick={() => setSelectedImage("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-02%20%D0%B2%2017.42.52-zad6agTsvRrs38dhoDN06daqncz71q.png")}
                    className="cursor-pointer overflow-hidden rounded-lg border border-border flex items-center justify-center bg-gray-50 p-4 transition-transform hover:scale-105"
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-06-02%20%D0%B2%2017.42.52-zad6agTsvRrs38dhoDN06daqncz71q.png"
                      alt="Data Report 2"
                      className="max-w-full max-h-96 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Report Features Section - Moved to bottom */}
              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <h4 className="mb-3 font-semibold text-foreground">ОСОБЕННОСТИ ОТЧЕТА</h4>
                  <ul className="space-y-2">
                    <li className="text-base text-foreground">✅ Разбивка периода отчета (по неделям/месяцам)</li>
                    <li className="text-base text-foreground">✅ Любой период исследования (от длительности зависит стоимость)</li>
                    <li className="text-base text-foreground">✅ Разбивка по гео (вся Россия/МСК и область/СПб и область/области и края и тд)</li>
                    <li className="text-base text-foreground">✅ Стоимость рассчитывается под конкретный отчет (зависит от уровня разбивки по гео и периода исследования)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                  <h4 className="mb-3 font-semibold text-foreground">СТОИМОСТЬ</h4>
                  <p className="mb-4 text-base font-semibold text-primary">от 70 тыс. рублей.</p>
                  
                  <p className="mb-2 text-base font-semibold text-foreground">Примеры расчета:</p>
                  <ul className="space-y-1 mb-4">
                    <li className="text-base text-foreground">• Сравнить 2 месяца на уровне МСК + СПб ≈ 80 тыс. рублей</li>
                    <li className="text-base text-foreground">• Сравнить 2 месяца на уровне всей РФ ≈ 160 тыс. рублей</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promotional Banner */}
          <div className="bg-primary text-white py-6 px-6 rounded-lg text-center">
            <p className="text-lg font-semibold">🎁 При рекламном бюджете от 1.5 млн рублей (до НДС) исследование бесплатно</p>
          </div>

          {/* Section 3: Процесс работы */}
          <Card className="border border-border">
            <CardHeader className="border-b border-border bg-white">
              <CardTitle className="text-3xl text-primary">Процесс работы</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-8">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Разрабатываем креатив</p>
                      <p className="text-base text-foreground">Создаем Multi-Layer Banner и подбираем оптимальные визуалы и текст для вашего продукта. По запросу разрабатываем несколько вариантов дизайна для A/B тестирования.</p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Запускаем медийную рекламную кампанию</p>
                      <p className="text-base text-foreground">Размещаем баннер в медийных сетях и на подходящих площадках. Настраиваем таргетинги по целевой аудитории, географии и интересам. Ежедневно мониторим показатели и оптимизируем кампанию.</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 flex-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Оцениваем пенетрацию бренда и частоту покупок</p>
                      <p className="text-base text-foreground">Анализируем данные чеков и поведения покупателей. Предоставляем детальный отчет с разбивкой по географии, времени и демографии целевой аудитории.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged report"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
