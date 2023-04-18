import { Wrapper, Title } from '../styles/SigninLayout.styled';
import logo from 'images/header/logo.svg';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const SigninLayout = ({ children }) => {
    const { isPending } = useSelector(state => state.auth);

    return (
        <>
            {isPending ? (
                <Loader />
            ) : (
                <Wrapper>
                    <div style={{ width: '100%' }}>
                        <div style={{ marginBottom: 20 }}>
                            <img src={logo} alt="logo" />
                        </div>
                        <Title>Welcome back</Title>

                        {children}
                    </div>
                </Wrapper>
            )}
        </>
    );
};
