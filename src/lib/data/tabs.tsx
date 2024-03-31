import { FaGithub, FaNodeJs, FaReact, FaSchool } from "react-icons/fa6";
import { RiComputerLine, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase, IoSchoolSharp } from "react-icons/io5";

export const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li className="flex items-center gap-2">
          <FaNodeJs /> Node js
        </li>
        <li className="flex items-center gap-2">
          <FaReact /> React
        </li>
        <li className="flex items-center gap-2">
          <RiJavascriptFill /> Javascript
        </li>
        <li className="flex items-center gap-2">
          <BiLogoTypescript /> Typescript
        </li>
        <li className="flex items-center gap-2">
          <FaGithub /> Github
        </li>
        <li className="flex items-center gap-2">
          <IoLogoFirebase /> Firebase
        </li>
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul>
        <li className="flex items-center gap-2">
          <FaSchool /> Senior High School Dewi Sartika
        </li>
        <li className="flex items-center gap-2">
          <IoSchoolSharp /> Bachelor Degree of Computer Science
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li className="flex items-center gap-2">
          <RiComputerLine /> Dicoding ~ learning to create a web front-end
        </li>
        <li className="flex items-center gap-2">
          <RiComputerLine />
          Dicoding ~ learn to create web with react
        </li>
        <li className="flex items-center gap-2">
          <RiComputerLine />
          Dicoding ~ learn Javascript expert
        </li>
        <li className="flex items-center gap-2">
          <RiComputerLine />
          Dicoding ~ learn the basics of web programming
        </li>
      </ul>
    ),
  },
];
