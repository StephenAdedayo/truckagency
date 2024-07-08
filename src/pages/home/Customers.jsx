import React from 'react'
import { FaStar } from 'react-icons/fa'

const Customers = () => {
  return (
    <section className='lg:px-20 px-4 my-20  max-w-screen-2xl'>
    <div className='container mx-auto'>
      <p className='text-center'>Customer stories</p>
      <p className='mt-2 text-center'>Dont't Just Take Our Word For It</p>
    

    <div className='mt-[50px] grid grid-cols-1 lg:grid-cols-2 items-center '>
     
    <div>
        
    </div>



<div className='space-y-4'>
    <div className='flex space-x-4'>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
        <FaStar className='text-yellow-500'/>
    </div>
<p>We pride ourselves on our custom services and communication to our customers.</p>
<p>All of our customers are # 1, whether a homeowner, landscape contractor, or pool company, we listen to the job you are working on and work with you to complete your task in the best possible way. We are not satisfied, until our customer is satisfied.</p>

<div className='flex space-x-10 items-center'>
    <p>18+ <br />Years of Experience</p>
    <p>300+ <br />Satisfied <br /> and Repeat Customers</p>
    <p>10k+ <br />Loads <br />
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
