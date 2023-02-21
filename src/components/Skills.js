import React from 'react'
import skillsData from './skillsData'
import Skill from './Skill'
export default function Skills() {

  return (
    <div className=' bg-gray-800 text-cyan-400  justify-center'>
      <h3 className='text-center underline decoration-double decoration-1'>My Skills</h3>
         {skillsData.map((skill)=>{
          return(<Skill  key={skill.id} 
            icon={skill.icon} percentage ={skill.percentage}
            title={skill.title}
          
          />)
         })}
    </div>
  )
}
