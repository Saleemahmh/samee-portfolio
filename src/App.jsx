import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Expertise from './Components/Expertise/Expertise'
import Testimonials from './Components/Testimonials/Testimonials'
import Projects from './Components/Projects/Projects'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'
import ParticleComponent from './Components/particles'

const App = () => {
  return (
    <>
    <ParticleComponent></ParticleComponent>
    <div className='overflow-x-hidden'>
        <Navbar></Navbar>
        <Hero></Hero>
        <Expertise></Expertise>
        <Testimonials></Testimonials>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>
    </div>
    </>
    
  )
}

export default App