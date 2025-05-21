import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* upper part */}
      <section className="w-full bg-[#f8fafc]">
        <div className="w-3/4 mx-auto flex gap-10 pt-28 pb-18 ">
          <div className="flex flex-col w-1/2">
            <Image src="/images/logo.png" height={170} width={170} alt="logo" />
            <p className="ml-2">
              In order to maintain defined quality standards, these medicines
              are thoroughly tested against numerous quality parameters under
              the guidance of our quality experts.
            </p>
          </div>
          <div className="flex flex-col w-1/4 gap-3">
            <h1 className="carousel-special-2 font-bold text-[22px] ">
              Explore
            </h1>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Our Products</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Privacy Policy</Link>
          </div>
          <div className="flex flex-col w-1/4 gap-3">
            <h1 className="carousel-special-2 font-bold text-[22px]">
              Reach Us
            </h1>
            <Link href={"#"}>
              B-11, Block-B, Ground Floor, Shankar Garden, Vikas Puri New Delhi,
              India 110018
            </Link>
            <Link href={"#"}>+91-9993946660</Link>
            <Link href={"#"}>purepridepharma@gmail.com</Link>
          </div>
        </div>
      </section>
      {/* lower part */}
      <section className="w-full bg-linear-to-r from-[#1db9a0] to-[#4d94c4] py-7 text-white ">
        <div className="w-3/4 mx-auto flex justify-between">

        
        <div>© 2021, Pure Pride Pharma PVT. LTD. All Rights Reserved.</div>
        <div>
          <button>facebook</button>
          <button>linkedin</button>
          <button>twitter</button>
          <button>youtube</button>
        </div></div>
      </section>
    </>
  );
};

export default Footer;
