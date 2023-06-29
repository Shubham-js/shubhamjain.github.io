import React, { Fragment } from "react";
import { Header } from "./Components/Header/index.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import Home from "./Components/Home/index.tsx";
import Contact from "./Components/Contact/index.tsx";
import Works from "./Components/Works/index.tsx";
import About from "./Components/About/index.tsx";
import NotFound from "./Components/Not Found/index.tsx";
const App = () => {
  return (
    <Fragment>
      <Header />
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Switch>
      </Router>
    </Fragment>
  );
};
export default App;
