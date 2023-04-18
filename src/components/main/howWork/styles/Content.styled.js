import styled from 'styled-components';

export const Title = styled.h3`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
`;
export const SubTitle = styled.h4`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #2e2e2e;
    margin-bottom: 40px;
`;
export const Text = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2e2e2e;
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;
