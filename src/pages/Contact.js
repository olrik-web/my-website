import { motion } from "framer-motion";
import React from "react";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function Contact(props) {
  if (props.short) {
    return (
      <section className="tablist">
        <h2 className="homeTitle">
          <i className="fas fa-envelope titleIcon"></i>Contact
        </h2>
        <article className="homeAboutMeSection">
          <div className="homeAboutMeArticle">
            <p>
              Send me an email at{" "}
              <a href="mailto:molrik@outlook.com">molrik@outlook.com</a>
            </p>
          </div>
        </article>
      </section>
    );
  }
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
        <h2>Contact me</h2>
        <p>
          Send me an email at{" "}
          <a href="mailto:molrik@outlook.com">molrik@outlook.com</a>
        </p>
      </motion.main>
    </section>
  );
}
