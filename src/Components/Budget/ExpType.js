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
  'Simple Interest',
  'Compound Interest',
  'Roth IRA',
  'Mutual Fund',
  '401k',
  'Certificate of Deposit',
  'High Yield Savings Account'
];

function getStyles(name, investName, theme) {
  return {
    fontWeight:
      investName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const ExpType = () => {

    const theme = useTheme();
    const [investName, setInvestName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setInvestName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-name-label">Investment Type</InputLabel>
        <Select
          labelId="demo-name-label"
          id="demo-multiple-name"
          value={investName}
          onChange={handleChange}
          input={<OutlinedInput label="Investment Type" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, investName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ExpType;