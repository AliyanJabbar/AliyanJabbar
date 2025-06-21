"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({
  title,
  subtitle,
  url,
  bottomtext,
  maincolor = "light",
}: {
  title: string;
  subtitle: string;
  url: string;
  bottomtext: string;
  maincolor?: "light" | "dark";
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image vertical parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["-28.75vh", "28.75vh"]);

  // Title horizontal-left and upward parallax
  const titleX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Subtitle horizontal-right and downward parallax
  const subtitleX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div ref={containerRef} className="relative h-[115vh] w-full overflow-hidden">
      <motion.div style={{ y: imageY }} className="absolute inset-0">
        <Image src={url} alt={title} fill className="object-cover" />
      </motion.div>

      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-fit mx-auto">
        <motion.span
          style={{ x: titleX, y: titleY }}
          className={`text-[7vw] md:text-[10vw] leading-none font-mont text-${maincolor} font-extrabold will-change-transform`}
        >
          {title}
        </motion.span>
        <motion.span
          style={{ x: subtitleX, y: subtitleY }}
          className={`text-[7vw] md:text-[10vw] leading-none font-sub_font text-${maincolor} self-end will-change-transform`}
        >
          {subtitle}
        </motion.span>
      </h2>

      <span
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-${maincolor} text-xs opacity-50`}
      >
        {bottomtext}
      </span>
    </div>
  );
};

export default Parallax;
