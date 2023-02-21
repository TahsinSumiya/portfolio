import React from 'react'
import  '../static/skill.css'
import { useState } from 'react'
export default function Skill({icon,title,id,percentage}) {
  const [style,setStyle] = useState()

  setTimeout(()=>{
    const newStyle ={
      opacity:1,
      width:`${percentage}`,
      
    }
    setStyle(newStyle)
  },[percentage])
  return (
    
   <div className='skills-main ml-80 px-12  block '>
        <div key={id} className='content space-y-9  '>
                <div className='absolute left-72'>
                     <img  className='h-10 w-15 ' src={icon} alt={title}></img>
                </div>
                <div className='right'>
                     <h5>{title}</h5>
                  
  <div className=" w-full bg-gray-200  rounded-full dark:bg-gray-700">
    <div  className="  text-xs  font-bold bg-cyan-500
     text-black text-center p-0.5 leading-none rounded-full progressbar"
      style={style} ><span>{percentage}</span></div>
  </div>



                </div>
        </div>
           
   </div>
  )
}
