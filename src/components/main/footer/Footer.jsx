import { Background, Menu, Rights } from './components';

export const Footer = () => {
    return (
        <Background>
            <div className="wrapper">
                <Menu />
                <Rights />
            </div>
        </Background>
    );
};
