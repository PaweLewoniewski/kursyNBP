import { FormControl, InputAdornment, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../../queries/fetchMidCurrencyQuery";


export type MultipleCurrencyDataTypes = {
    currency: string;
    code: string;
    bid: number;
    ask:number;
}

interface CurrencySelectProps {
    multipleCurrencies?:MultipleCurrencyDataTypes[];
    parrenthandler:any;
}

const CurrencySelectinput = ({multipleCurrencies,parrenthandler}:CurrencySelectProps) => {

    const [currency, setCurrency] = useState('');
    const currentValue = multipleCurrencies?.find(item => item.code === currency);
    const sell = currentValue?.ask ? currentValue.ask : 0;
    const [values, setValues] = useState({amount: sell });

    const handleChange = (prop: any) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChangeCurrency = (event: any) => {
        setCurrency(event.target.value);
        setValues({amount: sell});
        //api.getSingleLastCurrency();
    };

    useEffect(() => {
        setValues({amount: sell});
        parrenthandler(currentValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sell]);



    return (

        <FormControl fullWidth sx={{ m: 1 }}>
            <Fields>
                <OutlinedInput
                    fullWidth
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                />
                <TextField
                 fullWidth
                    id="outlined-select-currency"
                    select
                    label="Waluta"
                    value={currency}
                    onChange={handleChangeCurrency}
                >
                    {multipleCurrencies !== undefined && multipleCurrencies.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                            {option.currency}
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