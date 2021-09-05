import React from "react";
import DisplaySaber from "./DisplaySaber.js";

function AllSabers({ sabers, segments, bodyColor = "url(#gold-vertical)" }) {
  return (
    <div>
      {sabers.map((saber, index) => {
        return (
          <DisplaySaber
            bodyColor={"url(#bronze-vertical)"}
            // bodyColor={bodyColor}
            hideSegmentName
            saber={saber}
          />
        );
      })}
    </div>
  );
}

//

export default AllSabers;
