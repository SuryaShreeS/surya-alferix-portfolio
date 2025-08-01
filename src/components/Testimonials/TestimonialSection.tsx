'use client'

import { Testimonial } from '@/lib/types'
import { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}



const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const [activeCard, setActiveCard] = useState(0)
  const displayTestimonials = testimonials && testimonials.length > 0 ? testimonials : []

  return (
    <section id="testimonials">
      <SectionHeading
        title="// Testimonials"
        subtitle="Don't just take our word for it - see what actual users of my service have to say about their experience."
      />

      <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto bg-white p-4 rounded-lg">
        {displayTestimonials.length === 0 ? (
          <div className="text-center w-full text-gray-500">No testimonials available.</div>
        ) : (
          displayTestimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={idx}
              testimonial={testimonial}
              active={idx === activeCard} // highlight active card
              handleActiveCard={() => {
                setActiveCard(idx)
              }}
            />
          ))
        )}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {displayTestimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
