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
    fetch("/sabers", {
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

        <div className="form-segments">
          <select
            // className="form-segments-selector"
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
              .map((segment, index) => {
                return (
                  <option key={index} value={segment.id}>
                    {segment.name}
                  </option>
                );
              })}
          </select>

          <br />
          <select
            className="form-segments-selector"
            name="switch"
            value={String(selectedSwitch?.id || "")}
            onChange={(e) => {
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
              .map((segment, index) => {
                return (
                  <option key={index} value={segment.id}>
                    {segment.name}
                  </option>
                );
              })}
          </select>

          <br />
          <select
            className="form-segments-selector"
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
              .map((segment, index) => {
                return (
                  <option key={index} value={segment.id}>
                    {segment.name}
                  </option>
                );
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
            disabled={!(selectedGrip && selectedSwitch && selectedEmitter)}
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </>
  );
}

export default NewSaber;
