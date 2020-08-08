import styled from 'styled-components';

export interface ViewModal {
    visibility : any
}

export const ModalContainer = styled.div<ViewModal>`
            visibility : ${props => props.visibility};
            .modal-body {
                max-width : 640px;
                display :  flex;
                align-items : center;
                justify-content : center;
                padding : 2.2rem;
                border : 1px solid var(--main-bg-color);
                flex-wrap : wrap;
                position : fixed;
                top : 0;
                left : 0 ;
                right : 0 ;
                margin : 25vh auto;
                background :  var(--main-bg-color);
                z-index : 2;
            }
            
            h2 {
                color : var(--color-secondary);
                font-size : 2.6rem;
                width : 100%;
                text-align : center;
            }
            button {
                border : none;
                font-size : 2rem;
                color :  var(--color-white);
                background-color: var(--color-secondary);
                margin : 3rem 0;
                padding : 2rem;
            }

            &:before {
                width : 100%;
                height : 100%;
                background: rgba(0,0,0,.8);
                position : fixed;
                content : '';
                top : 0;
                left : 0;
                z-index: 0;
            }
        
`;
