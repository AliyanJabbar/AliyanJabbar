"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { FaArrowUp } from "react-icons/fa6";
import { zoomIn } from "../utils/motion";
import styles from "../moduleCSS/upAdown.module.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis and set up requestAnimationFrame loop
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly using Lenis
  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, {
        duration: 2,
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-5 right-[100px] cursor-pointer z-50 md:hidden visible"
          variants={zoomIn(0, 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.1 },
          }}
          onHoverStart={() => setIsIconHovered(true)}
          onHoverEnd={() => setIsIconHovered(false)}
        >
          <div className="w-14 h-14 rounded-full bg-primary dark:bg-primaryDark flex justify-center items-center">
            <FaArrowUp
              className={`text-light dark:text-dark w-full ${
                isIconHovered && styles["upAdown"]
              }`}
              size={20}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
