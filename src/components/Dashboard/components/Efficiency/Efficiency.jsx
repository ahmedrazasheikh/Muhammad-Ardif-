import { Title } from './components/Title';
import { TextInput } from './components/TextInput';
import { useState } from 'react';

export const Efficiency = () => {
    const [loader, setLoader] = useState(false);

    return (
        <div>
            <Title loader={loader} />
            <TextInput setLoader={setLoader} loader={loader} />
        </div>
    );
};
