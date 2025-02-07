import React, { useEffect, useState } from "react";
import ServeList from "../../components/ServeList";
import AOS from "aos";
import "aos/dist/aos.css";


const Services = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <section className="lg:px-40  px-5 py-10 w-full flex justify-center items-center   bg-primaryColors ">
      <div className="container mx-auto ">
        <ServeList />
        
      </div>
    </section>
  );
};

export default Services;
