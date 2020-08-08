import React, {useState, useEffect} from 'react';
import api from '../../services/services'
import { FormContainer  } from './styles';
import Modal from '../Modal';
import CardValueCar from '../CardValueCar';
import SectionTitle from '../SectionTitle';


const SearchForm: React.FC = () => {

    //CONSULT CARS
    const [brand , setBrand] = useState<any[]>([]);
    const [model, setModel] = useState<string>('');
    const [models, setModels] = useState<any[]>([]);
    const [year, setYear] = useState<any[]>([]);
    const [getModel , setGetModel] = useState<string>('')
    const [getValueFipe, setValueFipe] = useState<any>({});
    const [messageAlert , setMessageAlert] = useState<string>('')   
    const [openModal , setOpenModal] = useState<boolean>(false);

    //SAVE TO FAVORITE
    const [favorite , setFavorite] = useState<any[]>([]);

    const toggle = () => setOpenModal(!openModal)

    
    useEffect(() => {
        api.get('/carros/marcas').then(res => {
            setBrand(res.data);
        })
    },[])

    const getValue = (e: any) => {
        setModel(e.target.value)
        api.get(`carros/marcas/${e.target.value}/modelos`).then(res => {
           console.log('aqui', res.data)
           setModels(res.data.modelos)
           setYear(res.data.anos)
        })
    }



    const ShowYear = (e :any) => {
        setGetModel(e.target.value)
    };     
    
    const getCarValue = (e: any) => {
            api.get(`carros/marcas/${model}/modelos/${getModel}/anos/${e.target.value}`).then(res => {
                setValueFipe(res.data);
                setOpenModal(false)
        }).catch(err => {
            setOpenModal(true)
            setMessageAlert("Dados Não encontrados")
        })
    }

    console.log(getValueFipe)

  return(
      <>
      <FormContainer>
        <form>
            <div>
            <label>Marca:</label>
            <select name="marca" onChange={getValue}>
                <option>Selecione uma Marca</option>
                {brand.map(carBrand =>
                    <option  key={carBrand.codigo} value={carBrand.codigo}> {carBrand.nome}  </option>
                )} 
            </select>   
            </div>
            <div>
                <label>Selecione um Modelo:</label>
                <select name="models" onChange={ShowYear}>
                <option>Selecione um Modelo</option>
                        {models.map(carModels => <option  key={carModels.codigo} value={carModels.codigo}> {carModels.nome}</option>)}
                </select>
            </div>
            <div>  
                <label>Selecione o Ano</label>
                <select name="YEAR" onChange={getCarValue}>
                <option>Selecione o Ano</option>
                        {year.map(carYear => <option  key={carYear.codigo} value={carYear.codigo}> {carYear.nome}</option>)}
                </select>
            </div>
        </form> 
      </FormContainer>
      <Modal visibility={openModal !== false ? 'visible' : 'hidden'} message={messageAlert} toggle={toggle} />
      {Object.keys(getValueFipe).length === 0 ? '' :
        <CardValueCar brand={getValueFipe.Marca} 
                    model={getValueFipe.Modelo} 
                    fuel={getValueFipe.Combustivel}
                    year={getValueFipe.AnoModelo}
                    refMonth={getValueFipe.MesReferencia}
                    value={getValueFipe.Valor}
                    fipe={getValueFipe.CodigoFipe}
            />
                }    
      </>
  );
}

export default SearchForm;