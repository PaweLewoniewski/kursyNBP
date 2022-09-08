import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

// interface CurrencySelectProps {
//      value:string;
//      label:string;
//      amount:string;
// }

const CurrencySelectinput = () => {

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop: any) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    /*------------------------------------------------------------*/

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    const [currency, setCurrency] = useState('EUR');

    const handleChangeCurrency = (event: any) => {
        setCurrency(event.target.value);
    };

    return (

        <FormControl fullWidth sx={{ m: 1 }}>
            <Fields>
                <InputLabel htmlFor="outlined-adornment-amount">Kwota</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
                />

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChangeCurrency}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Fields>
        </FormControl>
    );
};
export default CurrencySelectinput;

const Fields = styled.div`
    display:flex;
`;