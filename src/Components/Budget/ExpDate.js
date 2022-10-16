import * as React from 'react';
import TextField from '@mui/material/TextField';


const ExpDate = () => {
  return (
    <div>
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2022-10-16"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};

export default ExpDate;