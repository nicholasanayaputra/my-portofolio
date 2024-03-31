/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto container px-5 mt-7">
      <div className="grid grid-cols-12">
        <div className="flex flex-col justify-center col-span-12 md:col-span-6 lg:col-span-7">
          <h4 className="font-base text-sm">Hi There, I'm</h4>
          <h1 className="font-bold py-1 md:py-2">Nicholas Anaya Putra</h1>
          <p className="text-sm mb-2 md:mb-4 w-full md:w-4/5">
            I'm currently a Front End Developer seeking many ways to improve my
            skills through problem-solving and creating various projects!
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <button className="bg-black text-white rounded-lg py-2 px-12 font-semibold ">
              Hire Me
            </button>
            <button className="bg-[#E1DADA] text-black rounded-lg py-2 px-6 font-semibold ">
              Download CV
            </button>
          </div>
        </div>
        <div className="relative lg:mt-0 right-0 col-span-12 md:col-span-6 lg:col-span-5">
          <Image
            src="/images/logo.png"
            alt="hero"
            width={500}
            height={500}
            className="max-w-full mx-auto w-[400px] h-[400px] relative z-10"
          />
          <span className="absolute -bottom-0 left-1/2 -translate-x-1/2">
            <svg
              width="400"
              height="400"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#50727B"
                d="M44.7,-10.5C52.5,9.8,49.9,37.4,31.1,53.7C12.2,70,-22.9,74.9,-38.7,61.5C-54.5,48.1,-50.9,16.4,-41.2,-6.4C-31.6,-29.1,-15.8,-42.8,1.3,-43.2C18.4,-43.6,36.8,-30.8,44.7,-10.5Z"
                transform="translate(100 100) scale(1.1)"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
