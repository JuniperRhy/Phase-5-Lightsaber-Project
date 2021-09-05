import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NewUser from "./NewUser";

// import "./Login.css";

function Login({ setUser, user }) {
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
    fetch(`http://localhost:3000/${API_PATH}`, {
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
        <div className="login-body">
          <h1 className="login-head">Login</h1>
          <form onSubmit={onSubmit}>
            <label>
              Username :
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
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
              value="Login!"
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
