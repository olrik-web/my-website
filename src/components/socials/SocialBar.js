import React from "react";
// import { NavLink } from "react-router-dom";
import "./SocialBar.css";
import { ReactComponent as InstagramLogo } from "../../images/instagram-brands.svg";
import { ReactComponent as LinkedInLogo } from "../../images/linkedin-brands.svg";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

function SocialBar() {
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ delay: "0.5", type: "linear" }} // Set the transition to linear
      className=""
    >
      <div className="socialBar">
        <a
          href="https://www.instagram.com/marcusolrik/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
            <i className="fab fa-instagram"></i>
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/marcusolrik/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
            <i className="fab fa-linkedin"></i>
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/marcusolrik/"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
            <i className="fab fa-github"></i>
          </motion.div>
        </a>
      </div>
    </motion.main>
  );
}

export default SocialBar;
