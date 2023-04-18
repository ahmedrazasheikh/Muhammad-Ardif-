import { useState, useEffect } from 'react';

export const useReset = watch => {
    const [hasValue, setHasValue] = useState(false);

    const watchValue = watch('email');

    useEffect(() => {
        if (watchValue && watchValue.length > 0) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [watchValue]);
    return hasValue;
};

export const useResetPassword = watch => {
    const [hasValue, setHasValue] = useState(false);

    const watchValue = watch('password');

    useEffect(() => {
        if (watchValue && watchValue.length > 0) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [watchValue]);
    return hasValue;
};

export const useConfirmResetPassword = watch => {
    const [hasValue, setHasValue] = useState(false);

    const watchValue = watch('confirmPassword');

    useEffect(() => {
        if (watchValue && watchValue.length > 0) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [watchValue]);
    return hasValue;
};