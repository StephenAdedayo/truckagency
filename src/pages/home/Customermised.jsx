import React, { useEffect } from "react";
// import A0S from 'aos'
import AOS from "aos";
import "aos/dist/aos.css";

const Customermised = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className='px-5 lg:px-40 my-20 w-full h-[70vh] bg-fixed  bg-cover grid place-items-center bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1720999858/Frame_1_oqtqsc.png")]'>
      <p
        className="text-[48px] font-bold text-white"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        Why choose Us
      </p>
    </div>
  );
};

export default Customermised;
