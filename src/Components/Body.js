import React from "react";
import '../Styles/Body.css'; 
import AllCards from "./Roi/AllCards.js";
import RoiCalc from "./RoiCalc/RoiCalc.js";
import HomePage from "./HomePage/HomePage.js";

const Body = () => {
  return (
    <div>
        {/* <AllCards/> */}
        {/* <RoiCalc/> */}
        <HomePage/>
    </div>
  );
};

export default Body;