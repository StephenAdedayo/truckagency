import React from 'react'

const ContactInfo = () => {
  return (
    <section className='my-20 px-4 lg:px-20 max-w-screen-2xl'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center min-h-[100vh]'>
             
          
         <div className='mt-[100px]'>
         <h1 className='text-2xl mb-[20px]'>Contact Us</h1>
         <p className='text-lg mb-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, non.</p>
       <form action="" className='space-y-4'>
        <label for="">Name</label> <br /> 
       <input type="text" className='border border-black w-full px-5 py-5 rounded-lg' placeholder=''/> <br /><br />
      <label For="">Email</label> <br />
      <input type="email" className='border border-black w-full px-5 py-5 rounded-lg' placeholder='' /> <br />
      <textarea name="" id="" cols="30" rows="15" className='w-full rounded-lg border p-2 border-black' placeholder='Type Your Message'></textarea>
       <input type="checkbox" /> <label For="" >I accept The Terms</label> <br />
       <button type='submit' className='text-white bg-black px-3 py-2 rounded-md'>Submit</button>
       </form>

     


       </div> 




       <div>

 <img src="" alt="" />

       </div>
        </div>
    </section>
  )
}

export default ContactInfo
