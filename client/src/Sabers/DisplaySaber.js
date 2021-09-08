import DisplaySegment from "./DisplaySegment";
import { getHiltColor } from "../utils/get-hilt-color";
import { svgColors } from "../utils/svg-colors";

function DisplaySaber({
  saber: { segments },
  saber,
  gripColor,
  switchColor,
  emitterColor,
}) {
  return (
    <div className="saber-display-container">
      {segments
        .filter((segment) => segment.segment_type === "Grip")
        .map((segment, index) => {
          return (
            <div key={index}>
              <DisplaySegment
                segment={segment}
                hiltColor={gripColor || svgColors[getHiltColor(saber, "Grip")]}
              />
            </div>
          );
        })}
      {segments
        .filter((segment) => segment.segment_type === "Switch")
        .map((segment, index) => {
          return (
            <div key={index}>
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
            <div key={index}>
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
  );
}

export default DisplaySaber;
