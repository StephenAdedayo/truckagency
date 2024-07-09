import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  return (
    <section className=' my-24 px-4 lg:px-20 max-w-screen-2xl h-[100vh]]'>
     <div className='container mx-auto flex items-center p-10 h-[100vh]  '>
   
   
   <div className='space-y-5 '>
   <h1 className='lg:text-8xl md:text-5xl text-3xl'>Reliable Trucking <br /> and  LandScape Supplier</h1>
     <p className='lg:text-3xl md:text-2xl text-2xl '>Servicing Commercial & Residential Projects</p>
     <div>
     <Link to="/" className='px-8 py-4 text-white bg-indigo-800 rounded-lg' >Get an Estimate <FaArrowRight className='inline-flex' /></Link>
     </div>
   </div>


   <div>
     <img src="" alt="" />
   </div>


     </div>
 

    </section>
  )
}

export default WhatWeDo
