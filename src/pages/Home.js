import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import { ReactComponent as BgCliff } from "../images/cliff-sun.svg";
import LogoAnimation from "../components/logo/LogoWithA";

const variants = {
  exit: { opacity: 0, x: 0, y: 100 },
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const background = {
  exit: { opacity: 0 },
  hidden: { opacity: 0 },
  enter: { opacity: 1, zIndex: -100 },
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
    <div>
      <LogoAnimation />

      <section className="homePage">
        <motion.div
          variants={background}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.5, delay:0.5, type: "linear" }} // Set the transition to linear
        >
          <BgCliff className="bgCliff" />
        </motion.div>
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
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("Mobile")
                        .pauseFor(3000)
                        .deleteAll()
                        .typeString("Full Stack")
                        .pauseFor(3000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
                <div className="typeWriter">Development</div>
              </motion.div>
              <motion.div variants={item}>
                <p></p>
              </motion.div>
            </motion.div>
          </div>
        </motion.main>
      </section>
    </div>
  );
}
