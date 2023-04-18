import styled from 'styled-components';

export const FuncBoxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 100px;
`;

export const FuncBox = styled.button`
    position: relative;
    flex: 0 0 calc(33.33% - 10px);
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 40px 20px;
    max-width: 230px;
    height: 196px;
    cursor: pointer;
    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
            rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    &.popular {
        background: #ffffff;
        border: 1px solid #e0e0e0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 5px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
                rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }
    }
    &.commingSoon {
        background: #ffffff;
        border: 1px solid #e0e0e0;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        border-radius: 5px;
        &:hover {
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
                rgba(0, 0, 0, 0.22) 0px 10px 10px;
        }
    }
`;

export const Avability = styled.div`
    &.comesoon {
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: rgba(255, 0, 0, 0.2);
        display: inline-block;
        border-radius: 4px;
    }
    &.mostpopular {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #ebfae2;
        display: inline-block;
        border-radius: 4px;
    }
    &.available {
        position: absolute;
        top: 10px;
        left: 10px;
        background: #ebfae2;
        display: inline-block;
        border-radius: 4px;
    }
`;

export const AvabilityText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    color: #4e4e4e;
    padding: 8px;
    &.mostpopularText {
        color: #4f9c20;
    }
`;

export const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #1a1919;
    margin-bottom: 10px;
    width: 100%;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    letter-spacing: -0.006em;
    color: #2e2e2e;
    opacity: 0.75;
`;
