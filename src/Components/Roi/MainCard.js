import * as React from 'react';
//import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
//import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import "./MainCard.css";


const MainCard = props => {
    return (
        <div className="MainCard">
        <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${props.image})`,
        }}
        >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={props.image} alt={props.imageText} />}
        <Box
            sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
            }}
        />
        <Grid container>
            <Grid item md={10.5}>
                <Box
                    sx={{
                    position: 'relative',
                    p: { xs: 3, md: 20 },
                    pr: { md: 0 },
                    }}
                >
                    <div className="Title">
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        {props.title}
                        </Typography>
                    </div>
                    <div className="Content">
                    <Typography variant="h5" color="inherit" paragraph>
                    {props.content}
                    </Typography>                    
                    </div>
                </Box>
            </Grid>
        </Grid>
        </Paper>
        </div>
    );
  };
  
  export default MainCard;




