import React from "react";
import { Link } from "react-router-dom";

export default function Project({ item }) {
  let description = item.description;
  if (description.length > 210) {
    description = description.slice(0, 210) + " ...";
  }
  if (item.type === "web") {
    return (
      <article className="projectHover blue-background">
        <img
          className="projectImagePage"
          src={item.thumbnail}
          alt={item.title}
        />
        <h2>{item.title}</h2>
        <p>{description}</p>
        <div className="flexbox">
          <div className="divAlignBottom">
            <Link className="projectSolution" to={`/projects/${item.id}`}>
              Read more
            </Link>
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
  } else if (item.type === "mobile") {
    return (
      <article className="projectHover blue-background">
        <img
          className="projectImagePage"
          src={item.thumbnail}
          alt={item.title}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="flexbox">
        <div className="divAlignBottom">
          <Link className="projectSolution" to={`/projects/${item.id}`}>
            Read more
          </Link>
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
  } else if (item.type === "other") {
    return (
      <article className="projectHover blue-background">
        <img
          className="projectImagePage"
          src={item.thumbnail}
          alt={item.title}
        />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="flexbox">
          <div className="divAlignBottom">
            <Link className="projectSolution" to={`/projects/${item.id}`}>
              Read more
            </Link>
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
  // Project where type === category
  return (
    <article className="projectHover blue-background">
      <img className="projectImagePage" src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <Link className="projectSolution" to={item.solution}>
        See more
      </Link>
    </article>
  );
}
