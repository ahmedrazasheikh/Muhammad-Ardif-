import { useForm } from 'react-hook-form';
import {
    RessetForm,
    Input,
    Button,
    ButtonWrapper,
    Label,
} from './styles/Verification.styled';
import { ErrorMessage } from '../../notifications/ToastError';
import { signup } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';

export const VerificationForm = ({ userData, verificationCode }) => {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();
    const isPending = useSelector(state => state.auth.isPending);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    if (errors.password || errors.email) {
        ErrorMessage('This field is required');
    }

    const onSubmit = async data => {
        try {
            const verify = Number(data.number);

            if (verify === verificationCode) {
                dispatch(signup(userData));
                reset();
            } else {
                ErrorMessage('Not valid');
            }
        } catch (err) {
            ErrorMessage(err.message);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            {isPending ? (
                <Loader />
            ) : (
                <RessetForm onSubmit={handleSubmit(onSubmit)}>
                    <Label>Please enter code</Label>
                    <Input
                        style={{ marginBottom: 24 }}
                        placeholder="000000"
                        type="number"
                        {...register('number', { required: true })}
                    />

                    <ButtonWrapper>
                        <Button type="submit">Submit</Button>
                    </ButtonWrapper>
                </RessetForm>
            )}
        </>
    );
};
