import React from "react";

export default function Project({ item }) {
  return (
    <article>
      <img src={item.thumbnail} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.githubPages}</p>
      <p>{item.githubUrl}</p>
    </article>
  );
}
