import { Background, Nav, ButtonTryNow, Content } from './components';

export const Header = () => {
    return (
        <Background>
            <div style={{ paddingLeft: '50px' }} className='wrapper'>
                <Nav />
                <Content />
                <ButtonTryNow />
            </div>
        </Background>
    );
};