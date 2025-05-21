"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";

const Navbar = () => {
  return (
    <header className="w-full h-[135px] flex bg-white fixed top-0 z-10 border-b-2 border-b-[#1db9a0] ">
      <div className="w-3/12 bg-[#1db9a0] pr-[2px] -skew-x-[20deg] ">
        <div className="w-full h-full bg-white flex justify-center items-center ">
          <Image
            src="/images/logo.png"
            alt="PurePride"
            height={200}
            width={200}
            className="skew-x-[20deg]"
          />
        </div>
      </div>
      <div className="w-9/12 flex flex-col">
        <div className="flex flex-row gap-10 px-10 py-3 bg-linear-to-r from-[#1db9a0] to-[#4d94c4] text-white">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>Phone:+91-9993946660</span>
          </div>
          <div className="flex items-center gap-2">
            <TfiAlarmClock />
            <span>Mon-Fri (8am - 4pm)</span>
          </div>
          <div>purepridepharma@gmail.com</div>
        </div>
        <div className="w-8/12 flex py-8 px-16 gap-10 font-[600] text-md">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/products"}>Our Products</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
