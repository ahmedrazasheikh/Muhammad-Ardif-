import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Title = styled.h3`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #ffffff;
    margin-bottom: 25px;
`;

export const NavList = styled.ul`
    /* display: flex; */
`;

export const NavItems = styled.li`
    margin-bottom: 15px;
    &:last-child {
        margin-right: 0;
    }
`;

export const NavLinks = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #ffffff;

    cursor: pointer;
`;
