import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" lg:px-40 px-5 bg-primaryColors w-full text-white mb-none py-10 overflow-hidden ">
      <div className="container mx-auto">
        <div className="flex justify-center items-center  flex-col lg:flex-row lg:space-x-20">
          <div className="space-y-2 flex-[50%]  text-start">
            {/* <img src="/logo1.png" className="w-[200px]" alt="" /> */}
            <h1 className="text-[48px] font-bold">Kratos Trucking</h1>


            <p className="leading-6"> Founded with a vision to redefine the haulage and trucking industry,
            Kratos Trucking is a premier transportation company committed to
            delivering exceptional service and unmatched reliability. With our
            deep industry expertise and a relentless focus on innovation, we
            have established ourselves as a trusted partner for businesses
            across various sectors.</p>
            {/* <p>
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form action="" className="flex gap-2 flex-col ">
              <input
                type="email"
                placeholder="email address"
                className="border  w-fit rounded-lg border-l-0 border-white px-6 py-3"
              />
              <button
                type="submit"
                className="border border-white px-6 py-3 w-fit rounded-lg"
              >
                Subscribe
              </button>
            </form>
            <p>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p> */}
          </div>

          <div className="flex mt-[50px] flex-col  sm:flex-row flex-[50%] space-y-10 sm:space-y-0 ">
            <div className="flex-[50%]">
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

            {/* <div>
              <h1 className="mb-[20px] text-secondaryColors">Our Services</h1>
              <ul className="space-y-3 ">
                <li>
                  <Link to="/" className=" hover:text-secondaryColors">
                    Gravel, Aggregate, Soil & Fill Delivery
                  </Link>
                </li>
                <li>
                  <Link to="/about" className=" hover:text-secondaryColors">
                    Dirt, Rubble & Snow Removal
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className=" hover:text-secondaryColors">
                    Bin Rentals
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" hover:text-secondaryColors">
                    Contractor Yard Supply
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" hover:text-secondaryColors">
                    Screener
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className=" hover:text-secondaryColors">
                    Excavation Partner
                  </Link>
                </li>
              </ul>
            </div> */}

            <div className="flex-[50%]">
              <h1 className="mb-[20px] text-white border-b-2 w-fit">Contact us</h1>

              <ul className="mb-[20px] space-y-3">
                {/* <p className=" hover:text-secondaryColors">Order Desk</p> */}
                <p>Phone: +234 906 544 1111</p>
                {/* <p className=" hover:text-secondaryColors">289-768-8710</p> */}
                {/* <p className=" hover:text-secondaryColors">email</p> */}
                <p>Mail: info@moahzoilandgasld.com</p>
                <p text>Address: 6th floor, Workbay Building, 3/9 Olu-Koleosho street, off Simbiat Abiola Rd, Ikeja, Lagos, Nigeria
                </p>
              </ul>

              {/* <ul className="space-y-1  ">
                <p className=" hover:text-secondaryColors">Office:</p>
                <p className=" hover:text-secondaryColors">289-768-9161</p>
                <p className=" hover:text-secondaryColors">email</p>
              </ul>

              <div className="flex space-x-3 mt-2">
                <FaInstagram />
                <FaXTwitter />
                <FaFacebook />
                <FaLinkedin />
              </div> */}
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
