import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    padding-top: 34px;
    margin-bottom: 165px;
`;

export const NavList = styled.ul`
    display: flex;
`;

export const NavItems = styled.li`
    margin-right: 48px;
    &:last-child {
        margin-right: 0;
    }
`;

export const NavLinks = styled(Link)`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
`;
