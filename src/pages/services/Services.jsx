import React from 'react'
import OurService from './OurService'
import Navbar from '../../components/Navbar'
import Contact from '../home/Contact'
import Footer from '../home/Footer'
import AboutServe from './AboutServe'
import AllServices from './AllServices'



const Services = () => {

  return (
    <>
    <Navbar />
    <OurService />
    <AboutServe />
    <AllServices />
    <Contact />
    <Footer />
    </>
  )
}

export default Services
