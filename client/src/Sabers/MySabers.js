import "./Sabers.css";
import DisplaySaber from "./DisplaySaber";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { Fragment, useEffect, useState } from "react";

function MySabers({ user, mySabers, deleteSaber }) {
  const { pathId } = useParams();

  const history = useHistory();

  return (
    <div className="saber-display-body">
      <h1 classname="username">{user.name}'s Collection</h1>
      {mySabers.map((saber, index) => {
        return (
          <Fragment key={index}>
            <p onClick={() => history.push(`/mysabers/${index}`)}>
              {saber.name}
            </p>
            <DisplaySaber hideSegmentName saber={saber} />
            <div>
              <button
                onClick={(e) => {
                  fetch(`/sabers/${saber.id}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      saber: { user_ids: [user.id] },
                    }),
                  })
                    .then((res) => res.json())
                    .then((deletedSaber) => {
                      deleteSaber(deletedSaber);
                    });
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
