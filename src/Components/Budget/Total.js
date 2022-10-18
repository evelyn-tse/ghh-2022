import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../RoiCalc/Title.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Total.css";


function preventDefault(event) {
  event.preventDefault();
}

const Total = props => {
  return (
    <div className = "TotalCard">
    <Card sx={{ maxWidth: 345 }}>
      <CardContent className = "CardContent">
      <Title>{props.title}</Title>
        <Typography component="p" variant="h4">
            {props.total}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
        Previous Month Total: ${props.previous}
      </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default Total;