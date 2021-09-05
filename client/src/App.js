import { useEffect, useState } from "react";
import { Route, Switch, useHistory, Redirect, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Login from "./User/Login";
import Home from "./Home";
import Sabers from "./Sabers/Sabers";
import MySabers from "./Sabers/MySabers";
import NewSaber from "./Sabers/NewSaber";
import BuiltSaber from "./Sabers/SaberEdit";
import DisplaySaber from "./Sabers/DisplaySVG";
import SaberEdit from "./Sabers/SaberEdit";
import AllSabers from "./Sabers/AllSabers";

function App() {
  const [user, setUser] = useState([]);
  const [segments, setSegments] = useState([]);
  const [sabers, setSabers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/me", { credentials: "include" })
      .then((res) => res.json())
      .then((user) => {
        if (user.name) setUser(user);
        else history.push("/login");
      })
      .catch((error) => history.push("/login"));
  }, [history]);

  useEffect(() => {
    fetch("http://localhost:3000/segments")
      .then((r) => r.json())
      .then((segments) => {
        // console.log(segments);
        setSegments(segments);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/sabers")
      .then((r) => r.json())
      .then((sabers) => {
        console.log("Use the force!", sabers);
        setSabers(sabers);
      });
  }, []);

  function addNewSaber(newSaber) {
    const updatedSaberArray = [...sabers, newSaber];
    setSabers(updatedSaberArray);
  }

  // console.log(
  //   "SOMETHING SILLY",
  //   sabers.filter((saber) =>
  //     saber.users.map((user) => user.id).includes(user.id)
  //   )
  // );

  return user ? (
    // return (
    <div>
      <Navbar history={history} user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <Home sabers={sabers} segments={segments} setUser={setUser} />
        </Route>
        <Route path="/allsabers">
          <AllSabers sabers={sabers} segments={segments} setUser={setUser} />
        </Route>
        <Route path="/displaysaber">
          <DisplaySaber sabers={sabers} segments={segments} setUser={setUser} />
        </Route>
        <Route path="/sabers">
          <Sabers sabers={sabers} setSabers={setSabers} setUser={setUser} />
        </Route>
        <Route path="/mysabers/:id">
          <SaberEdit
            mySabers={sabers.filter((saber) =>
              saber.users.map((user) => user.id).includes(user.id)
            )}
          />
        </Route>
        <Route path="/mysabers">
          <MySabers
            mySabers={sabers.filter((saber) =>
              saber.users.map((user) => user.id).includes(user.id)
            )}
            segments={segments}
            sabers={sabers}
            setSabers={setSabers}
            user={user}
          />
        </Route>
        <Route path="/newsaber">
          <NewSaber
            addNewSaber={addNewSaber}
            user={user}
            segments={segments}
            setSegments={setSegments}
            setUser={setUser}
          />
        </Route>
        <Route path="/builtsaber">
          <BuiltSaber
            addNewSaber={addNewSaber}
            user={user}
            segments={segments}
            setSegments={setSegments}
            setUser={setUser}
          />
        </Route>
        <Route path="*">
          <Redirect push to="/" />
        </Route>
      </Switch>
    </div>
  ) : (
    <div>
      Not Logged In
      <br />
      {/* <Link to="/login">Need to login?</Link> */}
      <Switch>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="*">
          <Redirect push to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
