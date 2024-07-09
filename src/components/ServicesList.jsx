import React from 'react'

const ServicesList = ({services}) => {
  return (
    <>
      {
        services.map(service => (
            <div key={service.id} className='text-center space-y-5 py-[20px] shadow-xl px-5 rounded-lg bg-white hover:bg-indigo-800 hover:text-white hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105'>
             <img src={service.img} alt="" />   
            <p>{service.title}</p>
            <p>{service.body}</p>
            <button className='capitalize px-6 py-3 bg-indigo-800 border rounded-lg border-white text-white'>{service.button}</button>
            </div>
        ))
      }

    </>
  )
}

export default ServicesList
