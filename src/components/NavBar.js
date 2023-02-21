import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar className='bg-gray-800  mx-auto '>
      <Container >
        <Navbar.Brand href="" ><img className='hidden lg:block w-25  ' src={logo} alt='portfolio'></img></Navbar.Brand>
       
          <Nav className=" flex-col space-x-5 px-4  ">
            <NavLink to="" className="no-underline text-cyan-400 hover:text-teal-300"  >Profile</NavLink>
            <NavLink to="/skills"className="no-underline text-cyan-400 hover:text-teal-300">Skills</NavLink>
            <NavLink to="/project"className="no-underline text-cyan-400 hover:text-teal-300">Project</NavLink>
            <NavLink to="/contact"className="no-underline text-cyan-400 hover:text-teal-300">Contact Us</NavLink>
          </Nav>
           <div>
            <div className='hidden'>
               <GiHamburgerMenu/>
            </div>
                 <ul className='hidden'>
                    <li>contact</li>
                    <li>contact</li>
                    <li>contact</li>
                    <li>contact</li>
                 </ul>
           </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
