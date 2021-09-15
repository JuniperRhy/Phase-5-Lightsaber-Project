import React from "react";
import "./Sabers.css";
import DisplaySaber from "./DisplaySaber.js";

function AllSabers({ sabers, segments, bodyColor = "url(#gold-vertical)" }) {
  return (
    <div className="saber-display-body">
      {sabers.map((saber, index) => {
        return (
          <DisplaySaber
            showSaberBlade={true}
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
