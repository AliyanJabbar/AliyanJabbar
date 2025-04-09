//  particles parallax
"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

interface ReactParticlesBgProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  backgroundColor?: string;
  className?: string;
}

const ReactParticlesBg = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 5,
  sizeRandomness = 1,
  disableRotation = false,
  backgroundColor,
  className,
}: ReactParticlesBgProps) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  const [actualParticleColors, setActualParticleColors] = useState<string[]>(
    []
  );
  const [actualBackgroundColor, setActualBackgroundColor] = useState("");
  const [init, setInit] = useState(false);

  // Update colors based on theme
  useEffect(() => {
    setActualParticleColors(
      particleColors ||
        (currentTheme === "dark"
          ? ["#ffffff", "#58E6D9"]
          : ["#000000", "#B63E96"])
    );

    setActualBackgroundColor(
      backgroundColor || (currentTheme === "dark" ? "#1b1b1b" : "#f5f5f5")
    );
  }, [currentTheme, backgroundColor, particleColors]);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const minSize = particleBaseSize * (1 - sizeRandomness * 0.5);
  const maxSize = particleBaseSize * (1 + sizeRandomness * 0.5);

  return (
    <div className={className}>
      {init && (
        <Particles
          key={`particles-${currentTheme || "initial"}`} // Re-render on theme change
          id="tsparticles"
          className="particles-container"
          options={{
            background: {
              color: {
                value: actualBackgroundColor,
              },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: particleCount,
                density: {
                  enable: true,
                },
              },
              color: {
                value: actualParticleColors,
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: alphaParticles ? { min: 0.3, max: 0.8 } : 1,
                animation: {
                  enable: true,
                  speed: speed * 2,
                  sync: false,
                },
              },
              size: {
                value: { min: minSize, max: maxSize },
                animation: {
                  enable: true,
                  speed: speed * 5,
                  sync: false,
                },
              },
              move: {
                enable: true,
                speed: speed * 3,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                  default: "out",
                },
                trail: {
                  enable: false,
                },
                path: {
                  enable: !disableRotation,
                  delay: {
                    value: 0,
                  },
                  options: {
                    size: {
                      enable: true,
                      value: 0,
                    },
                  },
                },
                spin: {
                  enable: !disableRotation,
                  acceleration: speed * 0.5,
                },
                vibrate: true,
                warp: true,
              },
              shadow: {
                blur: 5,
                color: {
                  value: "#ffffff",
                },
                enable: true,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              twinkle: {
                lines: {
                  enable: true,
                  frequency: 0.005,
                  opacity: 1,
                },
                particles: {
                  enable: true,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: moveParticlesOnHover,
                  mode: "attract",
                  parallax: {
                    enable: moveParticlesOnHover,
                    force: particleHoverFactor * 20,
                    smooth: 10,
                  },
                },
                resize: {
                  enable: true,
                  delay: 0.5,
                },
              },
              modes: {
                attract: {
                  distance: particleSpread * 20,
                  duration: 0.4,
                  easing: "ease-out",
                  factor: particleHoverFactor * 5,
                  maxSpeed: 50,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 0.005,
                  pauseOnStop: true,
                  quantity: 5,
                  particles: {
                    color: {
                      value: actualParticleColors,
                    },
                    collisions: {
                      enable: false,
                    },
                    links: {
                      enable: false,
                    },
                    move: {
                      outModes: {
                        default: "destroy",
                      },
                      speed: 2,
                    },
                    size: {
                      value: { min: minSize / 2, max: maxSize / 2 },
                    },
                  },
                },
              },
            },
            detectRetina: true,
            groups: {
              z5: {
                number: {
                  value: particleCount / 4,
                },
                zIndex: {
                  value: 5,
                },
              },
              z10: {
                number: {
                  value: particleCount / 4,
                },
                zIndex: {
                  value: 10,
                },
              },
              z15: {
                number: {
                  value: particleCount / 4,
                },
                zIndex: {
                  value: 15,
                },
              },
              z20: {
                number: {
                  value: particleCount / 4,
                },
                zIndex: {
                  value: 20,
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};
export default ReactParticlesBg;
