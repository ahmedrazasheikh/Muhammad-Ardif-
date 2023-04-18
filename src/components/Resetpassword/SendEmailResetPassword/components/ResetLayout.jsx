import { Wrapper, Title, Text, NavItem } from '../styles/ResetLayout.styled';
import logo from 'images/header/logo.svg';

export const ResetLayout = () => {
    return (
        <Wrapper>
            <div style={{ width: '100%' }}>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>
                <Title>Check Your Email</Title>
                <Text style={{ marginBottom: 20 }}>
                    We sent a password reset link to your email
                </Text>
                <Text style={{ marginBottom: 20 }}>
                    Didn’t receive the email link?{' '}
                    <NavItem>Click to resend</NavItem>
                </Text>
                <Text>
                    Back to <NavItem to="/signin">Log In</NavItem>
                </Text>
            </div>
        </Wrapper>
    );
};
