import React from "react";
import Layout from "./layout";
import Link from "next/link";

const Footer = () => {
  // Underline custom component
  const CustomUnderLink = ({
    text,
    link,
    className = "",
    ...rest
  }: {
    text: string;
    link: string;
    className?: string;
    [key: string]: string | undefined;
  }) => {
    return (
      <div className="group relative text-nowrap">
        <Link href={link} className={className} {...rest}>
          {text}
          <span
            className={`absolute left-0 bottom-0 w-full h-[1.4px] bg-dark dark:bg-light transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left will-change-transform`}
          ></span>
        </Link>
      </div>
    );
  };

  return (
    <footer className="relative bottom-0 z-10 w-full backdrop-blur-sm border-t-2 border-solid border-dark dark:border-light text-lg text-dark dark:text-light mt-auto text-nowrap">
      <Layout className="py-8 flex lg:flex-col lg:gap-2 items-center justify-between">
        {/* copyright */}
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        {/* build with ♡ by Aliyan Jabbar */}
        <div className="flex items-center">
          Build With
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <CustomUnderLink text="Aliyan Jabbar" link="/" className="text-xl" />
          {/* say hello */}
        </div>
        <CustomUnderLink
          text="Say Hello"
          link="/contact"
        />
      </Layout>
    </footer>
  );
};

export default Footer;
