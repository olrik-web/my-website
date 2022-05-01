import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function WorkExperience() {
  return (
    <section className="page">
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
      >
        <h2>Work Experience</h2>
        <div className="outer">
          <div className="card">
            <div className="info">
              <h3 className="cardTitle">Jan. 2022 - Now | Student System Developer</h3>
              <p className="cardDesc">
                Student System Developer at Apport Systems A/S.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="cardTitle">Aug. 2021 - Dec. 2021 | Internship</h3>
              <p className="cardDesc">
                Internship as a Full Stack Developer at Maxtel.dk ApS.
              </p>
            </div>
          </div>
        </div>
      </motion.main>
    </section>
  );
}
