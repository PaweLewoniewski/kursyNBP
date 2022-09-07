import styled from "styled-components";

type CurrencyDataTypes = {
    id:number;
    currency:string;
    ask:number;
    bid:number;
}

interface LinebarProps {
    name:string;
    data:CurrencyDataTypes[];
}

const LineBar = ({name, data}:LinebarProps) => {

    return (
        <Contener>
            <BarName>{name}:</BarName>
            <Slider>
                {data.map((item) => (
                        <BarElement key={item.id}>
                            | {item.currency} : {item.ask} | 
                        </BarElement>
                    ))}
            </Slider>
        </Contener>
    );
};
export default LineBar;

const Contener = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    font-size:1em;
    border-top:1px solid green;
    border-bottom:1px solid green;
    background:#d0ffd0;
`;

const Slider = styled.div`
    display:flex;
    flex-direction:row;
`;

const BarElement = styled.div`
    display:flex;
`;

const BarName = styled.div`
    display:flex;
    background:#91ff91;
    height:100%;
    padding:5px 15px;
    box-shadow:0px 0px 3px black
`;