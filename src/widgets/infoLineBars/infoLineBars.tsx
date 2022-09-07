import styled from "styled-components";
import LineBar from "../../components/lineBar/linebar";

const InfoLineBarsComponent = () => {

    const data = [{'currency':'USD','id':1, 'bid':4.7265, 'ask':4.8223}];


    return (
        <Contener>
            <LineBar name={"Kurs Sprzedaży"} data={data} />
            <LineBar name={"Kurs Kupna"} data={data} />
        </Contener>
    );
};
export default InfoLineBarsComponent;


const Contener = styled.div`
    display:flex;
    flex-direction:column ;
`;