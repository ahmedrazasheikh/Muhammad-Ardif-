import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const SignBtn = styled(Link)`
    background: #00b840;
    border-radius: 5px;
    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;

export const TextBtn = styled.p`
    background: #00b840;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    line-height: 27px;
    color: #ffffff;
    padding: 8px 25px;
`;
