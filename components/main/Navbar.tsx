"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <header className="bg-white w-full z-1">
      {/* Top Header  */}
      <div
        className="h-11 bg-linear-to-r from-[#1db9a0] to-[#4d94c4] flex justify-around items-center  
        text-white  text-[14px] font-bold"
      >
        <div className="flex gap-12 ml-96">
          <div className="flex gap-2.5">
            <FaPhoneAlt className="text-white scale-110 mt-0.5" />
            <span>Phone:+91-9993946660</span>
          </div>
          <div className="flex gap-2.5">
            <TfiAlarmClock className="text-white scale-110 mt-0.5" />
            <span>Mon-Fri (8am - 4pm)</span>
          </div>
          <div className="flex items-center">purepridepharma@gmail.com</div>
        </div>
        <HiOutlineMenuAlt3 className="h-8 w-8 scale-x-130 mr-30"/>
      </div>
      {/* Bottom header  */}
      <div className="w-full h-28 relative -top-4 flex items-center z-2 gap-20">
        {/* logo  */}
        <div className="w-3/12 h-full inline-block ml-8 mt-3">
          <Image
            src="/images/logo.png"
            alt="PurePride"
            height={180}
            width={180}
            className="float-right"
          />
        </div>

        {/* navigation links */}
        <div className="w-9/12 flex gap-7 text-[15px] font-bold mt-2">
          <Link href={""}>Home</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Our Products</Link>
          <Link href={""}>Contact Us</Link>
        </div>
      </div>
      {/* slanting line  */}
      <div className=" h-full w-4/12 absolute -top-35 -left-40 bg-linear-to-l from-[#1db9a0] to-[#4d94c4] pr-[1px] -skew-x-[25deg] z-1">
        <div className="bg-white h-full w-full"></div>
      </div>
    </header>
  );
};

export default Navbar;
