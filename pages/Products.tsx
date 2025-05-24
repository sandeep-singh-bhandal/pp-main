import React from "react";
import Card from "@/components/Flowbite/Card";
import Link from "next/link";

const Products = () => {
  return (
    <section className="mt-[135px] py-10">
      <h1 className="text-5xl font-bold exo text-center pb-16">Our Products</h1>

      <div className="flex flex-wrap w-10/12 mx-auto justify-center">
        {Array.from({ length: 20 }).map((item, index) => (
          <Link href={`/products/${index+"sandeep"}`} key={index} className="mx-auto">
            <Card  />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;
