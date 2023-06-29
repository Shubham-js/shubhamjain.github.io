import React, { Fragment, useState } from "react";
import "./index.css";
import { headerConstants } from "../../Constants/index.js";
import { Link } from "react-router-dom";
export const Header = () => {
  const [selected, setSelected] = useState(0);
  const changeSelection = (e: any, val: number) => {
    // e.preventDefault();
    setSelected(val);
  };
  console.log("selected ", selected);
  return (
    <Fragment>
      <div className="header">
        <div
          className="logo_header box box_grow font25 fontW500 white_color"
          onClick={(e) => changeSelection(e, 0)}
        >
          <Link to="/">{headerConstants.LOGO}</Link>
        </div>
        <div className="navbar">
          <ul>
            <li
              className={`${selected === 0 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 0)}
            >
              <Link to="/">{headerConstants.HOME}</Link>
            </li>
            <li
              className={`${selected === 1 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 1)}
            >
              <Link to="/about">{headerConstants.ABOUT}</Link>
            </li>
            <li
              className={`${selected === 2 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 2)}
            >
              <Link to="/works">{headerConstants.WORKS}</Link>
            </li>
            <li
              className={`${selected === 3 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 3)}
            >
              <Link to="/contact">{headerConstants.CONTACT}</Link>
            </li>
          </ul>
        </div>
        <div
          className="logo_header box button font16 fontW500"
          onClick={(e) => changeSelection(e, 3)}
        >
          <Link to="/contact">{headerConstants.LETS_TALK}</Link>
        </div>
      </div>
    </Fragment>
  );
};
