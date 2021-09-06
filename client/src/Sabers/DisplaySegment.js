import DisplaySVG from "./DisplaySVG";

function DisplaySegment({
  segment,
  hiltColor,
  showSegmentName,
  transparentName,
}) {
  if (!segment) return null;

  return (
    <div style={{}}>
      {showSegmentName && (
        <h1
          style={{
            visibility: transparentName && "hidden",
            textAlign: "center",
          }}
        >
          {segment.name}
        </h1>
      )}
      <DisplaySVG segment={segment} bodyColor={hiltColor} />
    </div>
  );
}

export default DisplaySegment;
