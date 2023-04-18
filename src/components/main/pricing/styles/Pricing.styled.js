import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InnerWrapper = styled.div`
    position: relative;
    margin-bottom: 64px;
    @media screen and (min-width: 744px) {
        margin-bottom: 40px;
    }
    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 55px;
    }
`;



export const Text = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 40px;
`;

export const PriceCardBronze = styled.div`
    background: linear-gradient(
        184.06deg,
        #ffb88d 3.17%,
        rgba(255, 209, 181, 0.14) 93.63%
    );
    border-radius: 30px;
    padding: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const PriceCardSilver = styled.div`
    background: linear-gradient(
        183.1deg,
        #d6d1d1 2.46%,
        rgba(222, 222, 222, 0.2) 107.27%
    );
    border-radius: 30px;
    padding: 24px;
    margin-bottom: 24px;
    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const PriceCardGold = styled.div`
    background: linear-gradient(
        183.1deg,
        #fcdf79 2.46%,
        rgba(255, 227, 156, 0.25) 107.27%
    );
    border-radius: 30px;
    padding: 24px;
    @media screen and (min-width: 1280px) {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const TitleCard = styled.h3`
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    margin-bottom: 23px;
    text-align: center;
`;

export const AdvantagesWrapperBronze = styled.div`
    margin-bottom: 40px;
    @media screen and (min-width: 1280px) {
        /* margin-bottom: 70px; */
    }
`;

export const AdvantagesWrapperSilver = styled.div`
    margin-bottom: 40px;
    @media screen and (min-width: 1280px) {
        /* margin-bottom: 50px; */
    }
`;

export const AdvantagesWrapperGold = styled.div`
    /* margin-bottom: 40px; */
`;

export const PriceAdvantages = styled.div`
    display: flex;
    margin-bottom: 8px;
    &:not(:last-of-type) {
        margin-bottom: 8;
    }
`;

export const TextAdvantages = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`;

export const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 23px;
`;

export const MainPriceText = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`;

export const DiscountPriceWrapper = styled.div`
    width: 138px;
    @media screen and (min-width: 1280px) {
        width: 174px;
        text-align: left;
    }
`;

export const DiscountPrice = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
`;

export const DiscountPriceDercr = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
`;

export const SignupButton = styled(Link)`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: #fffefe;
    padding: 8px 106px;
    background: #28c946;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    &:hover {
        background: #0ca228;
        box-shadow: -4px 3px 4px rgba(169, 231, 181, 0.2);
    }
`;