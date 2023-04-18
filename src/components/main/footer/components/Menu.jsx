import { NavItems, NavLinks, NavList, Title } from "../styles/Menu.styled";

export const Menu = () => {
    return (
        <div style={{marginBottom: 80}}>
            <Title>Menu</Title>
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
        </div>
    );
};
