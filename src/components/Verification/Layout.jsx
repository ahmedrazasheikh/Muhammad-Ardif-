
import { Wrapper, Title } from './styles/Verification.styled';
import logo from 'images/header/logo.svg';
import { VerificationForm } from './VerificationForm';

export const Layout = ({userData, verificationCode, btnIndex}) => {
    return (
        <Wrapper>
            <div style={{ width: '100%' }}>
                <div style={{ marginBottom: 20 }}>
                    <img src={logo} alt="logo" />
                </div>
                <Title>Verification</Title>

                <VerificationForm       userData={userData}
            verificationCode={verificationCode}
            btnIndex={btnIndex} />
            </div>
        </Wrapper>
    );
};
