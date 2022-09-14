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

    const [currencyTop, setCurrencyTop] = useState('USD');
    const [currencyDown, setCurrencyDown] = useState('PLN');
    const currentValueTop = multipleCurrencies?.find(item => item.code === currencyTop);
    const currentValueDown = multipleCurrencies?.find(item => item.code === currencyDown);
    const sellTop = currentValueTop?.ask ? currentValueTop.ask : 1;
    const sellDown = currentValueDown?.ask ? currentValueDown.ask : 1;
    const [valuesTop, setValuesTop] = useState({amount: 1 });
    const [valuesDown, setValuesDown] = useState({amount:1});



    const caclulations = () => {
        // let res = valuesTop.amount / valuesDown.amount;
        // return console.log(res);
        console.log(`aamounttop: ${valuesTop.amount}`);
        console.log(`amountDown: ${valuesDown.amount}`);
    }

    // const caclulationsMultipler = () => {
    //     let res = valuesTop.amount * valuesDown.amount;
    //     return console.log(res);
    // }



    const handleChangeTop = (prop: any) => (event: { target: { value: any; }; }) => {
        setValuesTop({ ...valuesTop, [prop]: event.target.value });
    };

    const handleChangeCurrencyTop = (event: any) => {
        setCurrencyTop(event.target.value);
    };


    const handleChangeDown = (prop: any) => (event: { target: { value: any; }; }) => {
        setValuesDown({ ...valuesDown, [prop]: event.target.value });
    };

    const handleChangeCurrencyDown = (event: any) => {
        setCurrencyDown(event.target.value);
    };



    useEffect(() => {
        setValuesTop({amount: sellTop});
        setValuesDown({amount: sellDown});
        caclulations();
        // parrenthandler(currentValue);
    }, [sellTop,sellDown]);



    return (
        <>
        <FormControl fullWidth sx={{ m: 1 }}>
            <Fields>
                <OutlinedInput
                    fullWidth
                    value={valuesTop.amount}
                    onChange={handleChangeTop('amount')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                />
                <TextField
                 fullWidth
                    id="outlined-select-currency"
                    select
                    label="Waluta"
                    value={currencyTop}
                    onChange={handleChangeCurrencyTop}
                >
                    {multipleCurrencies !== undefined && multipleCurrencies.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                            {option.currency}
                        </MenuItem>
                    ))}
                </TextField>
            </Fields>
            </FormControl>
             <FormControl fullWidth sx={{ m: 1 }}>
            <Fields>
                <OutlinedInput
                    fullWidth
                    value={valuesDown.amount}
                    onChange={handleChangeDown('amount')}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                />
                <TextField
                 fullWidth
                    id="outlined-select-currency"
                    select
                    label="Waluta"
                    value={currencyDown}
                    onChange={handleChangeCurrencyDown}
                >
                    {multipleCurrencies !== undefined && multipleCurrencies.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                            {option.currency}
                        </MenuItem>
                    ))}
                </TextField>
            </Fields>
        </FormControl>
        </>
    );
};
export default CurrencySelectinput;

const Fields = styled.div`
    display:flex;
    margin-bottom: 10px;
`;