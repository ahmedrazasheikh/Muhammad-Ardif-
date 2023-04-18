import { WelcomeWrapper, Title, Text } from '../styles/Content.styled';
import logo from 'images/header/Janus.png';

export const Content = ({ children }) => {
    return (
        <WelcomeWrapper>
            <div style={{ textAlign: 'center' }}>
                <img
                    src={logo}
                    alt="logo"
                    width={60}
                    style={{ marginBottom: 25 }}
                />
                <Title>Welcome to Climate Finance Advisor</Title>
                <Text>
                    Experience a New and Transformational Way to Win Funding For
                    Climate Adaptation/mitigation Projects.
                </Text>
                {children}
            </div>
        </WelcomeWrapper>
    );
};
