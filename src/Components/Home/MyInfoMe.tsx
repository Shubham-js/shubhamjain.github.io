import React from "react";
const MyInfoMe = () => {
  return (
    <div className="aboutMe background">
      <div className="flex flexme">
        <div>
          <img
            className="imageMe"
            src="https://drive.google.com/uc?export=view&id=1u1nr_xrc9gY4Re29wPprtH9vZsEggboA"
            alt="/"
          />
        </div>
        <div className="descMe">
          <h4 className="grey_color2 font14">Software Engineer</h4>
          <h1 className="white_color font30">Shubham Jain.</h1>
          <p className="grey_color2 font14">
            I am a Software Engineer based in India.
          </p>
        </div>
      </div>
    </div>
  );
};
export default MyInfoMe;
