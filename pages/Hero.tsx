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
      <section className="mt-[135px]">
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
                          <h1 className="text-white underline text-[26px] mb-[18px] playfair-display italic font-[700]">
                            Pharmaceutical
                          </h1>
                          <span className="text-[54px] text-white mb-[25px] font-[700] exo leading-[1.2em]">
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
        <GreenOverlay />
        <Services />
        <section className="w-full relative max-sm:hidden">
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
