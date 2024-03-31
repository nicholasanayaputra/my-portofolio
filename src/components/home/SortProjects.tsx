import React from "react";

const SortProjects = () => {
  return (
    <div className="py-4">
      <h1 className="text-center font-bold">Projects</h1>
      <div className="flex gap-3 justify-center items-center mt-4">
        <button className="border border-[#4F709C] rounded-full py-2 px-4">
          All
        </button>
        <button className="border border-[#4F709C] rounded-full py-2 px-4">
          Web
        </button>
        <button className="border border-[#4F709C] rounded-full py-2 px-4">
          Mobile
        </button>
      </div>
    </div>
  );
};

export default SortProjects;
