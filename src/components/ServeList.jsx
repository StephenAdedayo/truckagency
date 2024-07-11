import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ServeList = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div className="flex flex-col items-center justify-between  md:flex-row gap-10  text-white">
        <div
          className="space-y-7 max-sm:text-center my-10"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <p className="text-4xl   ">Services</p>
          <h1 className="text-2xl">Gravel, Aggregate, Soils & Fill Delivery</h1>
          <p>
            Supply and delivery of all aggregates, Gravel and soils, direct from
            quarry/supplier to your doorstep.
          </p>
          <div>
            <Link
              to="/"
              className="py-4 px-8 bg-primaryColors border-2 border-white rounded-lg  text-white"
            >
              Get An Estimate <FaArrowRight className="inline-flex " />
            </Link>
          </div>
        </div>

        <div className="max-sm:text-center">
          <p
            className="max-md:hidden"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Delivering precision and reliability in the dynamic world of oil and
            gas, our comprehensive suite of services encompasses innovative
            exploration, cutting-edge extraction techniques, and meticulous
            refining processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServeList;
