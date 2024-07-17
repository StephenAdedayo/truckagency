import React from 'react'

const Specials = ({title}) => {
  return (
    
      <section className=' w-full h-[60vh] -z-10 backdrop-blur-2xl bg-cover bg-fixed bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1720603403/pexels-quintingellar-2199293_1_bvluux.png")]'>
      <div className=" w-full h-full -z-10 bg-black flex justify-center items-center backdrop-blur-lg bg-opacity-40">
        {/* <div className="space-y-10 "> */}
          <h1 className="lg:text-6xl text-5xl md:text-[48px] font-bold  text-white" data-aos="fade-up" data-aos-duration="600">{title}</h1>

          
        {/* </div> */}
      </div>
    </section>
    
  )
}

export default Specials
