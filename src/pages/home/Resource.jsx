import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Resource = () => {
    const [blogs, setBlog] = useState([
        {img:"/truck.png", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"Oatship", date:"11 jan 2022 . 5 mins read" },
        {img:"/truck.png", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
        {img:"/truck.png", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
        {img:"/truck.png", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
    ])
  return (
   <section className='my-40 max-w-screen-2xl  lg:px-20 px-4'>
      <div className='container mx-auto'>
          
          <div className='text-center  space-y-4'>
            <p className='text-xl text-red-800 font-semibold'>Our Vehicle Fleet</p>
            <p className='text-3xl  font-semibold'>Modern Equipment</p>
            <p className='text-lg'>With a growing fleet of specialized equipment like Low Sided Dump Trucks, Roll-Off Bins, Wheel Loaders, Excavators and Soil Screeners we are ready to help with any fill removal project that you may have.</p>
          </div>

         <div className='grid grid-cols-1 md:grid-cols-2 mt-[30px] gap-10'>
        {
            blogs.map(blog => (
                <div className='flex items-center bg-white shadow-xl p-[30px] rounded-lg hover:bg-indigo-800 hover:text-white transition-all duration-500 delay-100 hover:scale-105  '>
                    <div>
                        <img src={blog.img} alt="" className='' />
                    </div>

                    <div className='space-y-4'>
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

<div className='text-center my-[40px]'>
      <Link className='bg-indigo-800 text-white rounded-lg py-4 px-6 ' to="/">View All</Link>
      </div>
   </section>
  )
}

export default Resource
