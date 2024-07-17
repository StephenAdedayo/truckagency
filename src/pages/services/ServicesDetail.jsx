import React, { useState } from "react";


const ServicesDetail = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Haulage & Transportation",
    "Freight & Logistics Services",
    "Warehousing & Storage",
  ];

  return (
    <section>
      <div className="px-5 py-20 md:py-40 md:px-40">
        <div className="flex flex-col  md:flex-row justify-between border-b">
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
        <div className="p-4 ">
          {activeTab === 0 && (
            <div>
              <div>
                <div className="my-10">
                  <img
                    src="https://res.cloudinary.com/ddpzz4n4i/image/upload/v1721167869/man-working-as-truck-driver_joh6gu.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    Efficient and Reliable Haulage & Transportation
                  </h1>
                  <p className="mb-7">
                    At Kratos Trucking, we understand the critical importance of
                    efficient and reliable transportation for your business. Our
                    Haulage & Transportation services are designed to ensure
                    your goods are delivered safely and on time, no matter the
                    distance.
                  </p>
                  <h4 className="text-xl font-bold">Key Features:</h4>
                  <ul className="list-disc space-y-3 ">
                    <li>
                      Comprehensive Fleet: Our modern and well-maintained fleet
                      includes a variety of vehicles such as dry vans, flatbeds,
                      and refrigerated trucks, capable of handling all types of
                      cargo.
                    </li>

                    <li>
                      Professional Drivers: Our team of highly skilled and
                      experienced drivers is trained to manage all logistics
                      challenges, ensuring your cargo reaches its destination
                      securely.
                    </li>

                    <li>
                      Customized Solutions: We provide tailored transportation
                      solutions to meet the unique needs of each client, whether
                      it's a one-time shipment or ongoing transportation
                      requirements.
                    </li>

                    <li>
                      Real-Time Tracking: Stay informed with our
                      state-of-the-art GPS tracking system that offers real-time
                      updates on your shipment's status.
                    </li>

                    <li>
                      Safety First: We prioritize the safety of your goods with
                      rigorous safety protocols and compliance with all
                      regulatory standards.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold my-4">Industries Served:</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Retail</h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Construction</h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Agriculture</h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Automotive </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Healthcare</h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">Manufacturing</h1>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <div>
                <div className="my-10">
                  <img
                    src="https://res.cloudinary.com/ddpzz4n4i/image/upload/v1721169348/industrial-port-container-yard_pxjn7s.jpg"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold mb-4">
                    Comprehensive Freight & Logistics Solutions
                  </h1>
                  <p className="mb-7">
                    Kratos Trucking offers a full suite of Freight & Logistics
                    services designed to streamline your supply chain and
                    enhance efficiency. From planning and coordination to
                    execution and delivery, we handle every aspect of your
                    logistics needs.
                  </p>
                  <h4 className="text-xl font-bold">Key Features:</h4>
                  <ul className="list-disc space-y-3 ">
                    <li>
                      End-to-End Logistics: We manage the entire logistics
                      process, from pickup to final delivery, ensuring seamless
                      coordination and execution.
                    </li>

                    <li>
                      Flexible Shipping Options: Choose from a range of shipping
                      options including Full Truckload (FTL), Less Than
                      Truckload (LTL), and expedited shipping to best suit your
                      needs.
                    </li>

                    <li>
                      Specialized Freight: We handle specialized and oversized
                      freight with expertise, ensuring safe and secure
                      transportation of machinery, heavy equipment, and other
                      non-standard items.
                    </li>

                    <li>
                      Customs and Compliance: Our team is well-versed in customs
                      regulations and compliance, facilitating smooth
                      international shipping and minimizing delays.
                    </li>

                    <li>
                      Logistics Consulting: Benefit from our logistics
                      consulting services to optimize your supply chain, reduce
                      costs, and improve operational efficiency.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold my-4">Services Include</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                      Route planning and optimization
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                      Freight forwarding
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                      Customs brokerage
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                      Inventory management
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                      Freight consolidation and deconsolidation
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <div>
                <div className="my-10">
                  <img
                    src="https://res.cloudinary.com/ddpzz4n4i/image/upload/v1721170300/warehouse_hqxqek.png"
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="text-3xl font-bold mb-4">
                  Secure and Flexible Warehousing & Storage Solutions
                  </h1>
                  <p className="mb-7">
                  Kratos Trucking offers secure and flexible warehousing and storage solutions to accommodate your business’s needs. Our facilities are equipped with advanced technology and security measures to ensure your inventory is stored safely and efficiently.
                  </p>
                  <h4 className="text-xl font-bold">Key Features:</h4>
                  <ul className="list-disc space-y-3 ">
                    <li>
                    Modern Facilities: Our state-of-the-art warehouses are equipped with climate control, advanced security systems, and real-time inventory tracking.
                    </li>

                    <li>
                    Flexible Storage Options: We offer short-term and long-term storage solutions to meet your specific requirements, whether you need temporary overflow storage or a permanent warehousing solution.
                    </li>

                    <li>
                    Inventory Management: Our comprehensive inventory management services include receiving, storage, order picking, packing, and shipping, ensuring your products are managed efficiently and accurately.
                    </li>

                    <li>
                    Value-Added Services: We provide a range of value-added services such as kitting, assembly, labeling, and repackaging to streamline your operations.
                    </li>

                    <li>
                    Accessibility and Distribution: Strategically located warehouses ensure easy access and efficient distribution to your customers, reducing transit times and costs.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h1 className="text-xl font-bold my-4">Industry Served</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                    E-commerce
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                    Retail
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                    Manufacturing
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                    Healthcare
                    </h1>
                  </div>

                  <div className="px-5 py-5 bg-primaryColors">
                    <h1 className="text-center text-white">
                    FMCG (Fast-Moving Consumer Goods)
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
