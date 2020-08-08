import React from 'react';

import * as S from './styles';


const Header: React.FC = (props) => {
  return (
      <S.HeaderContainer>
          <h1>
              <figure>
                 {props.children}
              </figure>  
          </h1>
      </S.HeaderContainer>
  );
}

export default Header;