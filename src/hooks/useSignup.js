import { useState, useEffect } from 'react';

export const useSignupValue = (watch, inputName) => {
    const [hasValue, setHasValue] = useState(false);

    const watchValue = watch(inputName);

    useEffect(() => {
        setHasValue(watchValue && watchValue.length > 0);
    }, [watchValue]);

    return hasValue;
};
