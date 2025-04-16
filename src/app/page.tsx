"use client";
import Hero from "@/components/mainComponents/Hero";
import HireMe from "@/components/mainComponents/HireMe";

export default function Home() {
  return (
    <div>
      <div className="relative z-20">
        <HireMe />
      </div>
      <Hero />
    </div>
  );
}
