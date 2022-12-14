import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import "../Roi/InfoCard.css";
import "./MainTotal.css";
import budget from "./budget.jpg";

const MainTotal = props => {
    return (
      <div className = "InfoCard">
        <Card className = "Card" sx={{ maxWidth: 345 }}>
      <CardContent className = "MainContent">
        <div className="Info">
          <div className="Total">
            <Typography component="p" variant="h2">
                Total
            </Typography>
            <Typography component="p" variant="h3">
                {props.total}
            </Typography>
          </div>
          <div className="Image" >
          <img className="budgetimg" src={budget} alt={"budget"}/>
          </div>
        </div>
        
        <p></p>
        <Typography color="text.primary" sx={{ flex: 1 }}>
        Previous Month Total: $1595.93
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        Monthly Goal: Have total 
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        expenses be less than $1500.
        </Typography>
      </CardContent>
    </Card>
      </div>
    );
  };



export default MainTotal;