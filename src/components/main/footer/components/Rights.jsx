import logo from 'images/header/logo.png';
import {
    LogoWrapper,
    RightsList,
    RightsItems,
    NavLink,
    RightsText,
} from '../styles/Rights.styled';

export const Rights = () => {
    return (
        <LogoWrapper>
            <img
                src={logo}
                alt="logo"
                width={100}
                style={{ marginRight: 50 }}
            />
            <RightsList>
                <RightsItems>
                    <RightsText>
                        © 2022 JanusAI. All rights reserved.
                    </RightsText>
                </RightsItems>
                <RightsItems>
                    <NavLink to="/policy">Privacy Notice</NavLink>
                </RightsItems>
                <RightsItems>
                    <NavLink to="/terms">Terms of service</NavLink>
                </RightsItems>
            </RightsList>
        </LogoWrapper>
    );
};
