
import { Router,Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Projects'
import Skills from './components/Skills'
import Error from './components/Error'
import Profile from './components/Profile';
import Allprojects from './components/Allprojects';
import { FaNodeJs,FaReact,FaCss3Alt,FaBootstrap } from 'react-icons/fa';
// import aboutdata from './components/aboutdata'
import { useState } from 'react';
function App() {
  // const [about,setAbout]=useState(aboutdata)
  return (
    < >
    <NavBar />
    <Routes>
    <Route path="/portfolio" element={<Profile/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/skills" element={<Skills/>} />
    <Route path="/project" element={<Allprojects/>} />
    
    
    </Routes>
    </>
  );
}

export default App;
