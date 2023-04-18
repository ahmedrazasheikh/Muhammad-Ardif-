import { LineWrapper, Number } from '../styles/Delimeter.styled';
import line from 'images/header/line.svg';

export const Delimeter = ({children}) => {
    return (
        <div style={{marginRight: 50, marginLeft: 50}}>
            <LineWrapper>
                <Number>{children}</Number>
                <img src={line} alt="line" />
            </LineWrapper>
        </div>
    );
};
