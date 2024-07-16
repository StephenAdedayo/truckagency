import React from 'react'
import Tabs from '../../components/Tabs'


const AboutCustomers = () => {
  return (
    
      <section className="my-40 px-5 lg:px-40   ">
      <div className="container  flex flex-col lg:flex-row items-center  mx-auto">

    <div className='h-[900px] w-full flex-[40%]'>

        <img className='w-full bg-cover  h-full' src="/aboutbgcus.jpg" alt="" />
    </div>

        <div className="h-[900px]  flex-[60%] ">


          <div
            className=" h-full bg-white shadow-xl py-24  xl:px-20 px-4    "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            
    <h1 className="text-[48px] font-bold mb-[10px]">Why Choose Us</h1>

            <p
              className="text-base mb-[60px]  text-black font-semibold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
            At Kratos Trucking, we understand that choosing the right transportation partner is crucial for your business's success. Here’s why Kratos Trucking stands out as your preferred choice for haulage, freight, and logistics services:
            </p>
 
            <div className="">
            <Tabs />
            </div>
      

          </div>
        </div>
      </div>
    </section>
    
  )
}

export default AboutCustomers
