import DisplaySegment from "./DisplaySegment";

function DisplaySaber({ saber: { segments }, bodyColor = "#706F6F" }) {
  return (
    <div className="saber-display-container">
      {segments
        .filter((segment) => segment.segment_type === "Grip")
        .map((segment, index) => {
          return (
            <div className="saber-grip" key={index}>
              <DisplaySegment segment={segment} bodyColor={bodyColor} />
            </div>
          );
        })}
      {segments
        .filter((segment) => segment.segment_type === "Switch")
        .map((segment, index) => {
          return (
            <div className="saber-switch" key={index}>
              <DisplaySegment segment={segment} bodyColor={bodyColor} />
            </div>
          );
        })}
      {segments
        .filter((segment) => segment.segment_type === "Emitter")
        .map((segment, index) => {
          return (
            <div className="saber-emitter" key={index}>
              <DisplaySegment segment={segment} bodyColor={bodyColor} />
            </div>
          );
        })}
    </div>
  );
}

export default DisplaySaber;
