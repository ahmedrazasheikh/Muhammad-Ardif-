import {
    HowWorkTitle,
    ContentAdd,
    ContentEnter,
    ContentInput,
} from './components';

export const HowWork = () => {
    return (
        <div
            className="wrapper"
            style={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginBottom: '100px',
            }}
            id="HowItWorks"
        >
            <HowWorkTitle />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <ContentEnter />
                <ContentAdd />
                <ContentInput />
            </div>
        </div>
    );
};
