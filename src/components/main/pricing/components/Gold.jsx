import {
    PriceCardGold,
    TitleCard,
    AdvantagesWrapperGold,
    PriceAdvantages,
    TextAdvantages,
    Price,
    MainPriceText,
    DiscountPriceWrapper,
    DiscountPrice,
    DiscountPriceDercr,
    SignupButton,
} from '../styles/Gold.styled';
import priceMark from 'images/header/priceMark.svg';
import linestright from 'images/header/linestright.jpg';

export const Gold = ({ handleClick }) => {
    return (
        <PriceCardGold>
            <AdvantagesWrapperGold>
                <TitleCard>GOLD</TitleCard>
                <Price>
                    <div className="mainPrice">
                        <MainPriceText>$775/mo.</MainPriceText>
                    </div>
                    <DiscountPriceWrapper>
                        <DiscountPrice className="price">$699/mo</DiscountPrice>
                        <DiscountPriceDercr className="discrPrice">
                            per license with AutoPay
                        </DiscountPriceDercr>
                    </DiscountPriceWrapper>
                </Price>
                <img
                    src={linestright}
                    alt="linestright"
                    style={{ marginBottom: 15 }}
                />
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Access to all GCF, DFC and USAID focused Grading Tools.
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Upgraded AI model “GPT-4” a h​uge performance leap in​
                        speed, accuracy and natural language capacities.
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Enough data for drafting 10 full proposal. (up to three
                        revisions)
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages style={{ marginBottom: 40 }}>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Near unlimited use of Climate Rationale, Project
                        Structuring AND research tools.
                    </TextAdvantages>
                </PriceAdvantages>
            </AdvantagesWrapperGold>

            <div style={{ textAlign: 'center' }}>
                <SignupButton disabled onClick={() => handleClick('Gold')}>
                    Coming soon
                </SignupButton>
            </div>
        </PriceCardGold>
    );
};
