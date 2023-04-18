import styled from 'styled-components';

export const PriceCardGold = styled.div`
    background: #ffffff;
    border: 2.76952px solid #ffd700;
    border-radius: 9.23172px;
    padding: 24px;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleCard = styled.h3`
    display: inline-block;
    font-weight: 700;
    font-size: 14.7708px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000b33;
    padding: 5px 15px;
    margin-bottom: 20px;
    text-align: center;

    background: #ffd700;
    border-radius: 5.53903px;
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
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const MainPriceText = styled.p`
  font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.461586px;
    color: #000000;
`;

export const DiscountPriceWrapper = styled.div`
    text-align: left;
`;

export const DiscountPrice = styled.p`
    font-weight: 700;
    font-size: 45px;
    line-height: 73px;
    letter-spacing: -0.461586px;
    color: #000b33;
`;

export const DiscountPriceDercr = styled.p`
    font-weight: 600;
    font-size: 14.7708px;
    line-height: 24px;
    color: #2e2e2e;
    opacity: 0.8;
`;

export const SignupButton = styled.button`
    font-weight: 700;
    font-size: 14.7708px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    padding: 8px 100px;
    width: 100%;
    background: rgb(128,128,128);
    border-radius: 5px;
    border: none;
    cursor: pointer;
    /* &:hover {
        opacity: 0.8;
        box-shadow: -4px 3px 4px rgba(169, 231, 181, 0.2);
    } */
`;
