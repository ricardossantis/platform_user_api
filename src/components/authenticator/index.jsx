import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../../pages/login/Login.jsx";
import Api from "../../services/api.js";
import Perfil from "../../pages/perfil/Perfil.jsx";

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
        history.push("/users");
      })
      .catch(() => {
        setAuth(false);
      });
  }, [history, setAuth]);

  switch (isAuth) {
    case undefined:
      return <div>Loading...</div>;
    case false:
      return (
        <Switch>
          <Route exact path="/">
            <Login setAuth={setAuth} />
          </Route>
          <Route exact path="/cadastro">
            <div>Cadastro</div>;
          </Route>
        </Switch>
      );

    case true:
      return (
        <Switch>
          <Route exact path="/users">
            <Perfil />
          </Route>
        </Switch>
      );
  }
}

export default Authenticator;
