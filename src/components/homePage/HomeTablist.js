import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeTablist(props) {
  const [activeTab, setActiveTab] = useState(props.items[0]);
  function handleClick(item) {
    setActiveTab(item);
  }
  return (
    <div className="tablist">
      <h2 className="homeTitle">
        <i className={props.icon}></i>
        {props.title}
      </h2>
      <section className="tablistSection">
        <div className="tab">
          {props.items.map((item, index) => {
            return (
              <button
                key={index}
                className={activeTab.id === item.id ? "active" : "tablinks"}
                onClick={() => handleClick(item)}
              >
                {item.title}
              </button>
            );
          })}
        </div>
        <div className="tabContent">
          <h4>{activeTab.longerTitle}</h4>
          <p>
            <small>{activeTab.date}</small>
          </p>
          <p>{activeTab.description}</p>
          <p>What I learned:</p>
          {activeTab.fields &&
            activeTab.fields.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}

          <Link className="projectSolution" to={activeTab.link}>
            Read more
          </Link>
        </div>
      </section>
    </div>
  );
}
