import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";


const RoiCalc = () => {
  return (
    <div>
        <Parameters/>
        <Return/>
        <Duration/>
        <InvestTable/>
    </div>
  );
};

export default RoiCalc;