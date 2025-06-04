"use client";
import Button from "@/components/ui/Button";
import FallingText from "@/components/ui/FallingText";

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center z-[150] w-full h-[500px] py-[80px] space-y-6">
        <div className="flex items-center justify-center w-full">
          <Button text="Just Go Back" link="/" />
        </div>
        <FallingText
          text={`( Please Don't Touch ) Page Not Found 404`}
          highlightWords={["Not", "Found", "Touch"]}
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.2}
          fontSize="2.5rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </main>
  );
}
