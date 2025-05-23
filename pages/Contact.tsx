import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { BsChatDotsFill } from "react-icons/bs";
import { IoIosMail, IoIosContact } from "react-icons/io";
import { RiMailSendLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="mt-[135px] py-20 w-3/4 mx-auto flex gap-32">
      <div className="w-1/2">
        <h1 className="exo text-[46px] text-[#222222] font-[700] ">
          Get in Touch
        </h1>
        <p className="text-[18px] text-[#313131] mt-[15px] font-[500] leading-[1.8em]">
          We are awaiting your valued enquiry and the opportunity to offer our
          most competitive quotation.
        </p>
        <div className="flex flex-wrap mt-20">
          {Array.from({ length: 4 }).map((item, index) => (
            <div className="w-1/2 mb-20" key={index}>
              <MdLocationOn className="text-[#1CBA9F] scale-[3.3] mb-8 ml-2" />
              <h1 className="exo text-[22px] mt-[18px] mb-[10px] text-[#22222] font-[700] leading-[1.4em] ">
                Address
              </h1>
              <span className="text-[16px] text-[rgba(34_34_34),0.7] roboto font-[400] leading-[1.7em]">
                NeuSource Startup Minds India Limited B-11, Block-B, Ground
                Floor, Shankar Garden, Vikas Puri New Delhi, India 110018
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="min-h-screen flex flex-col px-16 pt-24  ml-16 bg-[#223a66e6] w-1/2 h-1/2 text-white">
        <h2 className="text-lg font-semibold mb-3 exo">Enquiry Form</h2>
        <h1 className="text-4xl font-bold mb-10 exo">Drop us a Message</h1>

        <form className="space-y-6">
          {Array.from({ length: 4 }).map((item, index) => (
            <div className="border-b border-gray-500 focus-within:border-[#1CBA9F] transition-all duration-500 flex items-center py-2 relative">
              <span className="mr-3 text-gray-300">
                <IoIosContact className="text-white scale-150 absolute top-3" />
              </span>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-300 pb-2 pl-3"
              /> 
            </div>
          ))}

          <div className="pt-6">
            <button
              type="submit"
              className="bg-white text-[#2f4568] hover:text-white border-2 cursor-pointer border-white hover:bg-transparent w-full py-3 rounded-full font-semibold transition"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
