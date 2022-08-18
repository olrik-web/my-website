import React from "react";
import "./SocialBar.css";
import { motion } from "framer-motion";

function SocialBar() {
  return (
    <div className="socialBar">
      <a
        href="https://www.instagram.com/marcusolrik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
          <i className="fab fa-instagram socialIcon"></i>
        </motion.div>
      </a>

      <a
        href="https://www.linkedin.com/in/marcusolrik/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
          <i className="fab fa-linkedin socialIcon"></i>
        </motion.div>
      </a>
      <a
        href="https://github.com/olrik-web"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.div className="motionDiv" whileHover={{ scale: 1.3 }}>
          <i className="fab fa-github socialIcon"></i>
        </motion.div>
      </a>
    </div>
  );
}

export default SocialBar;
