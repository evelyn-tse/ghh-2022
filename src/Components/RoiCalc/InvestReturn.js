import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

function getStyles(name, investmentReturn, theme) {
  return {
    fontWeight:
      investmentReturn.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Return = ({buttonClicked, setReturnVal, returnVal, amountMoney, setAmountMoney, startingAmount, setStartingAmount}) => {

    const theme = useTheme();
    const [investmentReturn, setInvestmentReturn] = React.useState();
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setInvestmentReturn(
        // On autofill we get a stringified value.
        typeof value === 'string' ? parseInt(value) : value,
      );
    };

    React.useEffect(()=>{
      if(!investmentReturn){
        return;
      }
      setReturnVal(()=>investmentReturn)
    },[buttonClicked])

    React.useEffect(()=>{
      if(!returnVal){
        return;
      }
      alert(returnVal)
    },[returnVal])

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-name-label">Rate of Return (%)</InputLabel>
        <Select
          labelId="demo-name-label"
          id="demo-multiple-name"
          value={investmentReturn}
          onChange={handleChange}
          input={<OutlinedInput label="Rate of Return (%)" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, investmentReturn, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Return;

