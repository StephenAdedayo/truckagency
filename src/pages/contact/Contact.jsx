import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import ContactInfo from './ContactInfo'
import SocialMedia from './SocialMedia'
import Footer from '../home/Footer'
import Specials from '../about/Specials'
import GetInTouch from './GetInTouch'


const Contact = () => {
  useEffect(() => {

    window.scroll({top: 0, behavior: "smooth"})
   },[])
  return (
    <>
    <Navbar />
    <Specials title="Contact Us"/>
    <ContactInfo />
    <GetInTouch />
    {/* <SocialMedia /> */}
    <Footer />

    
    
    </>
  )
}

export default Contact
