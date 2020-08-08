import React from 'react';
import Hero from '../../components/Hero';
import bg from  '../../assets/images/cars.jpeg'
import SectionTitle from '../../components/SectionTitle';
import SearchForm from '../../components/SearchForm';


const Home: React.FC = () => {
  return(
      <>
        <Hero image={bg}>
          <h2>Laborit Cars</h2>
        </Hero>
        <SectionTitle title="Enconte o seu modelo pela tabela Fipe"/>
        <SearchForm/>
      </>
  );
}

export default Home;