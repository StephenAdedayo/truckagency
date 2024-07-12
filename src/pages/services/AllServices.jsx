import React, { useState } from "react";
import { GiMineTruck, GiRoundStruck, GiTruck } from "react-icons/gi";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { FaTruckRampBox } from "react-icons/fa6";
import { FaTruckMonster } from "react-icons/fa";


const AllServices = () => {
  const [services, setServices] = useState([
    {
      img: <GiMineTruck  className="text-6xl"/>,
      title: "Gravel, Aggregate, Soils & Fill Delivery",
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
    {
      img:<GiTruck className="text-6xl"/> ,
      title: "Contractor Yard Supply",
      body: "We can look after your yard inventory, so your employees are never looking for material for their sites.",
      button: "read more",
    },
    {
      img: <GiRoundStruck className="text-6xl"/>,
      title: "Screener",
      body: "With our advanced soil screener, we can efficiently recycle the topsoil we pick up to be reused by our customers.",
      button: "read more",
    },
    {
      img: <FaTruckMonster className="text-6xl" />,
      title: "Excavating Partner",
      body: "Our partnership with Total Excavation Inc makes us your most reliable source for all things dirt.",
      button: "read more",
    },
  ]);
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 md:grid-cols-2 px-5 my-20 lg:px-40">
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
    </div>
  );
};

export default AllServices;
