import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";


const RoiCalc = () => {
  const [amountMoney, setAmountMoney] = React.useState(0);
  const [startingAmount, setStartingAmount] = React.useState(0);
  return (
    <div>
        <Parameters amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Return amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Duration amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <InvestTable amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
    </div>
  );
};

export default RoiCalc;