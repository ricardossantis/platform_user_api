import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import Login from "../../pages/login/Login.jsx";
import Register from "../../pages/register/Register.jsx";
import Api from "../../services/api.js";
import Perfil from "../../pages/perfil/Perfil.jsx";
import Users from "../../pages/users/Users.jsx";
import LayoutMenu from "../layoutMenu/LayoutMenu.jsx";

function Authenticator() {
  const [isAuth, setAuth] = useState(undefined);
  let history = useHistory();

  useEffect(() => {
    let token = window.localStorage.getItem("authToken");
    if (!token) {
      setAuth(false);
    }

    Api.get("users", { headers: { Authorization: token } })
      .then(() => {
        setAuth(true);
      })
      .catch(() => {
        setAuth(false);
      });
  }, [history, setAuth]);

  switch (isAuth) {
    default:
      return <div>Loading...</div>;
    case false:
      return (
        <Switch>
          <Route exact path="/">
            <Login setAuth={setAuth} />
          </Route>
          <Route exact path="/cadastro">
            <Register />
          </Route>
        </Switch>
      );

    case true:
      return (
        <LayoutMenu>
          <Switch>
            <Route exact path="/">
              <Redirect to="/users" />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route exact path="/profile">
              <Perfil />
            </Route>
          </Switch>
        </LayoutMenu>
      );
  }
}

export default Authenticator;
