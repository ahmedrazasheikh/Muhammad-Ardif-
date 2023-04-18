import styled from 'styled-components';

export const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    background: rgba(5, 5, 5, 0.23);
`;

export const PopUp = styled.div`
    position: relative;
    background: #ffffff;
    /* Accent/Error */

    border: 1px solid #de3b3b;
    padding-right: 36px;
    padding-left: 36px;
    padding-top: 36px;
    padding-bottom: 36px;

    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    width: 56px;
    height: 56px;
    background: #fdb9b9;
    border-radius: 8px;
    margin-right: 24px;
`;

export const Wrapper = styled.div``;
export const InnerWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 590px;
    margin-bottom: 24px;
`;

export const Title = styled.p`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 8px;
`;

export const Text = styled.p`
    font-family: 'Inter';
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #2e2e2e;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const BtnNoCalcel = styled.button`
    width: 251px;
    height: 44px;
    background: #ffffff;
    border: 1px solid #de3b3b;
    border-radius: 5px;
    /* border: none; */
    cursor: pointer;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    color: #de3b3b;
`;
export const BtnDelete = styled.button`
    width: 251px;
    height: 44px;
    background: #de3b3b;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    color: #f5f5f5;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

export const CloseIcon = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
`;
