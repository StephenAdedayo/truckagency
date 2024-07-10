import React, { useState } from 'react'
import { FiTarget } from "react-icons/fi";
import { FaEye } from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";



const Mission = () => {

    const [about, setAbout] = useState([
        {img:<FiTarget />, title:"Our Mission", body:"is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity."},
        {img:<FaEye />, title:"Our Vision", body:"is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity."},
        {img:<IoDiamondOutline />, title:"Our Philoposhy", body:"is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity."},
        {img:<IoDiamondOutline />, title:"Our Culture", body:"is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity."},
    ])

  return (
    <div className='my-20 px-5 lg:px-40 max-w-screen-2xl bg-secondaryColors min-h-[50vh] '>
      <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 gap-5 max-md:gap-20 h-full py-20 flex-[50%]'>

{
  about.map(abou => (
      <div className='text-white space-y-3'>
      {/* <img src={abou.img} alt="" /> */}
      <p>{abou.img}</p>
      <p className=' text-3xl font-semibold'>{abou.title}</p>
      <p>{abou.body}</p>
      </div>
  ))
}


</div>
    </div>
  )
}

export default Mission
