import {
    Wrapper,
    Title,
    Text,
} from '../styles/SignUpLayout.styled';
import logo from 'images/header/logo.svg';

export const SignUpLayout = ({ children }) => {

    return (
        <Wrapper>
            <div>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>

                <Title>Create your account</Title>
                <Text>
                    Once you create your account, you will have a 15-day free
                    trial to use Climate Finance Advisor and we will notify you
                    once the trial expires.
                </Text>
                {children}
            </div>
        </Wrapper>
    );
};
