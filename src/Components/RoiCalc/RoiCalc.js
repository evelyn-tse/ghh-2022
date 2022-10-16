import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";
import Button from '@mui/material/Button';
import StartingAmountTextField from '../RoiCalc/StartingAmountTextField'

const RoiCalc = () => {
  const [amountMoney, setAmountMoney] = React.useState(0);
  const [startingAmount, setStartingAmount] = React.useState(-1);
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [years, setYears] = React.useState(-1)
  const [returnVal, setReturnVal] = React.useState()

  React.useEffect(()=>{
    if(!returnVal){
      return;
    }
    alert(returnVal)
  },[returnVal])
  return (
    <div>
        <Parameters amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Return buttonClicked={buttonClicked} setReturnVal={setReturnVal} returnVal={returnVal} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Duration years={years} setYears={setYears} buttonClicked={buttonClicked} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <StartingAmountTextField startingAmount={startingAmount} setStartingAmount={setStartingAmount} buttonClicked={buttonClicked}/>
        <p/>
        <Button variant="contained" onClick={() => {setButtonClicked(!buttonClicked)}}>Submit</Button>
        <InvestTable years={years} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
    </div>
  );
};

export default RoiCalc;