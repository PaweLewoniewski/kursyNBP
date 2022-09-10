import styled from "styled-components";
import CurrencySelectinput, { MultipleCurrencyDataTypes } from "../../components/currencySelectionsInput/currencySelectInput";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import api from "../../queries/fetchMidCurrencyQuery";


const CalculatorPage = () => {


    const [multipleCurrency, setMultipleCurrency] = useState<MultipleCurrencyDataTypes[]>();
    //const [currentCurrencyFirst, setCurrentCurrencyFirst] = useState();
    // const [currentCurrencySec, setCurrentCurrencySec] = useState();

    const callbackhandler = (props:any) => {
        console.log(props);
    }

    useEffect(() => {
        async function FetchData() {
            const tmp = await api.getMultipleCurrency();
            setMultipleCurrency(tmp);
        }
        FetchData();
    }, []);


    const data = [
        [
            "Day",
            "Guardians of the Galaxy",
            "The Avengers",

        ],
        [1, 37.8, 80.8],
        [2, 30.9, 69.5],
        [3, 25.4, 57],
        [4, 11.7, 18.8],
        [5, 11.9, 17.6],
        [6, 8.8, 13.6],
        [7, 7.6, 12.3],
        [8, 12.3, 29.2],
        [9, 16.9, 42.9],
        [10, 12.8, 30.9],
        [11, 5.3, 7.9],
        [12, 6.6, 8.4],
        [13, 4.8, 6.3],
        [14, 4.2, 6.2],
    ];

    const options = {
        chart: {
            title: "Z ostatnich 30 dni",
            subtitle: "kurs sprzedaży",
        },
    };

    return (
        <Contener>
            <BoxCol>
                <CurrencySelectinput multipleCurrencies={multipleCurrency} parrenthandler={callbackhandler} />
                <CurrencySelectinput multipleCurrencies={multipleCurrency}  parrenthandler={callbackhandler} />
            </BoxCol>
            <BoxRow>
                <ChartsBox>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="300px"
                        data={data}
                        options={options}
                    />
                </ChartsBox>
            </BoxRow>
        </Contener>
    );
};
export default CalculatorPage;

const Contener = styled.div`
    display:flex;
    width:100%;
    margin:20px 0;
    justify-content:center ;
`;

const BoxCol = styled.div`
    display:flex;
    flex-direction:column;
    padding:25px;
    /* width:420px; */
`;

const BoxRow = styled.div`
    display:flex;
    flex-direction:row;
    padding:25px;
`;

const ChartsBox = styled.div`
    display:flex;
    flex-direction:row;
    padding:25px;
    border:1px solid black;
`;