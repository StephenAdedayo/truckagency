import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ServeList from "../../components/ServeList";

const AboutServe = () => {
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

export default AboutServe;
