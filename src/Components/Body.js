import React from "react";
import '../Styles/Body.css'; 
import AllCards from "./Roi/AllCards.js";
import RoiCalc from "./RoiCalc/RoiCalc.js";
import Home from "./HomePage/Home.js";

const Body = () => {
  return (
    <div>
        {/* <AllCards/> */}
        {/* <RoiCalc/> */}
        <Home/>
    </div>
  );
};

export default Body;