import { motion } from "framer-motion";
import React from "react";
import { ProjectItems } from "../components/articles/ListItems";
import { Link, useParams } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function ProjectPage() {
  const params = useParams();
  let project;

  ProjectItems.forEach((element) => {
    if (element.id == params.id) {
      project = element;
    }
  });

  return (
    <div>
      <section className="page">
        <motion.main
          variants={variants} // Pass the variant object into Framer Motion
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ delay: "0.4", type: "linear" }} // Set the transition to linear
          className=""
        >
          <article className="projectHover blue-background">
            <h2>{project.title}</h2>
            <img
              className="projectImageDetails"
              src={project.thumbnail}
              alt={project.title}
            />
            <p className="pLinebreak">{project.description}</p>
            <div className="flexbox">
              <div className="divAlignBottom">
                <a
                  className="projectSolution"
                  href={project.solution}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-link projectIcon"></i>Check it out
                </a>
                <a
                  className="projectSolution"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github projectIcon"></i> Code
                </a>
              </div>
            </div>
          </article>
          <Link className="projectSolution breadcrumps" to={"/projects"}>
            <i className="fas fa-angle-double-left projectIcon "></i>
            Back to projects
          </Link>
        </motion.main>
      </section>
    </div>
  );
}
