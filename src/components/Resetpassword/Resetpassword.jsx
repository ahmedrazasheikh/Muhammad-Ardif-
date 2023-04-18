import { ResetLayout } from './components/ResetLayout';
import { ResetForm } from './components/ResetForm';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from 'notifications/ToastError';
import { useReset } from 'hooks/useReset';
import { useDispatch } from 'react-redux';
import { sendEmailResetPassword } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

export const Resetpassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm();

    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const baseUrl = currentUrl.replace(currentPath, '');


    const onSubmit = async data => {
        try {
            if (!data) {
                return;
            }
            
            const newPasswordUrl = `${baseUrl}/newpassword`;
            dispatch(
                sendEmailResetPassword({
                    email: data.email,
                    link: newPasswordUrl,
                })
            );
            navigate('/checkemail');
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
                hasEmailValue={useReset(watch)}
            />
        </ResetLayout>
    );
};
