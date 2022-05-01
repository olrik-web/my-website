import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Logo.css";
import React from "react";

export default function LogoAnimation() {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 3,
        duration: 2,
        ease: "easeIn",
      },
    },
  };
  const pathVariants1 = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 5,
        duration: 2,
        ease: "easeIn",
      },
    },
  };

  const slideIn = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 600,
      // transition: { duration: 2, delay: 2, type: "linear" },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 2, delay: 1, type: "linear" },
    },
    exit: {
      opacity: 0,
      x: 300,
      y: 0,
      transition: { duration: 1, type: "linear" },
    },
  };
  const x = useMotionValue(0);
  const scale = useTransform(x, [150, -150], [0.9, 1.1]);

  return (
    <motion.div
      variants={slideIn} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      // whileHover="hover"
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      style={{
        x: x,
        scale: scale,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      dragTransition={{ bounceStiffness: 60, bounceDamping: 20 }}
      // Set the transition to linear
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 500 500"
        className="svgSunLetter"
      >
        <linearGradient
          id="SunGradient"
          gradientUnits="userSpaceOnUse"
          x1="250"
          y1="495.9397"
          x2="250"
          y2="3.9552"
        >
          <stop offset="0" stopColor="#C51515" />
          <stop offset="1" stopColor="#D56D0D" />
        </linearGradient>
        <circle className="bgSun" cx="250" cy="250" r="250" />
        <g id="letter">
          <motion.path
            className="bgLetter"
            d="M100,409V91.2h26.4L250,245.84L373.55,92.05H400V409h-26.27V148.22L259.61,285.27l-19.05,0.03L126.27,148.42	V409H95.04"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        <motion.path
          className="bgCircle"
          d="M250,484C120.77,484,16,379.23,16,250S120.77,16,250,16s234,104.77,234,234S379.23,484,250,484z"
          variants={pathVariants1}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
}
