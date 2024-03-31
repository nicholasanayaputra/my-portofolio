import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mobile = ({ isOpen, toggleMenu, pathname, navLinks }: any) => {
  return (
    <div
      className={`absolute p-5 bg-white shadow-lg w-[230px] right-4 rounded-lg md:hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-3">
        {navLinks.map(({ path, link }: any) => (
          <li key={path}>
            <Link
              href={path}
              className={`text-base font-medium ${
                pathname === path ? "text-black" : "text-gray-400"
              }`}
            >
              {link}
            </Link>
          </li>
        ))}
        <div>
          <Image
            src="/images/sun.png"
            alt="sun"
            width={30}
            height={30}
            className="w-auto h-auto"
          />
        </div>
      </ul>
    </div>
  );
};

export default Mobile;
