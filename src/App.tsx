import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import CalculatorPage from './view/calculatorPage/calculatorPage';
import GoldPage from './view/goldPage/goldPage';
import styled from 'styled-components';
import InfoLineBarsComponent from './widgets/infoLineBars/infoLineBars';
import Footer from './widgets/footer/footer';
import { Suspense } from "react";

function App() {
  return (
    <WrapperApp>
      <Suspense fallback={`Loading...`}>
        <Router>
          <Header>
            <Logo>Kursy walut NBP</Logo>
            <Menu>
              <NavLink to='/'>Kalkulator</NavLink>
              <NavLink to='/gold'>Ceny złota</NavLink>
            </Menu>
          </Header>
          <Content>
            <InfoLineBarsComponent />
            <div className='pages'>
              <Routes>
                <Route path="/" element={<CalculatorPage />} />
                <Route path="/gold" element={<GoldPage />} />
              </Routes>
            </div>
          </Content>
        </Router>
        <Footer />
      </Suspense>
    </WrapperApp>
  );
}

export default App;


const WrapperApp = styled.div`
display:flex;
flex-direction:column ;
`;

const Menu = styled.div`
  display:flex;

  a {
    font-size:1.5em;
    color:white;
    padding:3px 15px;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
`;

const Logo = styled.h1`
  font-size: 2em;
  margin:0;
  padding:0;
`;

const Content = styled.div`
height:100vh;
width:100%;
background: rgb(51,0,93);
background:linear-gradient(0deg,rgb(253 255 226) 0%,rgba(255,255,255,1) 100%);
`;

const Header = styled.div`
  background-color: #282c34;
  min-height: 100%;
  padding:20px 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
`;