import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 40px 100px 40px 40px;
    margin-bottom: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const InnerWrapper = styled.div`
    width: 700px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
`;

export const Label = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.2;
    color: #000000;
    margin-right: 16px;
    margin-bottom: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Input = styled.input`
    width: 341px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 16px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 204px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 16px;
    resize: none;
`;

export const SubmitButton = styled.button`
    width: 92px;
    height: 50px;
    left: 349px;
    top: 1222px;
    background: #00b840;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    &:hover {
        background-color: #39d462;
    }
`;


export const BtnsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BtnsSaveAndBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;

export const BtnsText = styled.p`
    border: none;
    background-color: inherit;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    color: #808080;
`;

export const GobackSvg = styled.img`
    margin-right: 8px;
`;