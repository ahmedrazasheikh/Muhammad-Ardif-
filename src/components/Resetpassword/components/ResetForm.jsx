import { ErrorMessage } from 'notifications/ToastError';
import {
    RessetForm,
    Input,
    Button,
    ButtonWrapper,
    Label,
} from '../styles/ResetForm.styled';

export const ResetForm = ({
    register,
    handleSubmit,
    errors,
    onSubmit,
    hasEmailValue
}) => {
    if (errors.password || errors.email) {
        ErrorMessage('This field is required');
    }

    return (
        <RessetForm onSubmit={handleSubmit(onSubmit)}>
            <Label>Email Address</Label>
            <Input
                style={{ marginBottom: 24 }}
                placeholder="johndoe@gmail.com"
                type="email"
                {...register('email', { required: true })}
                hasValue={hasEmailValue}
            />

            <ButtonWrapper>
                <Button type="submit">Reset</Button>
            </ButtonWrapper>
        </RessetForm>
    );
};
