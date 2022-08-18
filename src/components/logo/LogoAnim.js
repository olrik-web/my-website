import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Logo.css";
import React from "react";

export default function LogoAnim() {
  const pathVariants = {
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
  const pathVariants1 = {
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

  const slideIn = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
      // transition: { duration: 2, delay: 2, type: "linear" },
    },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 2, delay: 2, type: "linear" },
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
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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
        <g id="letter">
          <motion.path
            className="bgCircle"
            d="M250,484C120.8,484,16,379.2,16,250S120.8,16,250,16s234,104.8,234,234S379.2,484,250,484z"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        <motion.path
          className="bgLetter"
          d="M144,356V140l108,108l108-108v216"
          variants={pathVariants1}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </motion.div>
  );
}
