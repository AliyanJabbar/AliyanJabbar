"use client";
import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`${className} w-full inline-block font-bold capitalize text-8xl`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word: string, ind: number) => (
          <motion.span className="inline-block" key={ind} variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
