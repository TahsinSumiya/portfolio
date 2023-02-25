import React from 'react'
import ProjectCard from './ProjectCard'
import projectdata from '../data/projectdata'
function Projects({id,image,title,view,code}) {
  return (
    
  <div className='container bg-gray-800'>
        <div  className="row justify-center  ">
             
            {projectdata.map((project)=>{
        return <ProjectCard
          key={project.id} 
          title={project.title}
           image={project.image}
          code={project.code}
          view={project.view}
        
        />
     
      
        
       })}
       </div> 
        </div>
     
    
  
  )
}

export default Projects




