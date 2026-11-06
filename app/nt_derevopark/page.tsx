import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NT Technology x Derevopark | Коммерческое предложение",
  description: "Коммерческое предложение NT Technology для Derevopark: каналы, форматы, креативные возможности и верификация трафика.",
}

const siteImages = {
  hero: "https://derevopark.kz/wp-content/uploads/2026/04/1_50_11zon-1-1536x763.webp",
  display: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.18.20-OorYdzVGbexgmuUZALAb4WjoGCFPA0.png",
  video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.20.50-w7XUmHfjUOlkmyc817NYIjVQBBEUly.png",
  garden: "https://derevopark.kz/wp-content/uploads/2025/01/Rekoveri-2-e1778075678474.jpg",
  architecture: "https://derevopark.kz/wp-content/uploads/2025/01/Vaskelovo-21.jpg.webp",
  details: "https://derevopark.kz/wp-content/uploads/2025/01/Rekoveri-17-e1778075657522.jpg",
  landscape: "https://derevopark.kz/wp-content/uploads/2025/01/Angl-usadba-20-e1778075670610.jpg",
}

const channels = [
  { name: "Display", description: "Охватная медийная реклама в окружении контента о доме, дизайне, загородной жизни и благоустройстве", image: siteImages.display, placements: ["Новостные сайты", "СМИ", "Интернет-магазины", "Приложения", "Видеосервисы", "Тематические площадки"] },
  { name: "Video", description: "Эмоциональная подача проектов через короткие ролики in-stream, out-stream, rewarded video", image: siteImages.video, placements: ["Онлайн-кинотеатры", "Видеосервисы", "Тематические площадки", "Новостные сайты", "Приложения"] },
]

const formats = [
  { name: "Rich Media", description: "Интерактивные форматы, которые позволяют показать проект, детали и атмосферу в одном контакте", image: "", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.30.08-hUzG7VFAgPxDdOVLcSb72uEmlrxZst.mov" },
  { name: "In-Stream видео", description: "Видеоразмещения до, во время или после просмотра контента с контролем качества контакта", image: "", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.33.33-tDCPpcYQmxTY2hmo8mGI1DOlmxSZlK.mov", horizontal: true },
  { name: "CTV", description: "Большой экран для построения знания и эмоциональной связи с брендом в премиальном окружении", image: "", video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.34.29-i3AodXNxaIWMEyzScFSeLezW6QrtfT.mov", horizontal: true },
  { name: "DOOH", description: "Цифровая наружная реклама в точках притяжения аудитории и по маршрутам к проектам", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-11-06%20%D0%B2%2016.35.13-Tq34lQHWFwwXfpFsJzBsmPpuyZld37.png", video: "" },
]

const creativeStages = [
  { number: "01", title: "Помощь в подборе форматов", text: "Сопоставляем задачу Derevopark, этап воронки и контекст контакта, чтобы выбрать формат с оптимальным балансом охвата, внимания и глубины взаимодействия", image: siteImages.architecture },
  { number: "02", title: "Разработка креативов любой сложности и ресайзов", text: "Берём на себя адаптацию идеи под разные экраны и поверхности: от статичных баннеров до rich media, видео и нестандартных digital-решений", image: siteImages.details },
  { number: "03", title: "In-banner аналитика", text: "Собираем поведенческие сигналы внутри баннера: взаимодействия с элементами, глубину просмотра, клики и конверсии. Это помогает понять, что именно привлекает внимание аудитории, и оптимизировать кампанию по фактическому интересу", image: siteImages.landscape, link: "https://www.figma.com/deck/bX8y9p0EJ1AiDtw1ihRzsy/%D0%9A%D0%B5%D0%B9%D1%81-%22In-banner-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%22--NT-Technology?node-id=14-271&viewport=-84%2C-80%2C0.48&t=1mxS0JNHUcgyGsaD-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1383422055070267176" },
]

const verification = [
  { title: "Пост-вью", text: "Учитываем действия пользователя после контакта с рекламой, чтобы оценить отложенный эффект кампании" },
  { title: "Вьюобилити", text: "Проверяем, была ли реклама реально видна пользователю и в течение какого времени находилась в зоне просмотра" },
  { title: "Фрод", text: "Отсекаем подозрительный и некачественный трафик, чтобы бюджет работал на живую аудиторию и реальные контакты" },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#a7c78c]">{children}</p>
}

function ImageCard({ image, alt, className = "" }: { image: string; alt: string; className?: string }) {
  return <div className={`relative min-h-64 overflow-hidden rounded-[2rem] bg-[#d8dfd0] ${className}`}><img src={image} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
}

export default function DerevoparkPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-[#17352d]">
      <section className="relative isolate overflow-hidden bg-[#17352d] text-[#f5f1e7]">
        <img src={siteImages.hero} alt="Ландшафтный проект Derevopark" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#102b25] via-[#17352d]/80 to-[#17352d]/30" />
        <div className="mx-auto flex min-h-[720px] max-w-7xl flex-col justify-between px-6 py-8 md:px-12 md:py-12">
          <div className="flex items-center justify-between text-sm"><img src="/nt-logo-black.svg" alt="NT Technology" className="h-10 w-auto brightness-0 invert" /></div>
          <div className="max-w-4xl pb-10"><SectionLabel>NT Technology × Derevopark</SectionLabel><h1 className="max-w-3xl text-5xl font-medium leading-[0.94] tracking-[-0.055em] md:text-8xl">Пространства, которые хочется запомнить</h1><p className="mt-8 max-w-xl text-lg leading-8 text-[#dbe4d5] md:text-xl">Медиа-решения для бренда, который превращает ландшафт в образ жизни</p></div>
          <div className="flex max-w-2xl flex-wrap gap-3 text-sm text-[#dbe4d5]"><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Охват</span><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Внимание</span><span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Измеримый результат</span></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"><SectionLabel>01 · Каналы</SectionLabel><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Показываем проект там, где его ищут</h2><p className="max-w-sm leading-7 text-[#5c6e65]">Соединяем визуальный язык Derevopark с каналами, которые помогают пройти путь от первого впечатления до интереса к проекту</p></div><div className="mt-14 grid gap-6 md:grid-cols-2">{channels.map((channel) => <article key={channel.name} className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-32px_rgba(23,53,45,0.35)]"><ImageCard image={channel.image} alt={`Визуальный пример канала ${channel.name}`} className="rounded-none" /><div className="p-8"><h3 className="text-3xl font-medium">{channel.name}</h3><p className="mt-4 max-w-lg leading-7 text-[#5c6e65]">{channel.description}</p><p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#708b63]">Где размещается реклама</p><div className="mt-3 flex flex-wrap gap-2">{channel.placements.map((placement) => <span key={placement} className="rounded-full border border-[#d7ddd1] bg-[#f4f1e9] px-3 py-2 text-xs font-medium text-[#4f665c]">{placement}</span>)}</div></div></article>)}</div></section>

      <section className="bg-[#e4eadf] px-6 py-24 md:px-12 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel>02 · Форматы</SectionLabel><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Собираем медиамикс под характер проекта</h2><div className="mt-14 grid gap-5 md:grid-cols-2">{formats.map((format, index) => <article key={format.name} className={`group grid overflow-hidden rounded-[2rem] bg-[#f8f6f0] ${format.horizontal ? "md:grid-cols-[1.35fr_0.85fr]" : "md:grid-cols-[0.9fr_1.1fr]"}`}><div className={`${format.horizontal ? "md:aspect-[16/9]" : "min-h-72"} overflow-hidden`}>{format.video ? <video src={format.video} controls muted playsInline aria-label={`Превью формата ${format.name}`} className="h-full min-h-72 w-full object-cover" /> : <img src={format.image} alt={`Пример формата ${format.name}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />}</div><div className="flex flex-col justify-between p-7"><div><span className="text-sm font-semibold text-[#708b63]">0{index + 1}</span><h3 className="mt-10 text-2xl font-medium">{format.name}</h3><p className="mt-4 leading-7 text-[#5c6e65]">{format.description}</p></div></div></article>)}</div></div></section>

      <section id="creative" className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"><SectionLabel>03 · Креативные возможности</SectionLabel><h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">От идеи до измеримого взаимодействия</h2><div className="mt-14 space-y-6">{creativeStages.map((stage) => <article key={stage.number} className="grid gap-8 rounded-[2rem] border border-[#d7ddd1] bg-[#f8f6f0] p-5 md:grid-cols-[0.8fr_1.2fr] md:p-6"><ImageCard image={stage.image} alt={`Пример креативного этапа: ${stage.title}`} className="min-h-72" /><div className="flex flex-col justify-center p-3 md:p-8"><span className="text-sm font-semibold text-[#708b63]">{stage.number}</span><h3 className="mt-5 text-3xl font-medium leading-tight">{stage.title}</h3><p className="mt-5 max-w-xl leading-7 text-[#5c6e65]">{stage.text}</p>{stage.link && <a href={stage.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-fit rounded-full bg-[#17352d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315c4d]">Смотреть кейс in-banner аналитики</a>}</div></article>)}</div></section>

      <section className="bg-[#17352d] px-6 py-24 text-[#f5f1e7] md:px-12 md:py-32"><div className="mx-auto max-w-7xl"><SectionLabel>04 · Кейсы</SectionLabel><div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-end"><div><h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Результаты, которые можно показать</h2><p className="mt-6 max-w-md leading-7 text-[#c3d2c5]">Кейсбук с примерами решений, форматов и подходов NT Technology для брендов, которым важно качество контакта.</p><a href="https://www.figma.com/proto/WwbBml6quWCID0QrnPyAxi/CASEBOOK-%7C-%D0%9C%D0%90%D0%A2%D0%95%D0%A0%D0%98%D0%90%D0%9B%D0%AB?page-id=401%3A20&node-id=401-580&p=f&viewport=252%2C-1382%2C0.18&t=edGuNk3vDW4zmajR-1&scaling=contain&content-scaling=fixed" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#c9dfae] px-6 py-3 text-sm font-bold text-[#17352d] transition hover:bg-white">Смотреть кейсбук ↗</a></div><div className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#2c5144]"><img src={siteImages.hero} alt="Обложка раздела кейсов Derevopark" className="h-[420px] w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#10241f] via-transparent p-8"><span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9dfae]">NT Technology</span><p className="mt-3 text-4xl font-medium">Casebook<br />for Derevopark</p></div></div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"><SectionLabel>05 · Верификация трафика</SectionLabel><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Не просто показываем.<br />Проверяем качество контакта.</h2><p className="max-w-sm leading-7 text-[#5c6e65]">Верификация помогает отделить реальный интерес от технических показателей и построить прозрачную картину эффективности размещения</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{verification.map((item, index) => <article key={item.title} className="rounded-[2rem] border border-[#d7ddd1] bg-[#f8f6f0] p-8"><span className="text-5xl font-medium text-[#a7c78c]">0{index + 1}</span><h3 className="mt-16 text-2xl font-medium">{item.title}</h3><p className="mt-4 leading-7 text-[#5c6e65]">{item.text}</p></article>)}</div></section>

      <section className="bg-[#c9dfae] px-6 py-24 md:px-12 md:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><SectionLabel>06 · Медиастратегия</SectionLabel><h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">Следующий шаг —<br />собрать стратегию</h2></div><a href="https://docs.google.com/spreadsheets/d/1UNRY6EXySuOlL-JCCmX8DmYaKaojwSx0GEwlcBdhgAs/edit?gid=524234556#gid=524234556" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit rounded-full bg-[#17352d] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#315c4d]">Ознакомиться с медиастратегией ↗</a></div></section>

      <footer className="bg-[#10241f] px-6 py-10 text-[#dbe4d5] md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row"><span className="font-semibold tracking-[0.2em]">NT TECHNOLOGY</span><span>NT Technology × Derevopark</span></div></footer>
    </main>
  )
}
