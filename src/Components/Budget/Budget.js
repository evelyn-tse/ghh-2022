import React from "react";
import Expense from "./Expense.js";
import Total from "./Total.js";
import "./Budget.css";
import About from "./About.js";
import image2 from "../Roi/image2.jpeg";
import image5 from "./image5.jpeg";
import MainTotal from "./MainTotal.js";
import Distribution from "./Distribution.js";
import DisplayFormData from "../Testing/DisplayFormData.js";

const Budget = () => {
  return (
    <div>
        <About image={image5} imageText={"image5"} title={"Budgeting"} content={"Welcome to the budgeting the page! Add all your expenses here and we will tally them up into the table. You can also visually see what your expenses are via the pie graph. Well, budget away!"}/>
        {/* <Expense/> */}
        <div className="MainTotalCards">
          <MainTotal image={image2} title={"Total"} total={"$1004.98"}/>
          <Distribution/>
        </div>
        <div className="TotalCards">
          <Total title={"Food "} total={"$150.79"} previous={"210.55"}/>
          <Total title={"Bills"} total={"$591.52"} previous={"1133.63"}/>
          <Total title={"Transportation"} total={"$10.54"} previous={"11.45"}/>
          <Total title={"Personal"} total={"$251.53"} previous={"240.30"}/>
        </div>
        <DisplayFormData/>
    </div>
  );
};

export default Budget;