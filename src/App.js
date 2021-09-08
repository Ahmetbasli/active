import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      {/* header */}
      <Router>
        <Switch>
          {/* home */}
          <Route exact path="/">
            <h1>home</h1>
          </Route>

          {/* contactUs */}
          <Route path="/contact">
            <h1>contact</h1>
          </Route>
        </Switch>
      </Router>
      {/* footer */}
    </div>
  );
}

export default App;
