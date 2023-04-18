import {TryNow, TextBtn} from '../styles/ButtonTryNow.styled'
import arrowUpRight from 'images/header/arrowUpRight.svg'

export const ButtonTryNow = () => {
    return (
        <TryNow to='/welcome'>
            <TextBtn>Try Now</TextBtn>
            <img src={arrowUpRight} alt="arrowUpRight" />
        </TryNow>
    );
};
