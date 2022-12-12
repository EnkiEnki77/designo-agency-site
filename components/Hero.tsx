import React from "react";
import Button from "./Button";
import heroPhone from "../public/assets/home/desktop/image-hero-phone.png";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="md:px-10  lg:px-[165px] md:pt-[155px] relative">
      <div className="lg:py-[145px] lg:w-full flex flex-col lg:flex-row md:rounded-[15px] overflow-hidden md:pt-[60px] items-center mb-[120px] lg:mb-[160px] px-6 pt-[96px] bg-[url('../public/assets/home/desktop/bg-pattern-hero-home.svg')] bg-[left_top_12.5rem] bg-peach w-full ">
        <div className="flex flex-col items-center lg:items-start lg:px-[96px]">
          <h1 className="lg:pr-[350px] text-center lg:text-left mt-20 md:mt-0 md:px-10 mb-[24px] lg:mb-8 md:mb-6 lg:px-0 leading-[1.1]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="lg:pr-[520px] text-center px-2 lg:text-left mb-6 lg:mb-10 md:px-[105px] lg:px-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button path="/about" btn="buttonLight">
            learn more
          </Button>
        </div>
        <div className="lg:h-full bottom-0 right-[260px] bg-transparent rounded-lg bg-heroPhone h-[450px] lg:absolute bg-no-repeat w-full lg:w-[300px] bg-[center_top_-6rem] md:bg-[center_top_-6rem] lg:bg-[center_top_7rem] z-20">
          {/* <img src={heroPhone.src} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
