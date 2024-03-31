import React from "react";

const TabButton = ({ active, selectTab, children }: any) => {
  const buttonClasses = active
    ? "text-black border-b-2 border-[#50727B]"
    : "text-gray-400";
  return (
    <button onClick={selectTab}>
      <p
        className={`font-semibold hover:text-gray-500 text-sm ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
