import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import DisplaySaber from "./DisplaySaber";
import { SliderPicker } from "react-color";
import { svgColors } from "../utils/svg-colors";
import { getHiltColor } from "../utils/get-hilt-color";

const createColorSelector = (selectedColor, setSelectedColor) => (
  <select
    className="form-segments-selector"
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
  >
    <option value="default">Select Segment's Material</option>
    <option value="Copper" name="Copper">
      Copper
    </option>
    <option value="Crodium" name="Crodium">
      Crodium
    </option>
    <option value="Corundum" name="Corundum">
      Corundum
    </option>
    <option value="Dolovite" name="Dolovite">
      Dolovite
    </option>
    <option value="Gunmetal" name="Gunmetal">
      Durite
    </option>
    <option value="Matte" name="Matte">
      Matte
    </option>
    <option value="Duraplast" name="Duraplast">
      Duraplast
    </option>
    <option value="BlackDuraplast" name="BlackDuraplast">
      Duraplast(Black)
    </option>
    <option value="Durasteel" name="Durasteel">
      Durasteel
    </option>
    <option value="LaminaSteel" name="LaminaSteel">
      Lamina Steel
    </option>
    <option value="Duralium" name="Duralium">
      Duralium
    </option>
    <option value="Arcetron" name="Arcetron">
      Arcetron
    </option>
    <option value="ElectrumPlated" name="ElectrumPlated">
      Electrum Plated
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
    <option value="WroshyrWood" name="WroshyrWood">
      Wroshyr Wood
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

  const [bladeColor, setBladeColor] = useState("#09ff99");

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

  useEffect(() => {
    if (saber?.blade_color) {
      setBladeColor(saber.blade_color);
      console.log("We're here!", saber);
    } else console.log("Whoopsie!", saber);
  }, [saber]);

  if (!saber) return null;

  console.log("blade test 1", bladeColor);

  return (
    <form
      className="form-display"
      onSubmit={(e) => {
        e.preventDefault();
        fetch(`/sabers/${saber.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            saber: {
              blade_color: bladeColor,
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
      <div className="form-segments">
        {createColorSelector(selectedGripColor, setSelectedGripColor)}
        {createColorSelector(selectedSwitchColor, setSelectedSwitchColor)}
        {createColorSelector(selectedEmitterColor, setSelectedEmitterColor)}
      </div>
      <br />
      <br />
      <div className="saber-edit-body">
        <div className="new-saber-body ">
          <DisplaySaber
            className="form-segments-selector"
            saber={saber}
            gripColor={svgColors[selectedGripColor]}
            switchColor={svgColors[selectedSwitchColor]}
            emitterColor={svgColors[selectedEmitterColor]}
          />
        </div>
        <div className="blade-color-selector-display">
          <svg
            className="kyber-crystal"
            width="291"
            height="578"
            viewBox="0 0 291 578"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M166.645 570L13.5136 454.273L13 88.0216L138.896 1.03001L284.32 88.0216L290.989 461.904L234.989 520.451L166.645 570Z"
              fill="url(#paint0_diamond40)"
            />
            <path
              d="M166.645 570L13.5136 454.273L13 88.0216L138.896 1.03001L284.32 88.0216L290.989 461.904L234.989 520.451L166.645 570Z"
              fill="url(#paint1_radial40)"
              fill-opacity="0.6"
            />
            <path
              d="M166.645 570L13.5136 454.273L13 88.0216L138.896 1.03001L284.32 88.0216L290.989 461.904L234.989 520.451L166.645 570Z"
              fill="url(#paint2_diamond40)"
              fill-opacity="0.45"
            />
            <path
              d="M288.5 464.5L235.5 521.5L202.25 546.25L169 571L18 457.5"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M14 89.3224V449.342C14 453.149 16.1608 456.625 19.574 458.31L62.1163 479.308C62.704 479.598 63.3188 479.829 63.9519 479.999L134.727 498.981C135.572 499.208 136.443 499.322 137.318 499.322H240.575C242.795 499.322 244.952 498.583 246.706 497.222L286.039 466.694C288.532 464.76 289.965 461.762 289.906 458.607L283 89.3224"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M141.131 1.84905L282.34 86.9548C283.809 87.8406 283.554 90.0444 281.921 90.5712L241.976 103.455C235.209 105.638 228.226 107.085 221.149 107.772L159.657 113.741C152.58 114.427 145.45 114.35 138.39 113.509L70.6177 105.441C65.0183 104.775 59.4861 103.631 54.0814 102.022L14.8389 90.3432C13.2234 89.8624 12.8907 87.7213 14.2841 86.7729L138.973 1.90861C139.619 1.46903 140.462 1.44577 141.131 1.84905Z"
              stroke="black"
              stroke-width="2"
            />
            <path d="M64.5 104.169L143 4.62403" stroke="black" />
            <path d="M170.5 55.2598L143 3.4732" stroke="black" />
            <path
              d="M151 113.322L169.126 57.4727C169.776 55.4714 172.23 54.7431 173.866 56.0661L235 105.504"
              stroke="black"
            />
            <path d="M63.5 480.5L170.5 567.822" stroke="black" />
            <path d="M245.5 497.322L170.452 568.074" stroke="black" />
            <path d="M136.5 499.5L170.476 567.473" stroke="black" />
            <line
              x1="136.5"
              y1="498.308"
              x2="147.5"
              y2="115.986"
              stroke="black"
            />
            <path d="M64.5 104.322V191M64.5 480.5V424" stroke="black" />
            <line
              y1="-0.5"
              x2="393.729"
              y2="-0.5"
              transform="matrix(-0.0290156 -0.999579 0.999303 -0.03734 246 498.322)"
              stroke="black"
            />
            <g filter="url(#filter0_d40)">
              <path
                d="M70.6009 188.372C71.9392 187.462 73.6633 187.34 75.1161 188.054L92.3404 196.517C93.8306 197.249 94.7966 198.742 94.8534 200.401L102.148 413.385C102.209 415.164 101.214 416.813 99.6114 417.589L76.6008 428.729C75.2703 429.374 73.7084 429.323 72.4222 428.595L43.7414 412.352C42.3308 411.553 41.459 410.057 41.459 408.436V210.575C41.459 209.086 42.1963 207.692 43.4281 206.855L70.6009 188.372Z"
                stroke="black"
                shape-rendering="crispEdges"
              />
            </g>
            <path
              d="M42.1141 207.929L56.0557 213.8C56.7632 214.098 57.525 214.236 58.2836 214.203L80.2664 213.248C81.0055 213.216 81.7232 213.023 82.3681 212.682L90.4304 208.423C91.6613 207.773 92.5416 206.632 92.8556 205.28L94.5643 197.926M41.5365 410.823L64.4647 417.967C64.9632 418.122 65.4805 418.201 65.9984 418.201L87.9367 418.201C88.1916 418.201 88.4456 418.182 88.6963 418.144L102.181 416.093"
              stroke="black"
            />
            <path d="M57.1309 214.253L72.1477 187.376" stroke="black" />
            <path d="M72.7253 187.376L81.3889 212.672" stroke="black" />
            <line
              y1="-0.5"
              x2="27.2512"
              y2="-0.5"
              transform="matrix(0.678216 0.734862 -0.792954 0.609282 73.8804 187.903)"
              stroke="black"
            />
            <path d="M92.3626 206.875L100.449 375.515" stroke="black" />
            <path d="M81.3888 213.199L88.8972 417.674" stroke="black" />
            <line
              y1="-0.5"
              x2="203.582"
              y2="-0.5"
              transform="matrix(0.0397186 0.999211 -0.999453 0.0330756 56.5533 214.253)"
              stroke="black"
            />
            <path d="M65.2169 417.674L74.361 430.03" stroke="black" />
            <line
              y1="-0.5"
              x2="18.9717"
              y2="-0.5"
              transform="matrix(-0.791539 0.611119 -0.679971 -0.733239 88.8972 417.674)"
              stroke="black"
            />
            <defs>
              <filter
                id="filter0_d40"
                x="32.959"
                y="187.093"
                width="69.6915"
                height="250.586"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-4" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <radialGradient
                id="paint0_diamond40"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(66.5 110.5) rotate(27.6198) scale(230.801 112.764)"
              >
                <stop offset="0.11576" stop-color="white" />
                <stop offset="1" stop-color={bladeColor} />
              </radialGradient>
              <radialGradient
                id="paint1_radial40"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(171.5 535.5) rotate(-151.327) scale(145.89 71.2786)"
              >
                <stop />
                <stop offset="1" stop-opacity="0" />
              </radialGradient>
              <radialGradient
                id="paint2_diamond40"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(75.5 419.5) scale(39 19.0545)"
              >
                <stop />
                <stop offset="1" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <div className="color-status">
            <p style={{ color: { bladeColor }, fontSize: "3vh" }}>
              Crystal/Blade Color
            </p>
          </div>
          <SliderPicker
            className="hue-picker"
            color={bladeColor}
            onChange={(updatedColor) => setBladeColor(updatedColor.hex)}
          />
          {console.log("blade test 2", bladeColor)}
        </div>
      </div>

      <div className="form-submit-button">
        <input type="submit" value="Submit"></input>
      </div>
    </form>
  );
}

export default SaberEdit;
