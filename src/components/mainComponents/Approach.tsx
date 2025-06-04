import React from "react";
import PixelCard from "../ui/PixelCard";
import { useTheme } from "next-themes";

const Approach = () => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;
  const color = currentTheme == "dark" ? "blue" : "pink";

  return (
    <div className="flex flex-row items-center justify-evenly flex-wrap gap-16 lg:gap-x-8 sm:gap-x-0">
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
