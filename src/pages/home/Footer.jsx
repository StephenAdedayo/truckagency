import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='my-20 lg:px-20 px-4 '>
   <div className='container mx-auto'>
   

     <div className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center lg:space-x-20'>

    <div className='space-y-5 text-center md:text-start'>
     <img src="/logo1.png" className='w-[100px]' alt="" />
     <p>Join our newsletter to stay up to date on features and releases.</p>
     
     <form action="" className='flex gap-2'>
        <input type="email" placeholder='email address' className='border border-l-0 border-black px-6 py-3' />
        <button type='submit' className='border border-r-0 border-black px-6 py-3'>Subscribe</button>
     </form>
    <p>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
    </div>

     <div  className='flex mt-[50px] flex-col justify-between sm:flex-row col-span-2 space-y-10 sm:space-y-0 '>
    
    <div className=''>
      <h1 className='mb-[20px]'>Quick Links</h1>
      <ul className='space-y-3'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/contact-us">Contact</Link></li>
      </ul>

    </div>

    <div>
      <h1 className='mb-[20px]'>Our Services</h1>
      <ul className='space-y-3'>
        <li><Link to="/">Gravel, Aggregate, Soil & Fill Delivery</Link></li>
        <li><Link to="/about">Dirt, Rubble & Snow Removal</Link></li>
        <li><Link to="/Services">Bin Rentals</Link></li>
        <li><Link to="/contact">Contractor Yard Supply</Link></li>
        <li><Link to="/contact">Screener</Link></li>
        <li><Link to="/contact">Excavation Partner</Link></li>
      </ul>

    </div>

    <div>
      <h1 className='mb-[20px]'>Contact us</h1>
      
      <ul className='mb-[20px] space-y-1'>
        <p>Order Desk</p>
        <p>289-768-8710</p>
        <p>email</p>
      </ul>

      <ul className='space-y-1'>
        <p>Office:</p>
        <p>289-768-9161</p>
        <p>email</p>
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


   
    <ul className='flex space-x-10 underline '>
        <li><Link to="/">Privacy Policy</Link></li>
        <li><Link to="/">Terms Of Service</Link></li>
        <li><Link to ="/">Cookies Settings</Link></li>
    </ul>
   

   </div>


    </footer>
  )
}

export default Footer
