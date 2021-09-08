import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import ContactUs from "./pages/contact-us/ContactUs";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* header */}
        <Switch>
          {/* home */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* contactUs */}
          <Route path="/contact">
            <ContactUs />
            {/* <ContactUs /> */}
          </Route>
        </Switch>
        {/* footer */}
      </Router>
    </div>
  );
}

export default App;
