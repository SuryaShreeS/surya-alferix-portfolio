import { Testimonial } from '@/lib/types'

import Image from 'next/image'
import { FC, useRef } from 'react'

interface TestimonialCardProps {
  testimonial: Testimonial
  handleActiveCard: () => void
  active?: boolean // <-- add active prop
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  testimonial: { name, title, feedback, image },
  handleActiveCard,
  active = false, // <-- default value
}) => {
  const cardRef = useRef<HTMLDivElement>(null)

  

  return (
    <div
      ref={cardRef}
      onClick={handleActiveCard}
      className={`bg-secondary border-border flex max-w-[90%] shrink-0 flex-col items-center justify-between gap-4 rounded-2xl border p-4 text-center sm:max-w-[425px] cursor-pointer transition-shadow ${
        active ? 'border-accent shadow-lg' : ''
      }`}
      style={{ minHeight: 320 }} // set min height
    >
      <div
        className="text-neutral text-center leading-8 before:content-['“'] after:content-['”'] overflow-y-auto"
        style={{ maxHeight: 120 }} // set max height and scroll
      >
        {feedback}
      </div>
      <div>
       
        <div>
          {image && (
            <Image src={image} alt={name} width={50} height={50} className="mx-auto rounded-full" />
          )}
          <p className="text-neutral text-lg font-semibold">{name}</p>
          <p className="text-neutral/60 text-sm">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
