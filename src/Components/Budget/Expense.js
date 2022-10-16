import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpType from "./ExpType.js";
import "./Expense.css";
import ExpDate from "./ExpDate.js";
import ExpAmount from "./ExpAmount.js";
import Button from '@mui/material/Button';
import FormInput from "../Testing/FormInput.js";


const Expense = ({handleChange, formInputData, handleSubmit}) => {
  return (
    <div>
      <div className="Accordian">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add Expense</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="FormOptions">
              <ExpDate/>
              <ExpType/>
              <ExpAmount/>
              <Button id="Submit" variant="contained">Submit</Button>
            </div> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div> 
    </div>
  );
};

export default Expense;