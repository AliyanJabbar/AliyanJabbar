import React from "react";

const PortfolioLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent overflow-hidden">
      <div className="flex flex-col items-center max-w-md px-4">
        <div className="relative mb-12">
          <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary animate-spin"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-r-4 border-l-4 border-primaryDark animate-pulse opacity-70"></div>
        </div>

        <h2 className="mt-4 text-lg text-gray-500 dark:text-gray-400 text-center">
          Preparing something amazing for you
        </h2>
      </div>
    </div>
  );
};

export default PortfolioLoader;
