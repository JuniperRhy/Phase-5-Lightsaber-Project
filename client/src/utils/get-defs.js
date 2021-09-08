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

   <filter id="lessshadow" x="0" y="0" width="500%" height="200%">
  <feDropShadow dx="10" dy="20" stdDeviation="2" flood-color="#ffffff" flood-opacity=".15" />
</filter>
   <filter id="shadow" x="0" y="0" width="500%" height="200%">
  <feDropShadow dx="5" dy="5" stdDeviation="10" flood-color="#ffffff" flood-opacity=".15" />
</filter>
  
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
  createLinearGradient("royal-chromium-vertical", [
    [0, "#f0f0f0"],
    [10, "#595959"],
    [25, "#ffffff"],
    [50, "#5e5e5e"],
    [75, "#d9d9d9"],
    [100, "#b8b8b8"],
  ]),
  createLinearGradient("duraplast-vertical", [
    [0, "#b8b8b8"],
    [10, "#ffffff"],
    [25, "#fcfcfc"],
    [90, "#d9d9d9"],
    [100, "#b8b8b8"],
  ]),
  createLinearGradient("bronze-vertical", [
    [0, "#9e6941"],
    [10, "#ffffff"],
    [25, "#9e6941"],
    [100, "#dda680"],
  ]),
  createLinearGradient("pink-vertical", [
    [0, "#bd7d75"],
    [10, "#ffffff"],
    [25, "#bd7d75"],
    [100, "#ffc5b9"],
  ]),
  createLinearGradient("gunmetal-vertical", [
    [0, "#262423"],
    [35, "#5e5e5e"],
    [75, "#595959"],
    [100, "#4d4846"],
  ]),
  createLinearGradient("copper-vertical", [
    [0, "#8f470b"],
    [10, "#ffca9e"],
    [25, "#8f470b"],
    [100, "#d9945b"],
  ]),
  createLinearGradient("crodium-vertical", [
    [0, "#170900"],
    [10, "#d9945b"],
    [25, "#2e1200"],
    [100, "#170900"],
  ]),
];

{
  /* <defs>

            <linearGradient
              id="gunmetal-vertical"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#262423"></stop>
              <stop offset="100%" stopColor="#4d4846"></stop>
            </linearGradient>

 */
}
