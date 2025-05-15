import Image from "next/image";
import React from "react";

const BoxComponent = () => {
  return (
    <section className="relative flex w-8/12 gap-25 justify-center mx-auto mt-10">
      <div className="w-1/2 ">
        <div className="w-[500px] h-[500px]">
          <Image
            src={"/about1.jpg"}
            height={500}
            width={500}
            alt="image"
            className="-translate-10 shadow-[0_0_25px_rgba(0,0,0,0.5)]"
          />
          <div className="h-[500px] w-[500px] bg-white opacity-90 absolute left-0 top-0 -z-2 -translate-5 shadow-[0_0_25px_rgba(0,0,0,0.5)]"></div>
          <div className="h-[500px] w-[500px] bg-[#15927D] absolute left-0 top-0 -z-3 shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            <Image src={'/icons/video-icon-1.png'} height={80} width={80} alt="icon" className=" absolute right-[-53px] top-1/3"/>
            <Image src={'/icons/video-icon-2.png'} height={80} width={80} alt="icon" className="absolute bottom-[-58px] left-5/12"/>
          </div>
          <div className="h-[500px] w-[500px] bg-white opacity-90 absolute left-0 top-0 -z-4 translate-5 shadow-[0_0_25px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-[46px] mb-[35px] text-[#223a66] font-[700] carousel-special-2">About Us</h1>
        <p className="text-[18px] text-[#223a66] mb-[20px] leading-[1.7em] ">
          Leveraging on our high quality standards, we have been successful in
          keeping our clients satisfy who are spread across the market. Owing
          the consistent efforts and strong will power of our adept personnel,
          we have been able to deliver quality assured medicines for clients
          within the fixed time frame. Our adroit professionals work in a close
          coordination to meet the predefined goals of our prestigious entity.
          In order to maintain defined quality standards, these medicines are
          thoroughly tested against numerous quality parameters under the
          guidance of our quality experts.
        </p>
      </div>
    </section>
  );
};

export default BoxComponent;
