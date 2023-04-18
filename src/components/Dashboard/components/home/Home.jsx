import { Discr } from '../home/components/Discr';
import { Buttons } from './components/Buttons';
import { Rights } from './components/Rights';

export const Home = () => {
    return (
        <div
            className="dashboard"
        >
            <Discr />
            <Buttons />
            <Rights/>
        </div>
    );
};
