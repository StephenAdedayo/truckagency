import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";




  

const WordsAbout = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className="lg:px-40 px-5 my-20 md:my-40  w-full relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
        <div className="space-y-5  text-gray-950 rounded-lg  py-[40px] px-5">
          <p className="text-4xl font-semibold text-secondaryColors" data-aos="fade-up" data-aos-duration="600">
            Our Company
          </p>
          <hr />
          {/* <p className="italic font-semibold text-2xl" data-aos="fade-up" data-aos-duration="600">About KRATOS trucking</p> */}
          <p className="text-gray-700" data-aos="fade-up" data-aos-duration="600">
            "At Kratos Trucking, our main goal is to have you looking AT your
            material, rather than FOR your material."
          </p>
          <p className="text-gray-700" data-aos="fade-up" data-aos-duration="600">
            {" "}
            We specialize in supplying the landscaping, excavating, as well as
            the Pool industry with various building materials, such as
            aggregates, sands, topsoil, triple mixes, etc. Delivering & Picking
            up directly to and from job sites, as well as yard inventory
            management which can also include refuse bin emptying.
          </p>
          <p className="text-gray-700" data-aos="fade-up" data-aos-duration="600">
            Whether the customer is on site or not, our professional operators
            are more than capable of operating most all types of equipment in
            order to "self load" in a professional, efficient and safe fashion.
            Allowing our customers to focus on their client's jobs, as well as,
            allowing our customers the added benefit of saving on costly lost
            man hours to facilitate the removal of clean fill.
          </p>

          <Link to="/services">
          <button className="capitalize px-6 py-3 bg-primaryColors border border-white text-white mt-6">
          View Services
              </button>
              </Link>
        </div>

        <div className="grid place-content-center" data-aos="fade-up" data-aos-duration="600">
          <img
            src="https://res.cloudinary.com/ddpzz4n4i/image/upload/v1721165030/man-working-as-truck-driver-posing_wfvasi.png"
            alt=""
            className="w-70%]"
          />
        </div>
      </div>



    </section>
  );
};

export default WordsAbout;
