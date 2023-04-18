import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
    margin-bottom: 30px;
    text-align: center;
`;

export const Label = styled.p`
    text-align: start;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
`;

export const Input = styled.input`
    border: 1px solid #e4e4e7;
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    margin-bottom: 12px;
    &:focus {
        border: 1px solid ${props => (props.hasValue ? '#00b840' : 'red')};
        outline: none;
    }

    &:not(:focus) {
        border: 1px solid
            ${props => (props.hasValue ? '#00b840' : 'rgba(0, 0, 0, 0.2)')};
    }
`;

export const Select = styled.select`
    border: 1px solid #e4e4e7;
    border-radius: 5px;
    padding: 16px;
    width: 100%;
    margin-bottom: 12px;
    &:focus {
        border: 1px solid #00b840;
        outline: none;
    }
`;

export const Option = styled.option``;

export const ErrorMessage = styled.span`
    color: red;
`;

export const Button = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    background-color: ${({ disabled }) => (disabled ? '#808080' : '#3dcc00')};
    font-weight: 500;
    font-size: 15px;
    line-height: 27px;
    color: #fff;
    cursor: pointer;
    width: 100%;
    margin-bottom: 8px;
    &:hover {
        background-color: ${({ disabled }) =>
            disabled ? '#808080' : '#3dcc00'};
    }
`;

export const TextToSignIn = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
`;

export const NavLink = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: #00b840;
    text-align: start;
    margin-bottom: 16px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

export const CheckboxInput = styled.input`
    margin-right: 10px;
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: 0.2s;
    position: relative;
    &:checked {
        border-color: #3dcc00;
        background-color: #3dcc00;
        &::after {
            content: '✔';
            font-size: 16px;
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export const CheckboxText = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;

export const ShowPasswordContainer = styled.div`
    display: flex;
    position: relative;
    margin-bottom: 16px;
`;

export const ShowPasswordBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    border: none;
    background: none;
`;
