import styled from 'styled-components';

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 13px;
    padding-bottom: 13px;
    
`;

export const ProjectNameText = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.7;
    color: #2e2e2e;
    display: flex;
    align-items: center;
`;

export const CreteriaContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Creteria = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    margin-right: 8px;
    color: #00b840;
`;


export const Indicator = styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    margin-right: 8px;
    color: #00b840;
`;

export const HelpSvg = styled.img`
    cursor: pointer;
`;
export const CreteriaHelper = styled.div`
    position: absolute;
    left: 105%;
    width: 210px;
    display: flex;
`;

export const CreteriaHelperIndicator = styled.div`
    position: absolute;
    left: -50px;
    top: 150%;
    width: 210px;
    display: flex;
    z-index: 1;
`;

export const CreteriaHelperWrapper = styled.div`
    padding: 12px 24px;
    background-color: #000;
    border-radius: 16px;
`;

export const CreteriaHelperText = styled.p`
    font-weight: 400;
    font-size: 10.5px;
    line-height: 1.2;
    color: #ffffff;
    text-align: left;
`;
