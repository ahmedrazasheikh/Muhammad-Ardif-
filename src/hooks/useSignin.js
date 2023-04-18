import { useState, useEffect } from 'react';

export const useEmail = watch => {
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

export const usePassword = watch => {
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