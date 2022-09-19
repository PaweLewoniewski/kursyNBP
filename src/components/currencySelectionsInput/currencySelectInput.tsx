import { FormControl, InputAdornment, MenuItem, OutlinedInput, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

export type MultipleCurrencyDataTypes = {
    currency: string;
    code: string;
    bid: number;
    ask:number;
}

interface CurrencySelectProps {
    multipleCurrencies?:MultipleCurrencyDataTypes[];
    parrenthandler:any;
    swapper:number;
}

const CurrencySelectinput = ({multipleCurrencies,parrenthandler,swapper}:CurrencySelectProps) => {

    const [currencyTop, setCurrencyTop] = useState('USD');
    const [currencyDown, setCurrencyDown] = useState('PLN');
    const currentValueTop = multipleCurrencies?.find(item => item.code === currencyTop);
    const currentValueDown = multipleCurrencies?.find(item => item.code === currencyDown);
    let sellTop:number = 1; 
    let sellDown:number = 1; 

    if(swapper === 1 ){
        sellTop = currentValueDown?.ask ? currentValueDown.ask : 1;
        sellDown = currentValueTop?.ask ? currentValueTop.ask : 1;
    }
    else {
        sellTop = currentValueDown?.bid ? currentValueDown.bid : 1;
        sellDown  = currentValueTop?.bid ? currentValueTop.bid : 1;
    }

    const [valuesTop, setValuesTop] = useState({amount: 1 });
    const [valuesDown, setValuesDown] = useState({amount: sellDown});
    const [saveTopValue, setsaveTopValue] = useState<number>(1);

    const caclulations = () => {
        let calc = 0;
        let res = 0;
        calc = sellDown / sellTop;
        res = calc * saveTopValue;
        let stinger = +res.toFixed(4);
        setValuesDown({amount: stinger});
    } 

    const handleChangeTop = (prop: any) => (event: { target: { value: any; }; }) => {
        setValuesTop({ ...valuesTop, [prop]: event.target.value });
        setsaveTopValue(event.target.value);
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
        setValuesTop({amount: saveTopValue});
        setValuesDown({amount: sellDown});
        caclulations();
        parrenthandler(currentValueTop);
        // eslint-disable-next-line 
    }, [sellTop,sellDown,saveTopValue]);

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
                            {option.currency[0].toUpperCase() + option.currency.slice(1)}
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
                            {option.currency[0].toUpperCase() + option.currency.slice(1)}
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