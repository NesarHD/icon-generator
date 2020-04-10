import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import { HashRouter, Switch, Route } from "react-router-dom";
import IconGenerator from "./components/icon_generator";
import About from "./components/about";

function App() {
  return (
    <HashRouter>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <IconGenerator />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <IconGenerator />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
