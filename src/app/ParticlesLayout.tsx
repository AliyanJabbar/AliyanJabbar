"use client";
import { useEffect, useState, useRef } from "react";
import ReactParticlesBg from "../components/ReactParticlesBg";

export default function ParticlesLayout() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    // Only initialize once
    if (initialized.current) return;
    initialized.current = true;

    setMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <ReactParticlesBg
        particleCount={200}
        particleSpread={5}
        speed={0.1}
        moveParticlesOnHover={!isMobile}
        particleHoverFactor={isMobile ? 1 : 2}
        alphaParticles={false}
        particleBaseSize={isMobile ? 2 : 3}
        sizeRandomness={1}
        disableRotation={isMobile}
      />
    </div>
  );
}
