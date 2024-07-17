import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" lg:px-40 px-5 bg-primaryColors w-full text-white mb-none py-10 overflow-hidden ">
      <div className="container mx-auto">
        <div className="flex justify-start items-center  flex-col lg:flex-row lg:space-x-20">
          <div className="space-y-2 flex-[50%]  text-start">
            {/* <img src="/logo1.png" className="w-[200px]" alt="" /> */}
            <h1 className="text-[30px] md:text-[48px] font-bold">Kratos Trucking</h1>


            <p className="leading-6"> Founded with a vision to redefine the haulage and trucking industry,
            Kratos Trucking is a premier transportation company committed to
            delivering exceptional service and unmatched reliability. With our
            deep industry expertise and a relentless focus on innovation, we
            have established ourselves as a trusted partner for businesses
            across various sectors.</p>
            
          </div>

          <div className="flex mt-[50px] flex-col sm:flex-row flex-[50%] space-y-10 sm:space-y-0 w-full">
            <div className="flex-[50%] text-start">
              <h1 className="mb-[20px] text-white border-b-2 w-fit">Useful Links</h1>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className=" hover:text-secondaryColors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className=" hover:text-secondaryColors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className=" hover:text-secondaryColors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className=" hover:text-secondaryColors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            

            <div className="flex-[50%]">
              <h1 className="mb-[20px] text-white border-b-2 w-fit">Contact us</h1>

              <ul className="mb-[20px] space-y-3">
                <p>Phone: +1 234 567 890</p>
                <p>Mail: info@Kratostrucking.com</p>
                <p text>Address: Please provide address
                </p>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <hr className="mt-[70px]" />

      <div className="text-center mt-[40px]">
        <p className="">©{currentYear}. All Rights Reserved</p>

        {/* <ul className="flex lg:space-x-10 space-x-5 underline ">
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/">Terms Of Service</Link>
          </li>
          <li>
            <Link to="/">Cookies Settings</Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
