import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";

const variants = {
  exit: { opacity: 0, x: 0, y: 100 },
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const container = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
  },
};

export default function Home() {
  return (
    <section className="homePage">
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden"
        animate="enter"
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
      >
        <div className="container">
          <motion.div variants={container} initial="hidden" animate="enter">
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
            <motion.div variants={item} className="homePageParagraph">
              <h3>I have a passion for </h3>
              <div className="typeWriter">
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typeWriter) => {
                    typeWriter
                      .typeString("Web")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Mobile")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Full Stack")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              <div className="typeWriter">
                Development
              </div>
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
