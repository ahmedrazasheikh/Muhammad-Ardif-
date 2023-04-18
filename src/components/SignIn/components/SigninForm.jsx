import { BiShow, BiHide } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import {
    LoginForm,
    Input,
    Button,
    Label,
    ShowPasswordContainer,
    ShowPasswordBtn,
    NavLink,
    TextToSignUp,
} from '../styles/SigninForm.styled';
import { ErrorMessage } from 'notifications/ToastError';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

export const SigninForm = ({
    register,
    handleSubmit,
    errors,
    onSubmit,
    hasEmailValue,
    hasPasswordValue,
}) => {
    const [hasFocus, setHasFocus] = useState(false);
    const { isPending } = useSelector(state => state.auth);
    const [showPassword, setShowPassword] = useState(false)

    const handleInputFocus = () => {
        setHasFocus(true);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleInputBlur = () => {
        setHasFocus(false);
    };
    if (errors.password || errors.email) {
        ErrorMessage('This field is required');
    }

    return (
        <>
            {isPending ? (
                <Loader />
            ) : (
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email Address</Label>
                    <Input
                        style={{ marginBottom: 24 }}
                        placeholder="johndoe@gmail.com"
                        type="email"
                        {...register('email', { required: true })}
                        hasValue={hasEmailValue}
                        hasFocus={hasFocus}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />

                    <Label>Password</Label>
                    <ShowPasswordContainer>
                        <Input
                            placeholder="********************"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', { required: true })}
                            hasValue={hasPasswordValue}
                            hasFocus={hasFocus}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                        <ShowPasswordBtn type="button"
                            onClick={handleShowPassword}
                        >
                            {showPassword ? (
                                <IconContext.Provider value={{ size: 20 }}>
                                    <BiShow />
                                </IconContext.Provider>
                            ) : (
                                <IconContext.Provider value={{ size: 20 }}>
                                    <BiHide />
                                </IconContext.Provider>
                            )}
                        </ShowPasswordBtn>
                    </ShowPasswordContainer>
                    <div style={{ marginBottom: 16 }}>
                        <NavLink to="/resetpassword">Forgot Password?</NavLink>
                    </div>

                    <Button type="submit">Login</Button>

                    <TextToSignUp>
                        Don’t have an account?{' '}
                        <NavLink to="/signup">Sign up</NavLink>
                    </TextToSignUp>
                </LoginForm>
            )}
        </>
    );
};
