'use client'

import Image from 'next/image'



type SkillsProps = {
  skills: { name: string; icon: string }[]
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
   
      <div className="flex gap-8 lg:gap-24 mt-20 p-20 justify-center items-center flex-wrap">
        {skills.map(({ name, icon }, index) => (
          <span
            key={index}
            className="font-inter text-primary-content flex items-center text-xs lg:text-base">
            <Image src={icon} alt={name} className="mx-2 size-11 lg:size-14" />
            {name}
          </span>
        ))}
      </div>
    
  )
}

export default Skills
