import { motion } from "framer-motion";
import React from "react";

const variants = {
  exit: { opacity: 0, x: 0, y: 100 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <section className="homePage">
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
        className=""
      >
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span variants={item}>
              <h1 className="title" style={{ display: "inline" }}>
                Hi,{" "}
              </h1>
            </motion.span>
            <motion.span variants={item}>
              <h1 className="title" style={{ display: "inline" }}>
                I'm{" "}
              </h1>
              <h1 className="title titleName" style={{ display: "inline" }}>
                Marcus
              </h1>
            </motion.span>
            <motion.div variants={item}>
              <h3 className="homePageParagraph">
                I have a passion for bearcub
              </h3>
            </motion.div>
            <motion.div variants={item}>
              <p></p>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </section>
  );
}
