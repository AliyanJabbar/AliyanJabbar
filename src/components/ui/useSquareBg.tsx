"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Squares from "./SquaresBg";

type Direction = "diagonal" | "up" | "down" | "right" | "left";

const SquareBg = () => {
  const [direction, setDirection] = useState<Direction>("diagonal");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const directionIndexRef = useRef(0);

  const directions: Direction[] = ["diagonal", "up", "right", "down", "left"];

  const updateDirection = useCallback(() => {
    directionIndexRef.current =
      (directionIndexRef.current + 1) % directions.length;
    setDirection(directions[directionIndexRef.current]);
  }, [directions]);

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Set up new interval
    intervalRef.current = setInterval(updateDirection, 3000);

    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [updateDirection]);

  return (
    <div className="fixed top-0 left-0 -z-10 dark:bg-dark bg-light opacity-0 dark:opacity-100 w-full h-screen">
      <Squares squareSize={50} direction={direction} speed={1.5} />
    </div>
  );
};

export default SquareBg;
