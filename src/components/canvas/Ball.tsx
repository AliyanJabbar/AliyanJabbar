import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "./Loader";

// Technologies data
export const technologies = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
    description: "Semantic markup & accessibility",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
    description: "Modern styling & animations",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
    description: "ES6+ & modern features",
  },
  {
    name: "Python",
    icon: "/tech/python.png",
    description: "ES6+ & modern features",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
    description: "Type-safe development",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
    description: "Component-based UI",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.png",
    description: "State management",
  },
  {
    name: "Next JS",
    icon: "/tech/nextjs.png",
    description: "Full-stack React framework",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
    description: "Utility-first CSS",
  },
  {
    name: "Sanity",
    icon: "/tech/sanity.png",
    description: "Content Management System CMS",
  },
  {
    name: "Vercel",
    icon: "/tech/vercel.png",
    description: "Deployment & hosting",
  },
  {
    name: "GSAP",
    icon: "/tech/gsap.png",
    description: "Advanced animations",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.png",
    description: "3D graphics & WebGL",
  },
  {
    name: "git",
    icon: "/tech/git.png",
    description: "Version control",
  },
  {
    name: "Shadcn UI",
    icon: "/tech/shadcn.png",
    description: "Component library",
  },
  {
    name: "figma",
    icon: "/tech/figma.png",
    description: "UI/UX design to code",
  },
];

// Ball component
const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

// Ball Canvas
export const BallCanvas = ({
  icon,
  isVisible,
}: {
  icon: string;
  isVisible: boolean;
}) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={isVisible}
          autoRotateSpeed={0.5}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
