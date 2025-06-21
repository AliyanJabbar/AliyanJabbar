"use client";
import React, { useRef, useState } from "react";
import Layout from "@/components/mainComponents/layout";
import AnimatedText from "@/components/ui/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/ui/icons";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Show from "@/components/ui/Show";

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <article
      ref={containerRef}
      className={`relative w-full flex lg:flex-col items-center justify-between rounded-3xl rounded-br-2xl xs:rounded-2xl xs:rounded-br-3xl border-[0.1px] border-solid border-dark bg-light  shadow-lg shadow-dark dark:shadow-light dark:bg-dark dark:border-light py-8 px-10 lg:p-8 xs:p-4 text-dark dark:text-light transition-all duration-300 ease-in-out ${
        revealed ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[40px] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[24px]" />

      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-1/2 lg:w-full rounded-lg overflow-hidden relative z-20"
      >
        <Image
          src={img || "/placeholder.svg?height=720&width=1280"}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300"
          width={1280}
          height={720}
        />
      </Link>

      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6 relative z-20">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          title={title}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-start gap-7">
          <div className="z-10">
            <GithubIcon link={github} size="40px"/>
          </div>
          <Button text="Visit Project" link={link} target="_blank" />
        </div>
      </div>
      <Show containerRef={containerRef} setRevealed={setRevealed} />
    </article>
  );
};

const Project = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: {
  type: string;
  title: string;
  summary: string;
  img: string;
  link: string;
  github: string;
}) => {
  const containerRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  return (
    <article
      ref={containerRef}
      className={`w-full flex flex-col items-center justify-center rounded-2xl rounded-bl-3xl relative border border-solid border-dark bg-light shadow-lg p-6 shadow-dark dark:shadow-light dark:bg-dark dark:border-light text-dark dark:text-light transition-all duration-300 ease-in-out ${
        revealed ? "overflow-visible" : "overflow-hidden"
      }`}
    >
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[32px] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[24px]" />
      <Link
        href={link}
        target="_blank"
        className="cursor-pointer w-full rounded-lg overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300"
          width={1000}
          height={700}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          title={title}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-sm lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-1 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="underline text-dark dark:text-light md:text-base"
          >
            Visit
          </Link>
          <div className="z-10">
            <GithubIcon link={github} size="35px" />
          </div>
        </div>
      </div>
      <Show containerRef={containerRef} setRevealed={setRevealed} />
    </article>
  );
};

export default function Projects() {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center scrollbar-hide">
      <Layout className="pt-16 xs:p-0">
        <AnimatedText
          text="Where Innovation Meets Code"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          characterAnimation={true}
          animateChars={[
            { word: 0, char: 0 }, // W
          ]}
          animationInterval={2000}
        />

        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
          <div className="col-span-12">
            <FeaturedProject
              title="Food Chukh"
              summary="Developed during a GIAIC Hackathon, Food Chukh is a fully functional E-Commerce platform designed for food ordering. This Project has it's own Admin Dashboard for managing orders and customers. The project uses Sanity as a headless CMS to manage product data and blog content, while Next.js powers both the frontend and backend."
              github="https://github.com/AliyanJabbar/Hackathon-Food-Chukh"
              link="https://hackathon-ui-ux-nine.vercel.app/"
              img="/projects/5.png"
              type="E-Commerce"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Portfolio Website"
              summary="Single Page Portfolio Website made with Next.js and Tailwind CSS. This project is a showcase of my skills to convert a figma design to Real World Project."
              github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/figma-project"
              link="https://figma-portfolio-next-js.vercel.app/"
              img="/projects/3.png"
              type="Figma => Next JS"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Admin Dashboard"
              summary=" Admin Dashboard for Food Chukh E-Commerce Website. The project uses Sanity as a headless CMS to manage product's data and customer's orders."
              github="https://github.com/AliyanJabbar/Food-Chukh-Admin-Dashboard"
              link="https://food-chukh-admin-dashboard.vercel.app/"
              img="/projects/7.png"
              type="Food Chukh"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              title="TMC Model Colony"
              summary="A complaint registration portal for TMC Model Colony, designed to streamline the process of lodging complaints. The project uses Next.js for the frontend and backend, with a Sanity CMS connection for the management of complaints and user data. This complain portal also offers authentication and authorization features, ensuring secure access for users."
              github="https://github.com/AliyanJabbar/TMC-Model-Colony-Complain-Registration-Portal"
              link="https://tmc-model-colony-complain-registration.vercel.app/"
              img="/projects/8.png"
              type="Complaint Registration Portal"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Facebook Clone"
              summary="Facebook Login Page Clone made with Next.js and Tailwind CSS. This project showcases my skills to convert a figma design to Real World Project."
              github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/facebook-login-clone/my-app"
              link="https://facebook-login-nextjs-clone.vercel.app/"
              img="/projects/6.png"
              type="Clone"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="My Portfolio Website"
              summary="Portfolio Website made with HTML, CSS and JavaScript. This project is a showcase of my skills to convert a figma design to Real World Project."
              github="https://github.com/AliyanJabbar/Portfolio-HTML-CSS-JS"
              link="https://portfolio-html-css-js-blush.vercel.app/"
              img="/projects/4.png"
              type="Portfolio Website"
            />
          </div>

          <div className="col-span-12">
            <FeaturedProject
              title="Resume Builder"
              summary="Developed during a GIAIC Hackathon, This Resume Builder provides 100% free resume building service, designed for Making Good Looking and professional Resume/CV. The project uses HTML as a markup, css for styling and javascript for interactions."
              github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-3%2C4%265"
              link="https://online-resume-builder-service.vercel.app/"
              img="/projects/2.png"
              type="Free"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Simple Portfolio"
              summary="This is a simple resume-like portfolio website made with HTML, CSS, and JavaScript. It showcases my skills in a clean and professional format."
              github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-1&2"
              link="https://interactive-resume-html-css.vercel.app/"
              img="/projects/1.png"
              type="Resume Like Portfolio"
            />
          </div>

          <div className="col-span-6 sm:col-span-12">
            <Project
              title="Todo App"
              summary="This project allows users to create, read, update, and delete tasks. The app uses Neon DB for data storage and management."
              github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/28-todo-app/my-todo-app"
              link="https://todo-app-nextjs-plum.vercel.app/"
              img="/projects/9.png"
              type="Database | Next JS"
            />
          </div>
        </div>
      </Layout>
    </main>
  );
}
