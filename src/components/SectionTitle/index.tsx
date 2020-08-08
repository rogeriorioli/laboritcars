import React from 'react';
import { Title } from './styles';

interface TitleSection {
    title : string;
}

const SectionTitle: React.FC<TitleSection> = (props) => {
  return(
    <Title>
        {props.title}
    </Title>
  );
}

export default SectionTitle;