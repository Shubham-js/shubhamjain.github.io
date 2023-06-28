import React, { Fragment } from "react";
import "./index.css";
import { headerConstants } from "../../Constants/index.js";
export const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="logo_header box box_grow font25 fontW500 white_color">
          {headerConstants.LOGO}
        </div>
        <div className="navbar">
          <ul>
            <li className="box font16">{headerConstants.HOME}</li>
            <li className="box font16">{headerConstants.ABOUT}</li>
            <li className="box font16">{headerConstants.WORK}</li>
            <li className="box font16">{headerConstants.CONTACT}</li>
          </ul>
        </div>
        <div className="logo_header box button font16 fontW500">
          {headerConstants.LETS_TALK}
        </div>
      </div>
    </Fragment>
  );
};
