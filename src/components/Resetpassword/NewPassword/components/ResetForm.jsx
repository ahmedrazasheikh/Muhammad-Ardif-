import { useState } from 'react';
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
    hasPassValue,
    hasConfirmPassValue
}) => {
    const [hasFocus, setHasFocus] = useState(false);

    const handleInputFocus = () => {
        setHasFocus(true);
    };

    const handleInputBlur = () => {
        setHasFocus(false);
    };
    
    if (errors.password || errors.email) {
        ErrorMessage('This field is required');
    }

    return (
        <RessetForm onSubmit={handleSubmit(onSubmit)}>
            <Label>Enter Password</Label>
            <Input
                style={{ marginBottom: 24 }}
                placeholder="******************"
                type="password"
                {...register('password', { required: true })}
                hasValue={hasPassValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <Label>Confirm Password</Label>
            <Input
                style={{ marginBottom: 24 }}
                placeholder="******************"
                type="password"
                {...register('confirmPassword', { required: true })}
                hasValue={hasConfirmPassValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <ButtonWrapper>
                <Button type="submit">Reset Password</Button>
            </ButtonWrapper>
        </RessetForm>
    );
};
