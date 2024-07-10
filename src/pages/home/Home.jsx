import React from 'react'
import LandScape from './LandScape'
import WhatWeDo from './WhatWeDo'
import Navbar from '../../components/Navbar'
import About from './About'
import Services from './Services'
import Customers from './Customers'
import Resource from './Resource'
import Contact from './Contact'
import Footer from './Footer'
import Customermised from './Customermised'


const Home = () => (
  <div>
    
    <Navbar />
    {/* <LandScape />  */}
    <WhatWeDo />
    <About />
    <Services />
    <Customermised />
    <Customers />
    <Resource />
    <Contact />
    <Footer />
  </div>
)

export default Home
