import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Login from "./User/Login";
import Home from "./Home";
import Sabers from "./Sabers/Sabers";
import NewSaber from "./Sabers/NewSaber";

function App() {
  const [user, setUser] = useState(null);
  const history = useHistory();
  // console.log(user);
  useEffect(() => {
    if (!user) history.push("/login");
    else history.push("/");
  }, [user]);

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/sabers">
          <Sabers />
        </Route>
        <Route path="/newsaber">
          <NewSaber />
        </Route>
        <Route path="/">
          <Home setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
