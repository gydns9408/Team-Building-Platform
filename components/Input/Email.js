import * as React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from '@mui/material/InputLabel';

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return "This field is being focused";
        }

        return "Helper text";
    }, [focused]);
    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl({ onChange, data }) {
    return (
        <Box component="form" noValidate autoComplete="off">
            <FormControl sx={{ width: "25ch"}}>
                <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    placeholder="Please enter text"
                    onChange={onChange}
                    value={data}
                    label="Email"
                />
                <MyFormHelperText />
            </FormControl>
        </Box>
    );
}
