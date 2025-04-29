"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/mainComponents/layout";
import TiltedCard from "@/components/TiltedCard";
import React, { useEffect, useState } from "react";
import CountUp from "../../components/Count";

const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(100);
  // handling windows width resize
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Create handler function
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // setting the feature and project's windths
  useEffect(() => {
    setImageWidth(
      windowWidth <= 329
        ? 200
        : windowWidth >= 330 && windowWidth <= 359
        ? 210
        : windowWidth >= 360 && windowWidth <= 399
        ? 240
        : windowWidth >= 400 && windowWidth <= 449
        ? 280
        : windowWidth >= 450 && windowWidth <= 479
        ? 310
        : windowWidth >= 480 && windowWidth <= 519
        ? 320
        : windowWidth >= 520 && windowWidth <= 580
        ? 350
        : windowWidth >= 581 && windowWidth <= 719
        ? 430
        : windowWidth >= 720 && windowWidth <= 764
        ? 400
        : windowWidth >= 768 && windowWidth <= 819
        ? 250
        : windowWidth >= 820 && windowWidth <= 864
        ? 280
        : windowWidth >= 865 && windowWidth <= 919
        ? 300
        : windowWidth >= 920 && windowWidth <= 964
        ? 320
        : windowWidth >= 965 && windowWidth <= 1079
        ? 330
        : windowWidth >= 1080 && windowWidth <= 1279
        ? 350
        : windowWidth >= 1280 && windowWidth <= 1400
        ? 310
        : windowWidth >= 1401 && windowWidth <= 1450
        ? 320
        : windowWidth >= 1451
        ? 360
        : 100
    );
  }, [windowWidth]);
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Passion Drives Purpose"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 leading-[1.1]"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          {/* text */}
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-white/75">
              Biography
            </h2>
            <p className="font-medium text-dark dark:text-white">
              Hi, I'm <span className="font-bold">Aliyan</span> — a passionate
              Web Developer and UI/UX Designer dedicated to crafting beautiful,
              functional, and user-centered digital experiences. With over 2
              years of experience in the field, I’m always seeking new and
              innovative ways to transform my clients' ideas into reality.
            </p>
            <p className="my-4 font-medium text-dark dark:text-white">
              For me, design isn't just about making things look good — it's
              about solving real problems and creating good looking, engaging
              experiences for users.
            </p>
            <p className="font-medium text-dark dark:text-white">
              Whether it’s a website, mobile application, or any other digital
              product, I bring a commitment to design excellence and
              user-centered thinking to every project. I'm excited about the
              opportunity to bring my skills, creativity, and passion to your
              next project!
            </p>
          </div>
          {/* image */}
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 sm:order-first p-8 xs:p-4 cursor-pointer md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[32px] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[24px]" />
            <div className="flex items-center justify-center w-full h-full">
              <TiltedCard
                imageSrc="/assets/ProfilePic.png"
                altText="Aliyan Jabbar"
                containerHeight="380px"
                containerWidth={imageWidth}
                imageHeight="380px"
                imageWidth={imageWidth}
                rotateAmplitude={17}
                scaleOnHover={1.05}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>
          {/* counters */}
          <div className="col-span-2 flex flex-col items-end text-right justify-between text-black dark:text-white xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
            {/* count 1 */}
            <div className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:flex xl:flex-col xl:items-center xl:justify-center">
              <div>
                <CountUp
                  from={0}
                  to={3}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </div>
              <h2 className="text-xl xl:text-nowrap md:text-wrap font-medium text-dark/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Satisfied Clients
              </h2>
            </div>
            {/* count 2 */}
            <div className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:flex xl:flex-col xl:items-center xl:justify-center">
              <div>
                <CountUp
                  from={0}
                  to={15}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </div>
              <h2 className="text-xl text-nowrap md:text-wrap font-medium text-dark/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Projects Completed
              </h2>
            </div>
            {/* count 3 */}
            <div className="text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl xl:flex xl:flex-col xl:items-center xl:justify-center">
              <div>
                <CountUp
                  from={0}
                  to={2}
                  separator=","
                  direction="up"
                  duration={1}
                />
                +
              </div>
              <h2 className="text-xl text-nowrap md:text-wrap font-medium text-dark/75 dark:text-white/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                Years of Experience
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
