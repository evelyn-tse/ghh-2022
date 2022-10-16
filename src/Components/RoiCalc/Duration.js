import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "1",
  "2",
  "3", 
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15"
];

function getStyles(name, investName, theme) {
  return {
    fontWeight:
      investName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Duration = ({buttonClicked, amountMoney, setAmountMoney, startingAmount, setStartingAmount}) => {
  //INCORRECT: amountMoney = amountMoney + 1
  //INCORRECT: setAmountMoney(amountMoney+1)
  //CORRECT: setAmountMoney(()=>amountMoney+1)

  React.useEffect(()=>{
    alert("clicked")
  }, [buttonClicked])
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          min="1"
          max="100"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
    </div>
  );
};

export default Duration;

