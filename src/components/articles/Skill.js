import React from "react";

export default function Skill({ item }) {
  let years = new Date().getFullYear() - item.yearBegun;
  let yearOrYears = "year";
  if (years > 1) {
    yearOrYears = "years";
  }
  return (
    <article>
      <i className={item.icon} id="skillLogo" />
      <h2>{item.title}</h2>
      <p>
        {years} {yearOrYears}
      </p>
    </article>
  );
}
