import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const NavList = styled.ul`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
`;

export const NavItem = styled.li`
    &:not(:last-of-type) {
        margin-right: 30px;
    }
`;

export const NavLink = styled(Link)`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2e2e2e;
    display: flex;
    align-items: center;
    &:hover {
        color: #00b840;
    }
    &.active {
        color: #00b840;
    }
`;

export const Input = styled.input`
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 10px 40px;
`;

export const Form = styled.form`
    position: relative;
`;

export const SearchBtn = styled.button`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-40%);
    border: none;
    background: none;
`;

export const UserDropDownMenu = styled.div`
    position: absolute;
    text-align: left;
    top: 100%;
    right: 0;
    z-index: 10;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const NameContainer = styled.div`
    display: flex;
`;

export const UserData = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    &:not(:last-of-type) {
        margin-right: 10px;
    }
`;

export const TermsPrivicy = styled.p`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
`;

export const UserDataEmail = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
`;

export const Logout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    &:hover {
        color: green;
    }
`;
