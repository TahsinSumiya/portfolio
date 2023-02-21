import React, { useState } from 'react'
import aboutdata from './aboutdata'
import { FaNodeJs,FaReact,FaCss3Alt,FaBootstrap ,FaGithub,FaLinkedinIn} from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
function Profile({about}) {
    
  return (
    <>
   
  <section className='flex flex-col justify-center  h-screen bg-gray-800'>
   <div className='ml-32 p-12'>
   <div className='flex text-cyan-400  absolute top-60 left-25'>
      <ul className='hidden lg:flex'>
        <li ><FaNodeJs className='font node animate-bounce'/></li>
        <li ><FaReact className='font react animate-bounce'/></li>
        <li ><FaBootstrap className='font bootstrap animate-bounce'/></li>
        <li ><FaCss3Alt className='font css animate-bounce'/></li>
      </ul>
    </div>
    
   {aboutdata.map((about)=>{
  
          return (
            <>
          <div className='m-3 w-50 '> 
                 <h1 className='text-cyan-400'>{about.title}</h1>
                 <p className=' text-cyan-200 indent-0 text-justify '>{about.desc}</p>
                
                <img className='hidden lg:block absolute image  w-25 right-20 top-48 ' src={about.image}></img>
              
          </div>
           <div className='flex flex-col text-cyan-400 absolute justify-center'>
           <ul className='flex gap-x-6 '>
             <a href='tahsinsumiya.19300137rpsu.edu.bd'><MdEmail className='icon text-cyan-400'/></a>
             <a href='https://github.com/TahsinSumiya'><FaGithub className='icon text-cyan-400' /> </a>
             <a href='https://www.linkedin.com/in/tahsin-sumiya-1273a4257'><FaLinkedinIn className='icon text-cyan-400'/> </a>
           </ul>
          </div>
          </>
          )
   })}
   </div>
  
  </section>
  </>
  )
}

export default Profile
