import styled from "styled-components";
import CurrencySelectinput, {
  MultipleCurrencyDataTypes,
} from "../../components/currencySelectionsInput/currencySelectInput";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import api from "../../queries/fetchMidCurrencyQuery";
import { Tab, Tabs } from "@mui/material";

export type LastCurrentCurrencyTypes = {
  effectiveDate: string;
  bid: number;
  ask: number;
};

const CalculatorPage = () => {
  const [multipleCurrency, setMultipleCurrency] =
    useState<MultipleCurrencyDataTypes[]>();
  const [currentCurrencyLast, setCurrentCurrencyLast] = useState<
    LastCurrentCurrencyTypes[] | undefined
  >();
  const [currentCurrency, setCurrentCurrency] = useState<
    MultipleCurrencyDataTypes | undefined
  >();
  const [bidSwap, setbidSwap] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setbidSwap(newValue);
  };

  const FetchData = async (code: string) => {
    const tmp = await api.getSingleLastCurrency(code);
    setCurrentCurrencyLast(tmp);
  };

  const callbackhandler = (props: MultipleCurrencyDataTypes) => {
    setCurrentCurrency(props);
    if (props && props?.code !== undefined) {
      FetchData(props.code);
    }
  };

  useEffect(() => {
    async function FetchData() {
      const tmp = await api.getMultipleCurrency();
      setMultipleCurrency(tmp);
    }
    FetchData();
  }, []);

  const daneLabels =
    currentCurrencyLast !== undefined
      ? currentCurrencyLast.map((item) => [
          item.effectiveDate,
          bidSwap === 0 ? item.ask : item.bid,
        ])
      : [0, 0];

  const specificCurrencies =
    multipleCurrency !== undefined
      ? multipleCurrency.filter(
          (curr) =>
            curr.code.includes("USD") ||
            curr.code.includes("EUR") ||
            curr.code.includes("GBP") ||
            curr.code.includes("CHF")
        )
      : [];

  const data = [
    [
      "Dzień",
      `${currentCurrency ? currentCurrency?.currency : "wybierz walutę"}`,
    ],
    daneLabels[0],
    daneLabels[1],
    daneLabels[2],
    daneLabels[3],
    daneLabels[4],
    daneLabels[5],
    daneLabels[6],
    daneLabels[7],
    daneLabels[8],
    daneLabels[9],
    daneLabels[10],
    daneLabels[11],
    daneLabels[12],
    daneLabels[13],
    daneLabels[14],
    daneLabels[15],
    daneLabels[16],
    daneLabels[17],
    daneLabels[18],
    daneLabels[19],
    daneLabels[20],
    daneLabels[21],
    daneLabels[22],
    daneLabels[23],
    daneLabels[24],
    daneLabels[25],
    daneLabels[26],
    daneLabels[27],
    daneLabels[28],
    daneLabels[29],
  ];

  const options = {
    title: `${bidSwap === 0 ? `Kurs kupna` : `Kurs sprzedaży`}`,
    colors: ["green"],
  };

  return (
    <Contener>
      <PageBox>
        <BtnContener>
          <Tabs
            value={bidSwap}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
          >
            <Tab label="Kupno" />
            <Tab label="Sprzedaż" />
          </Tabs>
        </BtnContener>
        <Box>
          <BoxCol>
            <CurrencySelectinput
              swapper={bidSwap}
              multipleCurrencies={multipleCurrency}
              parrenthandler={callbackhandler}
            />
          </BoxCol>
          <BoxRow>
            {currentCurrency !== undefined ? (
              <ChartsBox>
                <Chart
                  chartType="AreaChart"
                  width="100%"
                  height="300px"
                  data={data}
                  options={options}
                />
              </ChartsBox>
            ) : (
              ""
            )}
          </BoxRow>
          <BoxCol>
            {specificCurrencies.map((item) => 
            <ItemBox>
                  <ItemName><p>{item.currency}:</p>&nbsp;<p>{bidSwap === 0 ? item.bid.toFixed(2) : item.ask.toFixed(2)}&nbsp;zł</p></ItemName>
          </ItemBox>
            )}
          </BoxCol>
        </Box>
      </PageBox>
    </Contener>
  );
};
export default CalculatorPage;

const Contener = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: center;
`;

const BoxCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #8cbae6;
  background: white;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  @media (max-width: 800px) {
    padding:0;
  }
`;

const ChartsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  @media (max-width: 600px) {
    width: 500px;
  }
`;

const BtnContener = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemBox = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 2px 7px rgb(0 0 0 / 10%);
`;

const ItemName = styled.div`
  display:flex;
  justify-content: space-between;
  padding: 5px 35px;
  width:100%;
  p{
    font-size: 1em;
  color: black;
  }
`;
