import GreenOverlay from "@/components/GreenOverlay";
import Image from "next/image";
import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { products } from "@/constants/config";

const Product = ({ name }: { name: string }) => {
  const formattedName =
    name === undefined
      ? ""
      : name.includes("%2B")
      ? name.replace("%2B", "+")
      : name; // for handling '+' in the URL

  return products.map((product, index) => {
    if (
      (product.name.includes(" ")
        ? product.name.replace(" ", "-").toLowerCase()
        : product.name.toLowerCase()) == formattedName
    ) {
      <section className="mt-[135px] w-full" key={index}>
        <GreenOverlay />
        <div className="w-3/4 mx-auto py-32 px-12 flex gap-24">
          <div className="w-5/12 relative">
            <Image
              src={`/products/${
                product.name.includes(" ")
                  ? product.name.replace(" ", "-").toLowerCase()
                  : product.name.toLowerCase()
              }.png`}
              height={700}
              width={700}
              alt="products"
            />
            <span className='bg-[#1CBA9F] text-[18px] font-[700] w-36 h-10 absolute bottom-8 -left-4 rounded-r-full text-white justify-end pr-6 flex items-center after:content-[""] after:absolute after:left-0 after:-bottom-[10px] after:rotate-45 after:w-0 after:h-0 after:border-l-11 after:border-r-11 after:border-b-11 after:border-l-transparent after:border-r-transparent after:border-b-[#0d7563] '>
              {product.price}
            </span>
          </div>
          <div className="w-7/12">
            <div className="mb-4">
              <h1 className="exo text-[28px] font-[700] text-[#222] mb-2 ">
                Products Details
              </h1>
              <p className="exo text-[24px] mb-2 text-[#222] ">
                {product.composition}
              </p>
              <ul className="flex flex-col gap-2">
                {product.hightlights.map((point, index) => (
                  <li
                    className="roboto text-[14px] text-[#222] flex items-center gap-1 "
                    key={index}
                  >
                    <IoMdCheckmarkCircleOutline className="text-lg" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="exo text-[28px] font-[700] text-[#222] mb-2 ">
                Uses
              </h1>
              <ul className="flex flex-col gap-2">
                {product.uses.map((point, index) => (
                  <li className="roboto text-[16px] text-[#555] " key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-3/4 mx-auto flex mb-20 px-12">
          <h1 className="exo text-[32px] font-[700] text-[#222] w-3/12 ">
            How Should I Use This Medicine?
          </h1>
          <div className="w-1/12 h-full border-t-[3px] border-[#1CBA9F] translate-y-6 ml-3 mr-7" />
          <div className="w-8/12">
            <ul className="flex flex-col gap-2">
              {product.howToUse.map((point, index) => (
                <li
                  className="roboto text-[16px] font-semibold text-[#222] "
                  key={index}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>;
    }
  });
};

export default Product;
