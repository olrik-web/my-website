import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function Education() {
  return (
    <section className="page">
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
      >
        <h2>Education</h2>
        <div >
          <div className="card">
            <div className="info">
              <h3 className="cardTitle">2023 | Bachelor in Web Development</h3>
              <p className="cardDesc">
                Bachelor top-up programme - 1½ years - 90 ECTS - Business
                Academy Aarhus <br />
                The programme in Web Development is a top-up bachelor degree to
                the Computer Science or Multimedia Design programmes, with a
                focus on websites, advanced web applications and mobile
                applications. <br /> <br />
                Danish title: Professionsbachelor i webudvikling
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="cardTitle">2022 | AP in Computer Science</h3>
              <p className="cardDesc">
                Higher education - 3½ years - 150 ECTS - Business Academy Aarhus{" "}
                <br />
                The programme in Computer Science has a focus on development,
                planning, implementation and IT operations for enterprise
                management. <br /> <br />
                Danish title: Datamatiker
              </p>
            </div>
          </div>
          <div className="card">
            <div className="info">
              <h3 className="cardTitle">
                2017 | General Certificate of Secondary Education
              </h3>
              <p className="cardDesc">
                International Economy - Bjerringbro Gymnasium <br />
                Study programme: Mathematics A, Danish A, English A, International Economy B, Physics B ...
              </p>
            </div>
          </div>
        </div>
      </motion.main>
    </section>
  );
}
