import React from 'react'
import Navbar from '../../components/Navbar'
import Special from './Special'
import WordsAbout from './WordsAbout'
import Team from './Team'
import Customers from '../home/Customers'
import Contact from '../home/Contact'
import Footer from '../home/Footer'
import Mission from './Mission'
import AboutCustomers from './AboutCustomers'


const About = () => {
  return (
    <>
     <Navbar />
     <Special />
     <WordsAbout />
     <Mission />
     {/* <Team /> */}
     {/* <Customers /> */}
     <AboutCustomers />
     <Contact />
     <Footer/>
    </>
  )
}

export default About
