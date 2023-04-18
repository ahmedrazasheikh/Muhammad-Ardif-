import { ResetLayout } from './components/ResetLayout';
import { ResetForm } from './components/ResetForm';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from 'notifications/ToastError';
import { useResetPassword, useConfirmResetPassword } from 'hooks/useReset';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNewPassword } from 'redux/auth/authOperations';

export const NewPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();
    const resetEmail = localStorage.getItem('resetEmail')
    const onSubmit = async data => {
        try {
            if (!data) {
                return;
            }
            if (data.password !== data.confirmPassword) {
                ErrorMessage('Passwords do not match');
                return;
            }
            dispatch(createNewPassword({
                password: data.password,
                email: resetEmail
            }));
            navigate('/success');
            reset();
        } catch (err) {
            ErrorMessage(err.message);
        }
    };

    return (
        <ResetLayout>
            <ResetForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                onSubmit={onSubmit}
                hasPassValue={useResetPassword(watch)}
                hasConfirmPassValue={useConfirmResetPassword(watch)}
            />
        </ResetLayout>
    );
};
