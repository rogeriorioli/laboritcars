import styled from 'styled-components';

export const FormContainer = styled.div`
    form {
    display : flex;
    justify-content : space-between;
        label {
            font-size : 1.6rem;
            margin : 2rem 0;
            display : block;
            font-size : 2.3rem;
            color : var(--color-secondary);
            font-weight : 600;
        }
        select, option {
            width : 100%;
            padding : 0.5rem;
            font-size : 1.6rem;

        }
    }
`;
