import React from 'react'

import projectdata from '../data/projectdata'
function ProjectCard({id,title,image,view,code}) {
  return (
    
    <div className="col-lg-3 my-2 col-md-5 col-sm-6 h-50 w-20 opacity-80 ">
            <div class="card bg-dark text-white">
            <div className="card-img-overlay">
    
    </div>       
  <img className="card-img h-52 w-20" src={image} alt={title}></img>
  <div className="card-img-overlay  ">
  <h5 className=" rounded-full inline-flex px-2
bg-gray-700 text-white 
 font-semi-bold lg:text-sm sm:text-lg md: text-base">{title}</h5>
    </div>

    <div className="  card-img-overlay d-flex  justify-center ">
        
  <button className=' mx-2 sm:mx-1  mt-auto  btn-lg  w-25'>
    <a  className="no-underline px-2 bg-gray-600 rounded-full hover:bg-gray-800 text-cyan-200
    hover:text-cyan-500 font-bold " 
    href={code} target="_blank"
    rel="noreferrer">Code</a></button>


  <button className=' justify center
    font-bold  rounded-full mt-auto  btn-lg  w-25'><a className='no-underline px-2 bg-gray-600  rounded-full hover:bg-gray-800 text-cyan-200
    hover:text-cyan-500 font-bold' href={view} target="_blank"
    rel="noreferrer">
        View</a></button>
 
    </div>

</div>
    </div>
  )
}

export default ProjectCard
