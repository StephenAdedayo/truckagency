import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <section className='lg:px-20 px-4 max-w-screen-2xl'>
        <div className='container mx-auto'>
        

        <div className='flex flex-col lg:flex-row justify-between items-center max-sm:gap-10'>
     
        <div className='space-y-7'>
         <p>Services</p>
         <h1>Gravel, Aggregate, Soils & Fill Delivery</h1>
         <p>Supply and delivery of all aggregates, Gravel and soils, direct from quarry/supplier to your doorstep.</p>
         <div>
         <Link to="/" className='py-3 px-6 bg-black text-white'>Book a Consultation</Link>
         </div>

        </div>


        <div className='grid grid-cols-1 lg:grid-cols-2'>
        
      {
        services.map(service => (
            <div key={service.id} className='text-center space-y-5 py-[20px] px-[50px]'>
             <img src={service.img} alt="" />   
            <p>{service.title}</p>
            <p>{service.body}</p>
            <button>{service.button}</button>
            </div>
        ))
      }



        </div>




        </div>


        </div>
    </section>
  )
}

export default Services
