import React from "react";
import { ProjectItems } from "../articles/ListItems";
import ProjectCard from "./ProjectCard";

export default function HomeProjects() {
  return (
    <div>
      <h2 className="homeTitle">
        <i className="fas fa-project-diagram titleIcon"></i> Featured Projects
      </h2>
      <section className="projectCard">
        {ProjectItems.map((item, index) => {
          // Show the 3 first projects
          if (item.id === 4 || item.id === 5 || item.id === 6) {
            return <ProjectCard item={item} key={index} />;
          }
        })}
      </section>
    </div>
  );
}
