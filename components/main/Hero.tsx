"use client";
import * as React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GreenComponents from "../sub/GreenComponents";
import BoxComponent from "../sub/BoxComponent";

const Hero = () => {
  return (
    <>
      <section className="z-3">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent>
                    <div>
                      <Image
                        src="/carousel/1.jpg"
                        alt="Home"
                        height={1000}
                        width={1000}
                        className="w-full h-full"
                      />
                      <div className="absolute top-0 flex items-center justify-between w-full h-full">
                        <div className="flex flex-col h-full justify-center w-1/2 pl-50">
                          <h1 className="text-white underline text-[26px] mb-[18px] carousel-special italic font-[700]">
                            Pharmaceutical
                          </h1>
                          <span className="text-[54px] text-white mb-[25px] font-[700] carousel-special-2 leading-[1.2em]">
                            Best healthcare <br />
                            solution
                          </span>
                          <button className="w-fit text-white  bg-[#223A66] py-[14px] px-[53px] rounded-full flex items-center gap-2">
                            {" "}
                            Our Products{" "}
                            <IoIosArrowForward className="scale-125" />{" "}
                          </button>
                        </div>
                        <div className="w-1/2">
                          <Image
                            src="/carousel/banner1.png"
                            alt="Home"
                            height={500}
                            width={500}
                            className="h-full w-[660px]"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
        <GreenComponents />
      </section>
      <section className="py-[100px] flex flex-col w-full">
        <div className="w-3/4 mx-auto">
          <div className="mb-[50px] flex flex-col items-center">
            <h1 className="text-[46px] text-[#222222] font-bold">
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
              <div key={index} className="w-4/12 py-[50px] px-[30px]">
                <CiDeliveryTruck className="h-10 w-10 text-[#1bb399]" />
                <h1 className="text-[22px] font-bold text-[#222222]">
                  High Efficiency
                </h1>
                <p className="font-[17px] leading-[1.7em] mt-[12px] text-[#000000]/70">
                  We have high quality, affordable and innovative medicines
                  solutions as per customer's choice and requirement.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BoxComponent />
      <section className="mt-40 w-3/4 text-center mb-[1000000px]">
        <h1 className="max-w-[800px] mx-auto text-[#222] text-[46px] leading-[1.2em] font-[700] carousel-speacial-2">
          Our Latest Product
        </h1>
        <p className="max-w-[850px] mx-auto text-[#313131] text-[18px] font-[500] leading-[1.8em] mt-[18px] mb-[50px] ">
          The company is dedicated to boosting access to high-quality healthcare
          services by producing and marketing reasonably priced pharmaceutical
          products.
        </p>
        <div className="flex overflow-hidden">
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="mr-10">
              <Image
                src="/products/arzino.png"
                height={300}
                width={300}
                alt="product"
                className="max-w-[250px] h-auto"
              ></Image>
              <div className="border-[1px] border-[#f5f5f5] pb-[32px] ">
                <h1 className="mt-[10px] text-[20px] leading-[1.3em] font-[700] ">Arzino</h1>
                <p className="text-[#222] font-[400] mt-[4px] text-[13px] ">Rs. 150</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
