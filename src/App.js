import React, { Fragment } from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Singleroom from "./pages/Singleroom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/rooms/:lit" component={Singleroom} />

      <Error></Error>
    </Fragment>
  );
}

export default App;
