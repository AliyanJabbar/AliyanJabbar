import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function BackGroundParallax({
  title,
  subtitle,
  url,
  maincolor = "light",
}: {
  title: string;
  subtitle: string;
  url: string;
  maincolor?: "dark" | "light";
}) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Parallax transforms for background
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  // Text movement transforms
  const titleX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const subtitleX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const textStyles = {
    light: "text-white",
    dark: "text-black",
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex flex-col w-fit mx-auto">
          {/* title */}
          <motion.span
            className={`text-[7vw] md:text-[10vw] leading-none font-mont ${textStyles[maincolor]} font-extrabold -translate-x-[10%] will-change-transform`}
            style={{
              x: titleX,
              y: titleY,
            }}
          >
            {title}
          </motion.span>
          {/* Subtitle */}
          <motion.span
            className={`text-[7vw] md:text-[10vw] leading-none font-sub_font ${textStyles[maincolor]} self-end translate-x-[10%] will-change-transform`}
            style={{
              x: subtitleX,
              y: subtitleY,
            }}
          >
            {subtitle}
          </motion.span>
        </div>
      </div>

      {/* Background image */}
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full z-10">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={url}
            fill
            alt="Parallax background image"
            style={{ objectFit: "cover" }}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
