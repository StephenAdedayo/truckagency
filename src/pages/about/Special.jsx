import React from "react";

const Special = () => {
  return (
    <section className='lg:px-20 px-4 mb-20 max-w-screen-2xl h-[100vh] bg-cover bg-fixed bg-[url("https://res.cloudinary.com/dfuse3jtq/image/upload/v1720603403/pexels-quintingellar-2199293_1_bvluux.png")] '>
      <div className="container mx-auto flex justify-center h-full text-center items-center ">
        <div className="space-y-10 ">
          <h1 className="lg:text-6xl text-4xl text-white" data-aos="fade-up" data-aos-duration="600">About Us</h1>

          <p className="lg:text-4xl text-2xl  text-white" data-aos="fade-up" data-aos-duration="600">
            We pride ourselves with our custom services and <br />
            communication to our customers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Special;
