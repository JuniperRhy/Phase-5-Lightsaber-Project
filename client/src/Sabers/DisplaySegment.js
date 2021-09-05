import DisplaySVG from "./DisplaySVG";

function DisplaySegment({
  segment,
  bodyColor = "#706F6F",
  showSegmentName = false,
}) {
  if (!segment) return null;

  return (
    <div>
      {showSegmentName && <h1>{segment.name}</h1>}
      <DisplaySVG segment={segment} bodyColor={bodyColor} />
    </div>
  );
}

export default DisplaySegment;
