import React from 'react'
import { Link } from 'react-router-dom'


const SocialMedia = () => {
    const socialMedia = [
        {img:"", title:"Email", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.", link:"email"},
        {img:"", title:"Live Chat", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.", link:"Start New Chat"},
        {img:"", title:"Phone", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.", link:"+1 0100 1000"},
        {img:"", title:"Office", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.", link:"123 Sample St, Sydney NSW 2000 AU"}
    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-40 items-center justify-center max-md:mb-[400px]  lg:grid-cols-4 px-4 lg:px-20 h-[50vh]  gap-10'>
      {socialMedia.map(media => (
        <div className='space-y-4'>
            <p>{media.img}</p>
            <p>{media.title}</p>
            <p>{media.body}</p>
            <Link to="" className='underline'>{media.link}</Link>
        </div>
      ))}
    </div>
  )
}

export default SocialMedia
