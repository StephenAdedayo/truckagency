import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Customers = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="lg:px-40 px-5 mb-20 -mt-[200px]  max-w-screen-2xl">
      <div className="container mx-auto">
        <div className="mt-[50px] grid grid-cols-1 gap-5 md:grid-cols-2 items-center ">
          <div className="" data-aos="fade-up" data-aos-duration="600">
            <img
              src="https://images.pexels.com/photos/11680715/pexels-photo-11680715.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className=" bg-cover "
            />
          </div>

          <div
            className="space-y-4 bg-white shadow-xl py-20 px-5 w-fit rounded-md "
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <div
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
            </div>
            <p
              className="text-3xl font-bold text-primaryColors"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              We pride ourselves on our custom services and communication to our
              customers.
            </p>
            <p data-aos="fade-up" data-aos-duration="600">
              All of our customers are # 1, whether a homeowner, landscape
              contractor, or pool company, we listen to the job you are working
              on and work with you to complete your task in the best possible
              way. We are not satisfied, until our customer is satisfied.
            </p>

            <div className="flex space-x-5 items-center  ">
              <p className="  ">
                <span
                  className="text-7xl text-primaryColors "
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  18+
                </span>{" "}
                <span /> <br />
                Years of Experience
              </p>

              <div data-aos="fade-up" data-aos-duration="600">
                <li>Reliability</li>
                <li>Accountability</li>
                <li>Great Services</li>
                <li>No Delay</li>
              </div>
            </div>

            <p data-aos="fade-up" data-aos-duration="600">
              Building strong relationships has been the key to our success.
              We’ll work hard for you and you’ll enjoy working with us too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
