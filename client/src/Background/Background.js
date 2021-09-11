import "./Background.css";
import Stars1 from "./Stars1";
import Stars2 from "./Stars2";
import Stars3 from "./Stars3";
import Stars4 from "./Stars4";
import PlanetImage from "./PlanetImage";

function Background() {
  return (
    <div classname="background-container">
      {/* <PlanetImage className="corner-planet" /> */}
      <Stars1 />
      <Stars2 />
      <Stars3 />
      <Stars4 />
    </div>
  );
}
export default Background;
