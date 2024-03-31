"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AchievementsList } from "@/lib/data/links";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const Achievements = () => {
  return (
    <div className="max-w-5xl mx-auto container mt-8 py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {AchievementsList.map((Achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center m-4 sm:my-0"
            >
              <h2 className="font-bold text-3xl md:text-4xl flex flex-row">
                {Achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(Achievement.value as any)}
                  locale="en-US"
                  className="font-bold text-4xl"
                />
                {Achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{Achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
