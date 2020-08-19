import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

function Authenticator() {
  const [isAuth, setAuth] = useState(undefined);
  let history = useHistory();

  useEffect(() => {
    console.log(isAuth);
  }, isAuth);

  switch (isAuth) {
    case undefined:
      return <div>Loading</div>;
    case false:
      return (
        <Switch>
          <Route exact path="/">
            <div>Login</div>;
          </Route>
          <Route exact path="/cadastro">
            <div>Cadastro</div>;
          </Route>
        </Switch>
      );

    case true:
      return (
        <Switch>
          <Route exact path="users">
            <div>Logged in</div>;
          </Route>
          <Route exact path="/perfil">
            <div>Perfil</div>;
          </Route>
          <Route exact path="/">
            <div>Users</div>;
          </Route>
        </Switch>
      );
  }
}

export default Authenticator;
