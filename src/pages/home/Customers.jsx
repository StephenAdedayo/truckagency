import React from 'react'
import { FaStar } from 'react-icons/fa'

const Customers = () => {
  return (
    <section className='lg:px-40 px-5 mb-20 -mt-[200px]  max-w-screen-2xl'>
    <div className='container mx-auto'>
      {/* <p className='text-center text-2xl text-red-800'>Customer stories</p>
      <p className='mt-2 text-center text-xl'>Dont't Just Take Our Word For It</p>
     */}

    <div className='mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-2 items-center '>
     
    <div className=''>
        {/* <video autoplay loop controls src="https://videos.pexels.com/video-files/5329613/5329613-sd_506_960_25fps.mp4" className='w-full h-[495px]'></video> */}
        <img src="https://images.pexels.com/photos/11680715/pexels-photo-11680715.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className=' bg-cover ' />
    </div>



<div className='space-y-4 bg-white shadow-xl py-20 px-5 w-fit rounded-md '>
    <div className='flex space-x-4'>
        <FaStar className='text-primaryColors'/>
        <FaStar className='text-primaryColors'/>
        <FaStar className='text-primaryColors'/>
        <FaStar className='text-primaryColors'/>
        <FaStar className='text-primaryColors'/>
        
        <FaStar className='text-primaryColors'/>
  
    </div>
<p className='text-3xl font-bold text-primaryColors'>We pride ourselves on our custom services and communication to our customers.</p>
<p>All of our customers are # 1, whether a homeowner, landscape contractor, or pool company, we listen to the job you are working on and work with you to complete your task in the best possible way. We are not satisfied, until our customer is satisfied.</p>

<div className='flex space-x-5 items-center  '>
    <p className='  '><span className='text-7xl text-primaryColors '>18+</span> <span/> <br />Years of Experience</p>
    {/* <p className=' md:px-4'><span className='text-4xl'>300+</span> <br />Satisfied <br /> and Repeat Customers</p>
    <p><span className='text-4xl'>10+</span> <br />Loads <br />
    Moved Annually</p> */}
    <div>
      <li>Reliability</li>
      <li>Accountability</li>
      <li>Great Services</li>
      <li>No Delay</li>
    </div>

   
</div>

<p>Building strong relationships has been the key to our success.  We’ll work hard for you and you’ll enjoy working with us too.

</p>

</div>




    </div>




    </div>

    </section>
  )
}

export default Customers
