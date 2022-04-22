import NavBar from "../components/navBar/NavBar";
import { motion } from "framer-motion";
import { ProjectItems } from "../components/projects/ProjectItems";
import SocialBar from "../components/socials/SocialBar";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

function Projects() {
  return (
    <div>
      <NavBar />
      <SocialBar />
      <section className="page">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
          className=""
        >
          <h2>Projects I've worked on</h2>
          {/* {ProjectItems.map((item, index) => {
            return (
              <li>
                <div key={index}>
                  <p>{item.title}</p>
                </div>
              </li>
            );
          })} */}
        </motion.main>
      </section>
    </div>
  );
}

export default Projects;
