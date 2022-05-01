import "./Logo.css";
import React from "react";


export default function LogoAnimation() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      className="svgSunLetterLogo"
    >
      <linearGradient
        id="SunGradient"
        gradientUnits="userSpaceOnUse"
        x1="250"
        y1="495.9397"
        x2="250"
        y2="3.9552"
      >
        <stop offset="0" stopColor="#C51515" />
        <stop offset="1" stopColor="#D56D0D" />
      </linearGradient>
      <circle className="bgSun" cx="250" cy="250" r="250" />
      <g id="letter">
        <path
          className="bgLetter"
          d="M100,409V91.2h26.4L250,245.84L373.55,92.05H400V409h-26.27V148.22L259.61,285.27l-19.05,0.03L126.27,148.42	V409H95.04"
        />
      </g>
    </svg>
  );
}
