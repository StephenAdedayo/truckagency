import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Experienced and Professional Team",
    "Comprehensive Services",
    "Customer-Centric Approach",
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row border-b">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-4 ${
              activeTab === index
                ? "border-b-2 bg-secondaryColors text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="p-4">
        {activeTab === 0 && (
          <div>
            <span className="font-bold">Skilled Drivers:</span> Our team of
            professional drivers is highly trained and experienced, ensuring the
            safe and timely delivery of your goods.
            <br />
            <br />
            <span className="font-bold">Dedicated Support Staff:</span> Our
            logistics coordinators, customer service representatives, and
            support staff are committed to providing exceptional service and
            support.
            <br />
            <br />
            <span className="font-bold">Safety Protocols:</span> Our We
            prioritize the safety of your goods with rigorous safety protocols
            and adherence to all regulatory standards.
            <br />
            <br />
            <span className="font-bold">Training Programs:</span> Our Continuous
            training ensures our team is up-to-date with the latest safety
            practices and industry regulations.
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <span className="font-bold">Haulage & Transportation:</span> Reliable and efficient transportation services for all types of cargo, ensuring timely and secure delivery.
            <br />
            <br />
            <span className="font-bold">Freight & Logistics:</span>Comprehensive logistics solutions, including freight forwarding, customs brokerage, and inventory management.
            <br />
            <br />
            <span className="font-bold">Warehousing & Storage:</span>Secure and flexible warehousing options with advanced inventory management and value-added services.
          </div>
        )}
        {activeTab === 2 && <div>
            <span className="font-bold">Tailored Solutions:</span>{" "} We provide customized transportation solutions that meet the unique needs of each client, from one-time shipments to ongoing logistics support.
            <br />
            <br />
            <span className="font-bold">Responsive Service:</span>{" "} COur customer service team is available to assist you with any inquiries or concerns, ensuring a smooth and hassle-free experience.

            </div>}
      </div>
    </div>
  );
};

export default Tabs;
