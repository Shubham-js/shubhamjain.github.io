import React, { Fragment, useState } from "react";
import "./index.css";
import { headerConstants } from "../../Constants/index.js";
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
        <div className="logo_header box box_grow font25 fontW500 white_color">
          {headerConstants.LOGO}
        </div>
        <div className="navbar">
          <ul>
            <li
              className={`${selected === 0 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 0)}
            >
              <a href="/">{headerConstants.HOME}</a>
            </li>
            <li
              className={`${selected === 1 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 1)}
            >
              <a href="/about">{headerConstants.ABOUT}</a>
            </li>
            <li
              className={`${selected === 2 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 2)}
            >
              <a href="/works">{headerConstants.WORKS}</a>
            </li>
            <li
              className={`${selected === 3 ? "active" : "box"} font16`}
              onClick={(e) => changeSelection(e, 3)}
            >
              <a href="/contact">{headerConstants.CONTACT}</a>
            </li>
          </ul>
        </div>
        <div className="logo_header box button font16 fontW500">
          {headerConstants.LETS_TALK}
        </div>
      </div>
    </Fragment>
  );
};
