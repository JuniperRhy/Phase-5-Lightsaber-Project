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
      <DisplaySVG segment={segment} bodyColor={hiltColor} />
      {showSegmentName && (
        <h1
          style={{
            visibility: transparentName && "hidden",
            textTransform: "lowercase",
            textAlign: "center",
          }}
        >
          {segment.name}
        </h1>
      )}
    </div>
  );
}

export default DisplaySegment;
