"use client";

import React, { useRef } from "react";
import PixelCard from "../ui/PixelCard";
import { useTheme } from "next-themes";
import { motion, useScroll, useTransform } from "framer-motion";

const Approach = () => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;
  const color = currentTheme == "dark" ? "blue" : "pink";
  const svgColor = currentTheme == "dark" ? "#58E6D9" : "#EC407A";

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-row items-center justify-evenly flex-wrap gap-16 lg:gap-x-8 sm:gap-x-0"
    >
      {/* Animated SVG Path */}
      {/* for large screens */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-16 w-[2000px] -z-10 pointer-events-none sm:opacity-0 opacity-100">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1524 646"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M2 16C2 16 795.933 103.831 902.575 117.196C1009.22 130.562 1184.55 180.63 1075.25 310.042C965.953 439.455 696.502 296.04 418.701 347.805C140.9 399.57 107.23 447.415 140.9 542.985C180.434 655.196 442.207 630.524 646.027 620.632C861.952 610.153 926.125 474.195 1142.42 481.885C1304.57 487.649 1517 583.081 1517 583.081"
            stroke={svgColor}
            strokeWidth={40}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          />
        </svg>
      </div>
      {/* for smaller screens */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-16 w-[2000px] -z-10 pointer-events-none sm:opacity-100 opacity-0">
        <svg
          className="w-full h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 669 551"
        >
          <motion.path
            d="M11.0124 28.0598C11.0124 28.0598 561.965 -47.1048 588.641 114.29C616.176 280.887 28.6275 84.0466 11.0124 251.31C-6.6026 418.573 650.277 154.484 657.604 335.348C664.972 480 200 560 11.0124 500"
            stroke={svgColor}
            strokeWidth={20}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            style={{ pathLength }}
          />
        </svg>
      </div>

      {/* Cards */}
      <PixelCard variant={color} overlayContent="Plan & Design">
        <div className="text-center text-4xl font-bold text-dark dark:text-light">
          1st step
        </div>
      </PixelCard>
      <PixelCard variant={color} overlayContent="Code & Build">
        <div className="text-center text-4xl font-bold text-dark dark:text-light">
          2nd step
        </div>
      </PixelCard>
      <PixelCard variant={color} overlayContent="Polish & Deploy">
        <div className="text-center text-4xl font-bold text-dark dark:text-light">
          3rd step
        </div>
      </PixelCard>
    </div>
  );
};

export default Approach;
