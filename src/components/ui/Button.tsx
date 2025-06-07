import Link from "next/link";
import React from "react";

const Button = ({
  text,
  link,
  icon,
  target,
}: {
  text: string;
  link?: string;
  icon?: React.ReactNode;
  target?: string;
}) => {
  // Base button styles with slightly reduced size from the largest version
  const baseStyles =
    "relative w-44 h-12 text-dark dark:text-light font-medium text-lg border-2 border-dark dark:border-light rounded-md overflow-hidden transition-colors duration-500 hover:text-light dark:hover:text-dark group shadow-md";

  return link ? (
    <Link href={link} className={baseStyles} target={target}>
      <span className="absolute bg-dark dark:bg-light w-[220px] h-[170px] rounded-full top-full left-full transition-all duration-700 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
      <span className="relative z-10 flex items-center justify-evenly gap-2 xs:gap-1 w-full h-full px-3 font-bold text-xl select-none">
        <span>{text}</span>
        {icon && <span>{icon}</span>}
      </span>
    </Link>
  ) : (
    <button className={baseStyles}>
      <span className="absolute bg-dark dark:bg-light w-[220px] h-[170px] rounded-full top-full left-full transition-all duration-700 group-hover:top-[-30px] group-hover:left-[-30px]"></span>
      <div className="flex items-center justify-evenly gap-2 w-full h-full px-3 font-bold text-xl select-none">
        <span className="relative z-10">{text}</span>
        {icon && <span className="z-10">{icon}</span>}
      </div>
    </button>
  );
};

export default Button;
