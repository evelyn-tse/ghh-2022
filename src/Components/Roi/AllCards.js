import React from "react";
import InfoCard from "./InfoCard.js";
import image1 from "./image1.jpeg";
import "./AllCards.css";

const AllCards = () => {
  return (
    <div>
        <div className="InfoCards">
            <InfoCard image={image1} title={'Roth IRA'} content={"Description of Roth IRA"}/>
            <InfoCard image={image1} title={'Mutual Funds'} content={"Description of Mutual Funds"}/>
            <InfoCard image={image1} title={'Bonds'} content={"Description of Bonds"}/>
        </div>
        <div className="InfoCards">
            <InfoCard image={image1} title={'High Yield Savings Account'} content={"Description of High Yield Savings Account"}/>
            <InfoCard image={image1} title={'Certificates of Deposit'} content={"Description of Certificates of Deposit"}/>
            <InfoCard image={image1} title={'401k'} content={"Description of 401k"}/>
        </div>
    </div>
  );
};

export default AllCards;