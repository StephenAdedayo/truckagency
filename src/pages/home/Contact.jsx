import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="my-20 lg:px-20 px-4 bg-secondaryColors py-24 text-white -mb-[80px]">
      <div className="container mx-auto">
        <div></div>

        <div className="space-y-10 text-center">
          <p
            className="text-5xl font-semibold"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Get A Free Estimate
          </p>
          <p data-aos="fade-up" data-aos-duration="600">
            Interested in working with us? Just give us a call and we can supply
            you with the aggregates, soils or fill that you need to complete
            your project.
          </p>
          <p data-aos="fade-up" data-aos-duration="600">
            Our quotation is free of charge and there is no commitment needed.
          </p>
          <div className="mt-[20px] space-x-5 max-sm:flex max-sm:flex-col max-sm:space-x-0 max-sm:space-y-3 ">
            <Link
              to="/"
              className="md:py-5 md:px-10 px-4 py-3 border border-white rounded-lg hover:bg-white hover:text-black"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Call us 1800 123 456
            </Link>
            <Link
              to="/"
              className="md:py-5 md:px-10 px-4 py-3 capitalize bg-white text-black rounded-lg hover:bg-transparent hover:text-white hover:border-2"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Get a free estimate <FaArrowRight className="inline-flex" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
