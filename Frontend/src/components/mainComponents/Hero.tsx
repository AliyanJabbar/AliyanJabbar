"use client";
import Layout from "./layout";
import AnimatedText from "../ui/AnimatedText";
import Button from "../ui/Button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import MetaBalls from "../ui/MetaBalls";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const { theme, resolvedTheme } = useTheme();
  const actualTheme = resolvedTheme || theme;
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex items-center text-dark dark:text-light w-full min-h-screen">
      <Layout className="pt-0 md:p-16 sm:pt-8">
        {/* layout */}
        <div className="flex lg:flex-col flex-row items-center justify-between w-full gap-8">
          {/* left container - MetaBalls visualization */}
          <div className="w-full flex items-center justify-center">
            <div className="relative rounded-full h-[380px] w-[380px] xl:h-[340px] xl:w-[340px] md:h-[290px] md:w-[290px] sm:h-[230px] sm:w-[230px] flex items-center justify-center overflow-hidden shadow-lg dark:shadow-primaryDark/30 shadow-primary/20 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primaryDark/40 hover:shadow-primary/30 ">
              {mounted && (
                <div className="absolute inset-0 z-0">
                  {actualTheme === "dark" ? (
                    <MetaBalls
                      color="#58E6D9" // Using primaryDark
                      cursorBallColor="#A7F3D0" // Lighter mint for cursor
                      cursorBallSize={2}
                      ballCount={10}
                      animationSize={18}
                      enableMouseInteraction={true}
                      enableTransparency={true}
                      hoverSmoothness={0.1}
                      clumpFactor={0.7}
                      speed={0.4}
                    />
                  ) : (
                    <MetaBalls
                      color="#9370DB"
                      cursorBallColor="#B899E0"
                      cursorBallSize={2}
                      ballCount={10}
                      animationSize={18}
                      enableMouseInteraction={true}
                      enableTransparency={true}
                      hoverSmoothness={0.1}
                      clumpFactor={0.7}
                      speed={0.4}
                    />
                  )}
                </div>
              )}
              {/* overlay */}
              <div className="absolute z-10 text-center opacity-80 dark:opacity-90 pointer-events-none">
                <div className="text-4xl font-bold dark:text-teal-300  text-purple-500">
                  AJ
                </div>
                <div className="text-sm mt-2 dark:text-primaryDark text-primary">
                  Website Developer
                </div>
              </div>
            </div>
          </div>

          {/* right container - content section */}
          <div className="flex flex-col md:items-center items-start justify-start w-full">
            <AnimatedText
              text="Turning your imagination into our innovation"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl"
            />
            <p className="my-4 text-base font-medium lg:text-center text-left dark:text-light text-dark sm:leading-tight">
              As a passionate UI/UX | Next.js developer, I bring ideas to life
              through cutting-edge web applications. Discover my latest projects
              and insights, highlighting my expertise in React.js and modern web
              development.
            </p>

            <div className="flex items-center justify-start lg:justify-center w-full gap-4 mt-4">
              <Button
                link="/assets/AliyanJabbarResume.pdf"
                text="Resume"
                icon={
                  <FaArrowAltCircleRight className="group-hover:rotate-[360deg] transition-transform duration-1000" />
                }
                target="_blank"
              />
              <div className="xs:hidden flex">
                <Button
                  link="/contact"
                  text="Contact"
                  icon={
                    <MdEmail className="group-hover:rotate-[15deg] transition-transform duration-300" />
                  }
                />
              </div>
              <div className="xs:block hidden group relative font-semibold">
                <Link href="/contact">
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-[1.4px] bg-dark dark:bg-light transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 ease-in-out origin-right group-hover:origin-left will-change-transform"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
