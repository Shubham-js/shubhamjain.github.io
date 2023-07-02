import React from "react";
import ProfileImg from "./ProfileImg.tsx";
import { profileData as p, Logo } from "../../Constants";

const Profiles = () => {
  return (
    <div className="profile background white_color">
      <div className="flexCol">
        <div className="flex">
          <ProfileImg
            redirect={p.url.leetcode}
            url={p.imgsrc.leetcode}
            altCode={p.nameAlt.leetcode}
          />
          <ProfileImg
            redirect={p.url.codechef}
            url={p.imgsrc.codechef}
            altCode={p.nameAlt.codechef}
          />
          <ProfileImg
            redirect={p.url.linkedin}
            url={p.imgsrc.linkedin}
            altCode={p.nameAlt.linkedin}
          />
          <ProfileImg
            redirect={p.url.github}
            url={p.imgsrc.github}
            altCode={p.nameAlt.github}
          />
        </div>
        <div className="flex spaceEvenly">
          <div className="flexCol">
            <p className="grey_color2">STAY WITH ME</p>
            <h2>Profiles</h2>
          </div>
          <a href="#" className="aboutBtn alignCenter">
            <img decoding="async" src={Logo} alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Profiles;
