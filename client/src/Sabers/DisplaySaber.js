import DisplaySegment from "./DisplaySegment";
import { getHiltColor } from "../utils/get-hilt-color";
import { svgColors } from "../utils/svg-colors";
import SaberBlade from "./SaberBlade";

function DisplaySaber({
  saber: { segments, blade_color: bladeColor },
  saber,
  gripColor,
  switchColor,
  emitterColor,
  showSaberBlade,
}) {
  if (!bladeColor) bladeColor = "#09ff99";

  return (
    <div>
      <div className="saber-display-container">
        {segments
          .filter((segment) => segment.segment_type === "Grip")
          .map((segment, index) => {
            return (
              <div className="saber-segments" key={index}>
                <DisplaySegment
                  segment={segment}
                  hiltColor={
                    gripColor || svgColors[getHiltColor(saber, "Grip")]
                  }
                />
              </div>
            );
          })}
        {segments
          .filter((segment) => segment.segment_type === "Switch")
          .map((segment, index) => {
            return (
              <div className="saber-segments" key={index}>
                <DisplaySegment
                  segment={segment}
                  hiltColor={
                    switchColor || svgColors[getHiltColor(saber, "Switch")]
                  }
                />
              </div>
            );
          })}
        {segments
          .filter((segment) => segment.segment_type === "Emitter")
          .map((segment, index) => {
            return (
              <div className="saber-segments" key={index}>
                <DisplaySegment
                  segment={segment}
                  hiltColor={
                    emitterColor || svgColors[getHiltColor(saber, "Emitter")]
                  }
                />
              </div>
            );
          })}
      </div>
      {showSaberBlade && <SaberBlade bladeColor={bladeColor} />}
    </div>
  );
}

export default DisplaySaber;
