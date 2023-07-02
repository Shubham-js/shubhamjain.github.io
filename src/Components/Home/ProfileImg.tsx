import React from "react";
const ProfileImg = ({ redirect = "", url = "", altCode = "" }) => {
  return (
    <a href={redirect} target="_blank">
      <img className="imgProfiles box_grow" src={url} alt={altCode} />
    </a>
  );
};
export default ProfileImg;
