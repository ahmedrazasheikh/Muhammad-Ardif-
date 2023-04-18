import styled from 'styled-components';

export const RessetForm = styled.form`
    margin-bottom: 30px;
    text-align: start;
    width: 100%;
`;

export const Label = styled.p`
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    width: 100%;
`;

export const Input = styled.input`
    border: 1px solid #e4e4e7;
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    &:focus {
        border: 1px solid #00b840;
        outline: none;
    }
    &:not(:focus) {
        border: 1px solid ${props => (props.hasValue ? '#00b840' : 'red')};
    }
`;

export const Button = styled.button`
    align-items: center;
    padding: 10px;
    background: #00b840;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 15px;
    line-height: 27px;
    color: #ffffff;
    width: 100%;
    &:hover {
        background-color: #2df065;
    }
`;

export const ButtonWrapper = styled.div`
    margin-bottom: 8px;
    width: 100%;
`;
