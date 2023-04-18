import { useState, useEffect } from 'react';

export const useProjectName = watch => {
    const [hasValue, setHasValue] = useState(false);

    const watchValue = watch('projectname');

    useEffect(() => {
        if (watchValue && watchValue.length > 0) {
            setHasValue(true);
        } else {
            setHasValue(false);
        }
    }, [watchValue]);
    return hasValue;
};