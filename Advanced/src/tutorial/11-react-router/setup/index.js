import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Error from "./Error";
import People from "./People";
import Navbar from "./Navbar";
import Person from "./Person";

const Index = () => {
  return (
    <Router>
      {/* <h1>react router</h1> */}
      {/* Add it where the is another / */}
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/person/:id" children={<Person />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
