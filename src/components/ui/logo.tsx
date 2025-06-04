"use client";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className="flex items-center justify-center mt-2" href="/">
      <div className="relative w-16 h-16 bg-[#141414] text-2xl font-bold text-white flex items-center justify-center border-2 border-solid border-transparent dark:border-white rounded-full overflow-hidden group">
        AJ
        <span className="absolute top-[-100%] left-[0px] w-[150%] h-full bg-gradient-to-b from-transparent via-white/50 to-transparent opacity-0 group-hover:top-full group-hover:left-[-50%] group-hover:opacity-100 transition-all duration-700 ease-in-out transform rotate-[40deg] blur-sm"></span>
      </div>
    </Link>
  );
};

export default Logo;
