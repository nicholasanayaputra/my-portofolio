import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/sun.png"
        alt="sun"
        width={30}
        height={30}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default Logo;
