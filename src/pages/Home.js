import { motion, useScroll } from "framer-motion";
import React from "react";
import { ReactComponent as BgCliff } from "../images/cliff-sun.svg";
import LogoAnimation from "../components/logo/LogoAnim";
import HomeProjects from "../components/homePage/HomeProjects";
import { EducationItems, WorkExpItems } from "../components/articles/ListItems";
import HomeTablist from "../components/homePage/HomeTablist";
import About from "./About";
import Contact from "./Contact";

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
  // TODO: Animate pages by scrolling
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <LogoAnimation />
      <section className="homePage">
        <motion.div
          variants={background}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.5, delay: 0.5, type: "linear" }} // Set the transition to linear
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
          <div>
            <motion.div variants={container} initial="hidden" animate="enter">
              <motion.span variants={item}>
                <h3 className="title">Hi, </h3>
              </motion.span>
              <motion.span variants={item}>
                <h3 className="title">my name is </h3>
              </motion.span>
              <motion.span variants={item}>
                <h1 className="titleName">Marcus Olrik</h1>
              </motion.span>
              <motion.div variants={item} className="homePageParagraph">
                <h2>I build things for the web </h2>
                <h4>
                  I'm a web developer who specializes in building and designing
                  exceptional digital experiences. My skills include developing
                  full stack and mobile applications.
                </h4>
              </motion.div>
            </motion.div>
          </div>
        </motion.main>
      </section>
      <motion.main
        variants={variants}
        exit="exit"
        transition={{ delay: "0.4", type: "linear" }}
      >
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>

        <HomeProjects />
        <HomeTablist
          items={WorkExpItems}
          title="Work Experience"
          icon="fas fa-building titleIcon"
        />
        <HomeTablist
          items={EducationItems}
          title="Education"
          icon="fas fa-graduation-cap titleIcon"
        />
        <About short={true} />
        <Contact short={true} />
      </motion.main>
    </div>
  );
}
