import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";
import MainCard from "../Roi/MainCard.js";
import image2 from "../Roi/image2.jpeg";


const RoiCalc = () => {
  return (
    <div>
        <MainCard image={image2} imageText={"image2"} title={"ROI"} content={"Brief Description about what this page does"} linkText={"test linke text"}/>
        <Parameters/>
        <Return/>
        <Duration/>
        <InvestTable/>
    </div>
  );
};

export default RoiCalc;