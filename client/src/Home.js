import React from "react";
import DisplaySaber from "./Sabers/DisplaySaber.js";

function Home({ sabers, segments, bodyColor = "url(#gold-vertical)" }) {
  return (
    <div>
      {sabers
        .filter((saber) => saber.name === "Classic Saber")
        .map((saber, index) => {
          return (
            <DisplaySaber
              key={index}
              bodyColor={"url(#bronze-vertical)"}
              hideSegmentName
              saber={saber}
            />
          );
        })}
    </div>
  );
}

//

export default Home;
