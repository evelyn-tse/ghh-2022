import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../Roi/InfoCard.css";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import "./Distribution.css";

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

const Distribution = props => {

    const [progress, setProgress] = React.useState(10);

    const handleChange = (prop) => (event) => {
        setProgress({ progress, [prop]: event.target.value });
      };

    return (
      <div className = "InfoCard">
        <Card className = "Card" sx={{ minWidth: 735 }}>
      <CardContent className = "CardContent">
        <h3>Budget Distribution</h3>
        <div className="Distribution">
        <p>Food</p>
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />             
        </Box>
        </div>
        <div className="Distribution">
        <p>Bills</p>
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />             
        </Box>
        </div>
        <div className="Distribution">
        <p>Transportation</p>
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />             
        </Box>
        </div>
        <div className="Distribution">
        <p>Personal</p>
        <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={progress} />             
        </Box>
        </div>
      </CardContent>
    </Card>
      </div>
    );
  };



export default Distribution;