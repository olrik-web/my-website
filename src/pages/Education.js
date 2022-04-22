import NavBar from "../components/navBar/NavBar";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

function Stuff() {
    return (
      <div>
        <NavBar />
        <section className="page">
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: "linear" }} // Set the transition to linear
            className=""
          >
            <h2>Education</h2>
            <p>
              Mauris sem velit, vehicula eget sodales vitae, rhoncus eget
              sapien:
            </p>
            <ol>
              <li>Nulla pulvinar diam</li>
              <li>Facilisis bibendum</li>
              <li>Vestibulum vulputate</li>
              <li>Eget erat</li>
              <li>Id porttitor</li>
            </ol>
          </motion.main>
        </section>
      </div>
    );
}

export default Stuff;
