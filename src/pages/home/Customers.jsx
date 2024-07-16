import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Tabs from "../../components/Tabs";

const Customers = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="  ">
      <div className="container mx-auto">
        <div className=" grid  items-center ">


          <div
            className=" bg-white shadow-xl py-24 xl:px-20 px-4 w-fit md:h-[700px]  "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            
    <h1 className="text-[48px] font-bold mb-[10px]">Why Choose Us</h1>

            <p
              className="text-base mb-[60px]  text-black font-semibold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
            At Kratos Trucking, we understand that choosing the right transportation partner is crucial for your business's success. Here’s why Kratos Trucking stands out as your preferred choice for haulage, freight, and logistics services:
            </p>
 
            <div className="">
            <Tabs />
            </div>
      

          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
