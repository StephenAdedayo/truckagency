import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ServicesList from '../../components/ServicesList'
import ServeList from '../../components/ServeList'

const Services = () => {
    const [services, setServices] = useState([
        {img:'/Vector.png', title:'Gravel, Aggregate, Soils & Fill Delivery', body:'Supply and delivery of all aggregates, Gravel and soils, direct from quarry/supplier to your doorstep.', button:'read more'},
        {img:'/Vector.png', title:'Dirt, Rubble & Snow Removal', body:'Specializing in custom fill, rubble and snow removal from your landscape or construction project.', button:'read more'},
        {img:'/Vector.png', title:'Bin Rentals', body:'We provide roll off bins for any construction, excavation or landscape project to easily remove soil, rubble or garbage.', button:'read more'},
        // {img:'/Vector.png', title:'Contractor Yard Supply', body:'We can look after your yard inventory, so your employees are never looking for material for their sites.', button:'read more'},
        // {img:'/Vector.png', title:'Screener', body:'With our advanced soil screener, we can efficiently recycle the topsoil we pick up to be reused by our customers.', button:'read more'},
        // {img:'/Vector.png', title:'Excavating Partner', body:'Our partnership with Total Excavation Inc makes us your most reliable source for all things dirt.', button:'read more'}
    ])
  return (
    <section className='lg:px-40 lg:mb-[550px] md:mb-[850px] mb-[1000px] px-5 py-10 max-w-screen-2xl mt-20  bg-primaryColors h-[70vh]'>
        <div className='container mx-auto'>
        

        
     
         <ServeList/>


        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 '>
        
      <ServicesList services={services}/>


        </div>



         <div className='text-center my-6'>
        
        <button className='capitalise bg-primaryColors border-2 text-white px-8 py-4 rounded-lg'>{
          <Link to="/services">View All</Link>
          
          }</button>
</div>
        </div>
    </section>
  )
}

export default Services
