import React from "react";
import CircularText from "../CircularText";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed md:absolute bottom-6 left-6 flex items-center justify-center overflow-visible md:right-8 xs:right-2 md:left-auto md:top-1 md:bottom-auto z-50  pointer-events-none">
      <div className="relative pointer-events-auto">
        <CircularText
          text="N   e  x  t   J  S   *   U  I  /  U   X   *    W   e  b    D   e  v  e  l  o   p   e  r   *   "
          onHover="speedUp"
          spinDuration={10}
          className="!text-dark dark:!text-light"
        />
        {/* middle circle (Hire Me) */}
        <Link
          href="mailto:jabbaraliyan805@gmail.com"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-dark dark:bg-light border border-solid border-dark dark:border-light w-20 h-20 md:w-12 md:h-12 text-nowrap text-light dark:text-dark font-semibold text-md text-center hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light transition z-10 shadow-md md:shadow-sm dark:shadow-light shadow-dark md:text-xs md:font-[500]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
