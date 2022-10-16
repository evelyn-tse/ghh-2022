import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Roi/InfoCard.css";
//import { flexbox } from '@mui/system';


const MainTotal = props => {
    return (
      <div className = "InfoCard">
        <Card className = "Card" sx={{ maxWidth: 345 }}>
      <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={props.image}
      ></CardMedia>
      <CardContent className = "CardContent">
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">{props.content}
        </Typography>
      </CardContent>
    </Card>
      </div>
    );
  };



export default MainTotal;