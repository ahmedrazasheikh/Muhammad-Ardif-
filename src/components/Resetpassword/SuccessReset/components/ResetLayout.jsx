import { Wrapper, Title, Text, NavItem } from '../styles/ResetLayout.styled';
import logo from 'images/header/logo.svg';
import { useNavigate } from 'react-router-dom';
export const ResetLayout = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/signin');
    };
    return (
        <Wrapper>
            <div style={{ width: '100%' }}>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>
                <Title>Password Reset</Title>
                <Text style={{ marginBottom: 20 }}>
                    Your password has been successfully reset. Click continue
                    below to log back in with your new password.
                </Text>
                <NavItem onClick={handleNavigate}>Continue</NavItem>
            </div>
        </Wrapper>
    );
};
