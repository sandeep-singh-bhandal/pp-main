"use client";
import * as React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { Card, CardContent } from "@/components/ShadCN/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ShadCN/Carousel";
import GreenOverlay from "../components/GreenOverlay";
import { IoPricetagOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";
import Services from "@/components/Services";
import Clients from "@/components/Clients";


const Hero = () => {
  return (
    <>
      <section className="mt-[135px] max-[640px]:mt-[80px]">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent>
                    <div className="relative h-screen">
                      <Image
                        src="/carousel/1.jpg"
                        alt="Home"
                        height={1000}
                        width={1000}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 flex max-sm:flex-col lg:items-center lg:justify-between w-full h-full">
                        <div className="flex flex-col h-full max-md:mt-4 max-md:ml-6 max-md:h-fit md:justify-center lg:w-3/5 xl:1/2 max-sm:mx-auto md:pl-28 lg:pl-50 max-lg:w-8/12 max-sm:w-9/12 max-sm:my-8">
                          <h1 className="text-white underline text-[26px] max-sm:text-2xl mb-[18px] playfair-display italic font-[700]">
                            Pharmaceutical
                          </h1>
                          <span className="text-[54px] max-sm:text-4xl text-white mb-[25px] font-[700] exo leading-[1.2em]">
                            Best healthcare <br />
                            solution
                          </span>
                          <button className="w-fit text-white  bg-[#223A66] py-[14px] px-[53px] rounded-full flex items-center gap-2">
                            {" "}
                            Our Products{" "}
                            <IoIosArrowForward className="scale-125" />{" "}
                          </button>
                        </div>
                        <div className="w-2/5 xl:1/2 max-sm:h-full max-sm:w-full">
                          <Image
                            src="/carousel/banner1.png"
                            alt="Home"
                            height={500}
                            width={500}
                            className="h-full w-[660px] object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
          </CarouselContent>
        </Carousel>
        <GreenOverlay />
        <Services />
        <section className="w-full relative max-md:hidden">
          <div className="min-h-[35vh] text-white flex">
            <div
              className="bg-[rgba(34,58,102)] p-10 text-center w-1/2 flex justify-center items-center gap-5 
          bg-[url('/background/5.jpg')] bg-no-repeat bg-left before:content-[''] before:absolute before:inset-0 before:bg-[rgba(34,58,102)]/80 before:w-1/2 before:z-0"
            >
              <div className="text-6xl mb-2 -translate-y-2">
                <IoPricetagOutline />
              </div>
              <h2 className="text-2xl text-[46px] text-white exo font-[700] z-1">
                Best Quality Products
              </h2>
            </div>
            <div className="bg-[rgba(28,186,159)] p-10 text-center w-1/2 flex justify-center items-center gap-5 bg-[url('/background/6.jpg')] bg-no-repeat bg-right before:content-[''] before:absolute before:ml-auto before:bg-[rgba(28,186,159)]/80 before:z-0 before:inset-0 before:w-1/2">
              <div className="text-7xl mb-2 translate-y-2 z-1">
                <GiMedicines />
              </div>
              <h2 className="text-2xl text-[46px] text-white exo font-[700] z-1">
                Sale Center
              </h2>
            </div>
          </div>
        </section>
        <Clients />
      </section>
    </>
  );
};

export default Hero;
