import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SigninLayout } from './components/SigninLayout';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../../notifications/ToastError';
import { SigninForm } from './components/SigninForm';
import { useEmail, usePassword } from '../../hooks/useSignin';
import { signin } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';

export const SignIn = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();


    const navigate = useNavigate();

    const onSubmit = data => {
        try {
            dispatch(signin(data));
        } catch (err) {
            ErrorMessage(err.message);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
            reset();
        }
    }, [isLoggedIn, navigate, reset]);

    return (
        <SigninLayout>
            <SigninForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                hasEmailValue={useEmail(watch)}
                hasPasswordValue={usePassword(watch)}
            />
        </SigninLayout>
    );
};
