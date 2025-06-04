"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../ui/logo";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  WIcon,
  XIcon,
} from "../ui/icons";

// Define the props interface
interface HeaderProps {
  onRouteChange?: (path: string) => void;
}

const Header = ({ onRouteChange }: HeaderProps = {}) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathName = usePathname();

  // handling modal open and closing
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Only run on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // custom Link component for navigation links
  const CustomLink = ({
    href,
    title,
    className = "",
    isMobile = false,
  }: {
    href: string;
    title: string;
    className?: string;
    isMobile?: boolean;
  }) => {
    const handleLinkClick = (e: React.MouseEvent) => {
      if (onRouteChange) {
        e.preventDefault();
        onRouteChange(href);
      }
    };

    return (
      <Link
        href={href}
        className={`${className} relative group`}
        onClick={onRouteChange ? handleLinkClick : undefined}
      >
        <span
          className={` ${
            isMobile ? "text-light dark:text-dark" : "text-dark dark:text-light"
          }`}
        >
          {title}
        </span>
        <span
          className={`absolute left-0 -bottom-1 w-full h-[1.4px] ${
            isMobile ? "bg-light dark:bg-dark" : "bg-dark dark:bg-light"
          } transform ${
            pathName === href ? "scale-x-100" : "scale-x-0"
          } group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left will-change-transform`}
        ></span>
      </Link>
    );
  };

  // Handle mobile navigation click
  const handleMobileNavClick = (href: string) => {
    setIsOpen(false); // Close the modal
    if (onRouteChange) {
      onRouteChange(href); // Trigger the route change
    }
  };

  return (
    <header className="absolute top-0 left-0 z-10 w-full backdrop-blur-sm px-32 lg:px-10 py-8 font-medium flex items-center justify-between">
      {/* Mobile hamburger */}
      <button
        className="flex-col justify-center items-center hidden lg:flex z-[100]"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-300 ease-in-out`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5 "
          } transition-all duration-300 ease-in-out`}
        ></span>
      </button>

      {/* navigation for large screens */}
      <div className="w-full flex items-center justify-between lg:hidden">
        {/*using CustomLinks as navigation links */}
        <nav>
          <CustomLink href="/" title="Home" className="mx-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="mx-4" />
        </nav>

        {/* social links */}
        <nav className="flex items-center justify-center flex-wrap gap-7 lg:hidden ">
          {/* whatsapp icon */}
          <WIcon link="https://wa.me/923199289177" />
          {/* x icon */}
          <XIcon link="https://x.com/aliyanjabbar_ai" />
          {/* github icon */}
          <GithubIcon link="https://github.com/AliyanJabbar" />
          {/* linkedin icon */}
          <LinkedinIcon link="https://www.linkedin.com/in/aliyan-jabbar/" />

          {/* theme toggle button - only show when mounted */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`flex items-center justify-center rounded-full p-2 ${
                theme === "dark" ? "text-dark bg-light" : "bg-dark text-light"
              }`}
              title="Theme Toggle"
            >
              {theme === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          )}
        </nav>
      </div>

      {/* logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      {/* navigation for small screens */}
      {mounted &&
        isOpen &&
        document.body &&
        createPortal(
          <div>
            {/* Modal overlay */}
            <div
              className="fixed inset-0 bg-dark/50 z-[90]"
              onClick={handleClick}
            />

            {/* Mobile modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] 
                      w-[90vw] max-w-md max-h-[90vh] overflow-y-auto 
                      flex flex-col justify-center items-center 
                      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md p-8 shadow-xl"
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {/* Navigation links */}
              <nav className="flex flex-col items-center justify-center gap-6 w-full mb-8">
                <div onClick={() => handleMobileNavClick("/")}>
                  <CustomLink
                    href="/"
                    title="Home"
                    className="my-2 dark:text-light text-dark"
                    isMobile={true}
                  />
                </div>
                <div onClick={() => handleMobileNavClick("/about")}>
                  <CustomLink
                    href="/about"
                    title="About"
                    className="my-2 dark:text-light text-dark"
                    isMobile={true}
                  />
                </div>
                <div onClick={() => handleMobileNavClick("/projects")}>
                  <CustomLink
                    href="/projects"
                    title="Projects"
                    className="my-2 dark:text-light text-dark"
                    isMobile={true}
                  />
                </div>
                <div onClick={() => handleMobileNavClick("/contact")}>
                  <CustomLink
                    href="/contact"
                    title="Contact"
                    className="my-2 dark:text-light text-dark"
                    isMobile={true}
                  />
                </div>
              </nav>

              {/* Social links */}
              <nav className="flex items-center justify-center flex-wrap gap-5 sm:gap-3 xs:gap-2 mt-4 w-full">
                {/* whatsapp icon */}
                <WIcon link="https://wa.me/923199289177" />
                {/* x icon */}
                <XIcon link="https://x.com/aliyanjabbar_ai" />
                {/* github icon */}
                <GithubIcon link="https://github.com/AliyanJabbar" />
                {/* linkedin icon */}
                <LinkedinIcon link="https://www.linkedin.com/in/aliyan-jabbar/" />

                {/* theme toggle button */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`flex items-center justify-center rounded-full p-2 ${
                    theme === "dark"
                      ? "text-dark bg-light"
                      : "bg-dark text-light"
                  }`}
                >
                  {theme === "dark" ? (
                    <SunIcon className="fill-dark" />
                  ) : (
                    <MoonIcon className="fill-dark" />
                  )}
                </button>
              </nav>
            </motion.div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
