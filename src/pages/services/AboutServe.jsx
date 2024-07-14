import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutServe = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <section className="lg:px-40 px-5 py-10 w-full grid items-center -mt-[90px]   bg-primaryColors h-[70vh]">
        <div className="flex flex-col  justify-center   md:flex-row gap-10  text-white">
          <div className="space-y-7 max-sm:text-center flex-[50%] ">
            <p className="text-lg font-bold" data-aos="fade-up" data-aos-duration ="600">Our Services</p>
            {/* <h1 className="text-2xl" data-aos="fade-up" data-aos-duration ="600">
              Gravel, Aggregate, Soils & Fill Delivery
            </h1> */}
            <p data-aos="fade-up" data-aos-duration ="600" className="text-[25px] font-bold">
              Supply and delivery of all aggregates, Gravel and soils, direct
              from quarry/supplier to your doorstep.
            </p>
            <div data-aos="fade-up" data-aos-duration ="600">
              {/* <Link
                to="/"
                className="py-4 px-8 bg-primaryColors border-2 border-white rounded-lg  text-white"
              >
                Get An Estimate <FaArrowRight className="inline-flex " />
              </Link> */}
            </div>
          </div>

          <div className="max-sm:text-center flex-[50%]">
            <p className="max-md:hidden" data-aos="fade-up" data-aos-duration ="600">
              Delivering precision and reliability in the dynamic world of oil
              and gas, our comprehensive suite of services encompasses
              innovative exploration, cutting-edge extraction techniques, and
              meticulous refining processes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutServe;
