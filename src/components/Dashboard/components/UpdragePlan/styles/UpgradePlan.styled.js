import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 800px;
    margin: 0 auto;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin-right: 16px;
`;

export const NavLink = styled(Link)`
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #00b840;
    display: flex;
    align-items: center;
`;
