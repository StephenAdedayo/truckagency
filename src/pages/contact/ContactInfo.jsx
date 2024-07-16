import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const ContactInfo = () => {


  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="my-40 px-5 lg:px-40 w-full">
      <div className="container mx-auto flex flex-col gap-10 lg:flex-row py-10 px-10 shadow-xl bg-white">
         
     <div className=" flex-[30%]">
      <img className=" " src="/aboutbgcus.jpg" alt="" />
      <div className="w-full  bg-black flex justify-center items-center backdrop-blur-lg bg-opacity-40"></div>
     </div>
      


     <div className="flex-[70%]">
<p className="text-xl text-primaryColors font-bold mb-5">Get In Touch</p>
<p className="mb-5 ">To contact us, kindly complete the form below and we will respond withing 24hours.</p>


<form action="" className="space-y-5">
  <div className="md:space-x-5 max-md:space-y-5 flex md:flex-row flex-col">
  <input className="px-6 py-3 w-full outline-none border border-1 border-gray-400" type="text" placeholder="Name"/>
  <input className="px-6 py-3 w-full outline-none border border-1 border-gray-400" type="email" placeholder="Email" /> <br /> <br />
  </div>
  <div className="md:space-x-5 max-md:space-y-5 flex md:flex-row flex-col">
  <input className="px-6 py-3 w-full outline-none border border-1 border-gray-400" type="phone" placeholder="Phone"/>
  <select className="bg-slate-50 text-lg  w-full px-6 py-3  outline-none border border-1 border-gray-400  " name="" id="">
    <option className="" value="Select Your Service">Services</option>
    <option value="">Haulage and Transportation</option>
    <option value="">Freight and Logistics</option>
    <option value="">Warehousing and Storage</option>
  </select> <br /> <br />
  </div>

  <textarea name="" id="" placeholder="Additional Information" className="px-6 py-3 w-full outline-none border border-1 border-gray-400" cols={80} rows={10}></textarea>
     <button className="w-full mt-5 bg-primaryColors text-white px-6 py-3">Submit Request</button>
</form>


     </div>


      </div>
    </section>
  );
};

export default ContactInfo;
