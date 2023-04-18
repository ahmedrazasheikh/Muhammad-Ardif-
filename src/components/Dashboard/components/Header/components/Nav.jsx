import {
    NavList,
    NavItem,
    NavLink,
    UserDropDownMenu,
    UserData,
    Logout,
    NameContainer,
    UserDataEmail,
    TermsPrivicy,
} from '../styles/Nav.Styled';
import logoDashboard from 'images/header/logoDashboard.png';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';

import {
    MdLogout,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
} from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from 'redux/auth/authOperations';

export const Nav = () => {
    const [isOpenUsereMenu, setIsOpenUsereMenu] = useState(false);
    const user = useSelector(state => state.auth.user);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isHome =
        pathname === '/dashboard' || pathname.startsWith('/dashboard/create');
    const isProject = pathname.startsWith('/dashboard/myprojects');

    const handleOpenTerms = () => {
        window.open('/terms', '_blank');
      };
    
      const handleOpenPrivacyPolicy = () => {
        window.open('/policy', '_blank');
      };

    const handleLogout = () => {
        dispatch(signout());
        navigate('/');
    };

    return (
        <div style={{ borderBottom: '1px solid #dde2e4' }}>
            <div
                className="dashboard"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <NavList>
                    <NavItem>
                        <img src={logoDashboard} alt="logoDashboard" />
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/dashboard"
                            className={isHome ? 'active' : ''}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/dashboard/myprojects"
                            className={isProject ? 'active' : ''}
                        >
                            My Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Send Feedback</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Get Expert Help</NavLink>
                    </NavItem>
                </NavList>
                <NavList>
                    <NavItem>
                        <NavLink>
                            <AiOutlineQuestionCircle
                                style={{ marginRight: 6 }}
                            />
                            FAQs
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            onClick={() => setIsOpenUsereMenu(!isOpenUsereMenu)}
                        >
                      <UserData>Hi, {user.firstname}</UserData>
                            <IconContext.Provider value={{ size: 25 }}>
                                {isOpenUsereMenu ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </IconContext.Provider>
                        </NavLink>
                    </NavItem>
                    {isOpenUsereMenu && (
                        <UserDropDownMenu>
                            <NameContainer>
                                <UserData>{user.firstname}</UserData>
                                <UserData>{user.lastname}</UserData>
                            </NameContainer>
                            <UserDataEmail>{user.email}</UserDataEmail>
                            <div onClick={handleOpenTerms} style={{marginBottom: 15, cursor: "pointer"}}>
                                <TermsPrivicy>Terms</TermsPrivicy>
                            </div>
                            <div onClick={handleOpenPrivacyPolicy} style={{marginBottom: 15, cursor: "pointer"}}>
                                <TermsPrivicy>Privacy Policy</TermsPrivicy>
                            </div>
                            <Logout onClick={handleLogout}>
                                <IconContext.Provider value={{ size: 25 }}>
                                    <MdLogout />
                                    <TermsPrivicy>Logout</TermsPrivicy>
                                </IconContext.Provider>
                            </Logout>
                        </UserDropDownMenu>
                    )}
                </NavList>
            </div>
        </div>
    );
};
