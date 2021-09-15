import "./Background.css";
import Stars from "./Stars";

import PlanetImage from "./PlanetImage";

function Background() {
  return (
    <div classname="background-container">
      <PlanetImage className="corner-planet" />
      <div className="starfield-A">
        <Stars />
      </div>
      <div className="starfield-B">
        <Stars />
      </div>
    </div>
  );
}
export default Background;
