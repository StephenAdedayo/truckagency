import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Team = () => {
  const workers = [
    {
      img: "",
      jobTitle: "Expert Truck Driver",
      name: "Ajilo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: "",
      jobTitle: "Manager",
      name: "Azion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: "",
      jobTitle: "Asst Manager",
      name: "Azum",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: "",
      jobTitle: "Secretary",
      name: "Tobby",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: "",
      jobTitle: "Area Commander",
      name: "Aare",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      img: "",
      jobTitle: "Works instructor",
      name: "Bolu",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <section className="mt-20 w-full mb-[300px] grid items-center justify-center lg:px-40 px-5 bg-gray-100 min-h-[100vh] ">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 content-center">
        {workers.map((worker) => (
          <div className=" space-y-4 shadow-xl  px-5 py-[20px] hover:bg-secondaryColors hover:text-white rounded-lg hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105" data-aos="fade-up" data-aos-duration="600">
            <img src={worker.img} alt="" />
            <p className="font-[700]">Name: {worker.name}</p>
            <p>Job: {worker.jobTitle}</p>
            <p>OTD: {worker.desc}</p>
            <div className="flex space-x-3 ">
              <FaLinkedin />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
