import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const socialMedia = [
    {
      img: <FaEnvelope />,
      title: "Email",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: "email",
    },
    {
      img: <FaMessage />,
      title: "Live Chat",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: "Start New Chat",
    },
    {
      img: <FaPhoneAlt />,
      title: "Phone",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.",
      link: "+1 0100 1000",
    },
    {
      img: <FaMapMarkerAlt />,
      title: "Office",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "123 Sample St, Sydney NSW 2000 AU",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-40 items-center justify-center max-md:mb-[300px]  lg:grid-cols-4 px-5 lg:px-40  gap-10">
      {socialMedia.map((media) => (
        <div className="space-y-4 bg-white shadow-xl py-[20px] px-5 rounded-lg hover:bg-secondaryColors hover:text-white hover:transition-all hover:duration-300 hover:delay-100 hover:scale-105">
          <p>{media.img}</p>
          <p>{media.title}</p>
          <p>{media.body}</p>
          <Link to="" className="underline">
            {media.link}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
