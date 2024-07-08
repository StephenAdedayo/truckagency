import React from 'react'
import Navbar from '../../components/Navbar'
import Special from './Special'
import WordsAbout from './WordsAbout'
import Team from './Team'
import Customers from '../home/Customers'
import Contact from '../home/Contact'
import Footer from '../home/Footer'


const About = () => {
  return (
    <>
     <Navbar />
     <Special />
     <WordsAbout />
     <Team />
     <Customers />
     <Contact />
     <Footer/>
    </>
  )
}

export default About
