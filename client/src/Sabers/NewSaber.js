import "./Sabers.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import DisplaySegment from "./DisplaySegment";

const emitterTemplate = { name: "Template", segment_type: "Emitter" };
const gripTemplate = { name: "Template", segment_type: "Grip" };
const switchTemplate = { name: "Template", segment_type: "Switch" };

function NewSaber({ addNewSaber, segments, user }) {
  const [name, setName] = useState("");
  const [selectedGrip, setSelectedGrip] = useState();
  const [selectedSwitch, setSelectedSwitch] = useState();
  const [selectedEmitter, setSelectedEmitter] = useState();
  const [addedGripSegments, setAddedGripSegments] = useState([]);
  const [addedSwitchSegments, setAddedSwitchSegments] = useState([]);
  const [addedEmitterSegments, setAddedEmitterSegments] = useState([]);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/sabers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        saber: {
          name: name,
          user_ids: [user.id],
          segment_ids: [selectedGrip.id, selectedSwitch.id, selectedEmitter.id],
        },
      }),
    })
      .then((res) => res.json())
      .then((saberResponse) => {
        // console.log("PB RESP: ", saberResponse);
        addNewSaber(saberResponse);
      });
    history.push("/mysabers");
  }

  return (
    <>
      <form className="form-display" onSubmit={handleSubmit}>
        <div className="form-saber-name">
          <label>Lightsaber Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Lightsaber Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div className="form-segments">
          <select
            name="grip"
            value={String(selectedGrip?.id || "")}
            onChange={(e) => {
              setSelectedGrip(
                segments.find(
                  (segment) => String(segment.id) === e.target.value
                )
              );
            }}
          >
            <option>-Select Grip-</option>
            {segments
              .filter((segment) => segment.segment_type === "Grip")
              .map((segment) => {
                return <option value={segment.id}>{segment.name}</option>;
              })}
          </select>

          <br />
          <select
            name="switch"
            value={String(selectedSwitch?.id || "")}
            onChange={(e) => {
              // console.log(typeof e.target.value);
              setSelectedSwitch(
                segments.find(
                  (segment) => String(segment.id) === e.target.value
                )
              );
            }}
          >
            <option>-Select Switch-</option>
            {segments
              .filter((segment) => segment.segment_type === "Switch")
              .map((segment) => {
                return <option value={segment.id}>{segment.name}</option>;
              })}
          </select>

          <br />
          <select
            name="emitter"
            value={String(selectedEmitter?.id || "")}
            onChange={(e) => {
              console.log(typeof e.target.value);
              setSelectedEmitter(
                segments.find(
                  (segment) => String(segment.id) === e.target.value
                )
              );
              console.log(
                "Segments.Find",
                segments.find(
                  (segment) => String(segment.id) === e.target.value
                )
              );
            }}
          >
            <option>-Select Emitter-</option>
            {segments
              .filter((segment) => segment.segment_type === "Emitter")
              .map((segment) => {
                return <option value={segment.id}>{segment.name}</option>;
              })}
          </select>
        </div>

        <br></br>
        <div className="saber-display-container">
          <DisplaySegment
            segment={selectedGrip || gripTemplate}
            showSegmentName={true}
            transparentName={!selectedGrip}
          />
          <DisplaySegment
            segment={selectedSwitch || switchTemplate}
            showSegmentName={true}
            transparentName={!selectedSwitch}
          />
          <DisplaySegment
            segment={selectedEmitter || emitterTemplate}
            showSegmentName={true}
            transparentName={!selectedEmitter}
          />
        </div>
        <div className="form-submit-button">
          <input
            disabled={!(selectedGrip && selectedSwitch && selectedSwitch)}
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </>
  );
}

// function GripSegment({
//   addedGripSegments,
//   setAddedGripSegments,
//   selectedGripId,
//   segmentIndex,
//   segment,
// }) {
//   function handleRemoveClick() {
//     console.log(segmentIndex);
//     const list = [...addedGripSegments];
//     list.splice(segmentIndex, 1);
//     setAddedGripSegments(list);
//   }
//   return (
//     <div className="">
//       <div>
//         <img className="" alt={segment.name} src={segment.image_Url}></img>
//       </div>

//       <div className="">Grip{segment.name}</div>
//       <input
//         type="button"
//         value="Remove Grip"
//         onClick={() => handleRemoveClick()}
//       ></input>
//     </div>
//   );
// }
// function SwitchSegment({
//   addedSwitchSegments,
//   setAddedSwitchSegments,
//   selectedSwitch,
//   segmentIndex,
//   segment,
// }) {
//   function handleRemoveClick() {
//     console.log(segmentIndex);
//     const list = [...addedSwitchSegments];
//     list.splice(segmentIndex, 1);
//     setAddedSwitchSegments(list);
//   }
//   return (
//     <div className="">
//       <div>
//         <img className="" alt={segment.name} src={segment.image_Url}></img>
//       </div>

//       <div className="">Switch{segment.name}</div>
//       <input
//         type="button"
//         value="Remove Switch"
//         onClick={() => handleRemoveClick()}
//       ></input>
//     </div>
//   );
// }
// function EmitterSegment({
//   addedEmitterSegments,
//   setAddedEmitterSegments,
//   selectedEmitter,
//   segmentIndex,
//   segment,
// }) {
//   function handleRemoveClick() {
//     console.log(segmentIndex);
//     const list = [...addedEmitterSegments];
//     list.splice(segmentIndex, 1);
//     setAddedEmitterSegments(list);
//   }
//   return (
//     <div className="">
//       <div>
//         <img className="" alt={segment.name} src={segment.image_Url}></img>
//       </div>

//       <div className="">Emitter{segment.name}</div>
//       <input
//         type="button"
//         value="Remove Emitter"
//         onClick={() => handleRemoveClick()}
//       ></input>
//     </div>
//   );
// }

export default NewSaber;
