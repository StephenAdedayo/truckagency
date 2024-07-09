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
   <main className='max-w-screen-2xl my-20 lg:px-20 px-4 min-h-[100vh]'>

    <div className='container mx-auto'>
        <p className='text-center text-2xl' >We've worked with great companies <span className='text-red-800'>[social proof to build credibility]</span></p>

      
     
     {/* <div className='flex  flex-wrap items-center  mt-[50px] justify-around'>
       {logo.map(log => (
        <div key={log.id} className='flex space-x-3'>
            <img src={log.img} alt="" />
            <p className=''>{log.text}</p>
        </div>
       ))}
     </div> */}

<div className='flex flex-col justify-between items-center md:flex-row mt-20'>

<div className='space-y-4 max-md:text-center '>

<p className='text-4xl '>About</p>
<p className='lg:text-xl md:text-lg text-xl'>We Have Services Tailored to Your Needs</p>
<p className='lg:text-2xl md:text-xl text-2xl'>Delivering the Best <br /> <span className='text-red-800'>Custom Trucking Experience</span> </p>
<p className='lg:text-2xl md:text-xl text-2xl'>"At Haulland Trucking, <br /> our main goal is to have you looking AT <br /> your material, rather than <br />FOR your material."</p>

<button className='py-2 px-4 text-white bg-indigo-800 rounded-lg'>Learn More</button>

</div>


<div className='max-md:mt-[40px]'>
    <img src="https://media.istockphoto.com/id/520703835/photo/truck-and-highway-at-sunset-transportation-background.jpg?b=1&s=612x612&w=0&k=20&c=riFEK9zhzhESWZ46tF_11d-Mu8pQrk14iMoI4jfmW7o=" alt="" />
</div>

</div>



    
    </div>


   </main>
  )
}

export default About
