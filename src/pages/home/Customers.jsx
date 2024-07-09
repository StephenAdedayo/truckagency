import React from 'react'
import { FaStar } from 'react-icons/fa'

const Customers = () => {
  return (
    <section className='lg:px-20 px-4 my-20  max-w-screen-2xl'>
    <div className='container mx-auto'>
      <p className='text-center text-2xl text-red-800'>Customer stories</p>
      <p className='mt-2 text-center text-xl'>Dont't Just Take Our Word For It</p>
    

    <div className='mt-[50px] grid grid-cols-1 gap-10 xl:grid-cols-2 items-center '>
     
    <div className=''>
        <video autoplay controls src="https://videos.pexels.com/video-files/5200378/5200378-sd_640_360_30fps.mp4" className='size-full'></video>
    </div>



<div className='space-y-4 bg-red-800 text-white py-20 px-5 rounded-md'>
    <div className='flex space-x-4'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
    </div>
<p>We pride ourselves on our custom services and communication to our customers.</p>
<p>All of our customers are # 1, whether a homeowner, landscape contractor, or pool company, we listen to the job you are working on and work with you to complete your task in the best possible way. We are not satisfied, until our customer is satisfied.</p>

<div className='flex space-x-10 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5 items-center  max-sm:items-start'>
    <p className=' md:px-6 '><span className='text-4xl '>18+</span> <span/> <br />Years of Experience</p>
    <p className=' md:px-4'><span className='text-4xl'>300+</span> <br />Satisfied <br /> and Repeat Customers</p>
    <p><span className='text-4xl'>10+</span> <br />Loads <br />
    Moved Annually</p>

   
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
