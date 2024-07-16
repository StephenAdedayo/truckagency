import React, { useEffect } from "react";
// import A0S from 'aos'
import AOS from "aos";
import "aos/dist/aos.css";
import Customers from "./Customers";

const Customermised = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className='px-5 lg:px-40 my-20 w-full h-[60vh] md:bg-fixed  bg-cover grid place-items-center bg-[url("https://res.cloudinary.com/ddpzz4n4i/image/upload/v1721085734/sectBG_uh8mnu.jpg")]'>
      
    <p
        className="text-[48px] font-bold text-white"
        data-aos="fade-up"
        data-aos-duration="600"
      >
    Why Choose Us
      </p>
    </div>
  );
};

export default Customermised;
