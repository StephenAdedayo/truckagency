import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
  return (
   <section className='my-20 lg:px-20 px-4'>
    <div className='container mx-auto'>

     <div className='text-center space-y-4'>
        <h1>Frequently Asked Questions</h1>
        <p>Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
     </div>

     <div>
     




     </div>



     <div className='space-y-4 text-center'>
     <p>Still have Questions?</p>
     <p>Support details to capture customers that might be on the fence.</p>
<div className='mt-[20px]'>

    <Link to="/" className='py-4 px-6 border border-black rounded-lg'>Call us 1800 123 456</Link>
</div>

     </div>





    </div>


   </section>
  )
}

export default Contact
