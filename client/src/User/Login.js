import React, { useState } from "react";
import "./Login.css";
import styled from "styled-components";
// import PropTypes from "prop-types";
import NewUser from "./NewUser";

// import "./Login.css";

function Login({ setUser, user, multiplier = 0.25 }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState();

  const [errors, setErrors] = useState([]);

  function onSubmit(e) {
    console.log("In onSubmit", login);
    e.preventDefault();
    console.log("passtest", username, password);
    const user = {
      username,
      password,
    };
    let API_PATH;
    login ? (API_PATH = "sessions") : (API_PATH = "users");
    fetch(`/${API_PATH}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.error) {
          setErrors(json.error);
        } else {
          setUser(json);
        }
      });
  }

  return (
    <>
      <div className="login-container">
        <h1 className="login-logo">
          The Lightsaber Project
          <br />
        </h1>
        <i className="saber-icon-container">
          <svg
            width={2784}
            height={323 * multiplier}
            viewBox="0 0 2784 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="2784" height="323" fill="transparent" />
            <g
              id="erSzs68kCK31"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 2571 323"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
            >
              <g
                id="erSzs68kCK32_ts"
                transform="translate(0,50.5) scale(1,1)"
                filter=""
              >
                <path
                  id="erSzs68kCK32"
                  d="M863 102H2489C2514.41 102 2535 122.595 2535 148C2535 173.405 2514.41 194 2489 194H863C845.327 194 831 179.673 831 162V134C831 116.327 845.327 102 863 102Z"
                  transform="translate(0,-50)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(255,255,255)"
                  stroke-width="8"
                  filter="url(#filter0_f31)"
                />
              </g>
              <g id="erSzs68kCK33_ts" transform="translate(0,50.5) scale(1,1)">
                <path
                  id="erSzs68kCK33"
                  d="M863 102H2489C2514.41 102 2535 122.595 2535 148C2535 173.405 2514.41 194 2489 194H863C845.327 194 831 179.673 831 162V134C831 116.327 845.327 102 863 102Z"
                  transform="translate(0,-50)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(255,255,255)"
                  stroke-width="8"
                  filter="url(#filter1_f31)"
                />
              </g>
              <g
                id="erSzs68kCK34_ts"
                transform="translate(0,50.5) scale(1,1)"
                filter=""
              >
                <path
                  id="erSzs68kCK34"
                  d="M875 112.016H893.393C877.569 114.418 864.414 117.192 854.723 120.274C854.317 120.403 853.917 120.533 853.521 120.663C859.093 115.308 866.662 112.016 875 112.016ZM2499.25 112.016C2513.03 112.016 2524.94 120.039 2530.56 131.67C2526.81 129.845 2522.34 128.138 2517.29 126.532C2501.93 121.645 2479.95 117.316 2453.11 113.705C2448.79 113.124 2444.34 112.561 2439.77 112.016H2499.25ZM1058.35 112.016H2243.48C2324.93 112.016 2398.58 116.459 2451.78 123.615C2478.41 127.198 2499.72 131.436 2514.26 136.061C2521.57 138.385 2526.87 140.717 2530.25 142.937C2533.87 145.319 2534 146.694 2534 146.77C2534 146.847 2533.87 148.222 2530.25 150.604C2526.87 152.824 2521.57 155.156 2514.26 157.48C2499.72 162.105 2478.41 166.343 2451.78 169.925C2398.58 177.082 2324.93 181.525 2243.48 181.525H1058.35C997.933 181.525 943.327 178.228 903.914 172.926C884.171 170.271 868.443 167.137 857.753 163.737C852.373 162.026 848.565 160.338 846.203 158.785C845.612 158.397 845.175 158.061 844.854 157.781C844.296 155.453 844 153.024 844 150.525V143.016C844 140.517 844.296 138.087 844.854 135.76C845.175 135.48 845.612 135.144 846.203 134.756C848.565 133.203 852.373 131.515 857.753 129.803C868.443 126.404 884.171 123.27 903.914 120.614C943.327 115.313 997.933 112.016 1058.35 112.016ZM2517.29 167.009C2522.34 165.403 2526.81 163.696 2530.56 161.871C2524.94 173.501 2513.03 181.525 2499.25 181.525H2439.77C2444.34 180.98 2448.79 180.417 2453.11 179.836C2479.95 176.225 2501.93 171.896 2517.29 167.009ZM854.723 173.267C864.414 176.349 877.569 179.123 893.393 181.525H875C866.662 181.525 859.093 178.233 853.521 172.878C853.917 173.008 854.317 173.138 854.723 173.267Z"
                  transform="translate(0,-48.770497)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(9,255,151)"
                  stroke-width="10"
                  filter="url(#filter3_f31)"
                />
              </g>
              <g
                id="erSzs68kCK35_ts"
                transform="translate(0,50.5) scale(1,1)"
                filter=""
              >
                <path
                  id="erSzs68kCK35"
                  d="M838 138C838 124.193 849.193 113 863 113H2491.5C2511.11 113 2527 128.894 2527 148.5C2527 168.106 2511.11 184 2491.5 184H863C849.193 184 838 172.807 838 159V138Z"
                  transform="translate(0,-50)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(0,255,148)"
                  stroke-width="8"
                  filter="url(#filter3_f31)"
                />
              </g>
              <g
                id="erSzs68kCK36_ts"
                transform="translate(0,50.5) scale(1,1)"
                filter=""
              >
                <path
                  id="erSzs68kCK36"
                  d="M863 113H2491.5C2511.11 113 2527 128.894 2527 148.5C2527 168.106 2511.11 184 2491.5 184H863C849.193 184 838 172.807 838 159V138C838 124.193 849.193 113 863 113Z"
                  transform="translate(0,-50.5)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(0,255,148)"
                  stroke-width="10"
                  filter="url(#filter3_f31)"
                />
                <path
                  id="erSzs68kCK36"
                  d="M863 113H2491.5C2511.11 113 2527 128.894 2527 148.5C2527 168.106 2511.11 184 2491.5 184H863C849.193 184 838 172.807 838 159V138C838 124.193 849.193 113 863 113Z"
                  transform="translate(0,-50.5)"
                  fill="rgb(255,255,255)"
                  stroke="rgb(0,255,148)"
                  stroke-width="10"
                  filter="url(#filter4_f31)"
                />
              </g>
            </g>

            <rect
              x="21.1467"
              y="83.3164"
              width="261.884"
              height="128.231"
              fill="url(#copper-vertical-icon)"
              stroke="black"
            />
            <rect
              x="38.4862"
              y="73.1359"
              width="17.6461"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="74.0363"
              y="73.1359"
              width="17.6461"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="109.586"
              y="73.1359"
              width="17.6462"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="147.008"
              y="71"
              width="17.6461"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="183.493"
              y="73.1359"
              width="17.6461"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="219.043"
              y="71"
              width="17.6461"
              height="152.864"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="284.531"
              y="81.1278"
              width="260.884"
              height="131.872"
              fill="url(#copper-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="329.436"
              y="59"
              width="134.587"
              height="62.1702"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="338.791"
              y="59"
              width="114.941"
              height="30.0851"
              fill="url(#copper-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="349.518"
              y1="58"
              x2="349.518"
              y2="90.0851"
              stroke="black"
            />
            <line
              x1="359.808"
              y1="58"
              x2="359.808"
              y2="90.0851"
              stroke="black"
            />
            <path d="M382.229 58V90.0851" stroke="black" />
            <line
              y1="-0.5"
              x2="32.0851"
              y2="-0.5"
              transform="matrix(0 1 1 0 371.47 58)"
              stroke="black"
            />
            <line
              x1="382.261"
              y1="58"
              x2="382.261"
              y2="90.0851"
              stroke="black"
            />
            <line
              x1="392.552"
              y1="58"
              x2="392.552"
              y2="90.0851"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="32.0851"
              y2="-0.5"
              transform="matrix(0 1 1 0 404.214 58)"
              stroke="black"
            />
            <line x1="415.94" y1="58" x2="415.94" y2="90.0851" stroke="black" />
            <line
              x1="426.231"
              y1="58"
              x2="426.231"
              y2="90.0851"
              stroke="black"
            />
            <line
              y1="-0.5"
              x2="32.0851"
              y2="-0.5"
              transform="matrix(0 1 1 0 437.893 58)"
              stroke="black"
            />
            <rect
              x="495.96"
              y="81.1278"
              width="16.7105"
              height="131.872"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="297.628"
              y="81.1278"
              width="21.3882"
              height="131.872"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <rect
              x="547.414"
              y="82.3011"
              width="259.013"
              height="131.671"
              fill="url(#copper-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M841.829 77.083L844.501 223.375C844.661 232.124 836.489 237.227 829.537 232.72L720.911 162.307C713.958 157.8 713.217 146.92 719.553 142.382L825.506 66.5025C832.265 61.6618 841.658 67.7504 841.829 77.083Z"
              fill="url(#silver-vertical-icon)"
              stroke="black"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="silver-vertical-icon"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#808080"></stop>
                <stop offset="100%" stopColor="#e0e0e0"></stop>
              </linearGradient>
              <linearGradient
                id="copper-vertical-icon"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8f470b"></stop>
                <stop offset="100%" stopColor="#d9945b"></stop>
              </linearGradient>
              <filter
                id="filter0_f31"
                x="689"
                y="45"
                width="2784"
                height="210"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="27.5"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter1_f31"
                x="706"
                y="59.0164"
                width="2784"
                height="179.508"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="25"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter2_f31"
                x="734"
                y="90"
                width="2784"
                height="120"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="5"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter3_f31"
                x="737.896"
                y="91.0164"
                width="2784"
                height="115.508"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="9"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <filter
                id="filter4_f31"
                x="737.896"
                y="91.0164"
                width="2784"
                height="115.508"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="3"
                  result="effect1_foregroundBlur"
                />
              </filter>
              <radialGradient
                id="paint0_radial31"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1739.33 148.771) rotate(86.3188) scale(51.9178 1278.96)"
              >
                <stop stop-color="white" />
                <stop offset="0.208333" stop-color="#FFF4F4" />
                <stop offset="0.494792" stop-color="#FFF8F8" />
                <stop offset="0.755208" stop-color="#FDFCFF" />
                <stop offset="1" stop-color="white" />
              </radialGradient>
              <radialGradient
                id="paint1_radial31"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1739.33 148.771) rotate(86.3188) scale(51.9178 1278.96)"
              >
                <stop stop-color="white" />
                <stop offset="0.208333" stop-color="#FFF4F4" />
                <stop offset="0.494792" stop-color="#FFF8F8" />
                <stop offset="0.755208" stop-color="#FDFCFF" />
                <stop offset="1" stop-color="white" />
              </radialGradient>
              <radialGradient
                id="paint2_radial31"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1739.29 148.771) rotate(86.3186) scale(51.9178 1279.04)"
              >
                <stop stop-color="white" />
                <stop offset="0.208333" stop-color="#FFF4F4" />
                <stop offset="0.494792" stop-color="#FFF8F8" />
                <stop offset="0.755208" stop-color="#FDFCFF" />
                <stop offset="1" stop-color="white" />
              </radialGradient>
              <radialGradient
                id="paint3_radial31"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(1739.29 148.771) rotate(86.3186) scale(51.9178 1279.04)"
              >
                <stop stop-color="white" />
                <stop offset="0.208333" stop-color="#FFF4F4" />
                <stop offset="0.494792" stop-color="#FFF8F8" />
                <stop offset="0.755208" stop-color="#FDFCFF" />
                <stop offset="1" stop-color="white" />
              </radialGradient>
            </defs>
          </svg>
        </i>
        <p className="login-status">Not Logged in</p>
        <div className="login-body">
          <h1 className="login-head">Login</h1>
          <form onSubmit={onSubmit}>
            <label>
              username :
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password :
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />

            {/* <input type="submit" value="Sign up!" /> */}
            <input
              className="submit"
              type="submit"
              value="Login"
              onClick={() => {
                console.log("In onSubmit", login);
                setLogin(true);
              }}
            />
          </form>
        </div>
        {errors ? errors.map((e) => <div>{e}</div>) : null}
        <div className="login-body">
          <NewUser setLogin={setLogin} />
        </div>
        {errors ? errors.map((e) => <Errors>{e}</Errors>) : null}
      </div>
    </>
  );
}

export default Login;

const Errors = styled.div`
  color: white;
`;
