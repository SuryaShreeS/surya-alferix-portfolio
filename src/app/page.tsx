import {  skillList } from '@/appData'

import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import { projects } from '@/appData'
import { testimonials } from '@/appData'

import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import ContactSection from '@/components/Contact/ContactSection'



export default async function Home() {
 

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
      
        <ProjectSection projects={projects} />
        {/* <ServiceSection /> */}
         <TestimonialSection testimonials={testimonials} />
        <ContactSection /> 
      </div>
    </main>
  )
}
