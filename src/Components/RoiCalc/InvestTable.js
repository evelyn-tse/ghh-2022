import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import "./InvestTable.css";
import table from "./table.jpeg";



// function createData(id, date, name, shipTo, paymentMethod, amount) {
//     return { id, date, name, shipTo, paymentMethod, amount };
// }



const InvestTable = ({buttonClicked, returnVal, years, amountMoney, setAmountMoney, startingAmount, setStartingAmount}) => {

  const [rows, setRows] = React.useState([]);
  const createRows = ()=>{
    //amount*return_rate=return value
    //amount=amount+return_value
    let temp_return_value = 0
    let amount = parseInt(startingAmount)
    let tempRows = []
    for (let i = 0; i < years; i++) {
      tempRows.push({year: i, return_value: temp_return_value, total: amount})
      temp_return_value = Math.round(amount * returnVal * 100)/100
      amount = Math.round((amount + temp_return_value) * 100)/100
    }
    tempRows.push({year: years, return_value: temp_return_value, total: amount})
    setRows(tempRows);
  }

  // React.useEffect(()=>{
  //   if(!returnVal){
  //     return;
  //   }
  //   alert(returnVal)
  // },[returnVal])

  // React.useEffect(()=>{
  //     if (startingAmount < 0){
  //         return;
  //     }
  //     alert(startingAmount)
  // }, [startingAmount])

    React.useEffect(()=>{
      if(years < 0 || !years){
        return;
      }
      createRows();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[buttonClicked])
    
  return (
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
        {<img style={{ display: 'none' }} src={table} alt={"image2"} />}
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
      <h2>Return on Investment</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Years</TableCell>
            <TableCell>Return Value</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.return_value}</TableCell>
              <TableCell>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
                </Box>
            </Grid>
        </Grid>

    </Paper>
    </div>
  );
};

export default InvestTable;