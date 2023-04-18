import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    text-align: center;
    height: 100vh;
    margin: 0 auto;
    max-width: 532px;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Title = styled.h1`
    font-weight: 500;
    font-size: 30px;
    line-height: 27px;
    margin-bottom: 20px;
    width: 100%;
`;

export const GoBackBtn = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    margin-right: 10px;
    &:hover {
        color: green;
    }
`;

export const GoBackBtnText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    &:hover {
        color: green;
    }
`;