import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import DisplaySaber from "./DisplaySaber";
import { svgColors } from "../utils/svg-colors";
import { getHiltColor } from "../utils/get-hilt-color";

const createColorSelector = (selectedColor, setSelectedColor) => (
  <select
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
  >
    <option value="default">Select a Hilt Material</option>
    <option value="Bling" name="Bling">
      Bling
    </option>
    <option value="Copper" name="Copper">
      Copper
    </option>
    <option value="Crodium" name="Crodium">
      Crodium
    </option>
    <option value="Gunmetal" name="Gunmetal">
      Durite
    </option>
    <option value="Duraplast" name="Duraplast">
      Duraplast
    </option>
    <option value="Gold" name="Gold">
      Haysian Smelt
    </option>
    <option value="Bronze" name="Bronze">
      Polished Bronzium
    </option>
    <option value="RoyalChromium" name="RoyalChromium">
      Royal Chromium
    </option>
    {/* <option value="Silver" name="Silver">
          Silver
        </option> */}
    <option value="RoseGold" name="RoseGold">
      Silvian Iron
    </option>
  </select>
);

function SaberEdit({ mySabers, updatedSaberArray }) {
  const { id } = useParams();
  const [saber, setSaber] = useState();

  const [selectedEmitterColor, setSelectedEmitterColor] = useState(
    svgColors.default
  );
  const [selectedGripColor, setSelectedGripColor] = useState(svgColors.default);
  const [selectedSwitchColor, setSelectedSwitchColor] = useState(
    svgColors.default
  );

  const history = useHistory();

  useEffect(() => {
    if (mySabers.length && id) {
      console.log("*** Debugging mySabers, id: ", mySabers, id);
      const saber = mySabers[id];

      console.log(
        "Segment Find: ",
        saber.segments.find((segment) => segment.segment_type === "Grip")
      );

      setSelectedGripColor(getHiltColor(saber, "Grip"));
      setSelectedSwitchColor(getHiltColor(saber, "Switch"));
      setSelectedEmitterColor(getHiltColor(saber, "Emitter"));

      setSaber(mySabers[id]);
    }
  }, [mySabers, id]);

  if (!saber) return null;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/sabers/${saber.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            saber: {
              emitter_color: selectedEmitterColor,
              grip_color: selectedGripColor,
              switch_color: selectedSwitchColor,
            },
          }),
        })
          .then((res) => res.json())
          .then((saber) => updatedSaberArray(saber))
          .then(() => history.push("/mysabers"));
      }}
    >
      {createColorSelector(selectedGripColor, setSelectedGripColor)}
      {createColorSelector(selectedSwitchColor, setSelectedSwitchColor)}
      {createColorSelector(selectedEmitterColor, setSelectedEmitterColor)}
      <DisplaySaber
        saber={saber}
        gripColor={svgColors[selectedGripColor]}
        switchColor={svgColors[selectedSwitchColor]}
        emitterColor={svgColors[selectedEmitterColor]}
      />
      <div className="form-submit-button">
        <input
          // disabled={!(selectedGrip && selectedSwitch && selectedSwitch)}
          type="submit"
          value="Submit"
        ></input>
      </div>
    </form>
  );
}

export default SaberEdit;
