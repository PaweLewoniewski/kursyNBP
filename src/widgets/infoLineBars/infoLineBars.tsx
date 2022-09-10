import { useEffect, useState } from "react";
import styled from "styled-components";
import LineBar from "../../components/lineBar/linebar";
import api from "../../queries/fetchMidCurrencyQuery";

const InfoLineBarsComponent = () => {

    const [midList, setMidList] = useState();

    useEffect(() => {
        async function FetchData() {
            const tmp = await api.getMidCurrency();
            setMidList(tmp);
        }
        FetchData();
    }, []);

    return (
        <Contener>
            <LineBar name={"Śrerdni Kurs Walut"} data={midList} />
        </Contener>
    );
};
export default InfoLineBarsComponent;


const Contener = styled.div`
    display:flex;
    flex-direction:column ;
`;