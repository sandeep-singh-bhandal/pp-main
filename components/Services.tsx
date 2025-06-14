import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <section className="py-[100px] max-sm:py-[50px] flex flex-col w-full bg-white">
        <div className="w-3/4 mx-auto max-sm:w-11/12">
          <div className="mb-[50px] flex flex-col items-center">
            <h1 className="text-[46px] text-[#222222] font-bold max-sm:text-4xl">
              Why Choose Us
            </h1>
            <p className="text-center leading-[1.8em] text-[18px] text-[#313131] font-[500] mt-[18px]">
              We have earned a reputed position in the market by offering high
              quality medicines at nominal prices. <br /> Owing to the following
              reasons, we have got the edge over other market players
            </p>
          </div>
          <div className="flex flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="lg:w-4/12 md:w-1/2 w-full py-[50px] px-[30px] max-sm:py-[30px]">
                <CiDeliveryTruck className="h-10 w-10 text-[#1bb399]"/>
                <h1 className="text-[22px] font-bold text-[#222222]">
                  High Efficiency
                </h1>
                <p className="font-[17px] leading-[1.7em] mt-[12px] text-[#000000]/70">
                  We have high quality, affordable and innovative medicines
                  solutions as per customer&apos;s choice and requirement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services
