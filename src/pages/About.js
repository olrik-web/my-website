import { motion } from "framer-motion";
import React from "react";
import { SkillItems } from "../components/articles/ListItems";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
};

export default function About(props) {
  if (props.short) {
    return (
      <section className="tablist">
        <h2 className="homeTitle">
          <i className="fas fa-user titleIcon"></i>About me
        </h2>

        <article className="homeAboutMeSection">
          <div className="homeAboutMeArticle">
            <h3>
              I finished a Computer Science degree in January 2022. I am
              currently studying Web Development, which I will graduate from in
              the summer of 2023.
            </h3>
            <h3>
              I am confortable with Visual Studio, VS Code, Android Studio,
              Adobe (Photoshop, Illustrator and Lightroom) and Windows.
            </h3>
            <center>
              <h2 className="lanToolTitle">
                My preferred programming languages and tools
              </h2>
            </center>
            <div className="grid-container blue-background">
              {SkillItems.map((item, index) => {
                return (
                  <article key={index}>
                    <h2>
                      <i className={item.icon} id="skillLogo" />
                      {item.title}
                    </h2>
                    <p>
                      <small>Since {item.yearBegun}</small>
                    </p>
                    <p>{item.desc}</p>
                  </article>
                );
              })}
            </div>
            <Link className="projectSolution" to={"/about"}>
              Read more about me
            </Link>
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
          hard-working developer that I am today.
        </p>
        <p>
          I am confortable with Visual Studio, VS Code, Android Studio, Adobe
          (Photoshop, Illustrator and Lightroom) and Windows.
        </p>
        <center>
          <h2 className="lanToolTitle">
            My preferred programming languages and tools
          </h2>
        </center>
        <section className="grid-container blue-background">
          {SkillItems.map((item, index) => {
            return (
              <article key={index}>
                <h2>
                  <i className={item.icon} id="skillLogo" />
                  {item.title}
                </h2>
                <p>
                  <small>Since {item.yearBegun}</small>
                </p>
                <p>{item.desc}</p>
              </article>
            );
          })}
        </section>

        {/* <p>TODO: INTEREST</p> */}
      </motion.main>
    </section>
  );
}
