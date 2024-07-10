import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='mt-20 lg:px-20 px-5 bg-black text-white mb-none py-20 overflow-hidden '>
   <div className='container mx-auto'>
   

     <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:space-x-20'>

    <div className='space-y-5  text-start'>
     <img src="/logo1.png" className='w-[100px]' alt="" />
     <p>Join our newsletter to stay up to date on features and releases.</p>
     
     <form action="" className='flex gap-2 flex-col '>
        <input type="email" placeholder='email address' className='border  w-fit rounded-lg border-l-0 border-white px-6 py-3' />
        <button type='submit' className='border border-white px-6 py-3 w-fit rounded-lg'>Subscribe</button>
     </form>
    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
    </div>

     <div  className='flex mt-[50px] flex-col justify-between sm:flex-row col-span-2 space-y-10 sm:space-y-0 '>
    
    <div className=''>
      <h1 className='mb-[20px] text-secondaryColors'>Quick Links</h1>
      <ul className='space-y-3'>
        <li><Link to="/" className=' hover:text-secondaryColors'>Home</Link></li>
        <li><Link to="/about-us" className=' hover:text-secondaryColors'>About</Link></li>
        <li><Link to="/Services" className=' hover:text-secondaryColors'>Services</Link></li>
        <li><Link to="/contact-us" className=' hover:text-secondaryColors'>Contact</Link></li>
      </ul>

    </div>

    <div>
      <h1 className='mb-[20px] text-secondaryColors'>Our Services</h1>
      <ul className='space-y-3 '>
        <li><Link to="/" className=' hover:text-secondaryColors'>Gravel, Aggregate, Soil & Fill Delivery</Link></li>
        <li><Link to="/about" className=' hover:text-secondaryColors'>Dirt, Rubble & Snow Removal</Link></li>
        <li><Link to="/Services"className=' hover:text-secondaryColors'>Bin Rentals</Link></li>
        <li><Link to="/contact" className=' hover:text-secondaryColors'>Contractor Yard Supply</Link></li>
        <li><Link to="/contact" className=' hover:text-secondaryColors'>Screener</Link></li>
        <li><Link to="/contact" className=' hover:text-secondaryColors'>Excavation Partner</Link></li>
      </ul>

    </div>

    <div>
      <h1 className='mb-[20px] text-secondaryColors'>Contact us</h1>
      
      <ul className='mb-[20px] space-y-1'>
        <p className=' hover:text-secondaryColors'>Order Desk</p>
        <p className=' hover:text-secondaryColors'>289-768-8710</p>
        <p className=' hover:text-secondaryColors'>email</p>
      </ul>

      <ul className='space-y-1  '>
        <p className=' hover:text-secondaryColors'>Office:</p>
        <p className=' hover:text-secondaryColors'>289-768-9161</p>
        <p className=' hover:text-secondaryColors'>email</p>
      </ul>
        
        <div className='flex space-x-3 mt-2'>
         <FaInstagram />
         <FaXTwitter />
         <FaFacebook/>
         <FaLinkedin/>
        </div>

    </div>

    




     </div>






     </div>




   </div>

   <hr  className='mt-[70px]'/>

   <div className='flex flex-col md:flex-row justify-between items-center mt-[50px]'>
   <p className='max-md:mb-[10px]'>©{currentYear}. All Rights Reserved</p>


   
    <ul className='flex lg:space-x-10 space-x-5 underline '>
        <li><Link to="/">Privacy Policy</Link></li>
        <li><Link to="/">Terms Of Service</Link></li>
        <li><Link to ="/">Cookies Settings</Link></li>
    </ul>
   

   </div>


    </footer>
  )
}

export default Footer
