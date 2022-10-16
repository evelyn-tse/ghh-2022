import React from "react";
import '../Styles/Body.css'; 
import AllCards from "./Roi/AllCards.js";
import RoiCalc from "./RoiCalc/RoiCalc.js";


const Body = () => {
  return (
    <div>
        {/* <AllCards/> */}
        <RoiCalc/>
    </div>
  );
};

export default Body;