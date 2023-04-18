import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 290px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    border-bottom: 1px solid #dde2e4;
    padding-bottom: 25px;
    margin-left: 35px;
    flex: '1 0 auto'
`;

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 14px;
    /* width: 150px; */
    line-height: 1.78;
    color: #000000;
    padding-top: 30px;
    padding-bottom: 15px;
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