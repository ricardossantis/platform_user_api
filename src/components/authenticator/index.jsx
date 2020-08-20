import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Login from "../../pages/login/Login.jsx";

function Authenticator() {
  const [isAuth, setAuth] = useState(false);
  let history = useHistory();

  useEffect(() => {}, isAuth);

  switch (isAuth) {
    case undefined:
      return <div>Loading...</div>;
    case false:
      return (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/cadastro">
            <div>Cadastro</div>;
          </Route>
        </Switch>
      );

    case true:
      return <div>Menu</div>;
  }
}

export default Authenticator;
