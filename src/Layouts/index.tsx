import React from 'react';
import Header from '../components/Header';

import logo from '../assets/images/logo.svg'
import Global from '../GlobalSyle/global';

import { Container } from './styles';

const Layouts: React.FC = ({children}) => {
  return (
  <>
    <Header>
        <img src={logo} alt='Laborit Cars' srcSet={logo} loading="lazy"/>
    </Header>  
        <Container>
            {children}
        </Container>
    <Global/>    
  </>
  );
}

export default Layouts;