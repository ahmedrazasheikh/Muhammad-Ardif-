import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginForm = styled.form`
    margin-bottom: 30px;
    text-align: start;
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
    &:focus {
        border: 1px solid ${props => (props.hasValue ? '#00b840' : 'red')};
        outline: none;
    }

    &:not(:focus) {
        border: 1px solid
            ${props => (props.hasValue ? '#00b840' : 'rgba(0, 0, 0, 0.2)')};
    }
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
    cursor: pointer;
`;

export const NavLink = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: #00b840;
    text-align: start;
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
    margin-bottom: 8px;
    &:hover {
        background-color: #2df065;
    }
`;

export const TextToSignUp = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    text-align: center;
`;
