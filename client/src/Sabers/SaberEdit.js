import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplaySaber from "./DisplaySaber";
import { svgColors } from "../utils/svg-colors";

function SaberEdit({ mySabers }) {
  const { id } = useParams();
  const [saber, setSaber] = useState();

  const [selectedBodyColor, setSelectedBodyColor] = useState(svgColors.default);

  useEffect(() => {
    if (id) setSaber(mySabers[id]);
  }, [mySabers, id]);

  if (!saber) return null;

  return (
    <>
      <select
        value={selectedBodyColor}
        onChange={(e) => setSelectedBodyColor(e.target.value)}
      >
        <option value="default">Select a Body Color</option>
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
        <option value="RoyalChromium" name="Silver">
          Royal Chromium
        </option>
        {/* <option value="Silver" name="Silver">
          Silver
        </option> */}
        <option value="RoseGold" name="RoseGold">
          Silvian Iron
        </option>
      </select>
      <DisplaySaber saber={saber} bodyColor={svgColors[selectedBodyColor]} />
    </>
  );
}

export default SaberEdit;
