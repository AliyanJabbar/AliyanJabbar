"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
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

const singleChar = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AnimatedText = ({
  text,
  className,
  characterAnimation = false,
  animateChars = [],
  animationInterval = 3000, // Default interval of 3 seconds
}: {
  text: string;
  className?: string;
  characterAnimation?: boolean;
  animateChars?: Array<{ word: number; char: number }>;
  animationInterval?: number;
}) => {
  // State to track animation phase for each character
  // 0: normal position, 1: moving up, 2: moving from bottom to normal
  const [animationPhase, setAnimationPhase] = useState<{
    [key: string]: number;
  }>({});

  useEffect(() => {
    if (!characterAnimation || animateChars.length === 0) return;

    // Initialize all animated characters in phase 0 (normal position)
    const initialPhaseState: { [key: string]: number } = {};
    animateChars.forEach(({ word, char }) => {
      initialPhaseState[`${word}-${char}`] = 0;
    });
    setAnimationPhase(initialPhaseState);

    // Set up the interval for cycling through animation phases
    const intervalId = setInterval(() => {
      setAnimationPhase((prev) => {
        const newState = { ...prev };
        animateChars.forEach(({ word, char }) => {
          const key = `${word}-${char}`;
          // Cycle through phases: 0 -> 1 -> 2 -> 0
          newState[key] = (prev[key] + 1) % 3;
        });
        return newState;
      });
    }, animationInterval / 2); // Divide by 2 to make each phase last half the interval

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [characterAnimation, animateChars, animationInterval]);

  return (
    <div className="w-full mx-auto py-2 sm:py-0 flex items-center justify-center text-center overflow-hidden text-dark dark:text-light">
      <motion.h1
        className={`${className} w-full inline-block font-bold capitalize text-8xl`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {characterAnimation
          ? text.split(" ").map((word, wordIndex) => (
              <motion.span
                className="inline-block"
                key={wordIndex}
                variants={singleWord}
              >
                {Array.from(word).map((char, charIndex) => {
                  // Check if this character should be animated
                  const isAnimated = animateChars.some(
                    (item) => item.word === wordIndex && item.char === charIndex
                  );

                  // Get current animation phase
                  const phase = isAnimated
                    ? animationPhase[`${wordIndex}-${charIndex}`]
                    : 0;

                  return (
                    <motion.span
                      key={charIndex}
                      className={`inline-block ${
                        isAnimated
                          ? "text-primary dark:text-primaryDark font-bold"
                          : ""
                      }`}
                      variants={!isAnimated ? singleChar : undefined}
                      initial={isAnimated ? { opacity: 1, y: 0 } : "initial"}
                      animate={
                        isAnimated
                          ? phase === 0
                            ? {
                                opacity: 1,
                                y: 0,
                                transition: {
                                  duration: 0.5,
                                },
                              }
                            : phase === 1
                            ? {
                                opacity: 0,
                                y: -50,
                                transition: {
                                  duration: 0.5,
                                },
                              }
                            : {
                                // phase === 2
                                opacity: 1,
                                y: 0,
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                  duration: 0.5,
                                },
                              }
                          : "animate"
                      }
                      // This key part adds the "appear from bottom" effect
                      style={
                        isAnimated && phase === 2
                          ? {
                              // Only apply this style at the start of phase 2
                              animation: "appearFromBottom 0.5s ease-out",
                            }
                          : undefined
                      }
                    >
                      {char}
                    </motion.span>
                  );
                })}
                &nbsp;
              </motion.span>
            ))
          : text.split(" ").map((word, ind) => (
              <motion.span
                className="inline-block"
                key={ind}
                variants={singleWord}
              >
                {word}&nbsp;
              </motion.span>
            ))}
      </motion.h1>

      {/* Add the keyframe animation for appearing from bottom */}
      <style jsx global>{`
        @keyframes appearFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
