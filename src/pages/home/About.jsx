import React, { useState } from 'react'
import vector from '/Vector.png'

const About = () => {
    const [logo, setLogo] = useState([
        {img:"/Vector.png", text: "WebFlow", key:1},
        {img:"/Vector.png", text: "WebFlow", key:2},
        {img:"/Vector.png", text: "WebFlow", key:3},
        {img:"/Vector.png", text: "WebFlow" , key:4},
        {img:"/Vector.png", text: "WebFlow", key:5},
        
        
    ])
  return (
   <main className='max-w-screen-2xl lg:px-20 px-4 min-h-[100vh]'>

    <div className='container mx-auto'>
        <p className='text-center'>We've worked with great companies [social proof to build credibility]</p>

      
     
     <div className='flex  flex-wrap items-center  mt-[50px] justify-around'>
       {logo.map(log => (
        <div key={log.id} className='flex space-x-3'>
            <img src={log.img} alt="" />
            <p className=''>{log.text}</p>
        </div>
       ))}
     </div>

<div className='flex flex-col md:flex-row mt-20'>

<div className='space-y-4'>

<p>About</p>
<p className='text-xl'>We Have Services Tailored to Your Needs</p>
<p className='text-2xl'>Delivering the Best <br /> Custom Trucking Experience</p>
<p className='text-2xl'>"At Haulland Trucking, <br /> our main goal is to have you looking AT <br /> your material, rather than <br />FOR your material."</p>

<button className='py-2 px-4 bg-transparent border border-black'>Learn More</button>

</div>


<div>
    <img src="" alt="" />
</div>

</div>



    
    </div>


   </main>
  )
}

export default About
