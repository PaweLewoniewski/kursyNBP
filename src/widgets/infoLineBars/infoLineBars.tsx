import styled from "styled-components";
import LineBar from "../../components/lineBar/linebar";

const InfoLineBarsComponent = () => {

    const data = [{'currency':'USD','id':1,'mid':4.8223}];


    return (
        <Contener>
            <LineBar name={"Śrerdni Kurs Walut"} data={data} />
        </Contener>
    );
};
export default InfoLineBarsComponent;


const Contener = styled.div`
    display:flex;
    flex-direction:column ;
`;