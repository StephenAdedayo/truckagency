import React from "react";

const WordsAbout = () => {
  return (
    <section className="lg:px-40 px-5 my-20 max-w-screen-2xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
        <div className="space-y-5 max-md:text-center text-gray-950 rounded-lg  py-[40px] px-5">
          <p className="text-4xl font-semibold text-secondaryColors">
            Our Company
          </p>
          <hr />
          <p className="italic font-semibold text-2xl">About KRATOS trucking</p>
          <p className="text-gray-700">
            "At Kratos Trucking, our main goal is to have you looking AT your
            material, rather than FOR your material."
          </p>
          <p className="text-gray-700">
            {" "}
            We specialize in supplying the landscaping, excavating, as well as
            the Pool industry with various building materials, such as
            aggregates, sands, topsoil, triple mixes, etc. Delivering & Picking
            up directly to and from job sites, as well as yard inventory
            management which can also include refuse bin emptying.
          </p>
          <p className="text-gray-700">
            Whether the customer is on site or not, our professional operators
            are more than capable of operating most all types of equipment in
            order to "self load" in a professional, efficient and safe fashion.
            Allowing our customers to focus on their client's jobs, as well as,
            allowing our customers the added benefit of saving on costly lost
            man hours to facilitate the removal of clean fill.
          </p>
        </div>

        <div className="grid place-content-center">
          <img
            src="https://images.pexels.com/photos/10352106/pexels-photo-10352106.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-[650px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default WordsAbout;
