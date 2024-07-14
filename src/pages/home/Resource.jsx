import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { LiaTruckSolid } from "react-icons/lia";
import { PiTruckTrailer } from "react-icons/pi";
import { FaTruckMonster } from "react-icons/fa";

const Resource = () => {
  useEffect(() => {
    AOS.init();
  });

  const [blogs, setBlog] = useState([
    {
      img: <LiaTruckSolid  className="text-6xl"/>,
      title: "Dump Trucks",
      header: "",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      image: "",
      name: "Oatship",
      date: "11 jan 2022 . 5 mins read",
    },
    {
      img: <PiTruckTrailer className="text-6xl"/>,
      title: "Roll-Off Bins",
      header: "",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      image: "",
      name: "Skid Steers",
      date: "11 jan 2022 . 5 mins read",
    },
    {
      img: <FaTruckMonster className="text-6xl" />,
      title: "Excavators",
      header: "",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...",
      image: "",
      name: "",
      date: "11 jan 2022 . 5 mins read",
    },
    // {img:"/truck.png", title:"Dump Trucks", header:"", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...", image:"", name:"", date:"11 jan 2022 . 5 mins read" },
  ]);
  return (
    <section className="my-40 w-full  lg:px-40 px-5">
      <div className="container mx-auto">
        <div className="text-center  space-y-4">
          <p className="text-xl text-secondaryColors leading-6 font-[400] " data-aos="fade-up" data-aos-duration="600">
            Our Vehicle Fleet
          </p>
          <p className="text-4xl  font-semibold"  data-aos="fade-up" data-aos-duration="600">Modern Equipment</p>
          <p className="text-base leading-8 " data-aos="fade-up" data-aos-duration="600">
            With a growing fleet of specialized equipment like Low Sided Dump
            Trucks, Roll-Off Bins, Wheel Loaders, Excavators and <br /> Soil
            Screeners we are ready to help with any fill removal project that
            you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  mt-[30px] gap-10">
          {blogs.map((blog) => (
            <div className="flex items-center bg-white shadow-xl py-8 px-5 rounded-lg hover:bg-secondaryColors hover:text-white transition-all duration-500 delay-100 hover:scale-105  " data-aos="fade-up" data-aos-duration="600">
              <div className="space-y-4">
                {/* <img src={blog.img} alt="" className="w-[100px]" /> */}
                <p>{blog.img}</p>
                <p>{blog.title}</p>
                <p>{blog.header}</p>
                <p>{blog.body}</p>

                <div className="flex items-center">
                  <p>{blog.image}</p>
                  <div>
                    <p>{blog.name}</p>
                    <p>{blog.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center my-[40px]" data-aos="fade-up" data-aos-duration="600">
        <Link
          className="bg-secondaryColors text-white rounded-lg py-4 px-6 "
          to="/"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default Resource;
