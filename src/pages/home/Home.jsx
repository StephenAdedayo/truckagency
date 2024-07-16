import React from 'react'
import WhatWeDo from './WhatWeDo'
import Navbar from '../../components/Navbar'
import About from './About'
import Services from './Services'
import Customers from './Customers'
import Resource from './Resource'
import Contact from './Contact'
import Footer from './Footer'
import Customermised from './Customermised'
import ServicesList from '../../components/ServicesList'
import Testimonials from './Testimonials'


const Home = () => (
  <div>
    
    <Navbar />
    <WhatWeDo />
    <About />
    <Services />
    
    <ServicesList />
    <Customermised />
    {/* <Customers /> */}
    {/* <Resource /> */}
    <Testimonials />
    <Contact />
    <Footer />
  </div>
)

export default Home
