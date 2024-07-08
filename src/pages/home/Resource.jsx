import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Resource = () => {
    const [blogs, setBlog] = useState([
        {img:"https://cdn.prod.website-files.com/60adb84aec56676cc26d7e0f/60c04b7ad4d3408e0d82177a_Truck.jpg", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"Oatship", date:"11 jan 2022 . 5 mins read" },
        {img:"https://cdn.prod.website-files.com/60adb84aec56676cc26d7e0f/60c04b7ad4d3408e0d82177a_Truck.jpg", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
        {img:"https://cdn.prod.website-files.com/60adb84aec56676cc26d7e0f/60c04b7ad4d3408e0d82177a_Truck.jpg", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
        {img:"https://cdn.prod.website-files.com/60adb84aec56676cc26d7e0f/60c04b7ad4d3408e0d82177a_Truck.jpg", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
    ])
  return (
   <section className='my-20 lg:px-20 px-4'>
      <div className='container mx-auto'>
          
          <div className='text-center  space-y-4'>
            <p className='text-xl'>Our Vehicle Fleet</p>
            <p className='text-2xl'>Modern Equipment</p>
            <p className='text-2xl'>With a growing fleet of specialized equipment like Low Sided Dump Trucks, Roll-Off Bins, Wheel Loaders, Excavators and Soil Screeners we are ready to help with any fill removal project that you may have.</p>
          </div>

         <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px] gap-10'>
        {
            blogs.map(blog => (
                <div className='flex items-center'>
                    <div>
                        <img src={blog.img} alt="" />
                    </div>

                    <div>
                        <p>{blog.title}</p>
                        <p>{blog.header}</p>
                        <p>{blog.body}</p>

                        <div className='flex items-center'>
                            <p>{blog.image}</p>
                            <div>
                                <p>{blog.name}</p>
                                <p>{blog.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }


         </div>

      </div>

<div className='text-center mt-[20px]'>
      <Link className='border border-black py-2 px-3 ' to="/">View All</Link>
      </div>
   </section>
  )
}

export default Resource
