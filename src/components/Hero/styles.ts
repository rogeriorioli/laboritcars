import styled from 'styled-components';


export interface bgImage {
    image : any
}

export const HeroContainer = styled.section<bgImage>`

        background : url(${props => props.image});
        height : 350px;
        width : 100%;
        background : cover ;
        background-position : center center;
        margin : 3rem 0;
        position : relative;
        display: flex;
        align-items : center;
        justify-content : center;
        color : var(--color-secondary);
        h2 {
            position : relative ;
            z-index : 1;
            font-size:  4.2rem;
            font-weight : 600;
        }
        &::after {
            position:absolute;
            content : "";
            width : 100%;
            height : 100%;
            background-color: var(--main-bg-color);
            opacity : .6;
        }
  
`;
