import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Динамика | NT DSP",
  description: "B2B-аудитория и рекламные возможности NT DSP в России",
}

const targeting = [
  "Пол: мужчины и женщины",
  "Возраст: 25+ лет",
  "Доход: выше среднего и высокий",
  "Профессиональные интересы: бизнес, предпринимательство, открытие бизнеса, малый и средний бизнес, бухгалтерские услуги, финансы, маркетинг, реклама, PR, digital-маркетинг, курсы, тренинги, мастер-классы, конференции, образование, путешествия, активный образ жизни, коммерческая деятельность, B2B-услуги, оборудование, логистика",
  "Поведенческий таргетинг: 01 просматривают контент, связанный с мероприятиями для бухгалтеров и владельцев бизнеса, продвижением бренда, контент-маркетингом, системами автоматизации и управлением бизнесом; 02 посещают сайты афиш и интересуются тематическими мероприятиями и конференциями",
]

const formats = [
  { name: "Rich", description: "Интерактивные форматы с расширенной механикой и несколькими зонами взаимодействия", tone: "from-[#dbe7ff] to-[#f0e7ff]", preview: "RICH MEDIA", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-10-30%20%D0%B2%2018.55.28-Dvem17qwZrSxpsDBKJHlQ72uXyeNyD.mov", detail: "" },
  { name: "Banner", description: "Классические баннеры для заметного охвата и запоминаемости", tone: "from-[#e8efff] to-[#e3f8f4]", preview: "BANNER", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-10-30%20%D0%B2%2018.56.27-y8NmiySAkK7dqcOaPalG7aLK8v5P7O.png", detail: "" },
  { name: "In-Stream + Out-Stream", description: "Видео до, во время или после просмотра контента, а также в нативных редакционных окружениях", tone: "from-[#101548] to-[#43258d]", preview: "IN + OUT-STREAM", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-10-30%20%D0%B2%2018.57.14-d4l9Rm2LAWGzTbZiAeTPYjd2eQmpNm.png", detail: "" },
  { name: "CTV", description: "Охват аудитории Smart TV, OTT и стриминговых платформ", tone: "from-[#151a35] to-[#004a70]", preview: "CTV", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-10-30%20%D0%B2%2018.58.14-FyA8BC6o1y3IpmvZoJsSVfFAyyalSY.png", detail: "" },
]

const externalSteps = [
  "Партнёр формирует сегмент пользователей по ряду критериев",
  "Сегмент передаётся в рекламную систему и становится доступен в кабинете",
  "Кампания запускается с выбранным внешним сегментом как целевой аудиторией",
  "Параметры кампании корректируются на основании фактических показателей",
]

const technologies = ["Cross-device & Cross-platform показ объявлений", "Brand Safety", "Brand Lift", "Bot free", "Отслеживание post-view конверсий"]

const cases = [
  { title: "Кейс 01", text: "Запуск B2B-кампании с точным профессиональным таргетингом и расширением охвата через внешние сегменты", link: "https://disk.yandex.ru/i/l2XsWlyRF_k2kQ" },
  { title: "Кейс 02", text: "Комбинация rich media, видеорекламы и технологических возможностей NT DSP для работы на всех этапах воронки", link: "https://disk.yandex.ru/i/aBVPg8OJwgB4Ag" },
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#5c45d8]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[#071044] md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>}
    </div>
  )
}

export default function B2BDinamicaPage() {
  return (
    <main className="min-h-screen bg-[#f8faff] text-[#071044]">
      <section className="overflow-hidden bg-[#071044] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm font-bold tracking-[0.22em] text-[#bca8ff]">nt dsp x dinamica</p>
            <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.04em] md:text-8xl">B2B-аудитория<br />для роста бизнеса</h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#d4dcff]">Точная работа с профессиональными интересами, поведением и внешними сегментами — в единой среде закупки</p>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 md:col-span-2"><p className="text-sm text-[#bca8ff]">Ориентировочная емкость B2B ЦА в России</p><p className="mt-3 text-4xl font-bold md:text-6xl">≈ 7–9 млн</p><p className="mt-2 text-[#d4dcff]">человек</p></div>
            <div className="rounded-3xl bg-gradient-to-br from-[#6245e8] to-[#a352db] p-7"><p className="text-sm text-white/75">Подход</p><p className="mt-3 text-2xl font-bold">Данные + контекст + технологии</p></div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="01 · Аудитория" title="Таргетинги для B2B" description="Собираем аудиторию предпринимателей и специалистов по профессиональным интересам, доходу, поведению и контексту потребления контента" /><div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"><div className="rounded-3xl border border-[#d9e1f2] bg-white p-8 shadow-sm"><div className="space-y-5">{targeting.map((item, index) => { const [label, ...rest] = item.split(": "); const values = rest.join(": "); const isDetail = index === 3; const isBehavior = index === 4; return <div key={item} className="flex gap-4 border-b border-[#e7ebf4] pb-5 last:border-0 last:pb-0"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e8e5ff] text-sm font-bold text-[#5c45d8]">{index + 1}</span><div className="min-w-0"><span className="inline-flex rounded-full bg-[#071044] px-3 py-1 text-sm font-bold text-white">{label}</span>{isDetail ? <div className="mt-3 flex flex-wrap gap-2">{values.split(", ").map((value) => <span key={value} className="rounded-full border border-[#d9e1f2] bg-[#f8faff] px-3 py-2 text-sm leading-5 text-slate-700">{value}</span>)}</div> : isBehavior ? <div className="mt-2 space-y-2">{values.split("; ").map((value) => <p key={value} className="leading-7 text-slate-700">{value}</p>)}</div> : <p className="mt-2 leading-7 text-slate-700">{values}</p>}</div></div> })}</div></div><div className="relative flex min-h-[360px] items-end overflow-hidden rounded-3xl bg-gradient-to-br from-[#c9d5ff] via-[#e2ddff] to-[#f4edff] p-8"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RBLxsxKnedFPtXR3aigR9QK6KVDCzd.png" alt="Портрет B2B-аудитории" className="absolute inset-0 h-full w-full object-cover" /></div></div></div></section>

      <section className="bg-white px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="02 · Data partnerships" title="Внешние аудитории" description="Сегменты пользователей, сформированные на основе данных третьих сторон: демография, поведенческие сигналы, геолокация и другие признаки" /><div className="grid gap-4 md:grid-cols-4">{externalSteps.map((step, index) => <div key={step} className="rounded-2xl border border-[#d9e1f2] bg-[#f8faff] p-6"><span className="text-4xl font-bold text-[#5c45d8]">0{index + 1}</span><p className="mt-10 leading-7 text-slate-700">{step}</p></div>)}</div><p className="mt-6 text-sm text-slate-500">Дополнительно возможно применение look-alike аудитории на основе выбранного сегмента</p><div className="mt-10 rounded-3xl bg-[#071044] p-8 text-white md:p-10"><h3 className="text-2xl font-bold">Когда подходит</h3><div className="mt-6 grid gap-4 md:grid-cols-4">{["Новый или узкоспециализированный продукт", "Формирование спроса и узнаваемости", "Поиск и тестирование новых сегментов", "Таргетинг по интересам и демографии"].map((item) => <p key={item} className="border-l-2 border-[#a352db] pl-4 leading-6 text-[#d4dcff]">{item}</p>)}</div><div className="mt-10 border-t border-white/15 pt-8"><h3 className="text-2xl font-bold">Партнеры</h3><div className="mt-5 flex flex-wrap gap-3">{["AiData", "CleverData", "Platform", "Weborama"].map((partner) => <span key={partner} className="rounded-full border border-[#a352db]/60 bg-white/10 px-4 py-2 text-sm font-semibold text-white">{partner}</span>)}</div></div></div></div></section>

      <section className="px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="03 · Ad formats" title="Форматы" description="Подбираем формат под задачу: от заметного rich media до охватного видео и CTV" /><div className="grid gap-6 md:grid-cols-2">{formats.map((format) => <article key={format.name} className="overflow-hidden rounded-3xl border border-[#d9e1f2] bg-white shadow-sm"><div className={`relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br ${format.tone}`}>{format.video ? <video src={format.video} controls muted playsInline className="h-full w-full object-contain" aria-label="Превью Rich Media" /> : format.image ? <img src={format.image} alt={`Превью формата ${format.name}`} className="h-full w-full object-contain" /> : <div className="rounded-2xl border border-white/40 bg-white/20 px-8 py-5 text-center backdrop-blur"><p className="text-3xl font-black tracking-tight text-white drop-shadow">{format.preview}</p><p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/80">preview</p></div>}</div><div className="p-7"><h3 className="text-2xl font-bold">{format.name}</h3><p className="mt-3 leading-7 text-slate-600">{format.description}</p>{format.detail && <p className="mt-5 border-t border-[#e7ebf4] pt-4 text-sm font-semibold text-[#5c45d8]">{format.detail}</p>}</div></article>)}</div><div className="mt-10 flex justify-center"><a href="https://nt.technology/creative" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#5c45d8] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#4932c4]">Больше примеров форматов</a></div></div></section>

      <section className="bg-[#eef2ff] px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="04 · NT DSP" title="Дополнительные технологические возможности" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">{technologies.map((item, index) => <div key={item} className="rounded-2xl bg-white p-6 shadow-sm"><span className="text-3xl font-bold text-[#5c45d8]">{String(index + 1).padStart(2, "0")}</span><p className="mt-8 leading-6 text-slate-700">{item}</p></div>)}</div></div></section>

      <section className="px-6 py-20 md:px-12 md:py-28"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="05 · Proof" title="Кейсы" description="Примеры B2B-размещений и комплексного использования инструментов NT DSP" /><div className="grid gap-6 md:grid-cols-2">{cases.map((item) => <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-[#d9e1f2] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between"><span className="text-sm font-bold uppercase tracking-[0.18em] text-[#5c45d8]">{item.title}</span><span className="text-2xl transition group-hover:translate-x-1">→</span></div><p className="mt-14 max-w-lg text-2xl font-bold leading-9">{item.text}</p><p className="mt-8 text-sm font-semibold text-[#5c45d8]">Открыть кейс на Яндекс Диске</p></a>)}</div></div></section>

      <footer className="bg-[#071044] px-6 py-12 text-white md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center"><p className="text-xl font-bold">NT DSP</p><p className="text-sm text-[#b9c5ef]">B2B-аудитория в цифрах и форматах</p></div></footer>
    </main>
  )
}
