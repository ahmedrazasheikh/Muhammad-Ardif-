import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px 17px;
    border-radius: 5px;
    position: absolute;
    right: 75px;
    top: 250px;
`;

export const Text = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
`;

export const NavLink = styled(Link)`
    color: #00b840;
    margin-right: 20px;
    cursor: pointer;
`;

export const Img = styled.img`
cursor: pointer;
`