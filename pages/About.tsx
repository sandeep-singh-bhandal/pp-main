import React from "react";
import MultiLayeredBox from "../components/MultiLayeredBox";

const About = () => {
  return (
    <div className="bg-white z-4 w-full pt-10 mt-[135px]">
      <MultiLayeredBox reverse={false} />
      <MultiLayeredBox reverse={true} />
    </div>
  );
};

export default About;
