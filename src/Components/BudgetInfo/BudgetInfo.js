import React from "react";
import MainCard from "../Roi/MainCard.js";
import big1 from "./big1.jpg";
import big3 from "./big3.png";



const BudgetInfo = () => {
  return (
    <div>
        <MainCard image={big1} imageText={"big1"} title={"What Is Budgeting?"} content={"'Budgeting is the process of creating a plan to spend your money. This spending plan is called a budget. Creating this spending plan allows you to determine in advance whether you will have enough money to do the things you need to do or would like to do.' - MyMoneyCoach"} linkText={"test linke text"}/>
        <MainCard image={big3} imageText={"big3"} title={"Why Should I Budget?"} content={"'Budgeting helpsp create financial stability. By tracking expenses and following a plan, a budget makes it easier to pay bills on time, build an emergency fund, and save for major expenses such as a car or home. Overall, a budget puts a person on stronger financial footing for both the day-to-day and the long term.' - Investopedia"} linkText={"test linke text"}/>
    </div>
  );
};

export default BudgetInfo;