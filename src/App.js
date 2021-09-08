import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>hello</h1>
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
