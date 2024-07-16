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
    <section className="lg:px-40 px-5 mb-20 -mt-[200px]  w-full">
      <div className="container mx-auto">
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 items-center ">
          <div className="h-[700px]"  data-aos="fade-up" data-aos-duration="600">
            <img
              src="https://images.pexels.com/photos/9805551/pexels-photo-9805551.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className=" bg-cover h-full w-full"
            />
          </div>

          <div
            className=" space-y-10 bg-white shadow-xl py-20 xl:px-14 px-4 w-fit md:h-[700px]  "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            {/* <div
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <FaStar className="text-primaryColors" />
              <FaStar className="text-primaryColors" />
              <FaStar className="text-primaryColors" />
              <FaStar className="text-primaryColors" />
              <FaStar className="text-primaryColors" />

              <FaStar className="text-primaryColors" />
            </div> */}
            <p
              className="text-base  text-black font-semibold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
            At Kratos Trucking, we understand that choosing the right transportation partner is crucial for your business's success. Here’s why Kratos Trucking stands out as your preferred choice for haulage, freight, and logistics services:
            </p>
 
            <div>
            <Tabs />
            </div>
      
            {/* <div className="flex space-x-5 items-center  ">
              <p className="  ">
                <span
                  className="text-7xl text-primaryColors italic"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  18+
                </span>{" "}
                <span /> <br />
                Years of Experience
              </p> */}

              {/* <div data-aos="fade-up" data-aos-duration="600" className="leading-5 text-gray-800 ">
                <li>Reliability</li>
                <li>Accountability</li>
                <li>Great Services</li>
                <li>No Delay</li>
              </div>
            </div> */}

            {/* <p data-aos="fade-up" data-aos-duration="600" className="leading-5 text-gray-800 ">
              Building strong relationships has been the key to our success.
              We’ll work hard for you and you’ll enjoy working with us.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
