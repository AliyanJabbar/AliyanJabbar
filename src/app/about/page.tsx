"use client";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/mainComponents/layout";
import TiltedCard from "@/components/TiltedCard";
import React from "react";
import CountUp from "../../components/Count";

const About = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Passion Drives Purpose"
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 leading-[1.1]"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          {/* text */}
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-white/75">
              Biography
            </h2>
            <p className="font-medium text-dark dark:text-white">
              Hi, I'm <span className="font-bold">Aliyan</span> — a passionate Web Developer and UI/UX Designer
              dedicated to crafting beautiful, functional, and user-centered
              digital experiences. With over 2 years of experience in the field,
              I’m always seeking new and innovative ways to transform my
              clients' ideas into reality.
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
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 sm:order-first p-8 xs:p-4 cursor-pointer">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[32px] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[24px]" />
            <div className="flex items-center justify-center w-full h-full">
            <TiltedCard
              imageSrc="/assets/ProfilePic.png"
              altText="Aliyan Jabbar"
              containerHeight="380px"
              containerWidth="300px"
              imageHeight="380px"
              imageWidth="300px"
              rotateAmplitude={17}
              scaleOnHover={1.05}
              showTooltip={false}
              displayOverlayContent={false}
            />
            </div>
          </div>
          {/* counters */}
          <div className="col-span-2 flex flex-col items-end text-right justify-between text-black dark:text-white">
            {/* count 1 */}
            <div className="text-7xl font-bold">
              <CountUp
                from={0}
                to={1}
                separator=","
                direction="up"
                duration={1}
              /><span>+</span>
              <h2 className="text-xl text-nowrap font-medium text-dark/75 dark:text-white/75">Satisfied Clients</h2>
            </div>
            {/* count 2 */}
            <div className="text-7xl font-bold ">
              <CountUp
                from={0}
                to={15}
                separator=","
                direction="up"
                duration={1}
              /><span>+</span>
              <h2 className="text-xl text-nowrap font-medium text-dark/75 dark:text-white/75">Projects Completed</h2>
            </div>
            {/* count 3 */}
            <div className="text-7xl font-bold">
              <CountUp
                from={0}
                to={1}
                separator=","
                direction="up"
                duration={1}
              /><span>+</span>
              <h2 className="text-xl text-nowrap font-medium text-dark/75 dark:text-white/75">Years of Experience</h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default About;
