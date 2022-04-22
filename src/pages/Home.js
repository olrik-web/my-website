import { motion } from "framer-motion";
import NavBar from "../components/navBar/NavBar";
import SocialBar from "../components/socials/SocialBar";

const variants = {
  exit: { opacity: 0, x: 0, y: 100 },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1},
};

function Home() {
  return (
    <div>
      <NavBar />
      <SocialBar/>
      <section className="page">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
          className=""
        >
          <div className="container">
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.span variants={item}>
                <h1 className="title" style={{ display: "inline" }}>Hi, </h1>
              </motion.span>
              <motion.span variants={item}>
                <h1 className="title" style={{ display: "inline" }}>I'm Mus</h1>
              </motion.span>
              <motion.div variants={item}>
                <p>
                  Cras facilisis urna ornare ex volutpat, et convallis erat
                  elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui
                  bibendum est, eget rhoncus nibh metus nec massa. Maecenas
                  hendrerit laoreet augue nec molestie. Cum sociis natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.main>
      </section>
    </div>
  );
}

export default Home;
