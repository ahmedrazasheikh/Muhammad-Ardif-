import logo from 'images/header/logo.png';
import { Navigation, NavList, NavItems, NavLinks } from '../styles/Nav.styled';

export const Nav = () => {
    return (
        <Navigation>
            <div style={{marginRight: 200}}>
                <img src={logo} alt="logo" style={{ width: 120 }} />
            </div>
            <NavList>
                <NavItems>
                    <NavLinks to="about" smooth={true}>
                        About
                    </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="features" smooth={true}>
                        Features
                    </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="HowItWorks" smooth={true}>
                        How it Works
                    </NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="Pricing" smooth={true}>
                        Pricing
                    </NavLinks>
                </NavItems>
            </NavList>
        </Navigation>
    );
};
