import styled from "styled-components";
import CurrencySelectinput, {
  MultipleCurrencyDataTypes,
} from "../../components/currencySelectionsInput/currencySelectInput";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import api from "../../queries/fetchMidCurrencyQuery";
import { Button, ButtonGroup } from "@mui/material";

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

  const FetchData = async (code: string) => {
    const tmp = await api.getSingleLastCurrency(code);
    setCurrentCurrencyLast(tmp);
  };

  const callbackhandler = (props: MultipleCurrencyDataTypes) => {
    console.log(props);
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

  const daneLabelsAsk =
    currentCurrencyLast !== undefined
      ? currentCurrencyLast.map((item) => [item.effectiveDate, item.ask])
      : [0, 0];

  const data = [
    [
      "Dzień",
      `${currentCurrency ? currentCurrency?.currency : "wybierz walutę"}`,
    ],
    daneLabelsAsk[0],
    daneLabelsAsk[1],
    daneLabelsAsk[2],
    daneLabelsAsk[3],
    daneLabelsAsk[4],
    daneLabelsAsk[5],
    daneLabelsAsk[6],
    daneLabelsAsk[7],
    daneLabelsAsk[8],
    daneLabelsAsk[9],
    daneLabelsAsk[10],
    daneLabelsAsk[11],
    daneLabelsAsk[12],
    daneLabelsAsk[13],
    daneLabelsAsk[14],
    daneLabelsAsk[15],
    daneLabelsAsk[16],
    daneLabelsAsk[17],
    daneLabelsAsk[18],
    daneLabelsAsk[19],
    daneLabelsAsk[20],
    daneLabelsAsk[21],
    daneLabelsAsk[22],
    daneLabelsAsk[23],
    daneLabelsAsk[24],
    daneLabelsAsk[25],
    daneLabelsAsk[26],
    daneLabelsAsk[27],
    daneLabelsAsk[28],
    daneLabelsAsk[29],
  ];

  const options = {
    title: `Kurs sprzedaży`,
    colors: ["green"],
  };

  return (
    <Contener>
      <PageBox>
        <BtnContener>
          <ButtonGroup size="large" aria-label="large button group">
            <Button key="buy">Kupno</Button>
            <Button key="sell">Sprzedaż</Button>
          </ButtonGroup>
        </BtnContener>
        <Box>
        <BoxCol>
          {/* <CurrencySelectinput
            multipleCurrencies={multipleCurrency}
            parrenthandler={callbackhandler}
          /> */}
          <CurrencySelectinput
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
  /* width:420px; */
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  border:1px solid #8cbae6;
`;

const BoxRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const ChartsBox = styled.div`
  display: flex;
  flex-direction: row;
  width:600px;
`;

const BtnContener = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const PageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
