import React from "react";
import "../../css/homePage.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ item }) {
  let description = item.description;
  if (description.length > 210) {
    description = description.slice(0, 210) + " ...";
  }
  return (
    <article className="projectArticle">
      <div className="projectImageFilter">
        <a href={item.solution} target="_blank" rel="noopener noreferrer">
          <img className="projectImage" src={item.thumbnail} alt={item.title} />
        </a>
      </div>
      <div className="projectTextContainer">
        <h3 className="projectHeadline">{item.title}</h3>
        <div
          className={item.id % 2 !== 0 ? "projectText" : "projectTextReverse"}
        >
          <p className="pLinebreak">{description}</p>
          <Link className="projectSolution" to={`/projects/${item.id}`}>
            Read more
          </Link>
        </div>
        {/* Every second button has a class which aligns them to the right */}
        <div className={item.id % 2 !== 0 ? "projectButtons" : ""}>
          <a
            className="projectSolution"
            href={item.solution}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link projectIcon"></i>Check it out
          </a>
          <a
            className="projectSolution"
            href={item.code}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github projectIcon"></i>Code
          </a>
        </div>
      </div>
    </article>
  );
}
