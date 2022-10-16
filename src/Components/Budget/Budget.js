import React from "react";
import Expense from "./Expense.js";
import Total from "./Total.js";
import "./Budget.css";
import About from "./About.js";
import image2 from "../Roi/image2.jpeg";
import BudgetTable from "./BudgetTable.js";
import MainTotal from "./MainTotal.js";

const Budget = () => {
  return (
    <div>
        <About image={image2} imageText={"image2"} title={"Expenses"} content={"Brief Description about what this page does"} linkText={"test linke text"}/>
        <Expense/>
        <div className="MainTotalCards">
          <MainTotal image={image2} title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
          <MainTotal image={image2} title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
          <MainTotal image={image2} title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
        </div>
        <div className="TotalCards">
          <Total title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
          <Total title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
          <Total title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
          <Total title={"Total"} total={"$3000"} date={"May 2022 - Present"}/>
        </div>
        <BudgetTable/>
    </div>
  );
};

export default Budget;