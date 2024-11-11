import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-green-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            НАЧНИ СЕГОДНЯ
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Наше программное обеспечение помогает упростить административные задачи, сокращает количество пропущенных встреч и повышает эффективность работы. Получите скидку 30% на годовую подписку, используя промокод от ассоциации ID EDUCATION.
          </p>
          <Button href="https://dashboard.akesomind.com/#/auth/register" color="white" className="mt-10">
            Со скидкой 40%
          </Button>
        </div>
      </Container>
    </section>
  )
}
