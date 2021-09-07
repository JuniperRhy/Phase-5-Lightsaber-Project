import React, { useState } from "react";
import "./Login.css";
import styled from "styled-components";
import PropTypes from "prop-types";
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
      <div>
        <h1 className="login-logo">
          The Lightsaber Project
          <br />
          <i className="saber-icon-container">
            <svg
              width={2571 * multiplier}
              height={323 * multiplier}
              viewBox="0 0 2571 323"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="f1" x="0" y="0">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
                </filter>
                <filter
                  id="sofGlow"
                  height="300%"
                  width="300%"
                  x="-75%"
                  y="-75%"
                >
                  <feMorphology
                    operator="dilate"
                    radius="4"
                    in="SourceAlpha"
                    result="thicken"
                  />

                  <feGaussianBlur
                    in="thicken"
                    stdDeviation="10"
                    result="blurred"
                  />

                  <feFlood flood-color="rgb(0,186,255)" result="glowColor" />

                  <feComposite
                    in="glowColor"
                    in2="blurred"
                    operator="in"
                    result="softGlow_colored"
                  />

                  <feMerge>
                    <feMergeNode in="softGlow_colored" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="glow">
                  <fegaussianblur
                    class="blur"
                    result="coloredBlur"
                    stddeviation="4"
                  ></fegaussianblur>
                  <femerge>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="coloredBlur"></femergenode>
                    <femergenode in="SourceGraphic"></femergenode>
                  </femerge>
                </filter>
                {/* <linearGradient
                  id="gold-vertical"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#B88746"></stop>
                  <stop offset="100%" stop-color="#FDF5A6"></stop>
                </linearGradient> */}
                <linearGradient
                  id="gold-horizontal"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="0%" stop-color="#B88746"></stop>
                  <stop offset="100%" stop-color="#FDF5A6"></stop>
                </linearGradient>
                <linearGradient
                  id="silver-vertical"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#595959"></stop>
                  <stop offset="10%" stop-color="#f0f0f0"></stop>
                  <stop offset="25%" stop-color="#5e5e5e"></stop>
                  <stop offset="90%" stop-color="#ebebeb"></stop>
                  <stop offset="100%" stop-color="#e6e6e6"></stop>
                </linearGradient>
                <linearGradient
                  id="silver-horizontal"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#5e5e5e"></stop>
                  <stop offset="75%" stop-color="#808080"></stop>
                  <stop offset="100%" stop-color="#e0e0e0"></stop>
                </linearGradient>
                <linearGradient
                  id="home-bronze-vertical"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#9e6941"></stop>
                  <stop offset="100%" stop-color="#dda680"></stop>
                </linearGradient>
                <linearGradient
                  id="bronze-horizontal"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="0%" stop-color="#9e6941"></stop>
                  <stop offset="100%" stop-color="#dda680"></stop>
                </linearGradient>

                <linearGradient
                  id="pink-horizontal"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop offset="0%" stop-color="#bd7d75"></stop>
                  <stop offset="100%" stop-color="#ffc5b9"></stop>
                </linearGradient>
              </defs>
              <rect width="2571" height="350" fill="transparent" />
              <g height="350" filter="url(#filter0_d)">
                <path
                  d="M2319.86 190.879H829.42V103.708H2319.86V104.227"
                  fill="#04FFB4"
                  filter="url(#glow)"
                />
                <path
                  d="M2319.86 190.879H829.42V103.708H2319.86V104.227"
                  stroke="#04FFB4"
                  stroke-width="7"
                  stroke-linecap="round"
                  filter="url(#glow)"
                />
                <path
                  d="M2315.01 105.384C2318.11 104.788 2323.46 104.693 2329.07 105.056C2334.04 105.419 2341.46 106.386 2345.03 107.233C2348.64 108.114 2355.4 110.671 2358.82 112.407C2362.3 114.204 2367.44 117.565 2370.23 119.897C2372.81 122.065 2377.66 127.179 2379.1 129.244C2381.02 132.025 2384.08 138.694 2384.99 142.089C2385.84 145.381 2385.91 152.11 2385.35 155.367C2384.68 159.047 2382.4 164.549 2380.21 167.823C2378.22 170.734 2373.21 176.047 2370.11 178.328C2366.75 180.772 2359.9 184.418 2355.77 185.826C2352.65 186.854 2345.3 188.383 2340.69 189.031C2331.57 190.206 2326.14 189.523 2325.1 189.411"
                  fill="#04FFB4"
                  filter="url(#glow)"
                />
                <path
                  d="M2315.01 105.384C2318.11 104.788 2323.46 104.693 2329.07 105.056C2334.04 105.419 2341.46 106.386 2345.03 107.233C2348.64 108.114 2355.4 110.671 2358.82 112.407C2362.3 114.204 2367.44 117.565 2370.23 119.897C2372.81 122.065 2377.66 127.179 2379.1 129.244C2381.02 132.025 2384.08 138.694 2384.99 142.089C2385.84 145.381 2385.91 152.11 2385.35 155.367C2384.68 159.047 2382.4 164.549 2380.21 167.823C2378.22 170.734 2373.21 176.047 2370.11 178.328C2366.75 180.772 2359.9 184.418 2355.77 185.826C2352.65 186.854 2345.3 188.383 2340.69 189.031C2331.57 190.206 2326.14 189.523 2325.1 189.411"
                  stroke="#04FFB4"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  filter="url(#f1)"
                />
                <path d="M2280.53 191.095L2342.72 189.618Z" fill="#04FFB4" />
                <path
                  d="M2280.53 191.095L2342.72 189.618"
                  stroke="#04FFB4"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  filter="url(#glow)"
                />
                <path d="M2259.84 103L2333.04 104.883Z" fill="#04FFB4" />
                <path
                  d="M2259.84 103L2333.04 104.883"
                  stroke="#04FFB4"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  filter="url(#glow)"
                />
                <path
                  d="M2326 174V174.466H829V117.737H2326V118.973"
                  fill="white"
                  filter="url(#sofGlow)"
                />
                <path
                  d="M2326 174V174.466H829V117.737H2326V118.973"
                  stroke="#04FFB4"
                  stroke-width="7"
                  stroke-linecap="round"
                  filter="url(#sofGlow)"
                />
                <path
                  d="M2314.24 118.921C2315.22 118.834 2319.05 118.497 2325.54 118.826C2331.24 119.154 2339.13 120.484 2342.79 121.884C2346.23 123.24 2352.67 127.499 2354.84 129.65C2357.04 131.861 2360.4 137.407 2361.31 140.318C2362.16 143.152 2361.88 149.069 2360.99 151.972C2359.96 155.142 2356.83 159.979 2354.08 162.631C2351.47 165.093 2345.3 169.067 2341.58 170.587C2337.69 172.142 2329.57 174.103 2325.66 174.362C2320.77 174.648 2309.54 172.946 2308.46 172.79"
                  fill="white"
                  stroke="#04FFB4"
                  filter="url(#f1)"
                />
                <path
                  d="M2314.24 118.921C2315.22 118.834 2319.05 118.497 2325.54 118.826C2331.24 119.154 2339.13 120.484 2342.79 121.884C2346.23 123.24 2352.67 127.499 2354.84 129.65C2357.04 131.861 2360.4 137.407 2361.31 140.318C2362.16 143.152 2361.88 149.069 2360.99 151.972C2359.96 155.142 2356.83 159.979 2354.08 162.631C2351.47 165.093 2345.3 169.067 2341.58 170.587C2337.69 172.142 2329.57 174.103 2325.66 174.362C2320.77 174.648 2309.54 172.946 2308.46 172.79"
                  stroke="#04FFB4"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  filter="url(#sofGlow)"
                />
              </g>
              <rect
                x="21.1467"
                y="83.3164"
                width="261.884"
                height="128.231"
                fill="url(#home-bronze-vertical)"
                stroke="black"
              />
              <rect
                x="38.4862"
                y="73.1359"
                width="17.6461"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="74.0363"
                y="73.1359"
                width="17.6461"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="109.586"
                y="73.1359"
                width="17.6462"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="147.008"
                y="71"
                width="17.6461"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="183.493"
                y="73.1359"
                width="17.6461"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="219.043"
                y="71"
                width="17.6461"
                height="152.864"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="284.531"
                y="81.1278"
                width="260.884"
                height="131.872"
                fill="url(#home-bronze-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="329.436"
                y="59"
                width="134.587"
                height="62.1702"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="338.791"
                y="59"
                width="114.941"
                height="30.0851"
                fill="url(#pink-horizontal)"
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
              <line
                x1="415.94"
                y1="58"
                x2="415.94"
                y2="90.0851"
                stroke="black"
              />
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
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="297.628"
                y="81.1278"
                width="21.3882"
                height="131.872"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <rect
                x="547.414"
                y="82.3011"
                width="259.013"
                height="131.671"
                fill="url(#home-bronze-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <path
                d="M825.506 66.5025C832.265 61.6618 841.658 67.7504 841.829 77.083L844.501 223.375C844.661 232.124 836.489 237.227 829.537 232.72L720.911 162.307C713.958 157.8 713.217 146.92 719.553 142.382L825.506 66.5025Z"
                fill="url(#silver-vertical)"
                stroke="black"
                stroke-width="2"
              />
              <defs>
                <filter
                  id="filter0_d"
                  x="821.5"
                  y="99"
                  width="1571.71"
                  height="104.095"
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
                  <feOffset dy="4" />
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
              </defs>
            </svg>
          </i>
        </h1>
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
