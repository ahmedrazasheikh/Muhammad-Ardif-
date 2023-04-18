import { Wrapper, Title } from '../styles/ResetLayout.styled';
import logo from 'images/header/logo.svg';

export const ResetLayout = ({ children }) => {
    return (
        <Wrapper>
            <div style={{ width: '100%' }}>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>
                <Title>Reset Password</Title>
                {children}
            </div>
        </Wrapper>
    );
};
