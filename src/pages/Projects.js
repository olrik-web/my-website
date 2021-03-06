import { motion } from "framer-motion";
import { ProjectItems } from "../components/articles/ListItems";
import Project from "../components/articles/Project";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function Projects() {
  return (
    <section className="page">
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
        className=""
      >
        <h2>Projects I've worked on</h2>
        <section className="grid-container">
          {ProjectItems.map((item, index) => {
              return <Project item={item} key={index} />;
          })}
        </section>
      </motion.main>
    </section>
  );
}
