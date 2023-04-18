import React,{ useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SignUpLayout } from './components/SignUpLayout';
import { Verification } from '../Verification/Verification';
import { SignUpForm } from './components/SignUpForm';
import { verify } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

const organizationTypes = ['Government', 'Foundation', 'NGO', 'Bank', 'Other'];

export const SignUp = ({ btnIndex }) => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState(null);
    const [verificationCode, setVerificationCode] = useState(null);
    const [otherOrganizationType, setOtherOrganizationType] = useState(false);
    const [othetOnChangeValue, setOtherOnChangeValue] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const { control, register, handleSubmit, watch } = useForm();

    const handleOrganizationTypeChange = event => {
        const other = event.target.value;
        if (other === 'Other') {
            setOtherOrganizationType(true);
            setOtherOnChangeValue('');
        } else {
            setOtherOrganizationType(false);
        }
    };

    const selector = useSelector(state => state.auth.verification_code);
    useEffect(() => {
        if (selector) {
            setVerificationCode(parseInt(selector));
        }
    }, [selector]);

    useEffect(() => {
        if (!userData) {
            return;
        }
        dispatch(verify(userData));
    }, [dispatch, userData]);

    return (
        <>
            {verificationCode ? (
                <Verification
                    userData={userData}
                    verificationCode={verificationCode}
                    btnIndex={btnIndex}
                />
            ) : (
                <SignUpLayout btnIndex={btnIndex} setUserData={setUserData}>
                    <SignUpForm
                        selectedPlanIndex={btnIndex}
                        setUserData={setUserData}
                        organizationTypes={organizationTypes}
                        otherOrganizationType={otherOrganizationType}
                        othetOnChangeValue={othetOnChangeValue}
                        setTermsAccepted={setTermsAccepted}
                        termsAccepted={termsAccepted}
                        handleSubmit={handleSubmit}
                        register={register}
                        control={control}
                        handleOrganizationTypeChange={
                            handleOrganizationTypeChange
                        }
                        watch={watch}
                    />
                </SignUpLayout>
            )}
        </>
    );
};
