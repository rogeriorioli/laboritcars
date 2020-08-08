import React from 'react';

import * as S from './styles';


interface ModalProps extends S.ViewModal{
    message : String,
    toggle : any
}

const Modal: React.FC<ModalProps> = (props) => {


  return (
    <S.ModalContainer visibility={props.visibility}>
        <div className="modal-body">
          <h2>{props.message}</h2>
          <button type="button" onClick={props.toggle}> Fechar </button>

        </div>

    </S.ModalContainer>

  );
}

export default Modal;