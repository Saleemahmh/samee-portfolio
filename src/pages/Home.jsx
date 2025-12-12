import React from 'react'

import {Toaster} from "react-hot-toast"
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Expertise from '../Components/Expertise/Expertise'
import Testimonials from '../Components/Testimonials/Testimonials'
import MyStories from '../Components/MyStories/MyStories'
import Projects from '../Components/Projects/Projects'
import ContactForm from '../Components/ContactMe/ContactMe'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
       <Navbar></Navbar>
        <Hero></Hero>
        <Expertise></Expertise>
        <Testimonials></Testimonials>
         <MyStories></MyStories>
        <Projects></Projects>
        <Toaster position="top-right"></Toaster>
        <ContactForm></ContactForm>
        <Footer></Footer>
    </div>
  )
}

export default Home