"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const SparklesText = ({
  text,
  colors = { first: "#FCD34D", second: "#8E4EC6" },
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateStar = () => {
      const starX = `${Math.random() * 50}%`;
      const starY = `${Math.random() * 50}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 4;
      const scale = Math.random() * 0.8;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        })
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 1000);

    return () => clearInterval(interval);
  }, [colors.first, colors.second]);

  return (
    <div
      className={cn(
        "text-xl flex font-semibold justify-center md:text-2xl",
        className
      )}
      {...props}
      style={{
        "--sparkles-first-color": `${colors.first}`,
        "--sparkles-second-color": `${colors.second}`,
      }}
    >
      <span className=" absolute z-20">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <p>{text}</p>
      </span>
    </div>
  );
};

const Sparkle = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesText;
