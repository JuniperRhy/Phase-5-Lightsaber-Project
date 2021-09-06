import { Fragment } from "react";

const createLinearGradient = (id, stops) => (
  <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
    {stops.map(([offset, color], index) => (
      <stop key={index} offset={`${offset}%`} stopColor={color} />
    ))}
  </linearGradient>
);

export const getDefs = () => (
  <defs>
    {defs.map((def, index) => (
      <Fragment key={index}>{def}</Fragment>
    ))}
  </defs>
);

const defs = [
  createLinearGradient("gold-vertical", [
    [0, "#FDF5A6"],
    [10, "#B88746"],
    [25, "#595959"],
    [50, "#B88746"],
    [100, "#FDF5A6"],
  ]),
  createLinearGradient("silver-vertical", [
    [0, "#f0f0f0"],
    [10, "#595959"],
    [25, "#5e5e5e"],
    [90, "#ebebeb"],
    [100, "#e6e6e6"],
  ]),
];

/*

<defs>
           

            <linearGradient
              id="royal-chromium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#f0f0f0"></stop>
              <stop offset="10%" stop-color="#595959"></stop>
              <stop offset="25%" stop-color="#ffffff"></stop>
              <stop offset="50%" stop-color="#d9d9d9"></stop>
              <stop offset="75%" stop-color="#ebebeb"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="duraplast-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#b8b8b8"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#fcfcfc"></stop>
              <stop offset="90%" stop-color="#d9d9d9"></stop>
              <stop offset="100%" stop-color="#b8b8b8"></stop>
            </linearGradient>

            <linearGradient
              id="bronze-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#9e6941"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#9e6941"></stop>
              <stop offset="100%" stop-color="#dda680"></stop>
            </linearGradient>

            <linearGradient
              id="pink-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#bd7d75"></stop>
              <stop offset="10%" stop-color="#ffffff"></stop>
              <stop offset="25%" stop-color="#bd7d75"></stop>
              <stop offset="100%" stop-color="#ffc5b9"></stop>
            </linearGradient>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#262423"></stop>
              <stop offset="100%" stop-color="#4d4846"></stop>
            </linearGradient>

            <linearGradient
              id="copper-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#8f470b"></stop>
              <stop offset="10%" stop-color="#ffca9e"></stop>
              <stop offset="25%" stop-color="#8f470b"></stop>
              <stop offset="100%" stop-color="#d9945b"></stop>
            </linearGradient>

            <linearGradient
              id="crodium-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stop-color="#170900"></stop>
              <stop offset="10%" stop-color="#d9945b"></stop>
              <stop offset="25%" stop-color="#2e1200"></stop>
              <stop offset="100%" stop-color="#170900"></stop>
            </linearGradient>
          </defs>

          */
