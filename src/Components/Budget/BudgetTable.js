import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import image2 from "../Roi/image2.jpeg";
import "../RoiCalc/InvestTable.css";


function createData(id, date, category, amount) {
    return { id, date, category, amount };
}

const rows = [
    createData(
      1,
      '16 Mar, 2019',
      'Elvis Presley',
      312.44,
    )
  ];


const BudgetTable = props => {
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
            backgroundImage: `url(${image2})`,
        }}
        >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={image2} alt={"image2"} />}
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
      <h2>Expenses</h2>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
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

export default BudgetTable;