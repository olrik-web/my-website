import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function About() {
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
        <h2>About me</h2>
        <p className="homePageParagraph">
          Welcome to my website! My name is Marcus Olrik. I finished a Computer
          Science degree in January 2022. <br />I am currently studying Web
          Development, which I will graduate from in the summer of 2023.
        </p>
        <p>
          I have always had an interest in IT and technology. Later in life I've
          chosen to pursue my natural curiosity of IT in hopes of making a
          career out of my passion. Through work experience, education and
          projects I've possessed various skills, which moulded me into the
          competent Web and Full Stack Developer that I am today.
        </p>
      </motion.main>
    </section>
  );
}
