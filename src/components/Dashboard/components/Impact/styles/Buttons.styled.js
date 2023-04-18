import styled from 'styled-components';

export const BtnContatiner = styled.div`
    position: fixed;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Btn = styled.button`
    background: #e6e6e6;
    border-radius: 5px;
    border: none;
    width: 134px;
    height: 50px;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: rgb(128, 128, 128, 0.5);
    }
`;
