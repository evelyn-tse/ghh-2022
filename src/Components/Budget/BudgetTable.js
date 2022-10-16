import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../RoiCalc/Title';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import image2 from "../Roi/image2.jpeg";
import "../RoiCalc/InvestTable.css";



function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(
      0,
      '16 Mar, 2019',
      'Elvis Presley',
      'Tupelo, MS',
      'VISA ⠀•••• 3719',
      312.44,
    ),
    createData(
      1,
      '16 Mar, 2019',
      'Paul McCartney',
      'London, UK',
      'VISA ⠀•••• 2574',
      866.99,
    ),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
    createData(
      3,
      '16 Mar, 2019',
      'Michael Jackson',
      'Gary, IN',
      'AMEX ⠀•••• 2000',
      654.39,
    ),
    createData(
      4,
      '15 Mar, 2019',
      'Bruce Springsteen',
      'Long Branch, NJ',
      'VISA ⠀•••• 5919',
      212.79,
    ),
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
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
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