import React from 'react'

import Navbar from '../../components/Navbar'
import Contact from '../home/Contact'
import Footer from '../home/Footer'
import AboutServe from './AboutServe'
import AllServices from './AllServices'

import Specials from '../about/Specials'



const Services = () => {

  return (
    <>
    <Navbar />
    
    <Specials title="Services"/>
    <AboutServe />
    
  
    <AllServices />
    <Contact />
    <Footer />
    </>
  )
}

export default Services
