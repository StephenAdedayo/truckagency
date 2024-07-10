import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
   <section className='my-20 lg:px-20 px-4 bg-secondaryColors py-24 text-white -mb-[80px]'>
    <div className='container mx-auto'>

     {/* <div className='text-center space-y-4'>
        <h1>Frequently Asked Questions</h1>
        <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
     </div> */}

     <div>
     




     </div>



     <div className='space-y-10 text-center'>
     <p className='text-5xl font-semibold'>Get A Free Estimate</p>
     <p>Interested in working with us? Just give us a call and we can supply you with the aggregates, soils or fill that you need to complete your project.</p>
     <p>Our quotation is free of charge and there is no commitment needed.</p>
<div className='mt-[20px] space-x-5 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 '>

    <Link to="/" className='md:py-5 md:px-10 px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black'>Call us 1800 123 456</Link>
    <Link to="/" className='md:py-5 md:px-10 px-4 py-3 capitalize bg-white text-black rounded-lg hover:bg-transparent hover:text-white hover:border-2'>Get a free estimate <FaArrowRight  className='inline-flex'/></Link>
</div>

     </div>





    </div>


   </section>
  )
}

export default Contact
