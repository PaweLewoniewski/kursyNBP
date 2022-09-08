import styled, { keyframes } from "styled-components";

type CurrencyDataTypes = {
    code: string;
    currency: string;
    mid: number;
}

interface LinebarProps {
    name: string;
    data?: CurrencyDataTypes[];
}

const LineBar = ({ name, data }: LinebarProps) => {

    return (
        <Contener>
            <BarName>{name}:</BarName>
            <Slider>

                {data !== undefined ? data.map((item) => (
                    <BarElement key={item.code}>
                        {item.code} : {item.mid}
                    </BarElement>
                )) : 'Loading...'}
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
    width:100%;
    overflow:hidden;
    position:relative;
`;

const leftToRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-200%);
    }
`;

const Slider = styled.div`
    display:flex;
    flex-direction:row;
    animation: ${leftToRight} 40s linear infinite;
    width:100%;
`;



const BarElement = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
    min-width:130px;
    border-right:1px solid black;
`;

const BarName = styled.div`
    display:flex;
    z-index:2;
    flex-direction:row;
    background:#91ff91;
    width:150px;
    padding:5px 15px;
    box-shadow:0px 0px 3px black;
    position:absolute;
`;