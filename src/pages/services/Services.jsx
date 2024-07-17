import React, { useEffect } from 'react'

import Navbar from '../../components/Navbar'
import Contact from '../home/Contact'
import Footer from '../home/Footer'
import AboutServe from './AboutServe'
import AllServices from './AllServices'

import Specials from '../about/Specials'
import ServicesDetail from './ServicesDetail'





const Services = () => {
  useEffect(() => {

    window.scroll({top: 0, behavior: "smooth"})
   },[])

  return (
    <>
    <Navbar />
    
    <Specials title="Services"/>
    
  <ServicesDetail />
    <Contact />
    <Footer />
    </>
  )
}

export default Services
