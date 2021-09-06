// import Saber from "./Saber";
import "./Sabers.css";
import DisplaySaber from "./DisplaySaber";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Fragment, useEffect, useState } from "react";

function MySabers({
  sabers,
  setSabers,
  user,
  segments,
  deleteNewSaber,
  mySabers,
}) {
  const { pathId } = useParams();

  const history = useHistory();

  // useEffect(() => {
  //   if (pathId) setSaber(mySabers[pathId]);
  // }, [mySabers, pathId]);

  return (
    <div className="saber-display-body">
      <h1 classname="username">{user.name}'s Collection</h1>
      {/* <div>{user.id}</div> */}
      {mySabers.map((saber, index) => {
        return (
          <Fragment key={index}>
            <h1 onClick={() => history.push(`/mysabers/${index}`)}>
              {saber.name}
            </h1>
            <DisplaySaber hideSegmentName saber={saber} />
            <div>
              <button
                value={saber.id}
                onClick={(e) => {
                  fetch(`http://localhost:3000/sabers/${saber.id}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      saber: { user_ids: [user.id] },
                    }),
                  })
                    .then((res) => res.json())
                    .then((deletedSaber) =>
                      setSabers(
                        sabers.filter((saber) => saber.id !== deletedSaber.id)
                      )
                    );
                }}
              >
                Delete Saber
              </button>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}

export default MySabers;
