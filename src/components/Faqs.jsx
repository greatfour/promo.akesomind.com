import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Как AkesoMind поможет мне сэкономить время на административных задачах?',
      answer:
        'AkesoMind автоматизирует такие процессы, как запись клиентов, напоминания, выставление счетов и организация расписания, что позволяет сократить время на рутину и сосредоточиться на сессиях с клиентами.',
    },
    {
      question: 'Какие функции доступны на платформе?',
      answer: 'Платформа AkesoMind включает календарь с напоминаниями, видеозвонки, защищённое хранение данных, обмен документами, запись видео сессий, транскрипция после сессии, ИИ ассистент, управление записями и напоминаниями, рассылку клиентам с помощью email, а также аналитику для отслеживания эффективности.',
    },
    {
      question: 'Насколько безопасна платформа?',
      answer:
        'Мы обеспечиваем 100% конфиденциальность данных и соблюдаем стандарты безопасности в сфере ментального здоровья, что гарантирует полную защиту данных ваших клиентов.',
    },
  ],
  [
    {
      question: 'Нужно ли проходить обучение, чтобы начать работать в AkesoMind?',
      answer:
        'Нет, наша платформа интуитивно понятна, и большинство психологов легко начинают работать с ней сразу. В случае вопросов мы предоставляем поддержку и обучающие материалы.',
    },
    {
      question:
        'Подходит ли AkesoMind для индивидуальных специалистов или только для клиник?',
      answer:
        'Платформа разработана как для частных практик, так и для клиник, с возможностью настройки под нужды каждого специалиста.',
    },
    {
      question:
        'Можно ли использовать AkesoMind для онлайн-консультаций?',
      answer:
        'Да, AkesoMind поддерживает видеосессии и аудиозвонки, что делает его идеальным решением для онлайн-консультаций.',
    },
  ],
  [
    {
      question: 'Какую поддержку я получу после подключения к платформе?',
      answer:
        'Мы предоставляем поддержку по электронной почте и телефону, а также обучающие материалы и руководство, чтобы вы всегда могли получить помощь по работе с платформой.',
    },
    {
      question: 'Какие преимущества у AkesoMind перед конкурентами?',
      answer: 'AkesoMind предлагает не только набор удобных инструментов для администрирования, но и интуитивно понятный интерфейс, безопасность данных и доступную цену, разработанную специально для специалистов в области ментального здоровья и коучинга.',
    },
    {
      question: 'Можно ли протестировать AkesoMind перед покупкой?',
      answer:
        'Да, мы предлагаем пробный период, в течение которого вы можете бесплатно оценить все возможности платформы и убедиться, что она подходит именно вам.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Ответы на ваши вопросы
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Если вы не можете найти ответ на интересующий вас вопрос, вы можете связаться с нами по email или в Телеграм
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
