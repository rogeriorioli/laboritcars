import React from 'react';

import * as S from "./styles";


const Hero: React.FC<S.bgImage> = (props) => {
  return (
      <S.HeroContainer image={props.image}>
          {props.children}
       </S.HeroContainer>
  );
}

export default Hero;