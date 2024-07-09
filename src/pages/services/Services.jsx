import React, { useState } from 'react'
import OurService from './OurService'
import Navbar from '../../components/Navbar'
import ServicesList from '../../components/ServicesList'
import Contact from '../home/Contact'
import Footer from '../home/Footer'

const Services = () => {
    const [services, setServices] = useState([
        {img:'/Vector.png', title:'Gravel, Aggregate, Soils & Fill Delivery', body:'Supply and delivery of all aggregates, Gravel and soils, direct from quarry/supplier to your doorstep.', button:'read more'},
        {img:'/Vector.png', title:'Dirt, Rubble & Snow Removal', body:'Specializing in custom fill, rubble and snow removal from your landscape or construction project.', button:'read more'},
        {img:'/Vector.png', title:'Bin Rentals', body:'We provide roll off bins for any construction, excavation or landscape project to easily remove soil, rubble or garbage.', button:'read more'},
        {img:'/Vector.png', title:'Contractor Yard Supply', body:'We can look after your yard inventory, so your employees are never looking for material for their sites.', button:'read more'},
        {img:'/Vector.png', title:'Screener', body:'With our advanced soil screener, we can efficiently recycle the topsoil we pick up to be reused by our customers.', button:'read more'},
        {img:'/Vector.png', title:'Excavating Partner', body:'Our partnership with Total Excavation Inc makes us your most reliable source for all things dirt.', button:'read more'}
    ])
  return (
    <>
    <Navbar />
    <OurService />

    <div className='grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 px-4 my-40 lg:px-20'>
    <ServicesList services={services}/>
    </div>
    <Contact />
    <Footer />
    </>
  )
}

export default Services
