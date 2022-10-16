import React from "react";
import Parameters from "./InvestType.js";
import Return from "./InvestReturn.js";
import Duration from "./Duration.js";
import InvestTable from "./InvestTable.js";
import Button from '@mui/material/Button';
import StartingAmountTextField from '../RoiCalc/StartingAmountTextField'
import MainCard from "../Roi/MainCard.js";
import main from "./main.jpg";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./RoiCalc.css";

const RoiCalc = () => {
  const [amountMoney, setAmountMoney] = React.useState(0);
  const [startingAmount, setStartingAmount] = React.useState(-1);//starting amount
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [years, setYears] = React.useState(-1)//duration
  const [returnVal, setReturnVal] = React.useState()//return rate

  return (
    <div>
        <MainCard image={main} imageText={"main"} title={"Investment Calculator"} content={" This program will allow you to specify the parameters for your desired investment in order to see the impact investing can have on your future wealth."} linkText={"test linke text"}/>
        {/* <Parameters amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/> */}
        <h3 style={{textAlign: "center"}}>Input Parameters</h3>
        <div className="Parameters">
        <Return buttonClicked={buttonClicked} setReturnVal={setReturnVal} returnVal={returnVal} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <Duration years={years} setYears={setYears} buttonClicked={buttonClicked} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        <StartingAmountTextField startingAmount={startingAmount} setStartingAmount={setStartingAmount} buttonClicked={buttonClicked}/>
        <p/>
        <Button variant="contained" onClick={() => {setButtonClicked(!buttonClicked)}}>Submit</Button>
        </div>
        <div className="Table">
        <InvestTable buttonClicked={buttonClicked} returnVal={returnVal} years={years} amountMoney={amountMoney} setAmountMoney={setAmountMoney} startingAmount={startingAmount} setStartingAmount={setStartingAmount}/>
        </div>
    </div>
  );
};

export default RoiCalc;