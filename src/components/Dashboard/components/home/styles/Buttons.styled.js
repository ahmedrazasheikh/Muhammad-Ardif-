import styled from 'styled-components';

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 340px;
`;

export const CreateBtn = styled.button`
    background: #244a32;
    border: 1px solid #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding-bottom: 20px;
    padding-left: 20px;
    width: 290px;
    height: 175px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;
    bottom: 0;
    left: 0;
    cursor: pointer;
    &:not(:last-of-type) {
        margin-right: 25px;
    }
    &:hover {
        background: #00b840;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
    }
`;

export const TextBtn = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #ffffff;
`;
