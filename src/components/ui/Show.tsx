"use client";

import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Show({
  containerRef,
  setRevealed,
}: {
  containerRef: React.RefObject<HTMLElement | null>;
  setRevealed: (value: boolean) => void;
}) {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;
  const [color, setColor] = useState("#58E6D9");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [hidden, setHidden] = useState(false);
  const eraseCount = useRef(0);

  // Update canvas size to match container
  useEffect(() => {
    const updateSize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [containerRef]);

  // handle theme change
  useEffect(() => {
    const newColor = currentTheme === "dark" ? "#58E6D9" : "#9370DB";
    setColor(newColor);
  }, [theme]);

  // reset canvas on theme change
  useEffect(() => {
    resetCanvas();
  }, [color]);

  // Fill canvas with solid color
  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }, [dimensions, color]);

  //  used above in reset canvas on theme change
  const resetCanvas = () => {
    if (!canvasRef.current || !color) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    setHidden(false);
    setRevealed(false);
    eraseCount.current = 0;
  };

  // handle mouse interactions
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current || hidden) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ctx = canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });
    if (!ctx) return;

    const radius = 100;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, "rgba(0,0,0,1)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();

    // ✅ Throttle pixel checking
    eraseCount.current++;
    if (eraseCount.current % 50 !== 0) return;

    const imageData = ctx.getImageData(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    let erasedPixels = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) erasedPixels++;
    }

    const totalPixels = imageData.data.length / 4;
    const erasedPercent = erasedPixels / totalPixels;

    if (erasedPercent > 0.25 && !hidden) {
      setHidden(true);
      setRevealed(true);
    }
  };

  // handle touch interactions
  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (!touch) return;

    const syntheticMouseEvent = {
      clientX: touch.clientX,
      clientY: touch.clientY,
      currentTarget: e.currentTarget,
      nativeEvent: e.nativeEvent,
    } as unknown as React.MouseEvent<HTMLCanvasElement>;

    handleMouseMove(syntheticMouseEvent);
  };
  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove}
      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
        hidden ? "opacity-0 pointer-events-none z-0" : "z-30"
      }`}
      style={{ touchAction: "none" }} // prevent default gesture behavior on touch
    />
  );
}
