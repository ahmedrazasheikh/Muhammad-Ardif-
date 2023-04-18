import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 290px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-bottom: 1px solid #dde2e4;
    margin-bottom: 25px;
    margin-right: 35px;
    height: 100%;
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #DDE2E4;
    border-width: 100%;
    margin-bottom: 25px;
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.78;
    color: #000000;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Img = styled.img`
    &.close {
        &:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
                rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            border-radius: 20px;
            cursor: pointer;
        }
    }
`;

export const PurposeText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    color: #2e2e2e;
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const Important = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const ImportantText = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 2;
    color: #000000;
`;
