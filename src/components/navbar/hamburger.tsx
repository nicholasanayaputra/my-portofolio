import React from "react";
import { FaXmark } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
const Hamburger = ({ toggleMenu, isOpen }: any) => {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu}>
        {isOpen ? (
          <FaXmark className="w-5 h-5" />
        ) : (
          <RiMenu3Fill className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Hamburger;
