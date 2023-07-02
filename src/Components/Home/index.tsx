import React from "react";
import MyInfoMe from "./MyInfoMe.tsx";
import "./Home.css";
import OpenToWork from "./OpenToWork.tsx";
import Profiles from "./Profiles.tsx";
const Home = () => {
  return (
    <>
      <MyInfoMe />
      <OpenToWork />
      <Profiles />
    </>
  );
};
export default Home;
