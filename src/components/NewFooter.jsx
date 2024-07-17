import React from "react";
import { Link } from "react-router-dom";

const NewFooter = () => {
  return (
    <footer className="bg-primaryColors w-full  h-[50vh] px-40 py-20">
      <div className="container mx-auto flex flex-col w-full  justify-between items-center border-2 gap-10">
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl text-white font-bold">Kratos Trucking</h1>
          <p className="text-white leading-6">
            Founded with a vision to redefine the haulage and trucking industry,
            Kratos Trucking is a premier transportation company committed to
            delivering exceptional service and unmatched reliability. With our
            deep industry expertise and a relentless focus on innovation, we
            have established ourselves as a trusted partner for businesses
            across various sectors.
          </p>
        </div>

        <div className="text-white space-y-10">
          <h1 className="text-lg font-bold">Useful Links</h1>
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
              <Link to="/contact-us" className=" hover:text-secondaryColors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h1>Contact Us</h1>
          <ul className="mb-[20px] space-y-3">
            <p>Phone: +1 234 567 890</p>
            <p>Mail: info@Kratostrucking.com</p>
            <p text>Address: Please provide address</p>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
