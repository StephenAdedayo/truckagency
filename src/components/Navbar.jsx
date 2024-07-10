import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {


   const [isMenuOpen, setIsMenuOpen] = useState(false)


   const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
   }

   const [isServiceOpen, setIsServiceOpen] = useState(false)


   const serviceMenu = () => {
    setIsServiceOpen(!isServiceOpen)
   }

  return (
   <nav className='w-full sticky top-0  bg-transparent h-[100px]  z-10 py-5 lg:px-40 px-5'>
   <div className='w-full flex items-center justify-between '>
      
<div className='' >
<img src="/trucklogo1.png" className='w-[200px] mr-[20px] ' alt=""  />
</div>


      {/* <div className='space-x-5 font-semibold text-white  pr-20'> */}
       {/* <div className='flex items-center '> */}
      
      <div className='hidden md:flex space-x-10 text-white font-semibold items-center'>
       <Link to ="/">Home</Link>
       <Link to ="/about-us">About us</Link>
       <Link to ="/contact-us">Contact Us</Link>
      
      <Link to ="/services" onMouseOver={() => serviceMenu()}>Services</Link>
       
      </div>
      {/* </div> */}
      {/* </div> */}

      



      {/* <div className='space-x-5 hidden md:block'>
      <Link to = "" className='border py-3 px-6   border-black/50 rounded-lg hover:bg-black hover:text-white'>Login</Link>
      <Link to ="" className='border py-3 px-6 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black'>Get Started</Link>
      </div> */}


<button onClick={() => handleMenu()} className='md:hidden'>
 {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl'/>}
</button>

      


   </div>
  
   <div className={`md:hidden absolute top-[100px] w-screen flex flex-col right-[20px] left-0 bg-black text-white p-10  space-y-10 ${isMenuOpen ? '' : 'hidden'} `}>
      <Link to ="/">Home</Link>
       <Link to ="/about-us">About us</Link>
       <Link to ="/contact-us">Contact Us</Link>
      
      <Link to ="/services" >Services </Link>

       {/* <div className='space-x-5 '>
      <Link to = "" className='border py-3 px-6   border-black/50 rounded-lg hover:bg-black hover:text-white'>Login</Link>
      <Link to ="" className='border py-3 px-6 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black'>Get Started</Link>
      </div> */}
      </div>



      <div className={` absolute top-[100px] w-[400px] flex flex-col right-0  bg-black text-white p-10  space-y-10 ${isServiceOpen ? '' : 'hidden'} `}>
      <Link to ="/">Gravel, Aggregate, soil and fill delivery</Link>
       <Link to ="/">Dirt, Rubble and Snow Removal</Link>
       <Link to ="/">Bin Rentals</Link>
      
      <Link to ="/" >Contractor Yard Supply</Link>
      <Link to ="/" >Soil Screener</Link>
      <Link to ="/" >Excavation</Link>

       {/* <div className='space-x-5 '>
      <Link to = "" className='border py-3 px-6   border-black/50 rounded-lg hover:bg-black hover:text-white'>Login</Link>
      <Link to ="" className='border py-3 px-6 bg-black text-white rounded-lg hover:bg-white hover:text-black hover:border-black'>Get Started</Link>
      </div> */}
      </div>

  </nav>
  )
}

export default Navbar
