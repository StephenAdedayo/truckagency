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
    <section className="mt-40 w-full lg:px-40 px-4 bg-secondaryColors py-24 text-white ">
      <div className="container mx-auto flex flex-col xl:flex-row gap-10">
        

        <div className="flex-[50%]">
          <p className="text-[40px] font-bold mb-5">For Enquires</p>
          <p>Get in touch! Whether you have a question, suggestion, or just want to say hello, we’re all ears. Reach out to our friendly team and let’s start a conversation. Your feedback matters!</p>
        </div>


        <div className="flex-[50%]  flex flex-col  ">
          
       <form action="" className="flex gap-5 flex-col lg:flex-row  w-full ">
        
        <input type="text" placeholder="Full Name" className="py-3 w-full lg:px-10 px-6 text-black"/>
        <input type="email" className="py-3 lg:px-10 px-6 w-full text-black" placeholder="Email"/> 
        

        
       </form>
       <div>
       <button className="px-10 py-3 mt-3 w-full text-center bg-primaryColors" >Send</button>
       </div>



        </div>

        {/* <div className="space-y-10 text-center">
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
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
