"use client";
import React from "react";
import TiltedCard from "../../components/TiltedCard";
import Layout from "@/components/mainComponents/layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { GithubIcon } from "@/components/icons";
import Button from "@/components/Button";

export default function Projects() {
  const FeaturedProject = ({
    type,
    title,
    summary,
    img: { path, width, height },
    link,
    github,
  }: {
    type: string;
    title: string;
    summary: string;
    img: { path: string; width: number; height: number };
    link: string;
    github: string;
  }) => {
    return (
      <article className="w-full flex items-center justify-between rounded-3xl relative rounded-br-2xl border-[0.1px] border-solid border-dark bg-light shadow-lg p-12 shadow-dark dark:shadow-light dark:bg-dark dark:border-light py-8 px-10 text-dark dark:text-light transition-all duration-300 ease-in-out">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[40px] bg-dark dark:bg-light rounded-br-3xl" />
        <Link
          href={link}
          target="_blank"
          className="cursor-pointer w-1/2 flex justify-start rounded-lg"
        >
          <TiltedCard
            imageSrc={path}
            altText={title}
            containerHeight={`${height}px`}
            containerWidth={`${width}px`}
            imageHeight={`${height}px`}
            imageWidth={`${width}px`}
            rotateAmplitude={17}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary dark:text-primaryDark font-medium text-xl">
            {type}
          </span>
          <Link
            href={link}
            title={title}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light">
            {summary}
          </p>
          <div className="mt-2 flex items-center justify-start gap-5">
            <div className="z-10">
              <GithubIcon link={github} size="40px" />
            </div>
            <Button text="Visit Project" link={link} target="_blank" />
          </div>
        </div>
      </article>
    );
  };

  const Project = ({
    type,
    title,
    summary,
    img: { path, width, height },
    link,
    github,
  }: {
    type: string;
    title: string;
    summary: string;
    img: { path: string; width: number; height: number };
    link: string;
    github: string;
  }) => {
    return (
      <article className="w-full flex flex-col items-center justify-center rounded-2xl rounded-bl-3xl relative border border-solid border-dark bg-light shadow-lg p-6 shadow-dark dark:shadow-light dark:bg-dark dark:border-light text-dark dark:text-light transition-all duration-300 ease-in-out">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[32px] bg-dark dark:bg-light rounded-br-3xl" />
        <Link
          href={link}
          target="_blank"
          className="cursor-pointer w-full flex justify-center rounded-lg"
        >
          <TiltedCard
            imageSrc={path}
            altText={title}
            containerHeight={`${height}px`}
            containerWidth={`${width}px`}
            imageHeight={`${height}px`}
            imageWidth={`${width}px`}
            rotateAmplitude={17}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl">
            {type}
          </span>
          <Link
            href={link}
            title={title}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-1 font-medium text-dark dark:text-light">
            {summary}
          </p>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link href={link} className="underline text-dark dark:text-light">
              Visit
            </Link>
            <div className="z-10">
              <GithubIcon link={github} size="35px" />
            </div>
          </div>
        </div>
      </article>
    );
  };
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* <AnimatedText text="Where Innovation Meets Code" /> */}
          <AnimatedText
            text="Where Innovation Meets Code"
            characterAnimation={true}
            animateChars={[
              { word: 0, char: 0 }, // W
            ]}
            animationInterval={2000} // Complete cycle every 2 seconds
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 mt-20">
            <div className="col-span-12">
              <FeaturedProject
                title="Next.JS E-Commerce Website Food Chukh"
                summary="Developed during a GIAIC Hackathon, Food Chukh is a fully functional E-Commerce platform designed for food ordering. This Project has it's own Admin Dashboard for managing orders and customers. The project uses Sanity as a headless CMS to manage product data and blog content, while Next.js powers both the frontend and backend."
                github="https://github.com/AliyanJabbar/Hackathon-Food-Chukh"
                link="https://hackathon-ui-ux-nine.vercel.app/"
                img={{
                  path: "/assets/projects/Food_Chukh.png",
                  width: 470,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio Website"
                summary="Single Page Portfolio Website made with Next.js and Tailwind CSS. This project is a showcase of my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/figma-project"
                link="https://figma-portfolio-next-js.vercel.app/"
                img={{
                  path: "/assets/projects/single_page_portfolio.png",
                  width: 430,
                  height: 270,
                }}
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Food Chukh Admin Dashboard"
                summary=" Admin Dashboard for Food Chukh E-Commerce Website. The project uses Sanity as a headless CMS to manage product's data and customer's orders."
                github="https://github.com/AliyanJabbar/Food-Chukh-Admin-Dashboard"
                link="https://food-chukh-admin-dashboard.vercel.app/"
                img={{
                  path: "/assets/projects/Food_chukh_admin_dashboard.png",
                  width: 430,
                  height: 270,
                }}
                type="Admin Dashboard"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="TMC Model Colony Complaint Registration Portal"
                summary="A complaint registration portal for TMC Model Colony, designed to streamline the process of lodging complaints. The project uses Next.js for the frontend and backend, with a Sanity CMS connection for the management of complaints and user data. This complain portal also offers authentication and authorization features, ensuring secure access for users."
                github="https://github.com/AliyanJabbar/TMC-Model-Colony-Complain-Registration-Portal"
                link="https://tmc-model-colony-complain-registration.vercel.app/"
                img={{
                  path: "/assets/projects/tmc_model_colony.png",
                  width: 470,
                  height: 270,
                }}
                type="Complaint Registration Portal"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Facebook Clone Login Page"
                summary="Facebook Clone Login Page made with Next.js and Tailwind CSS. This project showcases my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/facebook-login-clone/my-app"
                link="https://facebook-login-nextjs-clone.vercel.app/"
                img={{
                  path: "/assets/projects/facebook_login_page_clone.png",
                  width: 430,
                  height: 270,
                }}
                type="Facebook Clone"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Portfolio Website with HTML CSS JS"
                summary="Portfolio Website made with HTML, CSS and JavaScript. This project is a showcase of my skills to convert a figma design to Real World Project."
                github="https://github.com/AliyanJabbar/Portfolio-HTML-CSS-JS"
                link="https://portfolio-html-css-js-blush.vercel.app/"
                img={{
                  path: "/assets/projects/html_css_js_portfolio.png",
                  width: 430,
                  height: 270,
                }}
                type="Portfolio Website"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Resume Builder For Free"
                summary="Developed during a GIAIC Hackathon, This Resume Builder provides 100% free resume building service, designed for Making Good Looking and professional Resume/CV. The project uses HTML as a markup, css for styling and javascript for interactions."
                github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-3%2C4%265"
                link="https://online-resume-builder-service.vercel.app/"
                img={{
                  path: "/assets/projects/resume_builder.jpg",
                  width: 470,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Simple Resume Like Portfolio"
                summary="This is a simple resume-like portfolio website made with HTML, CSS, and JavaScript. It showcases my skills in a clean and professional format."
                github="https://github.com/AliyanJabbar/Hackathon/tree/master/MileStone-1&2"
                link="https://interactive-resume-html-css.vercel.app/"
                img={{
                  path: "/assets/projects/resume.png",
                  width: 430,
                  height: 270,
                }}
                type="Resume Like Portfolio"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Next.JS Todo App"
                summary="This project allows users to create, read, update, and delete tasks. The app uses Neon DB for data storage and management."
                github="https://github.com/AliyanJabbar/Next.Js-Projects/tree/main/28-todo-app/my-todo-app"
                link="https://todo-app-nextjs-plum.vercel.app/"
                img={{
                  path: "/assets/projects/todo_app.png",
                  width: 430,
                  height: 270,
                }}
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
