import styled from 'styled-components';

export const LineWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:last-of-type) {
        margin-bottom: 30px;
    }
    
`;

export const Number = styled.div`
    border: 1px solid #000;
    width: 23px;
    height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
`;
