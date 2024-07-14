// import React from 'react'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
 {words:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sed nesciunt, accusantium pariatur sequi eius amet minus rem officiis unde, aliquam quasi incidunt a necessitatibus? Nesciunt voluptatibus omnis repellendus libero", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfPib7CWEiNiu18DRUk_FDdZR0KNSI4oz_g&s", detail:'From A Satisfied Customer ' },
  ])

  return (
 <section className='w-full px-5 lg:px-40 my-20'>
    <div className='mx-auto container '>
      <div className='text-center space-y-5'>
        <p className='text-xl'>What Our Clients Say</p>
        <p className='text-4xl'>Happy Customers and Clients</p>
      </div>



      <Swiper
        
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        
            {
                testimonials.map((testimonial => (
                  <SwiperSlide className='mt-[50px] mb-[50px]'>
                  <div className='bg-gray-100 xl:py-20 xl:px-20 px-8 py-8'>
                   <p className='border-l-4 text-gray-800 border-primaryColors px-5'>{testimonial.words}</p>
                   <div className='flex items-center mt-[20px] space-x-3'>
                    <img src={testimonial.img} className='w-[100px] rounded-full' alt="" />
                    <p className='font-bold text-[25px]'>{testimonial.detail}</p>
                    </div>
                   
                  </div>

             </SwiperSlide>  
                )))
            }
        
        
      </Swiper>
    </div>


 </section>
  )
}

export default Testimonials
