import { Content, Picture, Title } from './components';

export const AboutUs = () => {
    return (
        <div
            style={{
                paddingLeft: '50px',
                paddingRight: '50px',
                marginBottom: "100px"
            }}
            className="wrapper"
            id='about'
        >
            <Title />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Content />
                <Picture />
            </div>
        </div>
    );
};
