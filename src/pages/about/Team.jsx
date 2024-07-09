import React from 'react'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Team = () => {
    const workers = [
        {img: "", jobTitle:"Expert Truck Driver", name:"Ajilo", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "", jobTitle:"Manager", name:"Azion", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "", jobTitle:"Asst Manager", name:"Azum", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "", jobTitle:"Secretary", name:"Tobby", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "", jobTitle:"Area Commander", name:"Aare", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},
        {img: "", jobTitle:"Works instructor", name:"Bolu", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}
    
       ]
  return (
    <section className='my-20 lg:px-20 px-4 '>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
   
      {
        workers.map(worker => (
            <div className=' space-y-4 shadow-xl px-5 py-[20px] hover:bg-red-800 hover:text-white rounded-lg hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105'>
                <img src={worker.img} alt="" />
                <p className='font-[700]'>Name: {worker.name}</p>
                <p>Job: {worker.jobTitle}</p>
                <p>OTD: {worker.desc}</p>
                <div className='flex space-x-3 '>
                  <FaLinkedin/>
                  <FaXTwitter />
                  <FaInstagram/>
                </div>
            </div>
        ))
      }









      </div>



    </section>
  )
}

export default Team
