"use client";
import Hero from "@/components/mainComponents/Hero";
import HireMe from "@/components/mainComponents/HireMe";
import SquareBg from "@/components/ui/useSquareBg";

export default function Home() {
  return (
    <main>
      <SquareBg />
      <div className="relative z-20">
        <HireMe />
      </div>
      <Hero />
    </main>
  );
}
