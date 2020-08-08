import styled from 'styled-components';

export const CardContainer = styled.div`
        display : flex;
            p, span {
                font-size : 1.2rem;
                color : var(--color-primary);
            }
            border : 1px solid var(--color-secondary);
            background : var(--main-bg-color);
            padding : 2rem;
            margin : 3.2rem;

        .card {
            &-info{
                width : 60%;
                padding : 0 1.6rem;
                p{
                    font-size : 2.3rem;
                    margin-top: 0;
                }
                h2 {
                    font-size : 2.8rem;
                    margin : 0;
                }
                &-details {
                    font-size : 2.3rem;
                }
                &-fuel {
                    padding : 1rem;
                    text-align: center ;
                    background: var(--color-secondary);
                    color : var(--color-white); 
                    margin-right : 1rem;
                    font-size : 1.8rem;
                }
                span {
                    margin-right : 1rem;
                    font-size : 1.8rem;
                }
            }
            &-price {
                text-align : right;
                h3 {
                    font-size : 2.8rem;
                    color : var(--color-secondary);  
                    margin : 0;     
                }
            }
        }

`;
