import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactInfo = () => {


  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="my-20 px-5 lg:px-40 w-full">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center min-h-[100vh]">
        <div className="mt-[100px]">
          <h1 className="text-2xl mb-[20px]" data-aos="fade-up" data-aos-duration ="600">Contact Us</h1>
          <p className="text-lg mb-[20px]" data-aos="fade-up" data-aos-duration ="600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, non.
          </p>
          <form action="" className="space-y-4" data-aos="fade-up" data-aos-duration ="600">
            <label for="">Name</label> <br />
            <input
              type="text"
              className="outline-none bg-gray-100 w-full px-5 py-5 rounded-lg"
              placeholder=""
            />{" "}
            <br />
            <br />
            <label For="">Email</label> <br />
            <input
              type="email"
              className="outline-none bg-gray-100 w-full px-5 py-5 rounded-lg"
              placeholder=""
            />{" "}
            <br />
            <br />
            <textarea
              name=""
              id=""
              cols="30"
              rows="15"
              className="w-full rounded-lg outline-none p-5 bg-gray-100 "
              placeholder="Type Your Message"
            ></textarea>
            <input type="checkbox" /> <label For="">I accept The Terms</label>{" "}
            <br />
            <button
              type="submit"
              className="text-white bg-indigo-800 px-6 py-3 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
