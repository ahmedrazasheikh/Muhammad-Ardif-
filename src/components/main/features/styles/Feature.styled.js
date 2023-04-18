import styled from 'styled-components';

export const FeatureWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 50px;
`;

export const FeatureBox = styled.div`
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    padding: 50px 30px;
    display: flex;
    align-items: flex-start;
    flex: 0 0 calc(33.33% - 60px);
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const FeatureTitle = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: #000000;
    margin-left: 30px;
`;

export const FeatureText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #2e2e2e;
`;
