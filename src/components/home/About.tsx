"use client";

import Image from "next/image";
import React, { useState } from "react";
import TabButton from "./TabButton";
import { TAB_DATA } from "@/lib/data/tabs";

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useState();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <div className="max-w-6xl mx-auto container p-5">
      <div className="grid grid-cols-12 md:gap-6 text-start">
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <Image
            src="/images/about.jpg"
            alt="about"
            width={500}
            height={500}
            className="object-cover rounded-md w-full h-[400px]"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div>
            <h1 className="font-bold py-2">About Me</h1>
            <p className="text-sm">
              A creative Front End Developer with over 1 year of experience
              especially in ReactJS. Familiar with the Javascript programming
              language and frontend engineer supporting technologies such as
              Figma, RestAPI. Able to apply industry standards such as
              algorithms, clean code, automation testing and accustomed to using
              supporting frameworks
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("educations")}
              active={tab === "educations"}
            >
              Educations
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-4 text-sm font-medium cursor-default ">
            {TAB_DATA.find((data) => data.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
