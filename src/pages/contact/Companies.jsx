import React from "react";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";

const Companies = () => {
  const [logo, setLogo] = useState([
    { img: "/Vector.png", text: "WebFlow", key: 1 },
    { img: "/Vector.png", text: "WebFlow", key: 2 },
    { img: "/Vector.png", text: "WebFlow", key: 3 },
    { img: "/Vector.png", text: "WebFlow", key: 4 },
    { img: "/Vector.png", text: "WebFlow", key: 5 },
  ]);

  return (
    <div className="my-20 px-4 lg:px-20">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="max-sm:text-center">
          <p>
            Trusted by the world's best companies [social proof to build
            credibility]
          </p>
        </div>

        <div className="flex  flex-wrap items-center w-full max-md:mt-[30px]   justify-around">
          {logo.map((log) => (
            <div key={log.id} className="flex space-x-3">
              <img src={log.img} alt="" />
              <p className="">{log.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
