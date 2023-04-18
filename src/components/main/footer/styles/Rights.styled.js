import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled.div`
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightsList = styled.ul`
    display: flex;
    align-items: baseline;
`;

export const RightsItems = styled.li`
    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;

export const NavLink = styled(Link)`
    font-weight: 500;
    font-size: 10px;

    text-decoration-line: underline;

    color: #ffffff;
`;

export const RightsText = styled.p`
    font-weight: 500;
    font-size: 10px;
    color: #ffffff;
`;
