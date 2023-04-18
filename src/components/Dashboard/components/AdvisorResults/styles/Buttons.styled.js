import styled from 'styled-components';

export const WrapperBtn = styled.div`
    margin-bottom: 100px;
`;
export const InnerWrapperBtn = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NextBtn = styled.button`
    width: 92px;
    height: 50px;
    background: #00b840;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
`;

export const RedoBtn = styled.button`
    width: 134px;
    height: 50px;
    background: #e6e6e6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #808080;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
`;
export const BackToCriterionBtn = styled.button`
    width: 180px;
    height: 50px;
    background: #e6e6e6;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #808080;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.8;
    margin-right: 10px;
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
