import { useEffect, useState } from "react";
import Chart from "react-google-charts";
import styled from "styled-components";
import api from "../../queries/fetchMidCurrencyQuery";

type GoldPriceTypes = {
    data: string;
    cena: number;
}

const GoldPage = () => {

    const [lastgoldPrices, setlastgoldPrices] = useState<GoldPriceTypes[]>();

    useEffect(() => {
        async function FetchData() {
            const tmp = await api.getGoldPriceLast();
            setlastgoldPrices(tmp);
        }
        FetchData();
    }, []);

    const todayPrice = lastgoldPrices?.at(-1);
    //console.log(lastgoldPrices);

    // const daneLabels = lastgoldPrices !== undefined && lastgoldPrices.map((item) => item.data);
    // const daneData = lastgoldPrices !== undefined && lastgoldPrices.map((item) => item.cena);

    console.log(lastgoldPrices);


    // const state = {
    //     labels: lastgoldPrices !== undefined && lastgoldPrices.map(item => item.data),
    //     datasets: [
    //       {
    //         label: 'Rainfall',
    //         backgroundColor: [
    //           '#B21F00',
    //           '#C9DE00',
    //           '#2FDE00',
    //           '#00A6B4',
    //           '#6800B4'
    //         ],
    //         hoverBackgroundColor: [
    //         '#501800',
    //         '#4B5000',
    //         '#175000',
    //         '#003350',
    //         '#35014F'
    //         ],
    //         data: lastgoldPrices !== undefined && lastgoldPrices.map(item => item.cena)
    //       }
    //     ]
    //   }


    const data = [
        [
            "Day",
            "Cena złota"
        ],
        [1, 37.8],
        [2, 30.9],
        [3, 25.4],
        [4, 11.7],
        [5, 11.9],
        [6, 8.8],
        [7, 7.6],
        [8, 12.3],
        [9, 16.9],
        [10, 12.8],
        [11, 5.3],
        [12, 6.6],
        [13, 4.8],
        [14, 4.2],
    ];

    const options = {
        chart: {
            title: "Aktualnie obowiązująca cena złota NBP",
            subtitle: "Z ostatnich 30 dni",
        },
    };

    return (
        <Contener>
            <BoxCol>
                <ItemBox><ItemName>Aktualna Cena złota: {todayPrice?.cena} ({todayPrice?.data})</ItemName></ItemBox>
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
export default GoldPage;


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
`;


const ItemBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    box-shadow:1px 2px 7px rgb(0 0 0 / 10%);
`;

const ItemName = styled.p`
    font-size:1em;
    color:black;
    padding:5px 35px;
`;