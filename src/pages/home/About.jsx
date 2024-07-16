import React, { useEffect, useState } from "react";
import vector from "/Vector.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiTarget } from "react-icons/fi";
import { FaAward, FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const About = () => {
  const [about, setAbout] = useState([
    {
      img: <FiTarget className="text-4xl" />,
      title: "Our Mission",
      body: "Our mission is to provide reliable, efficient, and safe transportation services that exceed our customers' expectations. We aim to build long-term partnerships with our clients by offering personalized solutions and exceptional customer service.",
    },
    {
      img: <FaEye className="text-4xl" />,
      title: "Our Vision",
      body: "To be the leading haulage and trucking company, recognized for our commitment to quality, safety, and sustainability. We strive to set new standards in the transportation industry through innovation, integrity, and a customer-centric approach.",
    },
    {
      img: <FaAward className="text-4xl" />,
      title: "Our Philoposhy",
      body: "Our philosophy is not just about what we do but how we do it. We believe in driving forward with purpose, ensuring that every action we take is aligned with our core values and long-term vision. This purpose-driven approach empowers us to make meaningful contributions to our clients' success, our industry's advancement, and our community's well-being.",
    },
    {
      img: <IoDiamondOutline className="text-4xl" />,
      title: "Our Culture",
      body: "The culture at Kratos Trucking is one of collaboration, innovation, and continuous improvement. We foster an environment where every team member is valued, empowered, and motivated to contribute their best. Our culture is the driving force behind our ability to deliver exceptional service and achieve sustained growth.",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="w-full my-20 xl:px-40 px-5 max-sm:mb-[200px] min-h-[70vh] relative">
      <div className="container mx-auto flex flex-col lg:flex-row gap-20 py-10 md:py-28 items-center ">
        <div
          className="bg-primaryColors text-white space-y-10 rounded-lg py-10 md:py-20 px-10 md:px-20 flex-[50%]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h1 className="text-4xl leading-6 font-semibold">Who we are</h1>
          <hr className="bg-secondaryColors" />
          <p>
            Founded with a vision to redefine the haulage and trucking industry,
            Kratos Trucking is a premier transportation company committed to
            delivering exceptional service and unmatched reliability. With our
            deep industry expertise and a relentless focus on innovation, we
            have established ourselves as a trusted partner for businesses
            across various sectors.
            <br />
            <br />
            The success of this Company has been accomplished by virtue of the principles and beliefs fused into it by the Founder and Chairman, Alhaji Adamu Iddrisu. This is a man who demands HONESTY, HARD WORK and LOYALTY which he believes must permeate the entire business organization.
          </p>
          <button className="px-6 py-3 text-white border-2 border-white">
            Read More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-sm:gap-10 flex-[50%]">
          {about.map((abou) => (
            <div
              className=" space-y-3 max-md:px-8"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <p>{abou.img}</p>
              <p className="text-primaryColors text-3xl font-semibold">
                {abou.title}
              </p>
              <p>{abou.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
