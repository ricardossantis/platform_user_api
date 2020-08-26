import React from "react";
import "./App.css";
import Authenticator from "./components/authenticator/Authenticator";
import Register from './pages/register/Register.jsx'
import Feedbacks from "./pages/feedbacks/feedbacks.jsx";
import LayoutMenu from "./components/layoutMenu/LayoutMenu";
import Users from './pages/users/Users.jsx'
import Perfil from './pages/perfil/Perfil.jsx'
import Ranking from './pages/ranking/ranking.jsx'
import { Route, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{width:"0px"}}>
      <header style={{width:"0px"}}>
        <Authenticator />
      </header>
    </div>
  );
}

export default App;
