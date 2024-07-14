import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className=' mb-24 px-4 lg:px-40 w-full bg-cover  h-screen bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1720999858/Frame_1_oqtqsc.png")]'>
      <div className="container mx-auto flex items-center p-10 h-[100vh] justify-center  ">
        <div class="animate__animated animate__fadeInUp animate__delay-0.5">
          <div className="space-y-5 text-white text-center">
            <h1 className="text-[48px] ">
              Reliable Trucking  and  LandScape Supplier
            </h1>
            {/* <p className="lg:text-3xl md:text-2xl text-2xl ">
              Servicing Commercial & Residential Projects
            </p>
            <div>
              <Link
                to="/"
                className="px-8 py-4 text-white bg-indigo-800 rounded-lg"
              >
                Get an Estimate <FaArrowRight className="inline-flex" />
              </Link>
            </div> */}
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
