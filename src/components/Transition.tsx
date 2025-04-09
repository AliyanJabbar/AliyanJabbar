// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const TransitionEffect = () => {
//   return (
//     <div>
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999999] dark:bg-primaryDark bg-primary"
//         initial={{ x: "100%", width: "100%" }}
//         animate={{ x: "0%", width: "0%" }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999998] bg-dark"
//         initial={{ x: "100%", width: "100%" }}
//         animate={{ x: "0%", width: "0%" }}
//         transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999997] bg-light"
//         initial={{ x: "100%", width: "100%" }}
//         animate={{ x: "0%", width: "0%" }}
//         transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
//       />
//     </div>
//   );
// };

// export default TransitionEffect;





"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  // Force a reflow to ensure animation starts immediately
  useEffect(() => {
    document.body.offsetHeight;
  }, []);
  
  return (
    <div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999999] dark:bg-primaryDark bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999998] bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999997] bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </div>
  );
};

export default TransitionEffect;
