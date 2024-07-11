import React, { useEffect, useState } from "react";
import vector from "/Vector.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiTarget } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const About = () => {
  const [about, setAbout] = useState([
    {
      img: <FiTarget />,
      title: "Our Mission",
      body: "is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity.",
    },
    {
      img: <FaEye />,
      title: "Our Vision",
      body: "is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity.",
    },
    {
      img: <IoDiamondOutline />,
      title: "Our Philoposhy",
      body: "is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity.",
    },
    {
      img: <IoDiamondOutline />,
      title: "Our Culture",
      body: "is to elevate quality of lives by developing solutions and products that improve their wealth, health and productivity.",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="max-w-screen-2xl my-20 xl:px-40 px-5 max-sm:mb-[200px] min-h-[70vh] relative">
      <div className="container mx-auto flex flex-col md:flex-row gap-20 ">
        <div
          className="bg-primaryColors text-white space-y-10 rounded-lg py-20 px-10 flex-[50%]   -mt-[200px]"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h1 className="text-4xl leading-6 font-semibold">Who we are</h1>
          <hr />
          <p>
            Kratos truck is an independent truck trading company specializing in
            the sales, distribution and storage of petroleum and cooking gas as
            well as related products. It’s ideally located in Lagos, Nigeria.
            Through its extensive network and specialized understanding of the
            global energy markets, Moahz Oil and Gas Limited provides its
            clients and partners access to innovative and competitive supply
            solutions of hydrocarbon and related products. From physical supply
            of petroleum products to investment in energy projects, its team of
            diversified professionals is always committed to providing cost
            effective, transparent and timing solutions.
          </p>
          <button className="px-6 py-3 text-white border-2 border-white">
            Read More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-sm:gap-10 flex-[50%]">
          {about.map((abou) => (
            <div
              className=" space-y-3"
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
