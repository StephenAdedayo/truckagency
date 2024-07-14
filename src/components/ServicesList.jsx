import React, { useEffect, useState } from "react";
import AOS from "aos";
// import AOS from 'aos'
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { GiMineTruck } from "react-icons/gi";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { FaTruckRampBox } from "react-icons/fa6";

const ServicesList = () => {
  const [services, setServices] = useState([
    {
      img: <GiMineTruck  className="text-6xl"/>,
      title: "Gravel, Aggregate",
      body: "Supply and delivery of all aggregates, Gravel and soils, direct from quarry/supplier to your doorstep.",
      button: "read more",
    },
    {
      img: <FaTruckRampBox className="text-6xl"/>,
      title: "Dirt, Rubble & Snow Removal",
      body: "Specializing in custom fill, rubble and snow removal from your landscape or construction project.",
      button: "read more",
    },
    {
      img: <LiaTruckLoadingSolid className="text-6xl"/>,
      title: "Bin Rentals",
      body: "We provide roll off bins for any construction, excavation or landscape project to easily remove soil, rubble or garbage.",
      button: "read more",
    },
    // {img:'/Vector.png', title:'Contractor Yard Supply', body:'We can look after your yard inventory, so your employees are never looking for material for their sites.', button:'read more'},
    // {img:'/Vector.png', title:'Screener', body:'With our advanced soil screener, we can efficiently recycle the topsoil we pick up to be reused by our customers.', button:'read more'},
    // {img:'/Vector.png', title:'Excavating Partner', body:'Our partnership with Total Excavation Inc makes us your most reliable source for all things dirt.', button:'read more'}
  ]);

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div>
        <div className="grid grid-cols-1 mb-20 gap-5 lg:grid-cols-3 px-5 lg:px-40 -mt-[80px]">
          {services.map((service) => (
            <div
              key={service.id}
              className=" space-y-5 py-10 shadow-xl text-black px-10 rounded-lg bg-white hover:bg-primaryColors hover:text-white hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {/* <img src={service.img} className="mb-[70px]" alt="" /> */}
              <p className="mb-[70px]">{service.img}</p>
              <p className="font-semibold text-2xl">{service.title}</p>
              <p>{service.body}</p>
              <button className="capitalize px-6 py-3 bg-primaryColors border rounded-lg border-white text-white">
                {service.button}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center my-6">
          <button className="capitalise bg-primaryColors border-2 text-white px-8 py-4 rounded-lg">
            {<Link to="/services">View All</Link>}
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicesList;
