"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Lenis from "lenis";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

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
        // easing: (t) => t*2, // Linear easing; customize as needed
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{
            scale: 1.1,
            boxShadow:
              currentTheme === "dark"
                ? "0 0 20px rgba(88, 230, 217, 0.5)"
                : "0 0 20px rgba(236, 64, 122, 0.5)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          onClick={scrollToTop}
          className={`
            fixed bottom-8 right-8 z-50 p-4 rounded-full
            bg-primary dark:bg-primaryDark
            text-light dark:text-dark
            shadow-lg hover:shadow-xl
            border-2 border-transparent
            hover:border-primary hover:dark:border-primaryDark
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-4 focus:ring-primary/30 dark:focus:ring-primaryDark/30
            group xs:hidden
          `}
          aria-label="Scroll to top"
        >
          {/* Arrow Icon */}
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:animate-bounce"
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <path
              d="M12 19V5M5 12L12 5L19 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          {/* Ripple Effect */}
          <motion.div
            className={`
              absolute inset-0 rounded-full
              bg-primary dark:bg-primaryDark
              opacity-20
            `}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
