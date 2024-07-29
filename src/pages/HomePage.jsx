import React from 'react'


import './Home.css';
import Skills from '../components/home/Skills';
import Eductaion from '../components/home/Eductaion';
import Contact from '../components/home/Contact';
import Home from '../components/home/Home'
import About from '../components/home/About';
import Projects from '../components/home/Projects';

const HomePage = () => {


  return (
    <div className='z-20 relative w-full flex flex-col gap-20'>


        <Home/>


        <About/>
        <Skills/>
        <Eductaion/>
        <Projects/>
        <Contact/>


    </div>
  )
}

export default HomePage