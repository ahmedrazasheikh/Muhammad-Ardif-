import { Wrapper, Title , Text} from '../styles/ResetLayout.styled';
import logo from 'images/header/logo.svg';

export const ResetLayout = ({ children }) => {
    return (
        <Wrapper>
            <div style={{ width: '100%' }}>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>
                <Title>Set New Password</Title>
                <Text>Your new password must be different to previously used passwords.</Text>
                {children}
            </div>
        </Wrapper>
    );
};
