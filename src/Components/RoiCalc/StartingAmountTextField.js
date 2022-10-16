import React from "react";
import TextField from '@mui/material/TextField';
export default function StartingAmountTextField ({buttonClicked}){
    const [startingAmountTextField, setStartingAmountTextField] = React.useState(-1);

    React.useEffect(()=>{
        if (startingAmountTextField < 0){
            return;
        }
        alert(startingAmountTextField)
    }, [buttonClicked])
    return(
        <>
            <TextField id="outlined-basic" label="Starting Amount" type="number" variant="outlined" onChange={(event)=>{setStartingAmountTextField(event.target.value)}}/>
        </>
    );
}