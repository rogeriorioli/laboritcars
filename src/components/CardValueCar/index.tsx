import React from 'react';

import {CardContainer} from './styles'

interface CardCarValueProps {
    brand :string,
    model : string,
    fuel  : string,
    value : string,
    refMonth: string,
    year : string,
    fipe: string,
    favorite? : boolean
}


const CardValueCar: React.FC<CardCarValueProps> = (props) => {
  return (
      <CardContainer className="card">
          <div className="card-image">
            <img src="https://via.placeholder.com/150" 
                    alt={props.model} 
                    srcSet="https://via.placeholder.com/150" 
                    loading="lazy"
                />
          </div>
          <div className="card-info">
                <h2>{props.brand}</h2>
                <p>{props.model}</p>
                <div className="card-info-details">
                    <span className="card-info-fuel">
                        {props.fuel}
                    </span>
                    <span>
                        {props.year}
                    </span>
                    <span>FIPE : {props.fipe}</span>
                </div>
          </div>
          <div className="card-price">
            <h3>{props.value}</h3>
            <span>{props.refMonth}</span>

          </div>
      </CardContainer>
  );
}

export default CardValueCar;