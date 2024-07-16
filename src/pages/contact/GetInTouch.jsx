import React from 'react'
import {  FaClock, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const GetInTouch = () => {
  return (
    <div className='w-full bg-gray-200 px-5 lg:px-40'>
      

   <div className='container mx-auto py-14 flex flex-col max-md:space-y-3 md:flex-row justify-between '>

 <div className='flex space-x-3 items-center'>
<div className='bg-primaryColors p-4'>
    <FaPhoneAlt className='text-white' />
</div>
<p>Call Us:  <br />+234 708945363</p>
 </div>

 <div className='flex space-x-3 items-center'>
<div className='bg-primaryColors p-4'>
    <FaEnvelope className='text-white' />
</div>
<p>Email Us:  <br /><Link>kratostruck@gmail.com</Link></p>
 </div>

 <div className='flex space-x-3 items-center'>
<div className='bg-primaryColors p-4'>
    <FaClock className='text-white' />
</div>
<p>Opening Hours:  <br />Mon-Fri: 9am - 5am</p>
 </div>












   </div>









    </div>
  )
}

export default GetInTouch
