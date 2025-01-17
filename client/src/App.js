import { useEffect, useState } from "react";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import "./App.css";

import Background from "./Background/Background";
import PlanetImage from "./Background/PlanetImage";

import Navbar from "./Navbar/Navbar";
import Login from "./User/Login";
import NewUser from "./User/NewUser";
import Home from "./Home";

import MySabers from "./Sabers/MySabers";
import NewSaber from "./Sabers/NewSaber";

import DisplaySaber from "./Sabers/DisplaySVG";
import SaberEdit from "./Sabers/SaberEdit";
import AllSabers from "./Sabers/AllSabers";

function App() {
  const [user, setUser] = useState(null);
  const [segments, setSegments] = useState([]);
  const [sabers, setSabers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/me", { credentials: "include" })
      .then((res) => res.json())
      .then((user) => {
        if (user.name) setUser(user);
        else history.push("/login");
      });
    // .catch((error) => history.push("/login"));
  }, [history]);

  useEffect(() => {
    fetch("/segments")
      .then((r) => r.json())
      .then((segments) => {
        setSegments(segments);
      });
  }, []);

  useEffect(() => {
    fetch("/sabers")
      .then((r) => r.json())
      .then((sabers) => {
        // console.log("Use the force!", sabers);
        setSabers(sabers);
      });
  }, []);

  function addNewSaber(newSaber) {
    const updatedSaberArray = [...sabers, newSaber];
    setSabers(updatedSaberArray);
  }

  function updatedSaberArray(updatedSaber) {
    setSabers(
      sabers.map((saber) =>
        saber.id === updatedSaber.id ? updatedSaber : saber
      )
    );
  }

  function deleteSaber(deletedSaber) {
    setSabers(sabers.filter((saber) => saber.id !== deletedSaber.id));
  }

  // console.log("SOMETHING SILLY", sabers);

  return user ? (
    // return (
    <div>
      <Navbar history={history} user={user} setUser={setUser} />

      <div className="app-body-container">
        <Switch>
          <Route exact path="/">
            <Home sabers={sabers} segments={segments} setUser={setUser} />
          </Route>
          <Route exact path="/allsabers">
            <AllSabers sabers={sabers} segments={segments} setUser={setUser} />
          </Route>
          <Route exact path="/displaysaber">
            <DisplaySaber
              sabers={sabers}
              segments={segments}
              setUser={setUser}
            />
          </Route>
          <Route exact path="/mysabers/:id">
            <SaberEdit
              updatedSaberArray={updatedSaberArray}
              mySabers={sabers.filter((saber) =>
                saber.users.map((user) => user.id).includes(user.id)
              )}
            />
          </Route>
          <Route exact path="/mysabers">
            <MySabers
              deleteSaber={deleteSaber}
              mySabers={sabers.filter((saber) =>
                saber.users.map((user) => user.id).includes(user.id)
              )}
              user={user}
            />
          </Route>
          <Route exact path="/newsaber">
            <NewSaber
              addNewSaber={addNewSaber}
              user={user}
              segments={segments}
              key={segments.id}
              setSegments={setSegments}
              setUser={setUser}
            />
          </Route>

          <Route path="*">
            <Redirect push to="/" />
          </Route>
        </Switch>
      </div>
      <Background />
    </div>
  ) : (
    <div className="login-title">
      <Switch>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/newuser">
          <NewUser user={user} setUser={setUser} />
        </Route>
        <Route path="*">
          <Redirect push to="/login" />
        </Route>
      </Switch>
      {/* <Background /> */}
    </div>
  );
}

export default App;
