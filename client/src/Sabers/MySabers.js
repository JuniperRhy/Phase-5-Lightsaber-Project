// import Saber from "./Saber";
import DisplaySaber from "./DisplaySaber";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

function MySabers({
  sabers,
  setSabers,
  user,
  segments,
  deleteNewSaber,
  mySabers,
}) {
  const { id } = useParams();
  const [saber, setSaber] = useState();

  const history = useHistory();

  useEffect(() => {
    if (id) setSaber(mySabers[id]);
  }, [mySabers, id]);

  return (
    <div>
      <h1 classname="username">{user.name}'s Collection</h1>
      {/* <div>{user.id}</div> */}
      {sabers

        .filter((saber) => saber.users.map((user) => user.id).includes(user.id))
        .map((saber, index) => {
          // console.log("There are many like it...", sabers);

          return (
            <>
              <h1
                value={mySabers}
                onClick={(e) => history.push(`/mysabers/${id}`)}
              >
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
            </>
          );
        })}
    </div>
  );
}

export default MySabers;
