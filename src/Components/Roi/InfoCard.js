import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoCard.css";
import { flexbox } from '@mui/system';

const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    // minHeight: "400vw",
    // minWidth: "20vw"
};

const InfoCard = props => {
    return (
      <div className = "InfoCard" style={cardStyle}>
        <Card sx={{ maxWidth: 345 }}>
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
      <CardActions>
        <div className = "CardActions">
            <Button size="small">Learn More</Button>
        </div>
      </CardActions>
    </Card>
      </div>
    );
  };



export default InfoCard;