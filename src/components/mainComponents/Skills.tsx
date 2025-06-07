import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BallCanvas, technologies } from "../canvas/Ball";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  // Categorize technologies
  const categorizedTechs = useMemo(() => {
    const categories = {
      frontend: [
        "HTML 5",
        "CSS 3",
        "JavaScript",
        "TypeScript",
        "React JS",
        "Next JS",
      ],
      styling: ["Tailwind CSS", "CSS 3", "Framer Motion", "Shadcn UI"],
      animation: ["GSAP", "Three JS", "Framer Motion"],
      agents: ["Python", "Agents SDK", "Gemini"],
      advance: ["Sanity", "Redux Toolkit"],
      tools: ["git", "figma", "Vercel"],
    };

    return Object.entries(categories).reduce((acc, [key, names]) => {
      acc[key] = technologies.filter((tech) => names.includes(tech.name));
      return acc;
    }, {} as Record<string, typeof technologies>);
  }, []);

  const filteredTechs =
    categorizedTechs[selectedCategory as keyof typeof categorizedTechs] || [];

  const handleCategoryChange = useCallback((categoryKey: string) => {
    setSelectedCategory(categoryKey);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const categories = [
    {
      key: "frontend",
      label: "Frontend",
      icon: "⚛️",
    },
    {
      key: "styling",
      label: "Styling",
      icon: "🎨",
    },
    {
      key: "animation",
      label: "Animation",
      icon: "✨",
    },
    {
      key: "agents",
      label: "Agents",
      icon: "🤖",
    },
    {
      key: "advance",
      label: "Advance",
      icon: "➕",
    },
    {
      key: "tools",
      label: "Tools",
      icon: "🛠️",
    },
  ];

  return (
    <div className="w-full">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        onViewportEnter={() => {
          setIsVisible(true);
        }}
      >
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Technologies I Work With
        </h3>
        <div className="w-20 h-1 bg-primary dark:bg-primaryDark mx-auto rounded-full" />
      </motion.div>
      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <motion.button
            key={category.key}
            onClick={() => handleCategoryChange(category.key)}
            className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
              selectedCategory === category.key
                ? "text-white shadow-lg scale-105"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {selectedCategory === category.key && (
              <motion.div
                className="absolute inset-0 bg-primary dark:bg-primaryDark"
                layoutId="activeCategory"
                transition={{ type: "spring", bounce: 0.2, duration: 1 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span>{category.icon}</span>
              {category.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
      {/* Skills Grid */}
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={selectedCategory}
            className="flex flex-row flex-wrap justify-center gap-8 lg:gap-6 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            viewport={{ once: false }}
          >
            {filteredTechs.map((technology) => (
              <motion.div
                key={technology.name}
                variants={itemVariants}
                className="relative group"
                whileHover={{
                  scale: 1.05,
                  zIndex: 10,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="relative w-32 h-32 lg:w-28 lg:h-28 md:w-24 md:h-24 cursor-grab">
                  <BallCanvas icon={technology.icon} isVisible={isVisible} />
                </div>
                <div className="text-center text-dark dark:text-light whitespace-nowrap mt-2 group-hover:opacity-100 opacity-80 group-hover:scale-105 group-hover:text-primary dark:group-hover:text-primaryDark transition duration-300">
                  <p>{technology.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Skills Summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-800 rounded-full">
          <span className="text-2xl">🚀</span>
          <div className="text-left">
            <div className="text-sm font-semibold text-gray-900 dark:text-white">
              {technologies.length} Technologies
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Constantly learning & growing
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
