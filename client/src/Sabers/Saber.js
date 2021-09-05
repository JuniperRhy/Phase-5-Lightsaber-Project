import SaberEmitter from "./SaberEmitter";
import SaberSwitch from "./SaberSwitch";
import SaberGrip from "./SaberGrip";
import { useHistory } from "react-router-dom";

function Saber({
  saber: { hilt_color, blade_color, id, name, segments = [] } = {},
  sabers,
  setSabers,
  hideDelete,
  user,
}) {
  const history = useHistory();
  function handleDeleteSaber() {
    fetch(`http://localhost:3000/sabers/${id}`, {
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
        setSabers(sabers.filter((saber) => saber.id !== deletedSaber.id))
      );
  }
  return (
    <div className="saber-card">
      <h1 className="saber-card-title">{name}</h1>
      <div className="saber-svg">
        {segments
          .filter((segment) => segment.segment_type === "Grip")
          .map((segment, index) => {
            return (
              <div className="saber-grip" key={index}>
                <SaberGrip image={segment.image_Url} />
              </div>
            );
          })}
        {segments
          .filter((segment) => segment.segment_type === "Switch")
          .map((segment, index) => {
            return (
              <div className="saber-switch" key={index}>
                <SaberSwitch image={segment.image_Url} />
              </div>
            );
          })}
        {segments
          .filter((segment) => segment.segment_type === "Emitter")
          .map((segment, index) => {
            return (
              <div className="saber-emitter" key={index}>
                <SaberEmitter name={segment.name} image={segment.image_Url} />
              </div>
            );
          })}
      </div>
      {!hideDelete && (
        <div>
          <button value={id} onClick={handleDeleteSaber}>
            Delete Saber
          </button>
        </div>
      )}
      {/* <button
      value={user.sabers.ids.map((saber, index) => {
        console.log("BOOOTY", saber, index);
        return index;
      })}
      onClick={(e) => {
        history.push(
          `/sabers/${user.sabers.ids.map((saber, index) => {
            return index;
          })}`
        );
      }}
      >
        Edit Saber
      </button> */}
    </div>
  );
}

export default Saber;
