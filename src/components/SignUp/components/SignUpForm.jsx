import { Controller } from 'react-hook-form';
import { BiShow, BiHide } from 'react-icons/bi';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { useSignupValue } from '../../../hooks/useSignup';
import {
    Form,
    Input,
    Select,
    Option,
    Button,
    Label,
    TextToSignIn,
    NavLink,
    CheckboxLabel,
    CheckboxInput,
    CheckboxText,
    ShowPasswordContainer,
    ShowPasswordBtn,
} from '../styles/SignUpForm.styled';
import { ErrorMessage } from 'notifications/ToastError';

export const SignUpForm = ({
    selectedPlanIndex,
    setUserData,
    organizationTypes,
    otherOrganizationType,
    othetOnChangeValue,
    setTermsAccepted,
    termsAccepted,
    handleSubmit,
    register,
    control,
    handleOrganizationTypeChange,
    watch,
}) => {
    const hasFirstNameValue = useSignupValue(watch, 'firstName');
    const hasLastNameValue = useSignupValue(watch, 'lastName');
    const hasEmailValue = useSignupValue(watch, 'email');
    const hasOrgTypeValue = useSignupValue(watch, 'OrganizationTypeFronInput');
    const hasOrgNameValue = useSignupValue(watch, 'organizationName');
    const hasRoleValue = useSignupValue(watch, 'role');
    const hasCountryValue = useSignupValue(watch, 'country');
    const hasPasswordValue = useSignupValue(watch, 'password');
    const hasPhoneValue = useSignupValue(watch, 'phone');
    const [hasFocus, setHasFocus] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleInputFocus = () => {
        setHasFocus(true);
    };

    const handleInputBlur = () => {
        setHasFocus(false);
    };
    const onSubmit = async (data, e) => {
        try {
            setUserData(data);
            e.target.reset();
        } catch (error) {
            ErrorMessage(error.message);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>First Name</Label>
            <Input
                placeholder="John"
                {...register('firstName', { required: true })}
                hasValue={hasFirstNameValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <Label>Last Name</Label>
            <Input
                placeholder="Smith"
                {...register('lastName', { required: true })}
                hasValue={hasLastNameValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <Controller
                name="organizationType"
                control={control}
                rules={{ required: true }}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <>
                        <Label>Organization Type</Label>
                        <Select
                            onChange={value => {
                                onChange(value);
                                handleOrganizationTypeChange(value);
                            }}
                            value={value}
                        >
                            <Option value="" disabled>
                                Select
                            </Option>
                            {organizationTypes.map(type => (
                                <Option key={type} value={type}>
                                    {type}
                                </Option>
                            ))}
                        </Select>
                    </>
                )}
            />
            {otherOrganizationType && (
                <Input
                    placeholder="Organization Type"
                    defaultValue={othetOnChangeValue}
                    {...register('OrganizationTypeFronInput', {
                        required: true,
                    })}
                    hasValue={hasOrgTypeValue}
                    hasFocus={hasFocus}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
            )}
            <Label>Organization Name</Label>
            <Input
                placeholder="Green Energy"
                {...register('organizationName', { required: true })}
                hasValue={hasOrgNameValue}
            />
            <Label>Role</Label>
            <Input
                placeholder="Founder"
                {...register('role', { required: true })}
                hasValue={hasRoleValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <Label>Country</Label>
            <Input
                placeholder="USA"
                {...register('country', { required: true })}
                hasValue={hasCountryValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
            <Label>Email</Label>
            <Input
                placeholder="johnsmith@gmail.com"
                type="email"
                {...register('email', { required: true })}
                hasValue={hasEmailValue}
            />
            <Label>Password</Label>
            <ShowPasswordContainer>
                <Input
                    placeholder="***************"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                    hasValue={hasPasswordValue}
                    hasFocus={hasFocus}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <ShowPasswordBtn type='button' onClick={handleShowPassword}>
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

            <Label>Phone number</Label>
            <Input
                style={{ marginBottom: 16 }}
                placeholder="1-800-954-736-0612"
                type="phone"
                {...register('phone', { required: true })}
                hasValue={hasPhoneValue}
                hasFocus={hasFocus}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />

            <CheckboxLabel>
                <CheckboxInput
                    type="checkbox"
                    {...register('terms', { required: true })}
                    onChange={e => setTermsAccepted(e.target.checked)}
                />
                <CheckboxText>
                    I accept the <NavLink to="/terms">Terms</NavLink> &{' '}
                    <NavLink to="/policy">Privacy Policy</NavLink>
                </CheckboxText>
            </CheckboxLabel>

            <Button type="submit" disabled={!termsAccepted}>
                Sign up
            </Button>
            <TextToSignIn>
                Don’t have an account? <NavLink to="/signin">Login</NavLink>
            </TextToSignIn>
        </Form>
    );
};
