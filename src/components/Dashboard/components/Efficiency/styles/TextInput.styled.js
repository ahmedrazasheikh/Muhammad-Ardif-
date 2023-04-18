import styled from 'styled-components';

export const Form = styled.form`
    margin-bottom: 117px;
    width: 900px;
`;

export const InputWrapper = styled.div`
    position: relative;
`;

export const TextArea = styled.textarea`
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 100%;
    height: 538px;
    display: flex;
    align-items: flex-start;
    resize: none;
    padding: 25px;
    outline: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    &:focus {
        border-color: green;
    }
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 30px;
`;

export const BackgroundCounter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background: #f6f6f6;
    width: 100%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const WordCount = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 2;

    color: #000000;
    padding-left: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

export const BtnSubmit = styled.button`
    background: #00b840;
    border-radius: 5px;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    /* display: flex;
    align-items: center; */
    text-align: center;
    color: #ffffff;
    border: none;
    width: 92px;
    height: 50px;
    cursor: pointer;
    &:hover {
        background-color: #244a32;
    }
`;

export const GobackSvg = styled.img`
    margin-right: 8px;
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

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 140px;
    padding: 50px 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10.6729px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const LoaderImg = styled.img`
    margin-bottom: 15px;
    width: 64px;
    animation: rotate 2s infinite linear;

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderText = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #000000;
`;
