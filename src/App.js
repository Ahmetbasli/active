import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactUs from "./pages/contact-us/ContactUs";
import Home from "./pages/home/Home";
import ThirdPage from "./pages/third-page/ThirdPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/thirdPage">
            <ThirdPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
