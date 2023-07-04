import React from "react";
import { Logo } from "../../Constants";
const LetsWorkTogether = () => {
  return (
    <div className="lwt background">
      <img
        decoding="async"
        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
        alt="Icon"
      />
      <h1 className="white_color">
        Let's <br />
        work &nbsp;
        <span className="blue_color">together</span>
      </h1>
      <a href="#" className="aboutBtn alignCenter">
        <img decoding="async" src={Logo} alt="Button" />
      </a>
    </div>
  );
};
export default LetsWorkTogether;
