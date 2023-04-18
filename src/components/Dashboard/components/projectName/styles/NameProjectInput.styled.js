import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 520px;
    justify-content: center;
`;

export const Label = styled.label`
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    margin-right: 8px;
    margin-bottom: 27px;

    border: 1px solid #00b840;
    border-radius: 5px;
    padding: 16px;
    &:focus {
        border: 1px solid ${props => (props.hasValue ? '#00b840' : 'red')};
        outline: none;
    }

    &:not(:focus) {
        border: 1px solid
            ${props => (props.hasValue ? '#00b840' : 'rgba(0, 0, 0, 0.2)')};
    }
`;

export const SubmitButton = styled.button`
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
    width: 134px;
    cursor: pointer;

    &:hover {
        background-color: ${props => (props.disabled ? 'default' : '#3e8e41')};
    }
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;
