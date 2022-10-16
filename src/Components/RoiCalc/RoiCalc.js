import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";
import Button from '@mui/material/Button';


const RoiCalc = () => {
  const [amountMoney, setAmountMoney] = React.useState(0);
  const [startingAmount, setStartingAmount] = React.useState(0);
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [years, setYears] = React.useState(-1)
  return (
    <div>
        <Parameters amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Return amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Duration years={years} setYears={setYears} buttonClicked={buttonClicked} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Button variant="contained" onClick={() => {setButtonClicked(!buttonClicked)}}>Submit</Button>
        <InvestTable years={years} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
    </div>
  );
};

export default RoiCalc;