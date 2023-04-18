import {BtnWrapper, SignBtn, TextBtn } from '../styles/Buttons.styled';

export const Buttons = () => {
    return (
        <BtnWrapper >
            <SignBtn to="/signin"><TextBtn>Login</TextBtn></SignBtn>
            <SignBtn to="/signup"><TextBtn>Signup</TextBtn></SignBtn>
        </BtnWrapper>
    );
};
