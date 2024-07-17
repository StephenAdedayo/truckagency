import React, { useState } from "react";
import { GiMineTruck, GiRoundStruck, GiTruck } from "react-icons/gi";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { FaTruckRampBox } from "react-icons/fa6";
import { FaTruckMonster } from "react-icons/fa";


const AllServices = () => {
  const [services, setServices] = useState([
    {
      img: <GiMineTruck  className="text-6xl"/>,
      title: "Haulage & Transportation",
      body: "At Kratos Trucking, we understand the critical importance of efficient and reliable transportation for your business. Our Haulage & Transportation services are designed to ensure your goods are delivered safely and on time, no matter the distance.",
      button: "read more",
    },
    {
      img: <FaTruckRampBox className="text-6xl"/>,
      title: "Freight & Logistics Services",
      body: "Kratos Trucking offers a full suite of Freight & Logistics services designed to streamline your supply chain and enhance efficiency. From planning and coordination to execution and delivery, we handle every aspect of your logistics needs.",
      button: "read more",
    },
    {
      img: <LiaTruckLoadingSolid className="text-6xl"/>,
      title: "Warehousing & Storage",
      body: "Kratos Trucking offers secure and flexible warehousing and storage solutions to accommodate your business’s needs. Our facilities are equipped with advanced technology and security measures to ensure your inventory is stored safely and efficiently.",
      button: "read more",
    },
    // {
    //   img:<GiTruck className="text-6xl"/> ,
    //   title: "Contractor Yard Supply",
    //   body: "We can look after your yard inventory, so your employees are never looking for material for their sites.",
    //   button: "read more",
    // },
    // {
    //   img: <GiRoundStruck className="text-6xl"/>,
    //   title: "Screener",
    //   body: "With our advanced soil screener, we can efficiently recycle the topsoil we pick up to be reused by our customers.",
    //   button: "read more",
    // },
    // {
    //   img: <FaTruckMonster className="text-6xl" />,
    //   title: "Excavating Partner",
    //   body: "Our partnership with Total Excavation Inc makes us your most reliable source for all things dirt.",
    //   button: "read more",
    // },
  ]);
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 px-5 my-20 lg:px-40">
        {services.map((service) => (
          <div
            key={service.id}
            className=" space-y-5 py-20 shadow-xl text-black px-8 rounded-lg bg-white hover:bg-primaryColors hover:text-white hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* <img src={service.img} className="mb-[70px]" alt="" /> */}
            <p className="mb-[70px]">{service.img}</p>
            <p className="font-semibold text-2xl">{service.title}</p>
            <p>{service.body}</p>
            {/* <button className="capitalize px-6 py-3 bg-primaryColors border  border-white text-white"> */}
              {/* {service.button} */}
            {/* </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
