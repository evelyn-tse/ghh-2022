import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../RoiCalc/InvestTable.css";
import table from "./table.png";


const DisplayFormData = () => {

 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     date:'',
     category:'',
     amount:''
    }
 );
 
 const handleChange=(evnt)=>{  
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setformInputData(newInput)
 }
  
 const handleSubmit= (evnt) =>{
     evnt.preventDefault();
     const checkEmptyInput = !Object.values(formInputData).every(res=>res==="")
     if(checkEmptyInput)
     {
      const newData = (data)=>([...data, formInputData])
      setTableData(newData);
      const emptyInput= {date:'', category:'', amount:''}
      setformInputData(emptyInput)
     }
 }  

 return(
    <div className="InvestTable">
          <Paper
        sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${table})`,
        }}
        >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={table} alt={"table"} />}
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
            <Grid item md={11}>
                <Box
                    sx={{
                    position: 'relative',
                    p: { xs: 1, md: 10 },
                    pr: { md: 0 },
                    }}
                >
      <React.Fragment>
      <div className="container">
      <h2>Expenses</h2>
     <div className="row">
         <div className="col-sm-8">
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
            <p>Date: MM/DD/YYY</p>
            <p>Category Options: Food, Bills, Transportation, Personal</p>
            <p>Amount: U.S. Dollars</p>
            <FormInput handleChange={handleChange} formInputData={formInputData} handleSubmit={handleSubmit}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
         <Table tableData={tableData}/>
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
    </React.Fragment>
                </Box>
            </Grid>
        </Grid>
    </Paper>
    </div>
 );
}
export default DisplayFormData;