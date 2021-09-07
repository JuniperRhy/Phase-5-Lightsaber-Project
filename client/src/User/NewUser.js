import React, { useState } from "react";

function NewUser({ setLogin }) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      //************* */ NEEDS WORK ⌄ (set user on submit (act as login))//************* *///************* */
      .then(setUser(user))
      .then(setLogin(true));
    window.location.href = "/login";
  };
  return (
    <div>
      <h1 className="new-user-head">New user? Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Name :
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          username :
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Password :
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <input className="submit" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default NewUser;
